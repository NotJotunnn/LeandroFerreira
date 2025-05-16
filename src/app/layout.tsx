import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de Leandro Ferreira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <script src="https://kit.fontawesome.com/973f7fabdf.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
