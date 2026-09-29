/* TLI Hub 原型：直營學員會員區擴充英文詞典
 * 補充 assets/_i18n_dict.js 沒有涵蓋的 key，給「會員區」直營學員頁面使用（m01～m17）。
 * 載入順序：assets/_i18n_dict.js 之後、assets/_i18n.js 之前。
 * key 前綴：member.*（側欄、底部導覽、頁首等跨頁共用）、mNN.*（各頁專用，NN 為頁碼）。
 * 日文、德文譯文分別在 assets/_i18n_dict_ja.js、assets/_i18n_dict_de.js，key 相同。
 * 自動產生區段由整併腳本寫入；區段外可手動補充。
 */
/* <member-autogen> */
Object.assign(TLI_I18N_DICT.en,{
/* ---- _common ---- */
"member.nav.aria":"Main navigation",
"member.nav.home":"Home",
"member.nav.booking":"Book & Enroll",
"member.nav.schedule":"Schedule",
"member.nav.learning":"Learning",
"member.nav.myPlan":"My Plans",
"member.nav.me":"Me",
"member.nav.backToSite":"Back to Website",
"member.role.student":"Student",
"member.logoAria":"TLI website",
"member.explore":"Explore Courses",
"member.notifications":"Notifications",
"member.back":"Back",
"member.today":"Today",
"member.reminder":"Reminder",
"member.tip":"Tip",
"member.langCurToast":"Display language and currency switched to",
"member.close":"Close",
"member.cancel":"Cancel",
"member.confirm":"Confirm",
"member.save":"Save",
"member.submit":"Submit",
/* ---- m15_payment_gateway ---- */
"m15.topbarTitle":"Third-Party Payment (Demo)",
"m15.note":"Demo screen, not an actual payment gateway. Card numbers are checked for format only.",
"m15.storeNameLabel":"Merchant",
"m15.storeName":"TLI Language Institute",
"m15.orderNoLabel":"Order Number",
"m15.amountLabel":"Amount Due",
"m15.cardSectionTitle":"Card Information",
"m15.requiredNote":"Required field",
"m15.cardNumberLabel":"Card Number",
"m15.cardNumberPlaceholder":"16 digits, e.g. 4111111111111111",
"m15.expiryLabel":"Expiry (MM/YY)",
"m15.expiryPlaceholder":"e.g. 12/28",
"m15.cvvLabel":"Security Code",
"m15.cvvPlaceholder":"3 digits",
"m15.installmentLabel":"Installment Plan",
"m15.installment0":"No installments",
"m15.installment3":"3 installments (terms TBD)",
"m15.installment6":"6 installments (terms TBD)",
"m15.installment12":"12 installments (terms TBD)",
"m15.btnConfirm":"Confirm Payment",
"m15.btnCancel":"Cancel and Return",
});
/* </member-autogen> */
