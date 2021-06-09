//Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

pertama = pertama.replace("sangat ", "")
pertama = pertama.replace(" hari ini", "")

kedua = kedua.replace(" itu keren", "")
kedua = kedua.replace("javascript", "JAVASCRIPT")
//males pake materi :P
var jawabanSoal1 = pertama + ' ' + kedua

//Soal 2

var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var n1 = parseInt(kataPertama);
var n2 = parseInt(kataKedua);
var n3 = parseInt(kataKetiga);
var n4 = parseInt(kataKeempat);

var jawabanSoal2 = n1 + n2 * n3 + n4

//Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(14, 4); // do your own! 
var kataKetiga = kalimat.substring(18, 15); // do your own! 
var kataKeempat = kalimat.substr(19, 5); // do your own! 
var kataKelima = kalimat.slice(-6); // do your own! 
 
//capek deh harus ngitung kalo gini,
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
