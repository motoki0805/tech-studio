import Image from "next/image";
import { SectionContainer } from "../../atoms/SectionContainer";
import { InfoCard } from "../../molecules/InfoCard";

export const AboutSection = () => {
  return (
    <SectionContainer id="about" title="About" maxWidth="7xl">
      {/* プロフィールメインエリア */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-20">
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
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#4a3f35] mb-2">
              motoki0805
            </h3>
            <p className="inline-block px-4 py-1 bg-[#b17a5c] text-white text-xs sm:text-sm font-medium rounded-full shadow-sm">
              フロント/バックエンドエンジニア
            </p>
          </div>

          <p className="text-lg sm:text-xl text-[#4a3f35] leading-relaxed font-bold">
            「作る」その先の、使いやすさと信頼性を追求する。
          </p>
          <div className="text-[#5c534a] space-y-4 leading-relaxed">
            <p>
              単にコードを書くことだけを目的とせず、システムがビジネスやユーザーにどう貢献するかを常に意識しています。
              <span className="text-[#b17a5c] font-semibold">
                PHP (Laravel) & React / TypeScript
              </span>
              を軸に、技術的な美しさと実用性の両立を目指しています。
            </p>
            <p>
              「一度作って終わり」ではなく、保守性や拡張性を考慮した設計を心がけ、
              チームメンバーやお客様と対話を重ねながら、長く愛されるシステムを丁寧に構築していきます。
            </p>
          </div>
        </div>
      </div>

      {/* 下部詳細カードエリア */}
      <div className="grid md:grid-cols-2 gap-8">
        <InfoCard title="実績・専門性">
          <div className="space-y-4">
            <p>
              金融系Web申込受付システムに2年6ヵ月従事し、基本設計から製造、テスト、保守まで一貫して経験してきました
              。
              ミッションクリティカルな環境で培った、不具合解析やログ調査による「確実な保守能力」と品質へのこだわりが強みです
              。
            </p>
            <p>
              外構業者向けシステム開発では、
              <span className="font-bold text-[#b17a5c]">
                N+1問題の解決やデータ取得ロジックの最適化
              </span>
              を行い、画面表示速度を17秒から1.5秒へ大幅に向上させる（約11倍の高速化）など、実利的なパフォーマンス改善を実現しました
              。
            </p>
          </div>
        </InfoCard>

        <InfoCard title="提供価値">
          <div className="space-y-4">
            <p>
              サブリーダーやリーダーとして、プルリクエストのレビューや後進の技術指導（インターン生へのメンター業務等）を担当
              。
              個人の成果だけでなく、チーム全体の知見を底上げし、プロジェクトを安定させる組織貢献を重視しています
              。
            </p>
            <p>
              複雑な権限制御ロジックの実装や、業務要件の整理・落とし込みなど、ビジネス上の目的を技術へ翻訳する課題解決力を提供します
              。 技術とビジネスの両面から、プロジェクトの成功に貢献します。
            </p>
          </div>
        </InfoCard>
      </div>
    </SectionContainer>
  );
};
