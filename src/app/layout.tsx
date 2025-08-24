import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vehicle Inventory",
  description: "Search, filter and sort vehicles by ZIP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-20 border-b border-neutral-800 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-sm bg-theme" />
              <span className="font-semibold tracking-wide">Flex Inventory</span>
            </div>
            <span className="text-xs text-neutral-400">ankur99thlife@gmail.com</span>
          </div>
        </header>
        <main className="flex-1 mx-auto max-w-6xl w-full px-4 py-6">
          {children}
        </main>
        <footer className="border-t border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-neutral-400">
            © Created with 💖 by Ankur Choudhury
          </div>
        </footer>
      </body>
    </html>
  );
}
