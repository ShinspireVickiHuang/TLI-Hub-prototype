/* TLI Hub 原型：德文介面詞典（TLI_I18N_DICT.de）
 * 只有宣告 window.TLI_I18N_PAGE_LANGS 含 'de' 的頁面會用到；key 與英文詞典（TLI_I18N_DICT.en）共用。
 * 查不到的 key 由 assets/_i18n.js 退回英文，再退回原文。
 * 載入順序：assets/_i18n_dict.js 之後、assets/_i18n.js 之前。
 * 用語採德語系統介面慣用說法（Buchen, Abbrechen, Speichern usw.），稱呼用 Sie。
 */
TLI_I18N_DICT.de = TLI_I18N_DICT.de || {};
/* <member-autogen> */
Object.assign(TLI_I18N_DICT.de,{
/* ---- _common ---- */
"member.nav.aria":"Hauptnavigation",
"member.nav.home":"Startseite",
"member.nav.booking":"Buchen",
"member.nav.schedule":"Stundenplan",
"member.nav.learning":"Lernen",
"member.nav.myPlan":"Meine Pakete",
"member.nav.me":"Profil",
"member.nav.backToSite":"Zur Website",
"member.role.student":"Kursteilnehmer",
"member.logoAria":"TLI-Website",
"member.explore":"Kurse entdecken",
"member.notifications":"Benachrichtigungen",
"member.back":"Zurück",
"member.today":"Heute",
"member.reminder":"Erinnerung",
"member.tip":"Hinweis",
"member.langCurToast":"Sprache und Währung umgestellt auf",
"member.close":"Schließen",
"member.cancel":"Abbrechen",
"member.confirm":"Bestätigen",
"member.save":"Speichern",
"member.submit":"Absenden",
/* ---- m15_payment_gateway ---- */
"m15.topbarTitle":"Zahlung über Drittanbieter (Demo)",
"m15.note":"Demo-Ansicht, keine echte Zahlungsseite. Die Kartennummer wird nur auf das Format geprüft.",
"m15.storeNameLabel":"Händler",
"m15.storeName":"TLI Sprachinstitut",
"m15.orderNoLabel":"Bestellnummer",
"m15.amountLabel":"Zu zahlender Betrag",
"m15.cardSectionTitle":"Kartendaten",
"m15.requiredNote":"Pflichtfeld",
"m15.cardNumberLabel":"Kartennummer",
"m15.cardNumberPlaceholder":"16-stellig, z. B. 4111111111111111",
"m15.expiryLabel":"Gültig bis (MM/JJ)",
"m15.expiryPlaceholder":"z. B. 12/28",
"m15.cvvLabel":"Sicherheitscode",
"m15.cvvPlaceholder":"3-stellig",
"m15.installmentLabel":"Ratenzahlung",
"m15.installment0":"Keine Ratenzahlung",
"m15.installment3":"3 Raten (Konditionen offen)",
"m15.installment6":"6 Raten (Konditionen offen)",
"m15.installment12":"12 Raten (Konditionen offen)",
"m15.btnConfirm":"Zahlung bestätigen",
"m15.btnCancel":"Abbrechen und zurück",
});
/* </member-autogen> */
