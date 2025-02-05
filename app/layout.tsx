import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import MyNavbar from "./ui/navbar/Navbar";
import { poppins } from "./ui/fonts";
import Copyright from "./ui/home/Copyright";
import Footer from "./ui/home/Footer";

export const metadata: Metadata = {
  title: "OSIS STELK - Official Website",
  description: "Website OSIS SMK Telkom Makassar",
  icons: {
    icon: "/icon/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative antialiased`}>
        <Providers>
          <MyNavbar />
          <main className="-mt-28 w-full">{children}</main>
          <Footer />
          <Copyright />
        </Providers>
      </body>
    </html>
  );
}
