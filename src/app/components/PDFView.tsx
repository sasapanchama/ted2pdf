"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { useSnapshot } from "valtio";
import { state } from "../stores";

const styles = StyleSheet.create({
  pdfviewer: {
    width: "100%",
    height: "100vh",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  viewParent: {
    margin: 24,
    padding: 24,
    flexGrow: 1,
  },
  viewChild: {
    position: "relative",
  },
  textTitle: {
    paddingBottom: 12,
    fontSize: 16,
    fontWeight: "bold",
    borderBottom: "1px solid #DDDDDD",
  },
  textTime: {
    fontSize: 8,
    lineHeight: 1.48,
    letterSpacing: 0.24,
    color: "#BBBBBB",
    position: "absolute",
    top: 16,
    left: -32,
  },
  textCues: {
    paddingTop: 14,
    paddingBottom: 12,
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: 1.24,
    color: "#000000",
    borderBottom: "1px solid #DDDDDD",
    letterSpacing: 0.24,
  },
});

export function PDFView() {
  const snap = useSnapshot(state);

  if (snap.step !== 1) return null;

  if (snap.title === "") return null;

  return (
    <PDFViewer style={styles.pdfviewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.viewParent}>
            <Text style={styles.textTitle}>{snap.title}</Text>
            {snap.transcript.map((transcript: any) => (
              <View key={transcript.time} style={styles.viewChild}>
                <Text style={styles.textTime}>
                  {Math.floor(transcript.time / (1000 * 60))
                    .toString()
                    .padStart(2, "0")}
                  :
                  {Math.floor((transcript.time % (1000 * 60)) / 1000)
                    .toString()
                    .padStart(2, "0")}
                </Text>
                <Text style={styles.textCues}>{transcript.cues}</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
