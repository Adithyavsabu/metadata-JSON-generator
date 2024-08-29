import { v4 as uuidv4 } from "uuid";

export const baseSchema = {
  id: { type: "string", default: () => uuidv4() },
  position: { type: "object", default: { x: 1, y: 1, w: 12, h: 1 } },
  columnSpan: {
    type: "object",
    default: { sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 },
  },
  name: { type: "string", default: "" },
  properties: {
    content: { type: "object", default: {} },
    configuration: { type: "object", default: {} },
    styleProperties: { type: "object", default: {} },
  },
};
