# Tech Studio（テック工房）

ポートフォリオサイトです。
新しいバージョンの技術を実務に入れる前に試す場も兼ねています。

- サイト: https://tech-studio.jp
- リポジトリ: https://github.com/motoki0805/tech-studio

## 概要

スキル、実務経歴（Works）、GitHubの公開リポジトリ（Portfolio）を1ページにまとめています。

- 開発期間: 2025年12月〜（現在も更新中）
- 担当: 企画、UI設計、フロントエンド、バックエンド（Server Actions）、デプロイまで個人開発

## 技術構成

メジャーアップデート直後のバージョンを選んでいます。実務に持ち込む前に一度自分で触っておきたかったためです。

| 分類 | 使用技術 | 採用理由 |
| :--- | :--- | :--- |
| Framework | Next.js 16 (App Router) | Server Actions を使えば、GitHubのトークンをクライアントに出さずにAPIを叩ける |
| Library | React 19 | React Compiler（`reactCompiler: true`）を有効化し、`useMemo` / `useCallback` を手書きしない構成を試したかった |
| Styling | Tailwind CSS v4 | CSSファーストの構成（`@import "tailwindcss"` と `@theme inline`）を試すため |
| Language | TypeScript 5.x | `strict: true` |
| Markdown | react-markdown / remark-gfm / rehype-raw / rehype-sanitize | GitHubから取得した生のMarkdownを表示するため。HTMLは rehype-sanitize で落とす |
| 計測 | @next/bundle-analyzer | バンドルサイズの確認用（`npm run analyze`） |

## 実装メモ

### GitHub APIからREADMEをオンデマンドで取得する

Portfolioセクションでは、自分の公開リポジトリを更新順に6件表示しています。

各リポジトリのREADMEは、カードを開いた時点で初めて Server Action（`fetchReadme`）を呼びます。
初期表示の時点で6件分のREADMEまで取ってくると重くなるためです。

### README内の相対パス画像を補完する

GitHubのREADMEには `./image.png` のような相対パスで画像が書かれていることがあり、そのまま描画すると画像が壊れます。

`RepoModal.tsx` で ReactMarkdown の `components` を差し替え、相対パスだった場合に `raw.githubusercontent.com` のURLへ組み立て直しています。
`next/image` を経由するので、外部の画像でも遅延読み込みが効きます。

### コンポーネントの分割

`atoms` / `molecules` / `organisms` / `templates` で分けています。

モーダルは、開いている間だけ背面のスクロールを止めるカスタムフック（`useBodyScrollLock`）を使っています。
単に `overflow: hidden` にするとスクロールバーが消えて横幅が変わり、画面がガタつくので、消えた分を `padding-right` で補っています。
モーダル自体には `role="dialog"` と `aria-modal` を付与しています。

### メンテナンスモード

`NEXT_PUBLIC_IS_MAINTENANCE=true` にすると、全ページが準備中の画面に切り替わります。
公開後に手を入れるときのための仕組みです。

## デザイン

`#4a3f35`（ブラウン）と `#b17a5c`（テラコッタ）を軸にしたアースカラーでまとめています。「工房」という屋号に合わせました。

ナビゲーションはデスクトップでは横並び、モバイルではハンバーガーメニューに切り替わります。
