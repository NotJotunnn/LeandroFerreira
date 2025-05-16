import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
