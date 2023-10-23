// mencari teks dalam string
let nama = "aryazid si anak ganteng dari gua hira"
let cariTeks = nama.indexOf('anak')

// mengambil potongan teks dalam string
let asal = "Bogor, Indonesia"
let ambilTeks = asal.slice(0, 5)

// mengganti teks dalam string
let matkul = "Pemrograman Javascript"
let ubahTeks = matkul.replace("Javascript", "PHP")

// mengubah teks string menjadi uppercase dan lowercase
let kata1 = "saya anak baik"
let kata2 = "SAYA ANAK JAHAT"
let upperCase = kata1.toUpperCase()
let lowerCase = kata2.toLowerCase()

// menambahkan teks dalam string
let mahasantri = "Erik"
let tambahTeks = mahasantri.concat(" ", "Pratama")

// menampilkan output
alert(tambahTeks)
