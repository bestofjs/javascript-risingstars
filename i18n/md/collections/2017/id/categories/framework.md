---
id: framework  
language: id
---

Kategori "front-end framework" sudah menjadi medan perang dalam beberapa waktu terakhir, namun akhirnya medan perang ini lambat laun mulai mendingin dimana kita dapat melihat dengan jelas 3 pemain paling dominan.

### The Big-3: Vue, React dan Angular

Bukan sebuah kejutan bahwa tiga framework UI paling populer adalah {vuejs}, {react} dan {angular}

Meski secara umum ketiganya bisa dipanggil sebagai _frameworks_, namun akan lebih akurat jika hanya {angular} saja yang mendapat sebutan itu, dan kita harus menyebut {vuejs} dan {react} sebagai _libraries_ alias pustaka.

Sebelumnya kita sudah membahas kesuksesan {vuejs} dan pendekatan terintegrasinya.

Sementara itu, dunia {react} masih terpecah belah dan developer harus membuat menentukan sendiri hal-hal yang akan ada di view layer:

* Routing antar halaman.
* Bagaimana mengambil data.
* Bagaimana menautkan form ke data.
* Bagaimana menyimpan state aplikasi.

Sebaliknya, ekosistem {angular} sudah lebih terkontrol dan lebih stabil. Selalu ada _Angular Way_ (atau cara yang Angular banget) untuk melakukan sesuatu.

Standar yang dimilikinya merupakan salah satu alasan mengapa {angular} lebih memiliki imej sebuah "corporate" (atau "enterprise" gitu lah ya). Imej ini sudah diperlihatkan dengan penggunaan static type oleh {typescript} dimana sintaksnya mirip dengan bahasa C# atau Java yang biasa dipakai backend developer.

## Less is more

Dibelakang Big-3, sangat menarik untuk melihat bahwa {preact} menduduki posisi 4.
{preact} adalah alternatif yang lebih kecil dari {react}: dengan API yang sama tapi ukuran kurang dari 3KB.

Penantang lain di kategori ini sebagin besar mengambil kelebihan dengan memperkecil ukuran untuk mendapatkan performa yang lebih baik dibandingkan tiga framework di atas. 

Contoh terbaik untuk moto di atas adalah {hyperapp}, sebuah proyek yang masih berumur minggu. Ia merupakan pendekatan campuran antara sintaks JSX dari {react} **dan** sebuah sistem manajemen state yang terinspirasi oleh {redux} dalam ukurang kurang dari 1KB!

