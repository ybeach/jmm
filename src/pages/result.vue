<script setup lang="ts">
type Paper = {
    authors: string
    title: string
    journal: string
    reviewed: string
    volume?: string
    pages?: string
    year: string
    doi?: string
    url?: string
}

type Presentation = {
    presenters: string
    title: string
    meeting: string
    year: string
    flags: string[]
}

type Book = {
    authors: string
    publisher: string
    title: string
    year: string
    pages: string
}

type Resource = {
    name: string
    url: string
    description?: string
    doi?: string
    type?: string
}

const papers: Paper[] = [
    {
        "authors": "中村 覚",
        "title": "テキストが拓くデジタルアーカイブの可能性 ―生成・構造化・活用の実践―",
        "journal": "専門図書館",
        "reviewed": "査読無",
        "volume": "324",
        "pages": "2-8",
        "year": "2026",
        "doi": "",
        "url": ""
    },
    {
        "authors": "木村 直樹",
        "title": "書評と紹介 大島明秀著『志筑忠雄』",
        "journal": "日本歴史",
        "reviewed": "査読有",
        "volume": "934",
        "pages": "101-103",
        "year": "2026",
        "doi": "",
        "url": "https://www.yoshikawa-k.co.jp/book/b10154916.html"
    },
    {
        "authors": "小風 綾乃，小川潤，亀田尭宙，山田太造，大向一輝",
        "title": "歴史人名比定に向けた議事録のモデル化と知識グラフの構築",
        "journal": "情報処理学会論文誌",
        "reviewed": "査読有",
        "volume": "67",
        "pages": "241-250",
        "year": "2026",
        "doi": "",
        "url": ""
    },
    {
        "authors": "馬場 基",
        "title": "成果の共有から方法の共有へ",
        "journal": "考古学研究",
        "reviewed": "査読無",
        "volume": "第71巻第4号（通巻284号）",
        "pages": "31-43",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "金 甫榮，中村 覚，山田 太造，渡邉 英徳",
        "title": "デジタル資料の長期保存のためのOAIS参照モデルによる情報パッケージの作成：東京大学史料編纂所を事例に",
        "journal": "デジタルアーカイブ学会誌",
        "reviewed": "査読有",
        "volume": "9",
        "pages": "e15-e24",
        "year": "2025",
        "doi": "10.24506/jsda.9.3_e15",
        "url": ""
    },
    {
        "authors": "中村 覚，岡本 真，小風 綾乃，大月 希望，山田 太造",
        "title": "TEI を用いたデジタル編纂ワークフローの検討：史料編纂所の中世禅籍史料を事例として",
        "journal": "じんもんこん2025論文集",
        "reviewed": "査読有",
        "volume": "2025",
        "pages": "49-54",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "Satoru Nakamura, Yoshimitsu Aitani",
        "title": "A TEI-Based OCR Correction Tool Using GitHub for Collaborative Digital Humanities: Practical Implementation and Applications",
        "journal": "Intelligence and Equity: Shaping the Future of Knowledge: 27th International Conference on Asian Digital Libraries, ICADL 2025, Proceedings",
        "reviewed": "査読有",
        "volume": "",
        "pages": "255-263",
        "year": "2025",
        "doi": "10.1007/978-981-95-4861-3_22",
        "url": ""
    },
    {
        "authors": "木村 直樹",
        "title": "長崎奉行所 長崎奉行の任務と地役人",
        "journal": "西日本文化",
        "reviewed": "査読有",
        "volume": "516",
        "pages": "40-43",
        "year": "2025",
        "doi": "",
        "url": "https://www.bunkakyokai.org/newpage516.html"
    },
    {
        "authors": "木村 直樹",
        "title": "戦争として読む島原・天草一揆",
        "journal": "歴史研究",
        "reviewed": "査読無",
        "volume": "730",
        "pages": "33-41",
        "year": "2025",
        "doi": "",
        "url": "https://www.ebisukosyo.co.jp/item/775/"
    },
    {
        "authors": "Ayano Kokaze, Satoru Nakamura, Taizo Yamada",
        "title": "Uncovering Editors' Intentions and Implicit Historical Perspectives through TEI Markup: Case Study on Dai Nihon Shiryo",
        "journal": "Proceedings of DH2025",
        "reviewed": "査読有",
        "volume": "2025",
        "pages": "-",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "山田 太造",
        "title": "前近代日本史に関わる史料画像の管理と利活用",
        "journal": "第8回東亞細亞史料編纂機関国際学術会議「アジア歴史資料の保全と学術資源化」予稿集",
        "reviewed": "査読無",
        "volume": "2025",
        "pages": "3-8",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "大月 希望，小川 潤，寺尾 美保，井上 聡，中村 覚，大向 一輝，山田 太造",
        "title": "写本の由来を多様な史資料から探る：RDFを用いた来歴情報の構造化と関連付けのモデル検討",
        "journal": "じんもんこん2025論文集",
        "reviewed": "査読有",
        "volume": "2025-12-06(6)",
        "pages": "349-356",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "小風 綾乃，中村 覚，井上 聡，金子 拓，山田 太造",
        "title": "一括処理を前提とした固有表現の関係づけ-TEI 版『言継卿記』を例に",
        "journal": "じんもんこん2025論文集",
        "reviewed": "査読有",
        "volume": "2025-12-06(8)",
        "pages": "307-314",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "関野 樹",
        "title": "デジタル・ヒューマニティーズにおける基盤データの役割",
        "journal": "The Korean Journal of Japanology",
        "reviewed": "査読有",
        "volume": "143",
        "pages": "15-35",
        "year": "2025",
        "doi": "10.15532/kaja.2025.05.143.15",
        "url": ""
    },
    {
        "authors": "Tatsuki Sekino",
        "title": "Estimation of Temporal Position for Ambiguous Periods Based on Their Duration",
        "journal": "Proceedings of the 2025 Pacific Neighborhood Consortium Annual Conference and Joint Meetings (PNC)",
        "reviewed": "査読有",
        "volume": "",
        "pages": "",
        "year": "2025",
        "doi": "10.23919/PNC67749.2025.11245502",
        "url": ""
    },
    {
        "authors": "関野 樹",
        "title": "期間の長さに基づくあいまいな期間の時間位置推定とHuTimeオントロジの拡張",
        "journal": "情報処理学会シンポジウムシリーズ じんもんこん 2025 論文集",
        "reviewed": "査読有",
        "volume": "",
        "pages": "123-130",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "林 晃弘",
        "title": "一音坊顕証―仁和寺再興に尽力した学僧―",
        "journal": "日本歴史",
        "reviewed": "査読無",
        "volume": "932",
        "pages": "67-70",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "山田太造,中村覚",
        "title": "日本史史料データ管理と公開：人文学・社会科学研究データ基盤の強化に向けた取り組み",
        "journal": "デジタルアーカイブ学会誌",
        "reviewed": "査読無",
        "volume": "9",
        "pages": "4-8",
        "year": "2025",
        "doi": "https://doi.org/10.24506/jsda.9.1_4",
        "url": ""
    },
    {
        "authors": "林晃弘",
        "title": "細川忠利の花押の変遷―元和・寛永年間における―",
        "journal": "東京大学史料編纂所附属画像史料解析センター通信",
        "reviewed": "査読無",
        "volume": "106",
        "pages": "2-10",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "林晃弘，水野嶺",
        "title": "熊本博物館所蔵「東海道地震記録」",
        "journal": "東京大学史料編纂所研究紀要",
        "reviewed": "査読無",
        "volume": "35",
        "pages": "190-198",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "杉森玲子",
        "title": "小笠原諸島父島における「1826年1月の津波」の再検討",
        "journal": "月刊地球",
        "reviewed": "査読無",
        "volume": "47",
        "pages": "15-24",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "本郷恵子",
        "title": "中世人と酒・中世社会と酒",
        "journal": "日本歴史",
        "reviewed": "査読有",
        "volume": "920",
        "pages": "31-37",
        "year": "2025",
        "doi": "",
        "url": ""
    },
    {
        "authors": "久保 旭, 亀甲 博貴, 原島 純, 木村 明日香, 関野 樹, 森 信介",
        "title": "観的な時間表現を含む時間区間アノテーションデータセットの構築.",
        "journal": "研究報告自然言語処理 (NL)",
        "reviewed": "査読無",
        "volume": "2024-NL-261(9)",
        "pages": "1-7",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "Tatsuki Sekino",
        "title": "Deriving temporal position of a period based on positional relationships between periods using linked data.",
        "journal": "roceedings of the 2024 Pacific Neighborhood Consortium Annual Conference and Joint Meetings (PNC)",
        "reviewed": "査読有",
        "volume": "",
        "pages": "",
        "year": "2024",
        "doi": "10.23919/PNC63053.2024.10697376",
        "url": ""
    },
    {
        "authors": "関野 樹",
        "title": "Linked Data を使ったデータ間の時間的矛盾の検出",
        "journal": "情報処理学会シンポジウムシリーズ じんもんこん 2024 論文集",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "17-22",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "Liu Guanwei, Nakamura Satoru and Yamada Taizo",
        "title": "Development and Application of hi-glyph: A Chinese Character Glyph Management System",
        "journal": "Proceedings of DH2024",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "-",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "Nakamura Satoru, Kuroshima Satoru, Hatayama Shuhei and Yamada Taizo",
        "title": "Development of comparison support tools for historical maps using IIIF",
        "journal": "Proceedings of DH2024",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "-",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "Taizo Yamada, Satoshi Inoue",
        "title": "Visualization of Person Relationships Based on Co-occurrence in Japanese 16th Century Diaries",
        "journal": "Proceedings of PNC2024",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "-",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "Satoru Nakamura, Taizo Yamada, Junichi Yamasaki, Yasuo Takatsuki",
        "title": "Construct Structured Data from Genealogies: Case Study on Kansei Chōshū Shokafu",
        "journal": "Proceedings of PNC2024",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "-",
        "year": "2024",
        "doi": "10.23919/PNC63053.2024.10697359",
        "url": ""
    },
    {
        "authors": "Satoru Nakamura, Taizo Yamada",
        "title": "Analytical Support Tools for Historical Drawing Maps: Utilization and Development of IIIF Georeference Extension and Mirador Plugin",
        "journal": "Proceedings of 2024 IIIF Annual Conference",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "-",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "Guanwei Liu, Satoru Nakamura and Taizo Yamada",
        "title": "Development of hi-text: an Attempt at Stable Encoded Character Shape and Unregistered Glyph Data Exchange in Transcribed Text Dataset",
        "journal": "Proceedings of JADH2024",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "-",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "Satoru Nakamura, Taizo Yamada",
        "title": "Toward the Structuring of Japanese Historical Materials Using TEI: A Case Study of 'Shoshushibun' and 'Sakugenshuryobunshu'",
        "journal": "Proceedings of JADH2024",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "-",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "小風綾乃, 中村覚, 山田太造",
        "title": "TEIによる編纂史料の構造化ー『大日本史料』を例に",
        "journal": "じんもんこん2024論文集",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "275-282",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "金甫榮, 中村覚, 南山泰之, 山田太造",
        "title": "デジタル資料の保存用メタデータの検討：Archivematicaが出力するAIPの内容分析",
        "journal": "じんもんこん2024論文集",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "133-138",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "中村覚, 黒嶋敏, 小風綾乃, 山田太造",
        "title": "海上の道デジタルアーカイブの構築に向けて：絵図や地理情報の管理・活用を支援するシステムの開発",
        "journal": "じんもんこん2024論文集",
        "reviewed": "査読有",
        "volume": "2024",
        "pages": "113-118",
        "year": "2024",
        "doi": "",
        "url": ""
    },
    {
        "authors": "林晃弘",
        "title": "近世前期の寺院相論と幕藩領主―防長地域の曹洞宗の事例から―",
        "journal": "歴史評論",
        "reviewed": "査読無",
        "volume": "894",
        "pages": "30-41",
        "year": "2024",
        "doi": "",
        "url": ""
    }
]

const presentations: Presentation[] = [
    {
        "presenters": "馬場 基",
        "title": "「文化財ＤＸと発掘調査のイノベーション」",
        "meeting": "日本文化財保護協会主催 シンポジウム「文化財ＤＸと発掘調査のイノベーション」",
        "year": "2026",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "山田 太造",
        "title": "日本史史料と人物に関するデータについて",
        "meeting": "デジタル人文学ワークショップ joint with Linked Pasts Japan 2「AIでつながる資料と知識」",
        "year": "2026",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "山田 太造",
        "title": "データ駆動科学手法を用いた日本史史料データ分析基盤構築に向けて",
        "meeting": "京都大学学術情報メディアセンターセミナー「史資料を読むコンピューター」",
        "year": "2026",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "南山 泰之，大野 美紀子，原 正一郎",
        "title": "東南アジアにおける研究データ管理スキームの確立に向けて",
        "meeting": "第30回情報知識学フォーラム",
        "year": "2026",
        "flags": []
    },
    {
        "presenters": "原 正一郎",
        "title": "JDCatの使い道 - 人文学系あるいは個人研究者の視点から -",
        "meeting": "JSPS人文学・社会科学データインフラストラクチャー強化事業フォーラム「人文学・社会科学におけるデータ基盤の強化と実践」",
        "year": "2026",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "大月 希望，井上 聡，寺尾 美保，中村 覚，小川 潤，大向 一輝，山田 太造",
        "title": "複製史料の来歴情報から見る史料収集活動：東京大学史料編纂所における明治期と現在の比較",
        "meeting": "人文科学とコンピュータ研究会第140回研究発表会",
        "year": "2026",
        "flags": []
    },
    {
        "presenters": "馬場 基",
        "title": "HNG公開20周年記念連続研究集会「字体史研究と文字情報データベース」 (第3回)",
        "meeting": "発表4「文字に「場面情報」を付与すると」",
        "year": "2025",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "馬場 基",
        "title": "東アジア周縁文化としての古代日本",
        "meeting": "第1回世界歴史フロンティアフォーラム",
        "year": "2025",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "杉森 玲子",
        "title": "地震・火山史料の収集と研究資源化",
        "meeting": "第8回東アジア史料研究編纂機関国際学術会議「アジア歴史資料の保全と学術資源化」",
        "year": "2025",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "山田 太造",
        "title": "史料をつなぐ、研究を加速する ― 東京大学史料編纂所における日本史研究DXのためのデータ基盤構築 ―",
        "meeting": "仏教学とデジタル・ヒューマニティーズ国際シンポジウム DX-AI時代における人文学の意義と研究基盤の構築",
        "year": "2025",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "山田 太造",
        "title": "日本史史料を研究データとして管理する",
        "meeting": "仏教学とデジタル・ヒューマニティーズ国際シンポジウム DX-AI時代における人文学の意義と研究基盤の構築",
        "year": "2025",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "山田 太造",
        "title": "基盤研究S 「史料データセンシングに基 づく日本列島記憶継承モデルの確立」 進捗報告",
        "meeting": "「歴史情報学の創成」キックオフシンポジウム",
        "year": "2025",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "Taizo YAMADA, Satoru NAKAMURA",
        "title": "Vectorizing History: Sentence-BERT-Based Similarity Analysis of Japanese Historical Event",
        "meeting": "PNC 2025 Annual Conference and Joint Meetings",
        "year": "2025",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "Taizo YAMADA",
        "title": "Towards the Establishment of the Japan Islands Memory Inheritance Model",
        "meeting": "ECAI Workshop in conjunction with PNC 2025",
        "year": "2025",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "Shoichiro Hara",
        "title": "Rethinking Research Data Management Project of the Center for Southeast Asian Studies (CSEAS), Kyoto University",
        "meeting": "PNC 2025 Annual Conference and Joint Meetings",
        "year": "2025",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "Shoichiro Hara, Yasuyuki Minamiyama",
        "title": "Toward the establishment of Research Data Management schemes in Japan and Southeast Asia",
        "meeting": "SciDataCon 2025",
        "year": "2025",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "Tatsuki Sekino",
        "title": "Estimation of Temporal Position for Ambiguous Periods Based on Their Duration",
        "meeting": "2025 Pacific Neighborhood Consortium Annual Conference and Joint Meetings",
        "year": "2025",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "Tatsuki Sekino",
        "title": "Constructing Basic Data and Tools for Temporal Information for Japanese History",
        "meeting": "2025 Pacific Neighborhood Consortium Annual Conference and Joint Meetings",
        "year": "2025",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "関野 樹",
        "title": "期間の長さに基づくあいまいな期間の時間位置推定とHuTimeオントロジの拡張",
        "meeting": "人文科学とコンピュータシンポジウム 2025",
        "year": "2025",
        "flags": []
    },
    {
        "presenters": "小風 綾乃",
        "title": "編纂意図を投影する構造化：借用および標出・傍注・割注",
        "meeting": "研究集会：人文学のためのテキストデータ構造化の現状と課題",
        "year": "2025",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "小風 綾乃",
        "title": "日本中世史料デジタルテキストの構造化",
        "meeting": "学術変革領域「歴史情報学の創成」キックオフ・基盤研究S「史料データセンシングに基づく日本列島記憶継承モデルの確立」合同シンポジウム",
        "year": "2025",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "小風 綾乃， 中村 覚，井上 聡，金子 拓，山田 太造",
        "title": "一括処理を前提とした固有表現の関係づけ-TEI 版『言継卿記』を例に",
        "meeting": "人文科学とコンピュータシンポジウム 2025",
        "year": "2025",
        "flags": []
    },
    {
        "presenters": "Ayano Kokaze, Satoru Nakamura, Taizo Yamada",
        "title": "Uncovering Editors' Intentions and Implicit Historical Perspectives through TEI Markup: Case Study on Dai Nihon Shiryo",
        "meeting": "Digital Humanities 2025",
        "year": "2025",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "大月 希望",
        "title": "多様な史資料が持つ可能性：周縁的/潜在的存在から活用へ",
        "meeting": "人文学・社会科学データインフラストラクチャー強化事業 第3回人文学データシンポジウム「人文学データの多様性」",
        "year": "2025",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "大月 希望，小川 潤，寺尾 美保，井上 聡，中村 覚，大向 一輝，山田 太造",
        "title": "写本の由来を多様な史資料から探る：RDFを用いた来歴情報の構造化と関連付けのモデル検討",
        "meeting": "人文科学とコンピュータシンポジウム 「じんもんこん2025」",
        "year": "2025",
        "flags": []
    },
    {
        "presenters": "井上 聡",
        "title": "吾妻鏡の成り立ちと伝来",
        "meeting": "嵐山史跡の博物館講座",
        "year": "2025",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "井上 聡",
        "title": "『史料纂集』校訂者が語る「ジャパンナレッジ版」の現在と未来",
        "meeting": "図書館総合展2025年度フォーラム",
        "year": "2025",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "Taizo YAMADA",
        "title": "Research data management and utilization of Japanese historical materials",
        "meeting": "2025 Japanese Association for Digital Humanities And The Korean Association for Digital Humanities Joint Symposium",
        "year": "2025",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "山田太造",
        "title": "東京大学史料編纂所における取組",
        "meeting": "人文学・社会科学データインフラストラクチャー強化事業フォーラム 「研究データの利活用と流通を強化する」",
        "year": "2025",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "山田太造",
        "title": "史料データセンシングに基づく日本列島記憶継承モデルの確立の構想について",
        "meeting": "JSPS科研費基盤研究（S）「史料データセンシングに基づく日本列島記憶継承モデルの確立」キックオフフォーラム「日本史研究に関するデータフロー確立に向けて」",
        "year": "2025",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "関野 樹",
        "title": "デジタル・ヒューマニティーズにおける基盤データの役割",
        "meeting": "韓國日本學會第109回 國際學術大會",
        "year": "2025",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "Taizo Yamada",
        "title": "Efforts on the Data Infrastructure for the Humanities and Social Sciences in Japan",
        "meeting": "ECAI Workshop in conjunction with PNC2024",
        "year": "2024",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "Taizo Yamada",
        "title": "Visualization of Person Relationships Based on Co-occurrence in Japanese 16th Century Diaries",
        "meeting": "PNC 2024 Annual Conference and Joint Meetings",
        "year": "2024",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "山田太造",
        "title": "テキストマイニングを用いた日本史史料の分類",
        "meeting": "DH国際ワークショップデジタル漢文研究ーデジタル手法の最前線",
        "year": "2024",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "Yamada Taizo, Miwa Satoshi, Yokouchi Nobutada, Shibutani Ayako, Nakamura Satoru, Hirasawa Kanako",
        "title": "Initiatives for Sharing and Utilization of Humanities and Social Science Data at the University of Tokyo",
        "meeting": "The 34th EAJRS Conference",
        "year": "2024",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "中村覚,山田太造,金甫榮",
        "title": "Archivematica を用いた人文学データのキュレーションプロセスの自動化に関する試み",
        "meeting": "研究データエコシステム構築事業シンポジウム2024",
        "year": "2024",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "尾上陽介,金子拓,山田太造,渋谷綾子,平澤加奈子,高島晶彦,山口悟史,丹羽尉博,天野真志,梶青華,高橋修",
        "title": "異分野共創による史料学DXの確立",
        "meeting": "研究データエコシステム構築事業シンポジウム2024",
        "year": "2024",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "山田太造，中村覚",
        "title": "前近代日本史史料を対象とした研究データ管理基盤の整備",
        "meeting": "データ駆動による課題解決型人文学の創成～データ基盤の構築・活用による次世代型人文学研究の開拓～KICKOFF SYMPOSIUM「AI×人文学 ーデータ駆動による未来形成ー」",
        "year": "2024",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "Taizo YAMADA, Satoru NAKAMURA, Ayano KOKAZE, Nozomi OHTSUKI",
        "title": "Approaches to Establishing Data Flows for Historical Data Management",
        "meeting": "International Symposium on Buddhist Studies and Digital Humanities",
        "year": "2024",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "山田太造",
        "title": "前近代日本史における研究データに関する基盤整備と分析",
        "meeting": "Kobe Studio Seminar for Studies ワークショップ: データアーカイブやユースケースの多様化と，その中長期的な課題",
        "year": "2024",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "杉森玲子",
        "title": "小笠原諸島父島における「1826年の津波」の再検討",
        "meeting": "日本地球惑星科学連合2024年大会",
        "year": "2024",
        "flags": []
    },
    {
        "presenters": "杉森玲子",
        "title": "小笠原諸島を襲った1854年の津波",
        "meeting": "巨大地震・巨大津波に関する国際研究集会-2004年スマトラ・アンダマン地震から20年間の進歩と今後の展望",
        "year": "2024",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "楠本 聡・今井健太郎・杉森玲子・堀 高峰",
        "title": "小笠原諸島父島の1854年安政東海・南海地震津波",
        "meeting": "日本地震学会2024年度秋季大会",
        "year": "2024",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "杉森玲子",
        "title": "769年明和日向灘地震における高鍋城の被害",
        "meeting": "歴史地震史料研究会",
        "year": "2024",
        "flags": []
    },
    {
        "presenters": "馬場 基",
        "title": "人文学・社会科学データインフラストラクチャー強化事業 人文学データシンポジウム「人文学研究資源としてのデジタルデータ」",
        "meeting": "「奈良文化財研究所における文化財情報提供の取り組み」",
        "year": "2024",
        "flags": [
            "招待講演"
        ]
    },
    {
        "presenters": "Satoru Nakamura, Taizo Yamada",
        "title": "Analytical Support Tools for Historical Drawing Maps: Utilization and Development of IIIF Georeference Extension and Mirador Plugin",
        "meeting": "2024 IIIF Annual Conference",
        "year": "2024",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "原 正一郎",
        "title": "人文ＤＸを指向する情報基盤の展望と課題 - 京都大学東南アジア地域研究研究所における経験から -",
        "meeting": "公開シンポジウム「情報学シンポジウム-研究データ基盤の確立とその将来展望-」（第17回情報学シンポジウム）",
        "year": "2024",
        "flags": [
            "招待講演",
            "国際学会"
        ]
    },
    {
        "presenters": "Shoichiro Hara",
        "title": "Research Data Management and Planning in the Humanities",
        "meeting": "PNC 2024 Annual Conference and Joint Meetings",
        "year": "2024",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "原 正一郎",
        "title": "人文学DXを指向する情報基盤の構築",
        "meeting": "研究データエコシステム構築事業シンポジウム2024",
        "year": "2024",
        "flags": []
    },
    {
        "presenters": "Tatsuki Sekino",
        "title": "Basic data for date representations in East Asian historical texts.",
        "meeting": "2024 Pacific Neighborhood Consortium Annual Conference and Joint Meetings",
        "year": "2024",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "Tatsuki Sekino",
        "title": "Deriving temporal position of a period based on positional relationships between periods using linked data",
        "meeting": "2024 Pacific Neighborhood Consortium Annual Conference and Joint Meetings",
        "year": "2024",
        "flags": [
            "国際学会"
        ]
    },
    {
        "presenters": "関野 樹",
        "title": "Linked Data を使ったデータ間の時間的矛盾の検出",
        "meeting": "人文科学とコンピュータシンポジウム 2024",
        "year": "2024",
        "flags": []
    },
    {
        "presenters": "林 晃弘",
        "title": "「越中真宗の江戸時代」塩崎報告・袖吉報告へのコメント",
        "meeting": "越中史壇会 令和６年度特別研究発表会「越中真宗の江戸時代」",
        "year": "2024",
        "flags": []
    },
    {
        "presenters": "馬場 基",
        "title": "人文学・社会科学データインフラストラクチャー強化事業 人文学データシンポジウム「人文学研究資源としてのデジタルデータ」",
        "meeting": "「奈良文化財研究所における文化財情報提供の取り組み」",
        "year": "45363",
        "flags": [
            "招待講演"
        ]
    }
]

const books: Book[] = [
    {
        "authors": "本郷恵子",
        "publisher": "吉川弘文館",
        "title": "日本歴史学会編『日本史のなかの酒』所収「中世人と酒・中世社会と酒」",
        "year": "2026",
        "pages": "283"
    },
    {
        "authors": "新古代史の会（編）",
        "publisher": "吉川弘文館",
        "title": "歩いて学ぶ日本古代史2 律令国家の成立と天平の世",
        "year": "2025",
        "pages": "296"
    },
    {
        "authors": "木村直樹ほか12名",
        "publisher": "帝国書院",
        "title": "社会科 中学生の歴史 日本の歩みと世界の動き（令和７年度版）",
        "year": "2025",
        "pages": "333"
    },
    {
        "authors": "杉森哲也・木村直樹・鶴田啓",
        "publisher": "放送大学教育振興会",
        "title": "近世の日本と世界",
        "year": "2025",
        "pages": "292"
    },
    {
        "authors": "ASEAN Data Archives Research Group (Shoichiro Hara, Mikiko Ono, Yasuyuki Minamiyama and Kimiya Kitani)",
        "publisher": "CSEAS",
        "title": "Research Data Management (RDM) in Universities and Research Institutions, Vietnam : The Present and Future Perspective",
        "year": "2025",
        "pages": "152"
    },
    {
        "authors": "本郷恵子",
        "publisher": "吉川弘文館",
        "title": "天皇家の存続と継承 中世の転換から現代へ",
        "year": "2025",
        "pages": "225"
    },
    {
        "authors": "日高薫編集（木村直樹分担執筆）",
        "publisher": "臨川書店",
        "title": "シーボルト研究の100年",
        "year": "2025",
        "pages": "441"
    },
    {
        "authors": "三舟隆之・馬場基（編）",
        "publisher": "吉川弘文館",
        "title": "カツオの古代学 和食文化の源流をたどる",
        "year": "2024",
        "pages": "291"
    }
]

const tools: Resource[] = [
    {
        "name": "hi-glyph（オープンソース漢字字形管理システム）",
        "url": "https://lab.hi.u-tokyo.ac.jp/services/hi-glyph"
    },
    {
        "name": "HiGeo（史料OCR・地名自動抽出・緯度経度推定ツール）",
        "url": "https://app.linfer.jp/higeo"
    }
]

const datasets: Resource[] = [
    {
        "name": "史料集版面ギャラリー",
        "url": "https://www.hi.u-tokyo.ac.jp/publication/dip",
        "doi": "",
        "description": "東京大学史料編纂所により編纂・出版した史料集の版面画像ギャラリー",
        "type": "記録データ（recorded data）"
    },
    {
        "name": "所蔵史料目録データベース",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w01/search",
        "doi": "",
        "description": "料編纂所所蔵の史料・図書を検索するためのデータベース",
        "type": "記録データ（recorded data）"
    },
    {
        "name": "Hi-CAT Plus",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w81/search",
        "doi": "",
        "description": "史料編纂所がこれまで撮影・収集した国内および海外に所在する史料の画像データを閲覧するためのデータベース",
        "type": "記録データ（recorded data）"
    },
    {
        "name": "東京大学史料編纂所所蔵「辻善之助関係史料」",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w01/search?expand=true&classificationcoderarebook=%E3%80%80%E8%BE%BB%E5%96%84%E4%B9%8B%E5%8A%A9%E9%96%A2%E4%BF%82%E5%8F%B2%E6%96%99&page=1&itemsperpage=200&sortby=classification_code%20request_sign&sortdesc=false&sortitem=%E5%8C%BA%E5%88%86%EF%BC%9A%E6%98%87%E9%A0%86",
        "doi": "",
        "description": "史料編纂所元所長辻善之助の関係史料2,842点。研究論文の草稿や抜き刷り、諸書からの抜き書きやメモが中心で、ほかには史料編纂所の公務に関する書類や、関係した外部の委員会で配布された資料なども含まれる。",
        "type": "記録データ（recorded data）"
    },
    {
        "name": "中世禅籍史料",
        "url": "https://www.hi.u-tokyo.ac.jp/collection/digitalgallery/zenseki/",
        "doi": "",
        "description": "中世禅籍史料(策彦周良文集,春林宗俶和尚等法語,天琢和尚語録)の全文データ",
        "type": "記録データ（recorded data）"
    },
    {
        "name": "HiGeo",
        "url": "https://app.linfer.jp/higeo",
        "doi": "",
        "description": "前近代日本史史料に対して，OCRを行い，地名の自動抽出を行い，それに対する緯度経度の自動推定を行った結果.",
        "type": "地理空間データ（geospatial data）"
    },
    {
        "name": "細川文書（織田信長文書・明月記）データ",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w81/detail/full-disp/00035402",
        "doi": "",
        "description": "公益財団法人永青文庫所蔵文書の公開用目録データ、BD2013-013900細川文書（織田信長文書・明月記）",
        "type": "データセット（dataset）"
    },
    {
        "name": "細川文書（織田信長文書・他）データ",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w81/detail/full-disp/00035403",
        "doi": "",
        "description": "公益財団法人永青文庫所蔵文書の公開用目録データ、BD2014-001600細川文書（織田信長文書・他）",
        "type": "データセット（dataset）"
    },
    {
        "name": "細川文書（中世文書）データ",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w81/detail/full-disp/00035458",
        "doi": "",
        "description": "公益財団法人永青文庫所蔵文書の公開用目録データ、BD2020-021200細川文書（中世文書）",
        "type": "データセット（dataset）"
    },
    {
        "name": "細川文書（中世文書）データ",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w81/detail/full-disp/00035408",
        "doi": "",
        "description": "公益財団法人永青文庫所蔵文書の公開用目録データ、BD2022-011900細川文書（中世文書）",
        "type": "データセット（dataset）"
    },
    {
        "name": "細川文書（新勅撰和歌集）データ",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w81/detail/full-disp/00035406",
        "doi": "",
        "description": "公益財団法人永青文庫所蔵文書の公開用目録データ、 BD2022-011901細川文書（新勅撰和歌集）",
        "type": "データセット（dataset）"
    },
    {
        "name": "細川文書（中世文書・細川忠興文書）",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w81/detail/full-disp/00035407",
        "doi": "",
        "description": "公益財団法人永青文庫所蔵文書の公開用目録データ、 BD2022-011902細川文書（中世文書・細川忠興文書）",
        "type": "データセット（dataset）"
    },
    {
        "name": "hi-glyph",
        "url": "https://lab.hi.u-tokyo.ac.jp/services/hi-glyph",
        "doi": "",
        "description": "オープンソース漢字字形管理システム",
        "type": "符号化データ（encoded data）"
    },
    {
        "name": "正保琉球国絵図データセット",
        "url": "https://lab.hi.u-tokyo.ac.jp/datasets/ryukyu",
        "doi": "10.57459/hi.dg.ryukyu",
        "description": "正保琉球国絵図デジタルアーカイブの地名をまとめて利用するためのデータセット",
        "type": "データセット（dataset）"
    },
    {
        "name": "古記録フルテキストデータベース",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w16/search",
        "doi": "",
        "description": "古記録（漢文日記）の本文を全文データベースとするものです。現在は本所で刊行中の『大日本古記録』を対象としてデータベースを作成",
        "type": "記録データ（recorded data）"
    },
    {
        "name": "大日本史料総合データベース",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w61/search",
        "doi": "",
        "description": "『大日本史料』・「史料稿本」・『史料綜覧』の「綱文」・「書名」・「本文」・「索引」の各データを収録",
        "type": "編集データ（compiled data）"
    },
    {
        "name": "都城島津邸所蔵「琉球并諸島図」デジタルアーカイブ地名辞書",
        "url": "https://www.hi.u-tokyo.ac.jp/collection/digitalgallery/ryukyu_miyakonojo/data/index.csv",
        "doi": "",
        "description": "都城島津邸所蔵「琉球并諸島図」に関する地名を利用するためのデータセット",
        "type": "データセット（dataset）"
    },
    {
        "name": "東京大学史料編纂所データセット",
        "url": "https://www.hi.u-tokyo.ac.jp/di/resource/resourcesync/capabilitylist.xml",
        "doi": "",
        "description": "ResourceSyncを介した史料データセット提供",
        "type": "データセット（dataset）"
    },
    {
        "name": "熊本博物館所蔵文書",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w01/detail/full-disp/00401547?page=1&itemsperpage=200",
        "doi": "",
        "description": "熊本博物館にて撮影した史料の画像（「東海道地震記録」を含む）",
        "type": "記録データ（recorded data）"
    },
    {
        "name": "立花家史料館所蔵史料画像データ",
        "url": "https://wwwap.hi.u-tokyo.ac.jp/ships/w81/search",
        "doi": "",
        "description": "立花家史料館所蔵・柳川古文書館寄託史料（福岡県柳川市）のカラーデジタル撮影データ",
        "type": "記録データ（recorded data）"
    }
]

const formatPaper = (paper: Paper) => {
    const parts = [
        `${paper.authors}：${paper.title}`,
        paper.journal,
        paper.reviewed,
        paper.volume,
        paper.pages,
        paper.year,
    ].filter(Boolean)

    return `${parts.join('，')}．`
}

const formatPresentation = (presentation: Presentation) => {
    const flags = presentation.flags.length ? `〔${presentation.flags.join('・')}〕` : ''

    return `${presentation.presenters}：${presentation.title}，${presentation.meeting} (${presentation.year}).${flags}`
}

const formatBook = (book: Book) => {
    return `${book.authors}：${book.title}，${book.publisher}，p. ${book.pages} (${book.year}).`
}
</script>

<template>
    <div class="default">
        <h2>研究成果</h2>

        <h3>主な発表論文等</h3>

        <h4>〔雑誌論文〕（計 {{ papers.length }} 件）</h4>
        <ol class="publication-list">
            <li v-for="paper in papers" :key="`${paper.title}-${paper.year}`">
                {{ formatPaper(paper) }}
                <span v-if="paper.doi">
                    DOI:
                    <a :href="`https://doi.org/${paper.doi}`" target="_blank">{{ paper.doi }}</a>
                </span>
                <span v-if="paper.url">
                    URL:
                    <a :href="paper.url" target="_blank">{{ paper.url }}</a>
                </span>
            </li>
        </ol>

        <h4>〔学会発表〕（計 {{ presentations.length }} 件）</h4>
        <ol class="publication-list">
            <li v-for="presentation in presentations" :key="`${presentation.title}-${presentation.year}`">
                {{ formatPresentation(presentation) }}
            </li>
        </ol>

        <h4>〔図書〕（計 {{ books.length }} 件）</h4>
        <ol class="publication-list">
            <li v-for="book in books" :key="`${book.title}-${book.year}`">
                {{ formatBook(book) }}
            </li>
        </ol>

        <h4>〔その他〕</h4>

        <h5>公開ツール・システム</h5>
        <ul>
            <li v-for="tool in tools" :key="tool.url">
                {{ tool.name }}
                <a :href="tool.url" target="_blank">{{ tool.url }}</a>
            </li>
        </ul>

        <h5>公開データセット・データベース</h5>
        <ul>
            <li v-for="dataset in datasets" :key="`${dataset.name}-${dataset.url}`">
                {{ dataset.name }}
                <span v-if="dataset.doi">（DOI: {{ dataset.doi }}）</span>
                <span v-if="dataset.type">（{{ dataset.type }}）</span>
                <br />
                <span v-if="dataset.description">{{ dataset.description }}<br /></span>
                <a v-if="dataset.url" :href="dataset.url" target="_blank">{{ dataset.url }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.publication-list {
    padding-left: 1.5rem;
}

.publication-list li,
ul li {
    margin: 0.75rem 0;
    line-height: 1.8;
}

h3 {
    margin-top: 3rem;
}

h4 {
    margin-top: 2.5rem;
}

h5 {
    margin: 2rem 0 0.5rem;
    font-size: 1.05rem;
}

a {
    color: #0f0101ee;
    text-decoration: none;
    background-color: rgb(235, 232, 227);
    overflow-wrap: anywhere;
}
</style>
