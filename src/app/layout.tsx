import type { Metadata } from "next";
import "@fontsource/young-serif/400.css";
import "@fontsource-variable/figtree";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ilé Spa & Wellness | Massage, facials and body rituals in Lekki, Lagos",
  description:
    "Massage, facials and body rituals made with shea, moringa and hibiscus. Book a visit at Ilé Spa & Wellness in Lekki, Lagos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
