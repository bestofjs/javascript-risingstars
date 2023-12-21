import { Space_Mono as FontMono, Roboto_Slab } from "next/font/google";

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export const fontSerif = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-serif",
});
