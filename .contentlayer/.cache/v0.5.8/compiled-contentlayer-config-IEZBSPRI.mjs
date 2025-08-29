// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "Le titre de l'article",
      required: true
    },
    date: {
      type: "date",
      description: "La date de publication",
      required: true
    },
    excerpt: {
      type: "string",
      description: "Un court r\xE9sum\xE9 de l'article",
      required: true
    },
    category: {
      type: "list",
      of: { type: "string" },
      description: "Les cat\xE9gories de l'article (peut \xEAtre multiple)",
      required: true
    },
    readTime: {
      type: "string",
      description: "Temps de lecture estim\xE9",
      required: true
    },
    image: {
      type: "string",
      description: "URL de l'image de couverture",
      required: false
    },
    faq: {
      type: "json",
      description: "Questions fr\xE9quentes avec questions et r\xE9ponses",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  markdown: {
    remarkPlugins: [remarkGfm]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IEZBSPRI.mjs.map
