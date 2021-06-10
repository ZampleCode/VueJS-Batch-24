  var nilai = 76
  if (nilai >= 85) {
    console.log('indeksnya A')
  } else if (nilai >= 75 && nilai < 85) {
    console.log('indeksnya B')
  } else if (nilai >= 65 && nilai < 75) {
    console.log('indeksnya C')
  } else if (nilai >= 55 && nilai < 65) {
    console.log('indeksnya D')
  } else if (nilai < 55) {
    console.log('indeksnya E')
  }
  //Soal 2
  var tanggal = 24
  var bulan = 6
  var tahun = 1993
  switch (bulan) {
    case 1: {
      console.log(tanggal + ' Januari ' + tahun)
      break
    }
    case 2: {
      console.log(tanggal + ' Februari ' + tahun)
      break
    }
    case 3: {
      console.log(tanggal + ' Maret ' + tahun)
      break
    }
    case 4: {
      console.log(tanggal + ' April ' + tahun)
      break
    }
    case 5: {
      console.log(tanggal + ' Mei ' + tahun)
      break
    }
    case 6: {
      console.log(tanggal + ' Juni ' + tahun)
      break
    }
    case 7: {
      console.log(tanggal + ' Juli' + tahun)
      break
    }
    case 8: {
      console.log(tanggal + ' Agustus ' + tahun)
      break
    }
    case 9: {
      console.log(tanggal + ' September ' + tahun)
      break
    }
    case 10: {
      console.log(tanggal + ' Oktober ' + tahun)
      break
    }
    case 11: {
      console.log(tanggal + ' November ' + tahun)
      break
    }
    case 12: {
      console.log(tanggal + ' Desember ' + tahun)
      break
    }
    default: { console.log('Tidak terjadi apa-apa') }
  }
  //Soal 3
  var rows = 5
  var output = ''
  var i = 0
  while (output.length < rows) {
    output = ''
    while (output.length < i) {
      output += '#'
    }
    console.log(output)
    i++
  }
  //Soal 4
  var m = 18
  var jumlah = 1
  var pemisah = ''
  for (var x = 1; x <= m; x++) {
    var mod = (x-1) % 3
    var text = ''
    switch (mod) {
      case 0:
        text = ' - I Love VueJS'
        break
      case 1:
        text = ' - I Love Programming'
        break
      case 2:
        text = ' - I Love JavaScript'
        pemisah += '==='
        break
      default:
        text = ' - I hate this task'

      // code block
    }
    console.log(x, text, mod)
    if (mod == 2)
      console.log(pemisah)
  }
