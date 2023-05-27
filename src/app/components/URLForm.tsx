"use client";

import React, { FormEvent } from "react";
import * as Form from "@radix-ui/react-form";
import { useSnapshot } from "valtio";
import { state, updateStep, updateUrl } from "../stores";
import axios from "axios";

export function URLForm() {
  const snap = useSnapshot(state);

  const generatePdf = async (url: string) => {
    console.log(url);
    try {
      const res = await axios.post("/api/test", { url });
      const element = document.createElement("div");
      element.innerHTML = res.data.transcript;
      console.log(element.textContent);
      // const blob = new Blob([response.data], { type: "application/pdf" });
      // const blobUrl = URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // a.href = blobUrl;
      // a.download = "converted.pdf";
      // a.click();
      // URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error converting URL to PDF:", error);
    }
  };

  if (snap.step !== 0) return null;

  return (
    <Form.Root
      className="FormRoot"
      onSubmit={(e) => {
        e.preventDefault();
        generatePdf(state.url);
        updateStep(1);
      }}
    >
      <Form.Field className="FormField" name="url">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <Form.Label className="FormLabel">url</Form.Label>
          <Form.Message match={(value) => !value}>Please enter url.</Form.Message>
          <Form.Message match={(value) => !value.startsWith("https://www.ted.com/talks/")}>
            Please enter TED url.
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input onChange={(e) => updateUrl(e.target.value)} className="Input" type="text" required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Post question
        </button>
      </Form.Submit>
    </Form.Root>
  );
}

// @import '@radix-ui/colors/blackA.css';
// @import '@radix-ui/colors/violet.css';
// @import '@radix-ui/colors/mauve.css';

// /* reset */
// input,
// textarea,
// button {
//   all: unset;
//   box-sizing: border-box;
// }

// .FormRoot {
//   width: 260px;
// }

// .FormField {
//   display: grid;
//   margin-bottom: 10px;
// }

// .FormLabel {
//   font-size: 15px;
//   font-weight: 500;
//   line-height: 35px;
//   color: white;
// }

// .FormMessage {
//   font-size: 13px;
//   color: white;
//   opacity: 0.8;
// }

// .Input,
// .Textarea {
//   width: 100%;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 4px;

//   font-size: 15px;
//   color: white;
//   background-color: var(--blackA5);
//   box-shadow: 0 0 0 1px var(--blackA9);
// }
// .Input:hover,
// .Textarea:hover {
//   box-shadow: 0 0 0 1px black;
// }
// .Input:focus,
// .Textarea:focus {
//   box-shadow: 0 0 0 2px black;
// }
// .Input::selection,
// .Textarea::selection {
//   background-color: var(--blackA9);
//   color: white;
// }

// .Input {
//   padding: 0 10px;
//   height: 35px;
//   line-height: 1;
// }

// .Textarea {
//   resize: none;
//   padding: 10px;
// }

// .Button {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 4px;
//   padding: 0 15px;
//   font-size: 15px;
//   line-height: 1;
//   font-weight: 500;
//   height: 35px;
//   width: 100%;

//   background-color: white;
//   color: var(--violet11);
//   box-shadow: 0 2px 10px var(--blackA7);
// }
// .Button:hover {
//   background-color: var(--mauve3);
// }
// .Button:focus {
//   box-shadow: 0 0 0 2px black;
// }
