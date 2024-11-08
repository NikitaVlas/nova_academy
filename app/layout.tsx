import type { Metadata } from "next";
import "./globalStyles/normalize.css";
import "./globalStyles/globals.css";
import "./globalStyles/header.css";
import "./globalStyles/menu.css";
import "./globalStyles/footer.css";
import "./globalStyles/cookie-popup.css";
import "./globalStyles/auth-popup.css";
import Layout from "@/components/layouts/Layout";

export const metadata: Metadata = {
  title: "Nova Academy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
