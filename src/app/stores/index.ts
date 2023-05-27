import { proxy } from "valtio";

export const state = proxy({
  step: 0,
  title: "",
  transcript: [""],
  url: "",
});

export const updateStep = (step: number) => {
  state.step = step;
};

export const updateTitle = (title: string) => {
  state.title = title;
};

export const updateTranscript = (transcript: any[]) => {
  state.transcript = transcript;
};

export const updateUrl = (url: string) => {
  state.url = url;
};
