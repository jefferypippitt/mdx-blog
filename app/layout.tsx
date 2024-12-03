import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";
import Providers from "@/components/providers";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jeffery - Web Dev",
  description: "Personal website and MDX Blog Demo/Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(manrope.variable, "font-sans antialiased")}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 px-4 py-4 md:py-6">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
