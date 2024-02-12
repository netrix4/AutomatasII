import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Automatas II",
  description: "Este es el proyecto de la materia de compiladores Automatas II",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  );
}
