export interface Profile {
  name: string;
  title: string;
  birthDate: string;
  birthPlace: string;
  residence: string;
  activityArea: string;
  introduction: { id: number; text: string }[];
  hobby: {
    title: string;
    description: { id: number; text: string }[];
  };
  qualityPolicy: {
    title: string;
    description: { id: number; text: string }[];
  };
}

export const profile: Profile = {
  name: "七島 茂輝(motoki0805)",
  title: "フロント / バックエンドエンジニア",
  birthDate: "1996-08-05",
  birthPlace: "福島県",
  residence: "愛知県",
  activityArea: "愛知県中心に全国",
  introduction: [
    {
      id: 1,
      text: "愛知を中心に活動しているエンジニアです。ツールやシステムは使われてこそ意味があると思っているので、顧客が「便利になった」と感じるものを形にすることを目指しています。",
    },
    {
      id: 2,
      text: "良いものを作るためにコードレビューなども積極的に行い、後から自分や周りの人が見ても困らない、質の高いアウトプットを心がけています。",
    },
  ],
  hobby: {
    title: "技術への関心とコミュニティ活動",
    description: [
      {
        id: 1,
        text: "業務外でもPythonを使ったスクレイピングやOCRを用いた自動化ツールの作成など、日常の課題を技術で解決することを楽しんでいます。最近はClaude Code等のAI支援ツールを活用した開発効率化にも取り組んでいます。",
      },
      {
        id: 2,
        text: "名古屋の勉強会・もくもく会やReact Tokyoなど、オンライン・オフライン問わず勉強会に積極的に参加しています。最新の技術トレンドへのキャッチアップと、エンジニア同士の情報交換を大切にしています。",
      },
    ],
  },
  qualityPolicy: {
    title: "「誰が見ても困らない」品質を。",
    description: [
      {
        id: 1,
        text: "「一度作って終わり」にはしたくないので、後から自分やチームメンバーが読み返したときに迷わないコードとドキュメントを残すことを徹底しています。",
      },
      {
        id: 2,
        text: "当たり前のことかもしれませんが、こうした積み重ねがシステムの信頼性と、その先の顧客の「便利さ」に直結すると考えています。",
      },
    ],
  },
};
