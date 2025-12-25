import Image from "next/image";
import { SectionContainer } from "../../atoms/SectionContainer";
import { InfoCard } from "../../molecules/InfoCard";

export const AboutSection = () => {
  return (
    <SectionContainer id="about" title="About" maxWidth="7xl">
        {/* プロフィールメインエリア */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-8">
        {/* アイコン */}
        <div className="shrink-0">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src="/icon.jpg"
              alt="プロフィールアイコン"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/*  プロフィールテキスト */}
        <div className="space-y-6 text-center md:text-left max-w-2xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#4a3f35] mb-2">
              motoki0805
            </h3>
            <p className="inline-block px-4 py-1 bg-[#b17a5c] text-white text-xs sm:text-sm font-medium rounded-full shadow-sm mb-4">
              フロント / バックエンドエンジニア
            </p>
            
            <ul className="text-sm text-[#5c534a] space-y-1 list-none p-0">
              <li>・1996年生まれ（29歳）</li>
              <li>・福島県出身</li>
              <li>・愛知県在住（活動エリア：愛知）</li>
            </ul>
          </div>

          <div className="text-[#5c534a] space-y-4 leading-relaxed">
            <p>
              愛知を中心に活動しているエンジニアです。
              ツールやシステムは使われてこそ意味があると思っているので、顧客が「便利になった」と感じるものを形にすることを目指しています。
            </p>
            <p>
              良いものを作るためにコードレビューなども積極的に行い、後から自分や周りの人が見ても困らない、質の高いアウトプットを心がけています。
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <InfoCard title="">
          <div className="space-y-4 text-[#5c534a]">
            <p className="font-bold text-[#4a3f35] text-lg">
              趣味はVRと食べ歩きです。
            </p>
            <p>
              色々な人とコミュニケーションを取るのが目的で始めました。そこからVR空間でのエンジニア集会などを知り、場所に縛られずにリアルタイムで情報交換ができるのが面白いと感じています。
            </p>
            <p>
              食べ歩きは、休日に大須商店街で新しいお店探しをしています。美味しいものを食べることは自分にとって良いリフレッシュになっています。
            </p>
          </div>
        </InfoCard>

        <InfoCard title="">
          <div className="space-y-4 text-[#5c534a]">
            <p className="font-bold text-[#4a3f35] text-lg">
              「誰が見ても困らない」品質を。
            </p>
            <p>
              「一度作って終わり」にはしたくないので、後から自分やチームメンバーが読み返したときに迷わないコードとドキュメントを残すことを徹底しています。
            </p>
            <p>
              当たり前のことかもしれませんが、こうした積み重ねがシステムの信頼性と、その先の顧客の「便利さ」に直結すると考えています。
            </p>
          </div>
        </InfoCard>
      </div>
    </SectionContainer>
  );
};