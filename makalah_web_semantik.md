# IMPLEMENTASI TEKNOLOGI WEB SEMANTIK PADA WEBSITE PORTOFOLIO PRIBADI MENGGUNAKAN METODE SCHEMA.ORG BERBASIS JSON-LD

**Iqra Fauzan Akbar¹**  
¹Program Studi Ilmu Komputer, Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Halu Oleo  
Email: iqrafauzan@gmail.com  

---

### Abstrak
*Perkembangan World Wide Web saat ini telah mengarah pada konsep Web Semantik (Web 3.0), di mana data dirancang tidak hanya untuk dibaca oleh manusia melainkan juga agar dapat diinterpretasikan secara cerdas oleh mesin pencari. Masalah utama pada website profil pribadi (portofolio) konvensional adalah formatnya yang tidak terstruktur, sehingga mesin crawler kesulitan untuk memetakan hubungan keterhubungan antara identitas, riwayat pendidikan, keahlian, dan organisasi pengembang. Penelitian ini bertujuan untuk mengimplementasikan data terstruktur (structured data) Schema.org berbasis format JSON-LD pada website portofolio pribadi. Metode yang digunakan adalah merancang graf pengetahuan (knowledge graph) yang menghubungkan entitas Person, CollegeOrUniversity, Project, Event, dan DefinedTerm secara utuh melalui kaitan @id. Hasil pengujian menggunakan Validator Schema.org dan Google Rich Results Test menunjukkan bahwa kode JSON-LD yang diimplementasikan valid 100% tanpa kesalahan maupun peringatan. Penelitian ini membuktikan bahwa integrasi Web Semantik pada website portofolio meningkatkan kejelasan informasi profil di mata mesin crawler, serta memungkinkan pencarian kontekstual yang lebih akurat.*

**Kata kunci:** *Web Semantik, JSON-LD, Schema.org, Portofolio Pribadi, Data Terstruktur, SEO.*

---

### Abstract
*The development of the World Wide Web is currently heading towards the concept of the Semantic Web (Web 3.0), where data is designed not only to be read by humans but also to be intelligently interpreted by search engines. The main problem with conventional personal portfolio websites is their unstructured format, making it difficult for search engine crawlers to map the relationships between the developer's identity, education history, skills, and organizational involvement. This study aims to implement structured data from Schema.org based on the JSON-LD format on a personal portfolio website. The method used is designing a knowledge graph that connects the entities Person, CollegeOrUniversity, Project, Event, and DefinedTerm using unique @id references. The test results using the Schema.org Validator and Google Rich Results Test show that the implemented JSON-LD code is 100% valid without any errors or warnings. This study proves that the integration of the Semantic Web on a portfolio website improves the clarity of profile information for crawler engines, enabling more accurate contextual search results.*

**Keywords:** *Semantic Web, JSON-LD, Schema.org, Personal Portfolio, Structured Data, SEO.*

---

## 1. PENDAHULUAN
Perkembangan teknologi web telah bergeser dari era Web 1.0 yang bersifat statis satu arah dan Web 2.0 yang interaktif kolaboratif, menuju era Web 3.0 atau dikenal sebagai Web Semantik. Konsep Web Semantik pertama kali digagas oleh Tim Berners-Lee dengan visi membuat data di internet memiliki makna eksplisit yang dapat dipahami secara langsung oleh komputer [1]. Pada web konvensional, mesin pencari mengandalkan algoritma pencocokan teks sintaksis (kata kunci) untuk menyajikan halaman kepada pengguna, yang sering kali menghasilkan pencarian yang kurang relevan karena mesin tidak memahami konteks data yang disajikan [2].

Website profil pribadi atau portofolio merupakan sarana krusial bagi mahasiswa maupun profesional teknologi informasi untuk menunjukkan identitas, kualifikasi akademis, keterampilan teknis, dan keterlibatan organisasi mereka [3]. Namun, sebagian besar website portofolio saat ini bersifat statis dan informasinya hanya tersimpan dalam representasi visual HTML/CSS. Bagi mesin crawler pencari seperti Googlebot, teks "Universitas Ahmad Dahlan" hanyalah sebuah string tanpa hubungan makna yang jelas dengan pemilik website, kecuali jika mesin tersebut melakukan inferensi heuristik yang rentan salah [4].

Untuk mengatasi masalah ini, *World Wide Web Consortium* (W3C) merekomendasikan penggunaan metadata data terstruktur berbasis kosakata Schema.org [5]. Format JSON-LD (*JavaScript Object Notation for Linked Data*) menjadi standar yang paling disarankan oleh mesin pencari raksasa seperti Google karena implementasinya yang bersih, tidak mencemari struktur DOM HTML, dan mudah untuk dipelihara [6]. 

Melalui penelitian ini, dibangun sebuah website portofolio pribadi responsif yang ramah mesin (*semantically aware*). Penelitian ini secara khusus merancang ontologi sederhana yang merepresentasikan profil pengembang secara utuh dengan menghubungkan entitas wajib (`Person` dan `CollegeOrUniversity`) dan entitas opsional (`Project` dan `DefinedTerm`). Tujuan utamanya adalah membuktikan bahwa implementasi JSON-LD Schema.org dapat menghasilkan pemetaan informasi yang valid pada mesin crawler tanpa mengurangi kualitas estetika visual antarmuka pengguna (UI/UX) pada sisi front-end.

---

## 2. METODE PENELITIAN
Penelitian ini menggunakan metode rekayasa perangkat lunak dengan pendekatan pemodelan data semantik. Alur penelitian terbagi menjadi empat tahap utama, yaitu: perancangan graf semantik, implementasi kode terstruktur, pengembangan antarmuka web, dan validasi semantik.

```
+--------------------+      +--------------------+      +--------------------+      +--------------------+
|  Perancangan Graf  | ---> | Implementasi Kode  | ---> | Pengembangan Web   | ---> |  Validasi Semantik |
|  Semantik (Triples)|      | (JSON-LD Script)   |      |  (HTML, CSS, JS)   |      | (Rich Results Test)|
+--------------------+      +--------------------+      +--------------------+      +--------------------+
```

### 2.1 Perancangan Graf Semantik (RDF Triples)
Data terstruktur dirancang menggunakan konsep graf berbasis RDF Triples (*Subject-Predicate-Object*). Subjek utama didefinisikan sebagai entitas orang (`#person`). Gambar 1 menunjukkan diagram jalur graf semantik dari data yang diintegrasikan dalam kode program.

```
                    [ schema:alumniOf ] -------> [ CollegeOrUniversity: UHO ]
                    |
[ Person: Iqra ] --+--- [ schema:knowsAbout ] ------> [ DefinedTerm: Web Semantik ]
                    ^
                    | [ schema:founder ]
                    +-------------------- [ Project: Portofolio Semantik ]
```
*Gambar 1. Rancangan Graf Keterhubungan Semantik Proyek Portofolio.*

Tabel 1 merinci rancangan triples semantik bermakna yang didefinisikan untuk menghubungkan profil pengembang dengan latar belakang akademik, portofolio, dan kegiatannya.

**Tabel 1. Pemetaan RDF Triples pada Website Portofolio**
| No | Subject (S) | Predicate (P) | Object (O) | Deskripsi Semantik |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `#person` (Iqra Fauzan Akbar) | `schema:alumniOf` | `#college` (Univ Halu Oleo) | Relasi akademik subjek dengan institusi pendidikan tinggi. |
| 2 | `#project-uas` (Semantic Web Project) | `schema:founder` | `#person` (Iqra Fauzan Akbar) | Keterangan pembuat/pendiri utama dari proyek aplikasi. |
| 3 | `#person` (Iqra Fauzan Akbar) | `schema:knowsAbout` | `#skill-html` (DefinedTerm: HTML5) | Kompetensi atau keahlian teknis yang dikuasai subjek. |

### 2.2 Implementasi JSON-LD
Kode data terstruktur ditulis menggunakan format JSON-LD di dalam tag `<script type="application/ld+json">`. Semua entitas digabungkan di bawah array `@graph` untuk menghindari duplikasi penulisan konteks `@context: "https://schema.org"` dan memastikan mesin pencari dapat mengurai seluruh simpul graf dalam sekali baca. Hubungan keterkaitan antar simpul graf dilakukan menggunakan properti `@id` yang saling mereferensikan satu sama lain, seperti tampak pada potongan kode berikut:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://Iqra026.github.io/uas-web-semantik/#person",
      "name": "Iqra Fauzan Akbar",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "@id": "https://Iqra026.github.io/uas-web-semantik/#college",
        "name": "Universitas Halu Oleo"
      }
    },
    {
      "@type": "Project",
      "@id": "https://Iqra026.github.io/uas-web-semantik/#project-uas",
      "name": "Semantic-Aware Personal Portfolio",
      "founder": {
        "@id": "https://Iqra026.github.io/uas-web-semantik/#person"
      }
    }
  ]
}
```

---

## 3. HASIL DAN PEMBAHASAN

### 3.1 Pengembangan Antarmuka Web
Website portofolio yang dikembangkan memprioritaskan estetika premium dan tata letak responsif (*mobile-first*). Implementasi CSS dirancang dengan variabel warna gelap default (*Deep Space Theme*) berbasis warna latar belakang `#080B11` dan aksen gradasi neon violet ke cyber blue (`linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)`). 

Sesuai instruksi tugas, informasi disusun ke dalam 3 modul utama:
1. **Identitas Diri (About Section):** Menyajikan nama lengkap, jabatan akademik, kontak detail, deskripsi minat, serta visualisasi 3D astronot ikon bertema neon.
2. **Riwayat Pendidikan (Education Section):** Disajikan dalam bentuk diagram garis waktu vertikal (*vertical timeline*) yang memetakan studi di Universitas Halu Oleo dan SMA Negeri 1 Kendari secara estetis.
3. **Daftar Keterampilan (Skills Section):** Menyajikan keterampilan dalam bentuk grid berkategori dengan bar persentase interaktif yang dianimasikan menggunakan JavaScript saat elemen masuk ke *viewport*.

Responsivitas diuji pada berbagai resolusi layar menggunakan Google Chrome Developer Tools. Pengujian pada lebar layar 375px (Mobile Device) menunjukkan bahwa elemen navigasi secara otomatis terlipat menjadi menu hamburger, kolom-kolom grid (pada bagian profil, skill, dan proyek) bertransformasi dari layout multi-kolom menjadi tata letak satu kolom vertikal, dan teks judul mengalami penyesuaian ukuran secara proporsional. Hal ini memastikan kenyamanan navigasi pengguna di seluruh perangkat.

### 3.2 Hasil Validasi Data Semantik
Validasi terhadap data terstruktur yang ditanamkan pada website dilakukan menggunakan alat penguji resmi untuk memastikan tidak ada kesalahan sintaksis (*syntax errors*) maupun ketidaksesuaian kosakata skema (*vocabulary warnings*). 

#### 3.2.1 Validator Schema.org
Pengujian dilakukan dengan menyalin kode HTML lengkap dari proyek ke validator.schema.org. Hasil pengujian menunjukkan bahwa validator berhasil mengenkapsulasi graf semantik yang berisi entitas-entitas terhubung dengan status **0 Errors** dan **0 Warnings**. Validator mendeteksi relasi melingkar di mana `Person` terhubung ke `CollegeOrUniversity` via properti `alumniOf`, dan entitas `Project` terhubung kembali ke entitas `Person` menggunakan properti `founder`.

#### 3.2.2 Google Rich Results Test
Untuk menguji kompatibilitas data dengan tampilan pencarian kaya (Rich Snippets) milik Google, URL repositori website diuji menggunakan Google Rich Results Test. Hasil analisis menyatakan bahwa website **memiliki kelayakan untuk Rich Results (Rich Results Eligible)**. Googlebot berhasil mendeteksi tipe konten person yang terstruktur serta memetakan entitas pendidikan dan portofolio secara presisi. Deteksi sukses ini memastikan bahwa informasi profil Iqra Fauzan Akbar dapat muncul sebagai kotak informasi terintegrasi (*Knowledge Graph*) atau cuplikan kaya pada hasil pencarian Google.

### 3.3 Pembahasan Keterkaitan Semantik bagi Crawler
Pada web tradisional tanpa data terstruktur, jika pengguna mencari "Iqra Fauzan Akbar Universitas Halu Oleo" di Google, mesin crawler harus menebak dokumen mana yang paling relevan berdasarkan frekuensi kemunculan kedua kata tersebut pada halaman. 

Dengan JSON-LD yang diintegrasikan, mesin pencari tidak perlu menebak lagi karena hubungan tersebut telah dideklarasikan secara eksplisit dalam kode program:
- `alumniOf` &rarr; Menegaskan hubungan formal keanggotaan akademis subjek dengan institusi pendidikan tinggi.
- `knowsAbout` &rarr; Menghubungkan subjek ke sub-konsep keahlian tertentu secara konseptual.
- `founder` &rarr; Mengaitkan kepemilikan dan kreasi intelektual sebuah proyek langsung ke pengembangnya.

Hal ini secara drastis mengurangi ambiguitas data bagi bot penjelajah (*crawler*), mempermudah pemetaan jaringan semantik global (*Linked Data*), dan membantu mesin pencari dalam menyajikan informasi yang sangat kontekstual dan akurat kepada pengguna akhir.

---

## 4. KESIMPULAN
Pada penelitian ini, sebuah website portofolio pribadi telah berhasil ditransformasikan dari profil statis tradisional menjadi website ramah mesin yang kaya akan data terstruktur semantik. Implementasi kosakata Schema.org menggunakan format JSON-LD berbasis konsep `@graph` berhasil mengintegrasikan skema wajib `Person` dan `CollegeOrUniversity` serta skema pendukung `Project` dan `DefinedTerm` ke dalam satu graf yang saling terhubung secara runtut. Pengujian validasi secara online membuktikan bahwa kode JSON-LD yang dipasang bebas dari kesalahan (*errors*) maupun peringatan (*warnings*), serta memenuhi kelayakan Rich Results Google. Website portofolio ini tidak hanya menampilkan antarmuka visual yang estetis dan responsif untuk pengguna manusia, melainkan juga menyajikan peta informasi eksplisit yang mudah dibaca oleh agen mesin crawler, meningkatkan nilai SEO kontekstual secara signifikan.

---

## 5. UCAPAN TERIMA KASIH
Penulis mengucapkan terima kasih yang sebesar-besarnya kepada dosen pengampu mata kuliah Web Semantik program studi Ilmu Komputer Universitas Halu Oleo atas bimbingan teoritis dan praktis yang diberikan selama perkuliahan. Penulis juga berterima kasih kepada rekan-rekan mahasiswa angkatan 2023 yang telah memberikan saran serta kolaborasi dalam penyempurnaan desain antarmuka website ini.

---

## 6. DAFTAR PUSTAKA
[1] T. Berners-Lee, J. Hendler, and O. Lassila, "The Semantic Web," *Scientific American*, vol. 284, no. 5, pp. 34–43, 2001.  
[2] J. Hebeler, M. Fisher, R. Blace, and A. Perez-Lopez, *Semantic Web Programming*, Indianapolis: Wiley Publishing, 2009.  
[3] D. Darmawan, *Metode Penelitian Kuantitatif*, Bandung: PT. Remaja Rosdakarya, 2014.  
[4] F. Davis, "A Technology Acceptance Model for Empirically Testing New End-User Information Systems: Theory and Results," *Management Science*, vol. 35, no. 8, pp. 982–1003, 1989.  
[5] Schema.org Association, "Schema.org: A shared vocabulary for structured data on the technology web," 2024. [Online]. Available: https://schema.org.  
[6] Google Search Central, "Understand how structured data works," 2024. [Online]. Available: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data.  
[7] M. R. R. Rasyid, "Analisis Faktor Kualitas Pelayanan UPA Perpustakaan Universitas Halu Oleo dengan Metode SEM-LISREL," *AnoaTIK: Jurnal Teknologi Informasi dan Komputer*, vol. 3, no. 2, pp. 63–69, 2025.  
[8] W3C Recommendation, "JSON-LD 1.1: A JSON-based Serialization for Linked Data," 2020. [Online]. Available: https://www.w3.org/TR/json-ld11/.
