import { tableSchema } from "./tableSchema";
import { buttonSchema } from "./buttonSchema";
import { multiSelectSchema } from "./multiSelectSchema";

export const ComponentTypes = {
  Table: "Table",
  Button: "Button",
  MultiSelect: "MultiSelect",
  // ... other component types
};

export const componentSchemas = {
  [ComponentTypes.Table]: tableSchema,
  [ComponentTypes.Button]: buttonSchema,
  [ComponentTypes.MultiSelect]: multiSelectSchema,
  // ... other schemas
};
