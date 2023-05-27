"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { useSnapshot } from "valtio";
import { state, updateStep, updateTitle, updateTranscript, updateUrl } from "../stores";

export function URLForm() {
  const snap = useSnapshot(state);

  const generateTranscript = async (url: string) => {
    try {
      const res = await axios.post("/api/transcript", { url });
      updateTitle(res.data.title);
      updateTranscript(res.data.transcript);
      updateStep(1);
    } catch (error) {
      console.error("Error converting URL to PDF:", error);
    }
  };

  if (snap.step !== 0) return null;

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Effortlessly Convert TED Transcripts to PDF!
      </h1>
      <Form.Root
        className="w-5/6 lg:w-1/2 mt-8 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          generateTranscript(state.url);
        }}
      >
        <Form.Field className="" name="url">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <Form.Label className="block font-medium text-sm text-gray-200">Please enter a TED URL</Form.Label>
            <Form.Message match={(value) => !value} className="block font-medium text-sm text-gray-200">
              Please enter a TED URL
            </Form.Message>
            <Form.Message
              match={(value) => !value.startsWith("https://www.ted.com/talks/")}
              className="block font-medium text-sm text-gray-200"
            >
              Please enter a TED URL starting with https://www.ted.com/talks/
            </Form.Message>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-4">
            <Form.Control asChild className="col-span-1 lg:col-span-3 rounded-md shadow-sm relative">
              <input
                onChange={(e) => updateUrl(e.target.value)}
                type="text"
                required
                className="block w-full px-4 py-4 text-sm lg:text-base text-gray-800 leading-4 border-0 rounded-md placeholder:text-gray-400"
                placeholder="https://www.ted.com/talks/..."
              />
            </Form.Control>
            <Form.Submit asChild className="mt-4 lg:mt-0 col-span-1 lg:col-span-1">
              <button className="block px-4 py-4 text-sm lg:text-base text-gray-200 hover:text-gray-800 leading-4 bg-transparent hover:bg-gray-200 border border-gray-200 rounded-md cursor-pointer ease-out duration-200">
                Convert PDF
              </button>
            </Form.Submit>
          </div>
        </Form.Field>
      </Form.Root>
    </>
  );
}
