import { baseSchema } from "./baseSchema";

export const multiSelectSchema = {
  ...baseSchema,
  name: { ...baseSchema.name, default: "MultiSelect" },
  properties: {
    ...baseSchema.properties,
    content: {
      ...baseSchema.properties.content,
      value: { type: "string", default: "" },
    },
    configuration: {
      ...baseSchema.properties.configuration,
      selectAll: { type: "boolean", default: false },
      hasFooter: { type: "boolean", default: false },
    },
  },
};
