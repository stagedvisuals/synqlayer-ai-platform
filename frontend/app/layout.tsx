import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SynqLayer AI Platform - Dutch Business AI Automation",
  description: "15 AI Skills Mastered. €5M+ Business Value Demonstrated. Production Ready for Dutch MKB.",
  keywords: ["AI", "Dutch Business", "Automation", "Tax Optimization", "Machine Learning", "Netherlands"],
  authors: [{ name: "SynqLayer AI Platform" }],
  creator: "Sovereign Architect 🦀",
  publisher: "SynqLayer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://synqlayer.com",
    title: "SynqLayer AI Platform - Dutch Business AI Automation",
    description: "15 AI Skills Mastered. €5M+ Business Value Demonstrated.",
    siteName: "SynqLayer AI Platform",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SynqLayer AI Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SynqLayer AI Platform - Dutch Business AI Automation",
    description: "15 AI Skills Mastered. €5M+ Business Value Demonstrated.",
    images: ["/og-image.png"],
    creator: "@synqlayer",
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
    yahoo: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            {/* Background grid */}
            <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5" />
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <Navigation />
              <main className="container mx-auto px-4 py-8">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}