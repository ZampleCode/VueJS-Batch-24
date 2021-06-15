// di index.js
var readBooks = require('./callback.js')
let waktu = 10000
var books = [
  {name: 'LOTR', timeSpent: 3000},
  {name: 'Fidas', timeSpent: 2000},
  {name: 'Kalkulus', timeSpent: 4000},
  {name: 'komik', timeSpent: 1000}
]
// Tulis code untuk memanggil function readBooks di sini
// Soal 1
let prevTime = waktu
books.map((item, i) => {
  const prevBook = books[i - 1]
  if (prevBook) {
    prevTime = prevTime - prevBook.timeSpent
    item.timeStart = prevTime
  } else {
    item.timeStart = waktu
  }
  return item
})
const getBookz = (time) => {
  if (time) {
    readBooks(time, books.filter(x => x.timeStart === time)[0], getBookz)
  } else if (time === 0) {
    console.log('waktu saya habis')
  } else {
    console.log('waktu tidak didefinisikan')
  }
}
getBookz(waktu)

