import AuthContext from "./context/AuthContext";
import ToastContext from "./context/ToastContext";
import "./globals.css";
import ActiveStatus from "./components/ActiveStatus";

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
      <body>
        <AuthContext>
          <ToastContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
