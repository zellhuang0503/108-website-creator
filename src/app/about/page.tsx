export default function AboutPage() {
    return (
        <div className="bg-zen-bg min-h-screen py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <header className="mb-16 text-center">
                    <span className="zen-stamp text-sm mb-4">計畫初衷</span>
                    <h2 className="text-4xl font-serif text-zen-primary mb-6">成就每一個孩子</h2>
                    <div className="w-16 h-px bg-zen-primary/20 mx-auto"></div>
                </header>

                <article className="prose prose-slate max-w-none text-zen-text leading-loose space-y-8">
                    <section>
                        <h3 className="text-xl font-serif text-zen-primary border-l-4 border-zen-primary pl-4 mb-4">
                            核心哲學：成就每一個孩子與素養導向革命
                        </h3>
                        <p>
                            自 108 學年度起實施的十二年國教課綱，象徵著臺灣教育從「知識灌輸」轉向「核心素養」的戰略轉型。這場變革以「適性揚才、終身學習」為核心願記，致力於培養學童具備適應現在生活及面對未來挑戰所需之知識、能力及態度。
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-serif text-zen-primary border-l-4 border-zen-primary pl-4 mb-4">
                            解構核心素養架構
                        </h3>
                        <p>
                            本系統緊扣課程綱要總綱，將題目與核心素養的「三大面向」與「九大項目」深度連結：
                        </p>
                        <ul className="list-none space-y-4 pt-4">
                            <li className="flex items-start gap-3">
                                <span className="text-zen-primary font-bold">● 自主行動：</span>
                                <span className="text-sm text-zen-muted">身心素質與自我精進、系統思考與解決問題、規劃執行與創新應變。</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zen-primary font-bold">● 溝通互動：</span>
                                <span className="text-sm text-zen-muted">符號運用與溝通表達、科技資訊與媒體素養、藝術涵養與美感素養。</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zen-primary font-bold">● 社會參與：</span>
                                <span className="text-sm text-zen-muted">道德實踐與公民意識、人際關係與團隊合作、多元文化與國際理解。</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white p-8 border border-zen-border rounded-sm">
                        <h3 className="text-lg font-serif text-zen-primary mb-4 italic">「讓教學不再孤立於課本」</h3>
                        <p className="text-sm leading-relaxed">
                            素養導向教學的精髓在於將學習與**「生活情境」**緊密連結。當測驗不再只是死記硬背，而是針對學生整合與推理能力的「思維檢驗」，我們才能賦予學生面對真實世界複雜問題的韌性。
                        </p>
                    </section>
                </article>

                <footer className="mt-20 flex justify-center gap-4">
                    <a href="/" className="text-xs text-zen-muted hover:text-zen-primary transition-colors underline underline-offset-4">返回首頁</a>
                    <span className="text-zen-border">/</span>
                    <a href="/questions" className="text-xs text-zen-muted hover:text-zen-primary transition-colors underline underline-offset-4">進入題庫</a>
                </footer>
            </div>
        </div>
    );
}
