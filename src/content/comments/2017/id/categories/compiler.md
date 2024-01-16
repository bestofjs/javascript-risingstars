---
id: compiler  
language: id
---

Disini kita membahas bahasa yang dikompilasi menjadi kode JavaScript biasa.

Pembaca mungkin membutuhkan sebuah compiler untuk building workflow kita karena dua alasan berikut:

* Pembaca ingin mendapatkan semua fitur dari bahasa JavaScript paling baru (ES7) sembari membuat kode yang ditulis dapat berjalan dari mayoritas peramban web yang ada. Fitur ini yang membuat {babel} begitu sukses dimana banyak proyek bergantung padanya.
* Pembaca ingin menambah fitur baru ke bahasa tersebut misalnya sebuah "type checking".

Satu pertanyaan masa kini yang membagi developer menjadi dua kubu: menggunakan type atau tidak menggunakan type?

JavaScript memiliki tipe yang dinamis (dynamic type) tapi bukan tipe statik (static type). Banyak developer merasa mereka membutuhkan sebuah type di kodenya, terutama di code base yang besar untuk membuat code base tersebut menjadi lebih lebih kokoh dan mudah dibaca/dipahami. 

Sehingga, jika merasa membutuhkan type, ada dua solusi utama yaitu: {typescript}, dari Microsoft dan {flow}, dari Facebook (dan dipakai di proyek mereka yang lain: {react}, {react-native}, {jest}...)

Baca darikel ini dari [James Kyle](https://github.com/thejameskyle) untuk memahami perbedaannya: [A Comparison Between Adopting Flow or TypeScript](https://medium.com/the-thinkmill/adopting-flow-typescript-3549a3a36d51)

