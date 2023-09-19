import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// components
import Navbar from "./components/Navbar";

export const metadata = {
  title: "The Perfect Uni",
  description: "Find the university of your dreams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
