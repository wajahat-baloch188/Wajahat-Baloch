"use client";
import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
        {/* Remove common extension-injected attributes (e.g., Grammarly) before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var attrs=['data-new-gr-c-s-check-loaded','data-gr-ext-installed'];attrs.forEach(function(a){try{document.documentElement.removeAttribute(a);}catch(e){}try{document.body&&document.body.removeAttribute(a);}catch(e){}});})();`,
          }}
        />
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="system"
        >
          <CursorFollower />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
