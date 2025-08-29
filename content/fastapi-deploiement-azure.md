---
title: "Déployer une application FastAPI sur Azure Web App avec Azure CLI, Docker et GitHub Actions"
date: 2025-08-29
excerpt: "Tutoriel complet pour déployer une application FastAPI sur Azure Web app en utilisant Docker, Azure Container Registry et un pipeline CI/CD GitHub Actions."
category: ["FastAPI", "Azure", "GitHub Actions", "CI/CD"]
readTime: 8 min
image: https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
faq:
  - question: "Quelle est la différence entre Azure Container Registry et Docker Hub ?"
    answer: "Azure Container Registry (ACR) est intégré à l'écosystème Azure, offre une sécurité renforcée avec Azure AD, et permet une mise en réseau privée. Docker Hub est public par défaut et moins intégré aux services cloud Azure."
  - question: "Pourquoi utiliser Azure Web App plutôt qu'Azure Container Instances ?"
    answer: "Azure Web App offre des fonctionnalités avancées comme la mise à l'échelle automatique, les slots de déploiement, l'intégration CI/CD native, et la gestion des domaines personnalisés. ACI est plus adapté aux tâches ponctuelles."
  - question: "Comment gérer les variables d'environnement sensibles ?"
    answer: "Utilisez Azure Key Vault pour stocker les secrets, puis configurez les références Key Vault dans les paramètres d'application d'Azure Web App. Évitez de mettre les secrets directement dans le code ou les variables d'environnement."
  - question: "Le déploiement GitHub Actions est-il sécurisé ?"
    answer: "Oui, en utilisant un service principal Azure avec des permissions minimales et en stockant les credentials dans les secrets GitHub. Le service principal peut être configuré avec des rôles spécifiques au groupe de ressources."
  - question: "Comment optimiser les coûts de déploiement ?"
    answer: "Utilisez le SKU Basic pour ACR en développement, configurez l'auto-scaling sur Azure Web App, et nettoyez régulièrement les anciennes images dans ACR. Surveillez les métriques avec Azure Monitor."
---

Dans ce tutoriel, nous allons déployer une application **FastAPI** sur **[Microsoft Azure](https://azure.microsoft.com/fr-fr/)** en utilisant **[Docker](https://www.docker.com/)** pour la containerisation, **[Azure Container Registry (ACR)](https://learn.microsoft.com/fr-fr/azure/container-registry/)** pour stocker l’image, et **[Azure Web App](https://learn.microsoft.com/fr-fr/azure/app-service/)** pour l’hébergement.

Le déploiement sera automatisé grâce à **[GitHub Actions](https://docs.github.com/fr/actions)** pour mettre en place un pipeline CI/CD complet.

## Prérequis

Avant de commencer, vous devez avoir :

- Un **[compte Azure actif](https://azure.microsoft.com/fr-fr/free/)**
- **[Docker installé](https://docs.docker.com/get-docker/)** sur votre machine
- **[Azure CLI](https://learn.microsoft.com/fr-fr/cli/azure/install-azure-cli)** pour interagir avec Azure
- Un **compte GitHub** avec **Actions** activées

## 1. Créer les ressources Azure via Azure CLI

### 🔹 1.1 Créer un groupe de ressources

```bash
az login
az group create --name myResourceGroup --location francecentral
```

### 🔹 1.2 Créer un Azure Container Registry (ACR)

```bash
az acr create --resource-group myResourceGroup --name weatherapplucasz --sku Basic
```

**Pour en savoir plus** : [Documentation officielle ACR](https://learn.microsoft.com/fr-fr/azure/container-registry/container-registry-intro)

### 🔹 1.3 Créer une Azure Web App

```bash
az appservice plan create --name myAppServicePlan \
  --resource-group myResourceGroup --sku B1 --is-linux

az webapp create --name weatherapp \
  --resource-group myResourceGroup \
  --plan myAppServicePlan \
  --deployment-container-image-name weatherapplucasz.azurecr.io/weatherapp:latest
```

## 2. Configurer Azure Web App pour pointer vers l'image du container

1. Connectez-vous au **[Portail Azure](https://portal.azure.com)**
2. Ouvrez **App Services** et sélectionnez `weatherapp`
3. Accédez à **Configuration** → **Container settings**
4. Sélectionnez votre ACR (`weatherapplucasz.azurecr.io`)
5. Choisissez l’image `weatherapp:latest`

![Configuration Azure Web App](/azure-web-app.png)

## 3. Créer les identifiants Azure pour GitHub Actions

```bash
az ad sp create-for-rbac --name "github-action-deploy" \
  --role contributor \
  --scopes /subscriptions/<subscription-id>/resourceGroups/myResourceGroup \
  --sdk-auth
```

**Référence** : [Créer un principal de service Azure](https://learn.microsoft.com/fr-fr/cli/azure/create-an-azure-service-principal-azure-cli)

## 4. Ajouter les identifiants dans les secrets GitHub

1. Ouvrez **Settings** → **Secrets and variables** → **Actions**
2. Cliquez sur **New repository secret**
3. Nom : `AZURE_CREDENTIALS`
4. Valeur : collez le JSON généré

## 5. Pipeline CI/CD avec GitHub Actions

Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: CI/CD Pipeline for FastAPI App

on:
  push:
    branches:
      - main

jobs:
  build_and_push:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Log in to Azure CLI
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      - name: Log in to ACR
        run: az acr login --name weatherapplucasz

      - name: Build Docker image
        run: docker build -t weatherapplucasz.azurecr.io/weatherapp:latest .

      - name: Push Docker image to ACR
        run: docker push weatherapplucasz.azurecr.io/weatherapp:latest

      - name: Deploy to Azure Web App
        uses: azure/webapps-deploy@v2
        with:
          app-name: weatherapp
          images: weatherapplucasz.azurecr.io/weatherapp:latest
```

**Guide complet GitHub Actions + Azure** : [Documentation Microsoft](https://learn.microsoft.com/fr-fr/azure/app-service/deploy-github-actions)

## Explication du pipeline

- **Checkout** : Récupère le code source depuis GitHub
- **Docker Buildx** : Prépare la construction d’images multi-architecture
- **Azure Login** : Authentifie le pipeline sur Azure
- **ACR Login** : Se connecte au registre pour push/pull
- **Docker Build** : Construit l’image de l’application FastAPI
- **Docker Push** : Envoie l’image dans ACR
- **Deploy** : Met à jour Azure Web App avec la dernière image

## Conclusion

Grâce à ce tutoriel, vous pouvez :

- Containeriser votre app **FastAPI** avec Docker
- La stocker dans **Azure Container Registry**
- La déployer sur **Azure Web App**
- Automatiser le tout avec **GitHub Actions**

  **Pour aller plus loin** :

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Azure Key Vault](https://learn.microsoft.com/fr-fr/azure/key-vault/general/overview) pour sécuriser vos secrets
- [Application Insights](https://learn.microsoft.com/fr-fr/azure/azure-monitor/app/app-insights-overview) pour surveiller vos performances
