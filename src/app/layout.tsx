import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Villa Paradise - Penginapan Mewah yang Tak Terlupakan",
  description: "Nikmati kemewahan dan kenyamanan di villa eksklusif kami dengan pemandangan yang menakjubkan di Bali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
