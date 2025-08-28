import { defineDocumentType, makeSource } from "contentlayer2/source-files";

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
      type: "string",
      description: "La catégorie de l'article",
      required: true,
    },
    readTime: {
      type: "string",
      description: "Temps de lecture estimé",
      required: true,
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
});

