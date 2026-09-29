# Haruki Kono — personal website

公開サイト: https://hsoccer.github.io/

Jekyll と al-folio のテーマ・プラグインで作成した個人サイトです。

## 普段編集するファイル

| 内容                           | ファイル                                                |
| ------------------------------ | ------------------------------------------------------- |
| Home・プロフィール写真の指定   | `_pages/about.md`                                       |
| Research                       | `_pages/publications.md`                                |
| 論文・ワーキングペーパー       | `_bibliography/papers.bib`, `_bibliography/working.bib` |
| CVの表示設定・内容             | `_pages/cv.md`, `_data/cv.yml`                          |
| 日本語ページ                   | `_pages/japanese.md`                                    |
| プロフィール写真・アイコン     | `assets/img/hkono.jpeg`, `assets/img/hk.png`            |
| 共通設定                       | `_config.yml`                                           |
| 独自のレイアウト・デザイン調整 | `_layouts/`, `_sass/`                                   |

`docs/archive/about-before-cleanup.md` は、内容が異なっていた古いプロフィール原稿の保管用です。公開されません。
`assets/img/hkono_old.png` は本人の写真の旧版として残しています。

## ローカル確認

Ruby 3.3 系、Bundler 4.0.6、Node.js、ImageMagick、Python/nbconvert を利用します。
依存関係は `Gemfile.lock` と `package-lock.json` に固定しています。

```sh
bundle install
npm ci
JEKYLL_ENV=production bundle exec jekyll build
bundle exec jekyll serve
```

ビルド結果は `_site/` に生成されます。Gitには追加しません。
GitHub Actions の `.github/workflows/deploy.yml` が main へのpush時にビルドし、GitHub Pagesへ公開します。
CVのPDF生成設定は `assets/rendercv/`、テーマの利用方法は `docs/` にあります。

## 整理後の方針

テンプレートの記事、書籍、ニュース、プロジェクト、授業のサンプルと、それらだけが使う素材は削除しました。
外部サンプル記事の取得も無効化しています。個人用の4ページと404ページ、必要なテーマ・ビルド・公開設定を残しています。
`test/` はサイト検証用で、公開ファイルには含めません。
テーマ本体のライセンスは [LICENSE](LICENSE) を参照してください。
