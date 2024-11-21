import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "XYZ Group ID Card",
  description: "Employee ID card with NFC integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-100 text-gray-900`}>
        <div className="mx-auto max-w-[375px] w-full min-h-screen bg-white shadow-md">
          {children}
        </div>
      </body>
    </html>
  );
}
