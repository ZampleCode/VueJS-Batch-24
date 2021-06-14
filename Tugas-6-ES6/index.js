//Soal 1
const hitung_luas = (p, l) => {
 let luas = 1
 let keliling = 1
 luas = p*l
 keliling = 2 * (p + l)   
 console.log('luas:', luas)
 console.log('keliling:', keliling)
}
const panjang = 4;
const lebar = 6;
hitung_luas(panjang, lebar)

//Soal 2
const newFunction = (firstName, lastName) =>{
    firstName: firstName,
    lastName: lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`)
    }
  }
  newFunction("William", "Imoh").fullName()

//Soal 3
  const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  }
  const {firstName, lastName, address, hobby} = newObject
  console.log(firstName, lastName, address, hobby)

//Soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combinedArray = [...west,...east]
//Driver Code
console.log(combinedArray)

//Soal 5
const planet = "earth" 
const view = "glass" 
const theString = `Lorem ${view} dolor sit amet consectetur adipiscing elit ${planet}`
console.log(theString)

