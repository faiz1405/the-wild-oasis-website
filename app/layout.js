import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "@/starter/components/Header";

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "The Wild Oasis is a fictional resort in the heart of the wilderness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-primary-950 text-primary-100 ${josefin.className} flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="mx-auto max-w-7xl w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
