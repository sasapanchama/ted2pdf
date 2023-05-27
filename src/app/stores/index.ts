import { proxy } from "valtio";

export const state = proxy({
  step: 0,
  url: "",
});

export const updateStep = (step: number) => {
  state.step = step;
};

export const updateUrl = (url: string) => {
  state.url = url;
};
