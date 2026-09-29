/* TLI Hub 原型：日文介面詞典（TLI_I18N_DICT.ja）
 * 只有宣告 window.TLI_I18N_PAGE_LANGS 含 'ja' 的頁面會用到；key 與英文詞典（TLI_I18N_DICT.en）共用。
 * 查不到的 key 由 assets/_i18n.js 退回英文，再退回原文。
 * 載入順序：assets/_i18n_dict.js 之後、assets/_i18n.js 之前。
 * 用語採日本常見系統介面說法（予約、キャンセル、保存など）。
 */
TLI_I18N_DICT.ja = TLI_I18N_DICT.ja || {};
/* <member-autogen> */
Object.assign(TLI_I18N_DICT.ja,{
/* ---- _common ---- */
"member.nav.aria":"メインナビゲーション",
"member.nav.home":"ホーム",
"member.nav.booking":"予約・申込",
"member.nav.schedule":"時間割",
"member.nav.learning":"学習",
"member.nav.myPlan":"マイプラン",
"member.nav.me":"マイページ",
"member.nav.backToSite":"公式サイトへ",
"member.role.student":"受講生",
"member.logoAria":"TLI 公式サイト",
"member.explore":"コースを探す",
"member.notifications":"お知らせ",
"member.back":"戻る",
"member.today":"今日",
"member.reminder":"リマインダー",
"member.tip":"ヒント",
"member.langCurToast":"表示言語と通貨を切り替えました：",
"member.close":"閉じる",
"member.cancel":"キャンセル",
"member.confirm":"確定",
"member.save":"保存",
"member.submit":"送信",
/* ---- m15_payment_gateway ---- */
"m15.topbarTitle":"外部決済（デモ画面）",
"m15.note":"デモ画面です。実際の決済ページではありません。カード番号は形式チェックのみ行います。",
"m15.storeNameLabel":"店舗名",
"m15.storeName":"TLI中国語学院",
"m15.orderNoLabel":"注文番号",
"m15.amountLabel":"お支払い金額",
"m15.cardSectionTitle":"カード情報",
"m15.requiredNote":"必須項目",
"m15.cardNumberLabel":"カード番号",
"m15.cardNumberPlaceholder":"16桁の数字（例：4111111111111111）",
"m15.expiryLabel":"有効期限（MM/YY）",
"m15.expiryPlaceholder":"例：12/28",
"m15.cvvLabel":"セキュリティコード",
"m15.cvvPlaceholder":"3桁の数字",
"m15.installmentLabel":"分割払い",
"m15.installment0":"一括払い",
"m15.installment3":"3回払い（回数・金利は未定）",
"m15.installment6":"6回払い（回数・金利は未定）",
"m15.installment12":"12回払い（回数・金利は未定）",
"m15.btnConfirm":"支払いを確定",
"m15.btnCancel":"キャンセルして戻る",
});
/* </member-autogen> */
