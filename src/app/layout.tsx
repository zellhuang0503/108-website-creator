import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_TC({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700"],
  variable: '--font-noto-sans',
  display: 'swap'
});

const serif = Noto_Serif_TC({ 
  subsets: ["latin"], 
  weight: ["500", "600", "700"],
  variable: '--font-noto-serif',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "108 課綱題庫系統 | 誠、實、探、究",
  description: "成就每一個孩子：適性揚才、終身學習的素養導向測驗平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="selection:bg-zen-primary/10 selection:text-zen-primary">
      <body className={`${sans.variable} ${serif.variable} font-sans min-h-screen flex flex-col`}>
        {/* Minimal Nav */}
        <nav className="fixed top-0 left-0 w-full z-50 px-8 h-20 flex items-center justify-between pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-6">
            <a href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zen-primary rounded-sm flex items-center justify-center text-zen-bg font-serif font-bold text-xs">
                108
              </div>
              <span className="font-serif tracking-[0.2em] text-sm text-zen-primary hidden sm:inline">課綱題庫系統</span>
            </a>
          </div>
          
          <div className="pointer-events-auto flex items-center gap-12 text-[11px] tracking-[0.3em] font-medium text-zen-muted uppercase">
            <a href="/questions" className="hover:text-zen-primary transition-colors">題庫 Repository</a>
            <a href="/exams" className="hover:text-zen-primary transition-colors">組卷 Generator</a>
            <a href="/learning" className="hover:text-zen-primary transition-colors">學習 Path</a>
          </div>
        </nav>

        <main className="flex-1 pt-20">
          {children}
        </main>

        <footer className="px-12 py-16 border-t border-zen-border/50 bg-white/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <h4 className="font-serif text-zen-primary tracking-widest text-sm">成就每一個孩子</h4>
              <p className="text-[10px] text-zen-muted tracking-loose">TAIWAN 108 CURRICULUM • ASSESSMENT RESEARCH GROUP</p>
            </div>
            <div className="flex gap-8 text-[10px] text-zen-muted tracking-widest uppercase">
              <a href="/about" className="hover:text-zen-primary transition-colors">About</a>
              <a href="#" className="hover:text-zen-primary transition-colors">Guidelines</a>
              <a href="#" className="hover:text-zen-primary transition-colors">Resources</a>
            </div>
            <div className="text-[10px] text-zen-muted font-light italic">
              © 2026 Crafted with Serenity.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
