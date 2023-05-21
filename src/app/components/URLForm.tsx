"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";

export function URLForm() {
  return (
    <Form.Root className="FormRoot">
      <Form.Field className="FormField" name="email">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <Form.Label className="FormLabel">Email</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="email" required />
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
