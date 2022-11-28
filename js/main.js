let son = +prompt("Yeglgan Balingiz Kirting");

if (189 < son) {
  alert("yolg'on gapirma");
} else if (son < 57) {
  alert("Siz Oqishga kira olmadingiz");
} else if (son < 100) {
  alert(
    `Siz Super kantraktga kirdingiz  ${
      (100 - son) * 5
    } Milyon som tolab oqshingiz mumkun `
  );
} else if (100 <= son) {
  alert("Siz Oqishga kirdingiz");
} else if (typeof son !== Number) {
  alert("Malumotni Togti Krting");
}
// JS masala:
// propmtda mendan yig'ga n balimni so'rasin men son kiritaman
// agar 100 bilan 189 orasidagi son kirgazsam o'qishga kirdingiz
// agar 57 bn 100 orasidagi son kirgazsam 100ballga qancha yetmagan bo'lsa har bir ball uchun 5mln dan super kantaktni narxini chiqarsin masalan:
// 80 kiritsam 100 - 80  => 20 * 5 = 100mln  super kantract narxi
// 57dan kichik son kirgazsam o'qishga kirolmadingiz
// 189 dan katta kirgazsam yolg'on gapirma degan yozuv consolega chiqsin !!!
