import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
// import { getCssText, globalStyles } from "../../stitches.config";

export const metadata = {
  title: "TED2PDF",
  description: "TED2PDF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>{/* <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} /> */}</head>
      <body className={inter.className}>
        {children}
        {/* {globalStyles()} */}
      </body>
    </html>
  );
}
