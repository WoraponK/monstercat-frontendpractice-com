import { Montserrat } from "next/font/google";
import "./styles/globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Monstercat - Frontendpractice",
  description: "Created by WoraponK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
