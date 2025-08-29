import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "Le titre de l'article",
      required: true,
    },
    date: {
      type: "date",
      description: "La date de publication",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "Un court résumé de l'article",
      required: true,
    },
    category: {
      type: "list",
      of: { type: "string" },
      description: "Les catégories de l'article (peut être multiple)",
      required: true,
    },
    readTime: {
      type: "string",
      description: "Temps de lecture estimé",
      required: true,
    },
    image: {
      type: "string",
      description: "URL de l'image de couverture",
      required: false,
    },
    faq: {
      type: "json",
      description: "Questions fréquentes avec questions et réponses",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  markdown: {
    remarkPlugins: [remarkGfm],
  },
});
