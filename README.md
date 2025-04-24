# 課題

https://github-repository-search-alpha.vercel.app/

> [!Tip]
> 環境構築手順

```bash
cp .env.example .env
cp .env.example .env.test

pnpm i

pnpm start
```

> [!Tip]
> 利用した主なパッケージ・ライブラリ
### css / ui
- tailwind css
- shadcn/ui
- reactbits
#### 状態管理
- Jotai
- Jotai Tanstack Query
#### バリデーション
- Zod
- react hook form
#### テスト
- Vitest
- storybook
- testing-library
- msw
- codecov
#### その他
- octokit/rest
- prettier
- @t3-oss/env-nextjs
- ts-pattern

--- 

> [!NOTE]
> 残課題
- [ ] jotai-tanstack-query のテスト実装 `src/queries/repository/index.ts`
- [ ] @t3-env のテスト実装
- [ ] storybookにてmswを利用
- [ ] next/link useLinkStatus のloadingIndicatorのテスト
- [ ] Not Found ページのデザイン
- [ ] 詳細ページのコンポーネントテスト
- [ ] headerのmetaタグの調整

> [!CAUTION]
> AIを利用して調査・デバッグした部分
- src/test/setup.ts MockIntersectionObserver 周り
- src/utils/envディレクトリのテスト周りの調査
- jotai-tanstack-queryのテスト周りの調査
- next/link userLinkStatusのテスト周りの調査
