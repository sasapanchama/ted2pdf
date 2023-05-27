import { proxy } from "valtio";

export const state = proxy({
  paragraphs: [""],
  step: 0,
  title: "",
  transcript: [""],
  url: "",
});

export const updateParagraphs = (paragraphs: string[]) => {
  state.paragraphs = paragraphs;
};

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
