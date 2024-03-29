import Providers from "@/lib/Providers";
import "./globals.css";
import ToastProvider from "@/lib/ToastProvider";

export const metadata = {
  title: "Recipe",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className="bg-globalBody">
          <ToastProvider>{children}</ToastProvider>
        </body>
      </html>
    </Providers>
  );
}
