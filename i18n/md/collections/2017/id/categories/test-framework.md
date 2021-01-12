---
id: test-framework  
language: id
---

Seperti yang kami prediksi [tahun lalu](/2016/en#test-framework) (pertama kalinya kami memprediksi sesuatu dengan tepat!), {jest} menjadi testing framework paling trendi tauhn 2017.

Ia pertama kali dibuat oleh Facebook untuk menjalankan test komponen React, namun evolusinya ternyata terjadi dengan sangat cepat di beberapa bulan terakhir (sudah ada 22 major version yang dirilis) dan ia juga dapat dipakai untuk menulis test baik kode front-end maupun back-end.

Jest bersinar karena beberapa hal ini:

* Tanpa konfigurasi, pengaturan bawaan sudah mencukupi
* Memberikan pengalaman yang menyenangkan untuk developer (intelligent watch mode, error reporting yang sangat baik...)
* Sintaks mirip dengan {mocha}, banyak developer sudah familiar dengan keyword `describe` dan `it`
* Tidak memerlukan pustaka tambahan untuk melakuakn assertions, ia termasuk kategori "battery included".
* Memiliki fitur unik bernama mode "snapshot" yang mencatat respon untuk test di masa mendatang secara otomatis. 

{ava}, nomor satu tahun lalu, masih mendapat perhatian. 

Ia dibuat oleh [Sindre Sorhus](https://github.com/sindresorhus) yang menggunakannya diseluruh proyek yang ia buat dan itu artinya pustaka ini dipakai di banyak sekali proyek besar!

Ava menekankan kecepatan saat melakuakn test secara parallel, ia juga memiliki footprint yang lebih kecil dan sangat dekat dengan standar melakukan testing dengan sintaks yang mirip dengan {tape}.
