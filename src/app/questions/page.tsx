"use client";

import { Plus, Search, Filter, MoreVertical, Tag } from "lucide-react";
import { useState } from "react";

const MOCK_QUESTIONS = [
    {
        id: 1,
        content: "根據 108 課綱核心素養，下列何者屬於『自主行動』面向中的『系統思考與解決問題』？",
        type: "單選題",
        tags: ["A2 系統思考", "教育"],
        difficulty: "中",
        updated: "2026-01-28"
    },
    {
        id: 2,
        content: "在英語閱讀測驗中，透過圖表整合判讀資訊，這主要是在評量學生的哪種素養？",
        type: "單選題",
        tags: ["B1 符號運用", "英文"],
        difficulty: "難",
        updated: "2026-01-27"
    }
];

export default function QuestionsPage() {
    return (
        <div className="bg-zen-bg min-h-screen p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <nav className="text-xs text-zen-muted mb-2 tracking-widest uppercase">題庫管理 / 全部題目</nav>
                        <h2 className="text-3xl font-serif text-zen-primary">核心題庫清單</h2>
                    </div>
                    <button className="zen-button flex items-center gap-2 self-start md:self-center">
                        <Plus size={18} /> 新增題目
                    </button>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zen-muted" size={18} />
                        <input
                            type="text"
                            placeholder="搜尋題目中心、關鍵字..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-zen-border focus:border-zen-primary outline-none text-sm transition-colors"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 border border-zen-border bg-white text-sm text-zen-muted hover:text-zen-primary hover:border-zen-primary transition-all">
                            <Filter size={16} /> 篩選
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-zen-border bg-white text-sm text-zen-muted hover:text-zen-primary hover:border-zen-primary transition-all">
                            最近更新
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="space-y-4">
                    {MOCK_QUESTIONS.map((q) => (
                        <div key={q.id} className="zen-card p-6 flex items-start gap-4">
                            <div className="hidden sm:flex flex-col items-center justify-center w-12 h-12 border border-zen-border text-zen-muted text-[10px] font-serif uppercase tracking-tighter">
                                <span>ID</span>
                                <span className="text-sm font-bold text-zen-primary">{q.id}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[10px] px-2 py-0.5 bg-zen-primary/5 text-zen-primary font-bold border border-zen-primary/10 uppercase tracking-wider">
                                        {q.type}
                                    </span>
                                    <span className="text-[10px] text-zen-muted border-l border-zen-border pl-3">
                                        更新於 {q.updated}
                                    </span>
                                </div>
                                <p className="text-zen-text text-base leading-relaxed mb-4 font-medium">
                                    {q.content}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {q.tags.map(tag => (
                                        <span key={tag} className="flex items-center gap-1 text-[10px] text-zen-muted bg-zen-bg px-2 py-1 border border-zen-border rounded-sm">
                                            <Tag size={10} /> {tag}
                                        </span>
                                    ))}
                                    <span className={`text-[10px] px-2 py-1 rounded-sm border ${q.difficulty === '難' ? 'border-zen-accent/20 text-zen-accent bg-zen-accent/5' : 'border-zen-wood/20 text-zen-wood bg-zen-wood/5'
                                        }`}>
                                        難度：{q.difficulty}
                                    </span>
                                </div>
                            </div>
                            <button className="text-zen-muted hover:text-zen-primary p-1">
                                <MoreVertical size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination Placeholder */}
                <div className="mt-12 text-center">
                    <button className="text-xs text-zen-muted tracking-widest hover:text-zen-primary transition-colors underline underline-offset-4 decoration-zen-border hover:decoration-zen-primary">
                        載入更多題目
                    </button>
                </div>
            </div>
        </div>
    );
}
