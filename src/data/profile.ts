interface Profile {
  name: string;
  title: string;
  birthDate: string;
  birthPlace: string;
  residence: string;
  activityArea: string;
  introduction: string[];
  hobby: {
    title: string;
    description: string[];
  };
  qualityPolicy: {
    title: string;
    description: string[];
  };
}

export const profile: Profile = {
  name: "motoki0805",
  title: "フロント / バックエンドエンジニア",
  birthDate: "1996-08-05",
  birthPlace: "福島県",
  residence: "愛知県",
  activityArea: "愛知県中心に全国",
  introduction: [
    "愛知を中心に活動しているエンジニアです。ツールやシステムは使われてこそ意味があると思っているので、顧客が「便利になった」と感じるものを形にすることを目指しています。",
    "良いものを作るためにコードレビューなども積極的に行い、後から自分や周りの人が見ても困らない、質の高いアウトプットを心がけています。",
  ],
  hobby: {
    title: "趣味はVRと食べ歩きです。",
    description: [
      "色々な人とコミュニケーションを取るのが目的で始めました。そこからVR空間でのエンジニア集会などを知り、場所に縛られずにリアルタイムで情報交換ができるのが面白いと感じています。",
      "食べ歩きは、休日に大須商店街で新しいお店探しをしています。美味しいものを食べることは自分にとって良いリフレッシュになっています。",
    ],
  },
  qualityPolicy: {
    title: "「誰が見ても困らない」品質を。",
    description: [
      "「一度作って終わり」にはしたくないので、後から自分やチームメンバーが読み返したときに迷わないコードとドキュメントを残すことを徹底しています。",
      "当たり前のことかもしれませんが、こうした積み重ねがシステムの信頼性と、その先の顧客の「便利さ」に直結すると考えています。",
    ],
  },
};
