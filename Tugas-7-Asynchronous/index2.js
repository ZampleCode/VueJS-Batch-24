var readBooksPromise = require('./promise.js')
let waktu = 10000
var books = [
  {name: 'LOTR', timeSpent: 3000},
  {name: 'Fidas', timeSpent: 2000},
  {name: 'Kalkulus', timeSpent: 4000}
]

 // Lanjutkan code untuk menjalankan function readBooksPromise
// soal 2
async function read () {
  let sisa = waktu
  for (const book of books) {
    sisa = await readBooksPromise(sisa, book)
  }
}

read()
