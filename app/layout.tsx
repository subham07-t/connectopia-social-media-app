import AuthContext from "./context/AuthContext";
import ToastContext from "./context/ToastContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "connectopia-messenger-clone",
  description: "connectopia-messenger-clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToastContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
