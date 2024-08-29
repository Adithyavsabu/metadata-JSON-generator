import { baseSchema } from "./baseSchema";

export const buttonSchema = {
  ...baseSchema,
  name: { ...baseSchema.name, default: "Button" },
  properties: {
    ...baseSchema.properties,
    content: {
      ...baseSchema.properties.content,
      text: { type: "string", default: "Click me" },
    },
    configuration: {
      ...baseSchema.properties.configuration,
      icon: { type: "object", default: {} },
    },
  },
};
