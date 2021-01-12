---
id: css-in-js  
language: id
---

Belum ada kesepakatan umum bagaimana cara terbaik untuk memberikan style komponen React. 

Pembaca dapat memakai komponen yang siap pakai seperti {material-ui} atau {ant-design} jika membutuhkan standar yang sudah bagus tanpa perlu melakukan kostumisasi tambahan.

Atau, jika membutuhkan fleksibilitas, pembaca dapat melakukan "cara lama", dengan menggunakan global CSS dari sebuah framework CSS seperti {bootstrap} atau {bulma}, dan menambahkan `className` yang sesuai ke komponen yang diinginkan. Namun dengan begitu komponen kita menjadi tidak self-contained lagi (berdiri sendiri), karena style-nya diatur ditempat lain.

Untuk mengatasi permasalahan ini, kategori "CSS in JavaScript" akhirnya dimunculkan.

Konsepnya sederhana: dengan React kita sudah mengatur logic dan template-nya dengan JavaScript. Kenapa tidak sekalian mengatur style langsung di dalam komponen dengan JavaScript untuk styling-nya juga?

{styled-components} sejauh ini merupakan proyek paling trendi di kategori ini. Ia memungkinkan developer untuk menambah sintaks CSS iasa didalam komponen React menggunakan fitur baru di bahasa JavaScript: tagged template literals.

{css-modules}, posisi kedua di kategori ini mengadopsi pendekatan hibrida. Ia memungkinkan developer untuk menulis style dalam bahasa pilihan mereka (CSS biasa, Sass, {less}, {stylus}), menggunakan file-file yang ada didekat komponen yang diinginkan lalu diimpor ke komponen tersebut. 

[Mark Dalgleish](http://markdalgleish.com/), salah satu penulis {css-modules}, menulis salah satu artikel paling menarik tentang pendekatan CSS-in-JavaScript: [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660). Artikel ini sangat direkomendasikan untuk orang-orang yang cukup skeptis terhadap teknik yang baru ini.

