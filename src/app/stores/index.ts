import { proxy } from "valtio";

export const state = proxy({
  step: 0,
  url: "",
});
