// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
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
      type: "string",
      description: "La cat\xE9gorie de l'article",
      required: true
    },
    readTime: {
      type: "string",
      description: "Temps de lecture estim\xE9",
      required: true
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
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-V7JLEKGM.mjs.map
