interface NewsItem {
  id: number;
  date: string;
  headline: string;
  source: string;
}

const firstSectionNews: NewsItem[] = [
  {
    id: 1,
    date: "2025.03.18",
    headline: "연준 3월 FOMC 회의 시작",
    source: "Reuters"
  },
  {
    id: 2,
    date: "2025.03.17",
    headline: "중국 2월 산업생산 6.1% 증가",
    source: "CNBC"
  },
  {
    id: 3,
    date: "2025.03.16",
    headline: "일본은행, 기준금리 -0.1% 동결 결정",
    source: "Nikkei"
  },
  {
    id: 4,
    date: "2025.03.15",
    headline: "EU, 2024년 GDP 성장률 전망치 1.2%로 하향",
    source: "FT"
  },
  {
    id: 5,
    date: "2025.03.14",
    headline: "미 상무부, 2월 소매판매 0.6% 증가",
    source: "WSJ"
  }
];

const secondSectionNews: NewsItem[] = [
  {
    id: 6,
    date: "2025.03.13",
    headline: "영국 1월 실업률 3.8% 기록",
    source: "BBC"
  },
  {
    id: 7,
    date: "2025.03.12",
    headline: "OPEC, 원유 수요 전망 상향 조정",
    source: "Reuters"
  }
];

const NewsPage = () => {
  const renderNewsSection = (newsData: NewsItem[]) => (
    <div className="space-y-0">

      {newsData.map((news, index) => (
        <div key={news.id}>
          <div className="py-4 px-6">
            <div className="text-C1-M text-text-sub mb-2">
              {news.date}
            </div>
            <div className="text-B2-B text-text-default mb-2 leading-relaxed">
              {news.headline}
            </div>
            <div className="text-C1-M text-gold-300">
              {news.source}
            </div>
          </div>
          {index < newsData.length - 1 && (
            <div className="border-b border-neutral-200 mx-6"></div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-full">
      <div className="bg-white w-full">
        <div className="max-w-4xl py-8">
          {renderNewsSection(firstSectionNews)}
        </div>
      </div>
      
      <div className="bg-white w-full">
        <div className="max-w-8xl py-8">
          {renderNewsSection(secondSectionNews)}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;