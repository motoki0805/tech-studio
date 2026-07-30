"use client";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ""
  );

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <p className="text-[#4a3f35] text-xl font-bold mb-2">
          送信が完了しました
        </p>
        <p className="text-[#5c534a]">
          お問い合わせいただきありがとうございます。内容を確認の上、ご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* お問い合わせ種別 */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-[#4a3f35] mb-1"
        >
          お問い合わせ種別 <span className="text-[#b17a5c]">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-lg border border-[#d6ccc4] bg-white text-[#4a3f35] focus:outline-none focus:ring-2 focus:ring-[#b17a5c] transition"
        >
          <option value="" disabled>選択してください</option>
          <option value="お仕事のご依頼・見積もり">お仕事のご依頼・見積もり</option>
          <option value="スキルシートのご請求">スキルシートのご請求</option>
          <option value="ご質問・ご相談">ご質問・ご相談</option>
          <option value="その他">その他</option>
        </select>
        <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      {/* 名前 */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#4a3f35] mb-1"
        >
          お名前 <span className="text-[#b17a5c]">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          maxLength={100}
          placeholder="山田 太郎"
          className="w-full px-4 py-3 rounded-lg border border-[#d6ccc4] bg-white text-[#4a3f35] placeholder-[#b0a89e] focus:outline-none focus:ring-2 focus:ring-[#b17a5c] transition"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      {/* メール */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#4a3f35] mb-1"
        >
          メールアドレス <span className="text-[#b17a5c]">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          maxLength={254}
          placeholder="example@email.com"
          className="w-full px-4 py-3 rounded-lg border border-[#d6ccc4] bg-white text-[#4a3f35] placeholder-[#b0a89e] focus:outline-none focus:ring-2 focus:ring-[#b17a5c] transition"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      {/* メッセージ */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#4a3f35] mb-1"
        >
          メッセージ <span className="text-[#b17a5c]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={2000}
          placeholder="お問い合わせ内容をご記入ください"
          className="w-full px-4 py-3 rounded-lg border border-[#d6ccc4] bg-white text-[#4a3f35] placeholder-[#b0a89e] focus:outline-none focus:ring-2 focus:ring-[#b17a5c] transition resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      {/* 同意チェックボックス */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          name="consent"
          required
          className="mt-1 w-4 h-4 accent-[#b17a5c] cursor-pointer shrink-0"
        />
        <label htmlFor="consent" className="text-sm text-[#5c534a] cursor-pointer">
          <Link href="/privacy" target="_blank" className="text-[#b17a5c] underline hover:text-[#96634a]">
            プライバシーポリシー
          </Link>
          に同意します
        </label>
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex items-center gap-2 px-10 py-3 rounded-full bg-[#b17a5c] text-white font-medium hover:bg-[#96634a] transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "送信中..." : "送信する"}
        </button>
      </div>
    </form>
  );
};
