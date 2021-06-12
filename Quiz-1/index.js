  var tanggal = 29
  var bulan = 2
  var tahun = 2020
  console.log(next_date(tanggal, bulan, tahun)) // 1 Maret 2020

  function next_date (tanggal, bulan, tahun) {
    var day = new Date(`${tahun}-${bulan}-${tanggal}`)
    var nextDay = new Date(day)
    nextDay.setDate(day.getDate() + 1)
    return nextDay.toLocaleDateString('id-ID', {year: 'numeric', month: 'long', day: 'numeric'})
  }

  var kalimat_1 = ' Halo nama saya Muhammad Dyas Yaskur '
  var kalimat_2 = 'Saya Programmer Cupu'

  console.log(jumlah_kata(kalimat_1)) // 6
  console.log(jumlah_kata(kalimat_2)) // 3
  function jumlah_kata(kalimat)
  {
    return kalimat.trim().split(' ').length
  }
