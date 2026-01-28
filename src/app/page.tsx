import { ArrowRight, Book, PenTool, Layers, Compass } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-24 max-w-7xl mx-auto">
        {/* Abstract Vertical Line Accent */}
        <div className="absolute top-0 right-12 w-px h-64 bg-zen-border hidden lg:block"></div>
        <div className="absolute top-12 right-12 vertical-text text-[10px] tracking-[0.5em] text-zen-muted uppercase opacity-40">
          Enlightening Every Child
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <div className="zen-stamp">誠 ‧ 實 ‧ 探 ‧ 究</div>
              <h1 className="text-5xl md:text-6xl font-serif text-zen-primary leading-[1.15] tracking-tight">
                將教育理念<br />
                <span className="italic opacity-80 pl-4">凝鍊為行動</span>
              </h1>
            </div>
            
            <p className="text-lg text-zen-muted leading-relaxed max-w-lg font-light">
              108 課綱的核心，是在真實的生活場景中，培養解決複雜問題的能力。我們的題庫系統，為素養教育提供最優雅的數位載體。
            </p>

            <div className="flex items-center gap-8">
              <a href="/questions" className="group flex items-center gap-4">
                <div className="zen-button-primary flex items-center gap-2">
                  進入命題系統 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <a href="/about" className="text-sm font-serif border-b border-zen-border py-1 hover:border-zen-primary transition-colors tracking-widest">
                理念詳解
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="relative">
              {/* Artistic Grid Background */}
              <div className="absolute -inset-4 border border-zen-border/30 rounded-full animate-[spin_20s_linear_infinite] opacity-50"></div>
              <div className="zen-card aspect-[4/5] p-12 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zen-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="space-y-6 relative z-10">
                  <span className="text-4xl font-serif text-zen-primary opacity-20">01</span>
                  <p className="text-2xl font-serif leading-relaxed text-zen-text/90">
                    “讓學習<br />
                    不再孤立於課本。”
                  </p>
                </div>
                
                <div className="space-y-4 relative z-10 text-xs tracking-widest text-zen-muted border-t border-zen-border pt-6">
                  <p>108 課綱的核心哲學</p>
                  <p className="font-serif italic">— 成就每一個孩子</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Stats / Key Pillars */}
      <section className="bg-white/40 border-y border-zen-border/50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-2">
            <div className="text-3xl font-serif text-zen-primary">三大</div>
            <div className="text-xs tracking-widest text-zen-muted uppercase">核心面向</div>
            <p className="text-[10px] pt-4 text-zen-muted leading-relaxed uppercase opacity-60">自主行動 / 溝通互動 / 社會參與</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-serif text-zen-primary">九項</div>
            <div className="text-xs tracking-widest text-zen-muted uppercase">素養指標</div>
            <p className="text-[10px] pt-4 text-zen-muted leading-relaxed uppercase opacity-60">身心素質 / 系統思考 / 多元文化...</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-serif text-zen-primary">十九大</div>
            <div className="text-xs tracking-widest text-zen-muted uppercase">重要議題</div>
            <p className="text-[10px] pt-4 text-zen-muted leading-relaxed uppercase opacity-60">性別 / 環境 / 人權 / 安全 / 能源...</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-serif text-zen-primary">二十二</div>
            <div className="text-xs tracking-widest text-zen-muted uppercase">學科領域</div>
            <p className="text-[10px] pt-4 text-zen-muted leading-relaxed uppercase opacity-60">語文 / 數學 / 自然 / 社會 / 科技...</p>
          </div>
        </div>
      </section>

      {/* Feature Grid with more character */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-zen-border border border-zen-border">
          <div className="bg-zen-bg p-12 space-y-8 hover:bg-white transition-colors group">
            <Book size={32} className="text-zen-primary/40 group-hover:text-zen-primary transition-colors" strokeWidth={1} />
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-zen-primary">核心題庫管理</h3>
              <p className="text-sm text-zen-muted leading-relaxed font-light">
                不只是題目，更是教育情境的採集。支援影音與圖表等多媒體素材，還原真實世界的複雜度。
              </p>
            </div>
          </div>
          <div className="bg-zen-bg p-12 space-y-8 hover:bg-white transition-colors group">
            <Layers size={32} className="text-zen-primary/40 group-hover:text-zen-primary transition-colors" strokeWidth={1} />
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-zen-primary">智慧組卷系統</h3>
              <p className="text-sm text-zen-muted leading-relaxed font-light">
                動態平衡素養指標。一鍵產出符合年度教學目標的試卷，支援 PDF 匯出與精美印刷排版。
              </p>
            </div>
          </div>
          <div className="bg-zen-bg p-12 space-y-8 hover:bg-white transition-colors group">
            <Compass size={32} className="text-zen-primary/40 group-hover:text-zen-primary transition-colors" strokeWidth={1} />
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-zen-primary">自主學習路徑</h3>
              <p className="text-sm text-zen-muted leading-relaxed font-light">
                整合數位平台資源，利用錯題筆記與自評表，打破教室圍牆，讓學生學會如何學習。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
