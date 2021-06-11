  //Soal 1
  var daftarHewan = ['2. Komodo', '5. Buaya', '3. Cicak', '4. Ular', '1. Tokek']
  console.log(daftarHewan.sort())

  //Soal 2
  function introduce (data) {
    return console.log(
      'Nama saya ' + data.name + ' umur saya ' + data.age + ' tahun, alamat saya di ' + data.address + ', dan saya punya hobby yaitu ' + data.hobby)
  }

  var data = {
    name: 'John',
    age: 30,
    address: 'Jalan Pelesiran',
    hobby: 'Gaming'
  }
  var perkenalan = introduce(data)
  console.log(perkenalan)

  //Soal 3
  function hitung_huruf_vokal (name) {
    var hitung = 0
    for (i = 0; i < name.length; i++) {
      if (isVowel(name[i])) {
        hitung++
      }
    }
    return hitung
  }

  function isVowel (c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
  }

  var hitung_1 = hitung_huruf_vokal('Muhammad')
  var hitung_2 = hitung_huruf_vokal('Iqbal')
  console.log(hitung_1, hitung_2)

  //Soal 4
  function hitung (angka) {
    lama = -2
    angkabaru = lama + angka + (1 * angka)
    return angkabaru
  }

  console.log(hitung(0)) // -2
  console.log(hitung(1)) // 0
  console.log(hitung(2)) // 2
  console.log(hitung(3)) // 4
  console.log(hitung(5)) // 8
  console.log(hitung(6)) // 10
