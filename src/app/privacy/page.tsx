import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "なるかテック工房のプライバシーポリシーについて説明します。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#faf7f5]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#4a3f35] mb-2">
          プライバシーポリシー
        </h1>
        <p className="text-sm text-[#8c8279] mb-12">
          最終更新日：{new Date().getFullYear()}年{new Date().getMonth() + 1}月{new Date().getDate()}日
        </p>

        <div className="space-y-10 text-[#5c534a] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#4a3f35] mb-3">1. 事業者情報</h2>
            <p>
              屋号：{process.env.NEXT_PUBLIC_SITE_NAME_JA || "テック工房"}<br />
              所在地：{process.env.NEXT_PUBLIC_LOCATION || ""}<br />
              運営者：{process.env.NEXT_PUBLIC_OWNER_NAME || ""}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#4a3f35] mb-3">2. 収集する個人情報</h2>
            <p>本サイトのお問い合わせフォームにて、以下の情報をお預かりします。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>お名前</li>
              <li>メールアドレス</li>
              <li>お問い合わせ内容</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#4a3f35] mb-3">3. 利用目的</h2>
            <p>収集した個人情報は、以下の目的のみに使用します。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>お問い合わせへの返信</li>
              <li>スキルシート等のご請求対応</li>
              <li>業務上の連絡</li>
            </ul>
            <p className="mt-2">上記以外の目的には使用いたしません。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#4a3f35] mb-3">4. 第三者提供について</h2>
            <p>
              収集した個人情報は、法令に基づく場合を除き、本人の同意なく第三者に提供することはありません。
              なお、お問い合わせフォームの送信処理には <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-[#b17a5c] underline">Formspree</a> を利用しており、同サービスのプライバシーポリシーが適用されます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#4a3f35] mb-3">5. 個人情報の管理</h2>
            <p>
              収集した個人情報は適切に管理し、不正アクセス・紛失・漏洩等が生じないよう、合理的な安全対策を講じます。
              お問い合わせ対応が完了した後は、不要となった個人情報を速やかに削除します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#4a3f35] mb-3">6. 開示・訂正・削除のご請求</h2>
            <p>
              ご自身の個人情報の開示・訂正・削除をご希望の場合は、お問い合わせフォームよりご連絡ください。
              ご本人確認の上、速やかに対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#4a3f35] mb-3">7. プライバシーポリシーの変更</h2>
            <p>
              本ポリシーは、必要に応じて予告なく変更する場合があります。
              変更後のポリシーは本ページに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#4a3f35] mb-3">8. お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、
              <Link href="/#contact" className="text-[#b17a5c] underline">お問い合わせフォーム</Link>
              よりご連絡ください。
            </p>
          </section>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#b17a5c] text-white font-medium hover:bg-[#96634a] transition-all duration-300 shadow-md"
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
