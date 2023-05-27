"use client";

import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../stores";

export function StepList() {
  const snap = useSnapshot(state);

  return (
    <ul>
      <li style={{ backgroundColor: snap.step === 0 ? "#000" : "#fff" }}>
        <button>1</button>
      </li>
      <li style={{ backgroundColor: snap.step === 1 ? "#000" : "#fff" }}>
        <button>2</button>
      </li>
      <li style={{ backgroundColor: snap.step === 2 ? "#000" : "#fff" }}>
        <button>3</button>
      </li>
    </ul>
  );
}
