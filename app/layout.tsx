import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkSlack — Anonymous Productivity Accountability",
  description: "Peer accountability platform where remote workers anonymously track and share productivity goals. Stay focused, stay honest."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a50850fd-aff6-4b86-b3ae-4ecd02897f94"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
