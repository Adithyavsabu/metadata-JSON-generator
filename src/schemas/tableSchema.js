import { baseSchema } from "./baseSchema";

export const tableSchema = {
  ...baseSchema,
  name: { ...baseSchema.name, default: "Table" },
  properties: {
    ...baseSchema.properties,
    content: {
      ...baseSchema.properties.content,
      dataSource: { type: "string", default: "" },
      apiKey: { type: "string", default: "" },
      paginationDataSource: { type: "string", default: "" },
    },
    configuration: {
      ...baseSchema.properties.configuration,
      columns: { type: "array", default: [] },
      options: { type: "object", default: {} },
    },
  },
};
