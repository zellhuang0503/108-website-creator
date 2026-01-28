-- 108 課綱題庫系統 MVP 基礎資料表

-- 1. 核心素養標籤表
CREATE TABLE IF NOT EXISTS competency_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dimension TEXT NOT NULL, -- 自主行動 / 溝通互動 / 社會參與
    aspect TEXT NOT NULL,    -- 身心素質與自我精進...等九大項目
    code TEXT UNIQUE NOT NULL, -- 如 A1, A2, B1...
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 插入三面九項初始資料
INSERT INTO competency_tags (dimension, aspect, code) VALUES
('自主行動', '身心素質與自我精進', 'A1'),
('自主行動', '系統思考與解決問題', 'A2'),
('自主行動', '規劃執行與創新應變', 'A3'),
('溝通互動', '符號運用與溝通表達', 'B1'),
('溝通互動', '科技資訊與媒體素養', 'B2'),
('溝通互動', '藝術涵養與美感素養', 'B3'),
('社會參與', '道德實踐與公民意識', 'C1'),
('社會參與', '人際關係與團隊合作', 'C2'),
('社會參與', '多元文化與國際理解', 'C3')
ON CONFLICT (code) DO NOTHING;

-- 2. 題目表
CREATE TABLE IF NOT EXISTS questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content JSONB NOT NULL, -- 包含題幹、選項、情境描述
    type TEXT NOT NULL DEFAULT 'single_choice',
    answer JSONB NOT NULL,
    explanation TEXT,
    difficulty INT DEFAULT 3,
    subject TEXT,
    grade TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. 題目與素養標籤關聯表
CREATE TABLE IF NOT EXISTS question_competency (
    question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES competency_tags(id) ON DELETE CASCADE,
    PRIMARY KEY (question_id, tag_id)
);

-- 4. 試卷表
CREATE TABLE IF NOT EXISTS exams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    settings JSONB, -- 如時間限制、顯示選項順序等
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. 試卷題目關聯表
CREATE TABLE IF NOT EXISTS exam_questions (
    exam_id UUID REFERENCES exams(id) ON DELETE CASCADE,
    question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
    sort_order INT DEFAULT 0,
    score INT DEFAULT 2,
    PRIMARY KEY (exam_id, question_id)
);

-- 開啟所有表的 RLS
ALTER TABLE competency_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_competency ENABLE ROW LEVEL SECURITY;
ALTER TABLE exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_questions ENABLE ROW LEVEL SECURITY;

-- 簡易 Policy: 所有人可讀 (MVP 演示用)
CREATE POLICY "Public Read" ON competency_tags FOR SELECT USING (true);
CREATE POLICY "Public Read" ON questions FOR SELECT USING (true);
CREATE POLICY "Public Read" ON question_competency FOR SELECT USING (true);
CREATE POLICY "Public Read" ON exams FOR SELECT USING (true);
CREATE POLICY "Public Read" ON exam_questions FOR SELECT USING (true);
