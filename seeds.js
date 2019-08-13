var mongoose = require('mongoose');
var Article = require('./models/article');
var Comment = require('./models/comment');
var Event = require('./models/event');
var Berita = require('./models/berita');

var dataArtikel = [
    {
        name: 'Manfaat buah-buahan',
        image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Manfaat buah untuk kesehatan tubuh sangat beragam. Selain untuk memelihara kesehatan, kandungan nutrisi pada buah juga bermanfaat untuk melindungi tubuh dari penyakit bahkan dapat membantu proses penyembuhan penyakit.\nUmumnya, semua buah mengandung nutrisi yang diperlukan tubuh. Nutrisi yang terkandung di dalamnya membuat manfaat buah untuk kesehatan tidak diragukan lagi. Kandungan nutrisinya menjaga tubuh tetap sehat, juga melindungi tubuh dari kerusakan akibat zat kimia yang masuk dan menyebabkan gangguan.\nUmumnya, semua buah mengandung nutrisi yang diperlukan tubuh. Nutrisi yang terkandung di dalamnya membuat manfaat buah untuk kesehatan tidak diragukan lagi. Kandungan nutrisinya menjaga tubuh tetap sehat, juga melindungi tubuh dari kerusakan akibat zat kimia yang masuk dan menyebabkan gangguan.\nBuah-buahan diketahui memiliki kadar lemak dan gula yang rendah, buah juga sumber serat terbaik yang bermanfaat bagi kesehatan pencernaan. Mengonsumsi buah-buahan setiap hari merupakan cara diet yang baik, selain juga dapat menunjang gaya hidup sehat.\nAgar mendapatkan manfaat buah untuk kesehatan secara maksimal, konsumsilah buah-buahan dalam porsi yang benar. Badan Kesehatan Dunia atau World Health Organization (WHO) merekomendasikan 5 porsi atau sekitar 400 gram buah dan sayuran setiap hari. Dengan mengonsumsi lima porsi buah dan sayuran, bisa menurunkan risiko penyakit jantung, stroke, dan juga kanker.',
        author: {
            id: "588c2e092403d111454fff76",
            username: "Jack"
        }
    },
    {
        name: 'Idul Adha, Hati - Hati mengonsumsi daging kambing',
        image: 'https://www.independent.ie/business/farming/article36751909.ece/ALTERNATES/h342/Depositphotos_70941037_m-20151.jpg',
        description: 'Hari raya Iduladha adalah salah satu hari besar umat islam yang diperingati dengan mengurbankan hewan sapi atau kambing. Iduladha sering diidentikan dengan mengonsumsi daging-daging tersebut. Daging yang disembelih diolah menjadi berbagai macam makanan, seperti sate kambing, tongseng, sop kambing,  gulai, dan makanan lainnya.\nMeski terasa nikmat, konsumsi daging kambing terlalu banyak memicu kolesterol. Bagi orang yang memiliki kondisi sehat dan normal risikonya tidak terlalu tinggi. Namun, bagi orang-orang yang mengidap kolesterol atau riwayat keluarga kolesterol tinggi perlu waspada saat mengonsumsi daging kambing.\nDaging kambing termasuk ke dalam jenis daging merah yang cenderung memiliki kadar lemak jenuh tinggi. Ketimbang daging sapi, daging kambing memiliki kadar kolesterol yang lebih tinggi sebesar 10 persen. Meski kolesterol dibutuhkan oleh tubuh, tetapi mengonsumsinya secara berlebihan sangat tidak disarankan. Selain porsi, cara pengolahan daging kambing yang dicampur santan, garam atau minyak juga berperan dalam peningkatan kolesterol.\nBagi orang dengan kondisi kesehatannya normal, daging kambing masih aman untuk dikonsumsi satu kali sehari. Takaran daging yang bisa dikonsumsi dalam satu hari kira-kira tidak lebih dari sebesar telapak tangan. Sedangkan untuk seseorang yang memiliki riwayat kolesterol, disarankan untuk mengonsumsi daging kambing tidak lebih dari dua kali dalam seminggu.\nKandungan kolesterol dalam daging kambing tergantung pada cara menyiapkannya dan seberapa besar porsinya. Porsi daging kambing yang dimasak umumnya mengandung 124 kalori. Ada 2,6 gram lemak, 0,8 gram lemak jenuh, 25 gram protein dan 64 mg kolesterol dalam satu porsi daging kambing. Nah, untuk meminimalisir kolesterol, kamu bisa menyiasatinya dengan menyayat lemak kambing sebelum diolah.\nndari penggunaan santan, garam dan minyak terlalu banyak. Ini karena, bahan-bahan tersebut sudah mengandung lemak jenuh yang cukup tinggi. Kamu juga tidak disarankan untuk memasak dan menyantap daging kambing sekaligus dalam satu hari. Sebaiknya masak daging sebanyak 75-100 gram saja. Kamu bisa menyimpan sisanya di dalam lemari es untuk disantap hari-hari selanjutnya.\n',
        author: {
            id: "588c2e092403d111454fff71",
            username: "Jill"
        }
    },
    {
        name: 'Muncul Gejala DBD, Haruskah Langsung ke Dokter?',
        image: 'https://d1bpj0tv6vfxyp.cloudfront.net/muncul-gejala-dbd-haruskah-langsung-ke-dokter.png',
        description: 'Apabila gejala yang seperti disebutkan sebelumnya kamu alami, maka kamu wajib segera memeriksakan diri ke dokter untuk mencegah gejala demam berdarah semakin parah. Tanpa perlu repot, kamu juga bisa dengan mudah buat janji dengan dokter melalui aplikasi Halodoc. Meski gejala yang disebutkan di atas masih tergolong ringan, namun penanganan yang tepat sejak dini sangat diperlukan guna mencegah risiko yang lebih fatal.\nUntuk memastikan diagnosis, biasanya dokter meminta pasien untuk melakukan tes darah. Tes darah ini dilakukan guna memastikan seseorang positif mengidap DBD atau tidak.\nSayangnya hingga saat ini belum ditemukan penawar dari virus Dengue yang menyebabkan penyakit ini. Jadi, belum ada obat yang dapat digunakan sebagai langkah penyembuhan demam berdarah. Perawatan pada pengidap demam berdarah yang diberikan hanya bertujuan untuk mengurangi dan mengendalikan gejala yang muncul, sehingga pengidap dapat pulih kembali.\nKetyangnya hingga saat ini belum ditemukan penawar dari virus Dengue yang menyebabkan penyakit ini. Jadi, belum ada obat yang dapat digunakan sebagai langkah penyembuhan demam berdarah. Perawatan pada pengidap demam berdarah yang diberikan hanya bertujuan untuk mengurangi dan mengendalikan gejala yang muncul, sehingga pengidap dapat pulih kembali.\nPada pengidap demam berdarah yang mengalami gejala serius, pengidap akan mengalami masa-masa kritis selama 24-48 jam. Selama waktu 24-48 jam itu akan menentukan seberapa besar kesempatan pengidap untuk kembali bertahan hidup. Di samping itu, apabila selama masa-masa kritis pengidap tidak mendapat penanganan yang cepat dan tepat, pengidap kondisi ini bisa saja kehilangan nyawanya.',
        author: {
            id: "588c2e092403d111454fff77",
            username: "Jane"
        }
    },
    {
        name: 'Ketahui 2 Pengobatan untuk Atasi Hirschsprung',
        image: 'https://d1bpj0tv6vfxyp.cloudfront.net/ketahui2pengobatanuntukatasihirschsprunghalodoc.jpg',
        description: 'Banyak penyebab bayi menjadi rewel, salah satunya karena rasa tidak nyaman yang disebabkan oleh gangguan kesehatan yang dialami. Sebaiknya, ibu perhatikan kondisi rewel yang dialami oleh bayi. Jika kondisi rewel disertai muntah dengan cairan berwarna coklat atau hijau, sebaiknya segera periksa kondisi kesehatan bayi.\nGejala yang dialami oleh bayi bisa menjadi tanda dari penyakit hirschsprung. Penyakit hirschsprung adalah salah satu gangguan kesehatan pada bagian usus besar yang terjadi ketika bayi dilahirkan.\nUmumnya, penyakit hirschsprung disebabkan karena adanya kelainan saraf pada bagian usus besar sehingga menyebabkan bayi sulit atau tidak dapat BAB secara normal. Fungsi saraf dalam usus besar memiliki fungsi untuk mendorong feses keluar dari usus besar. Gangguan pada usus besar ini menyebabkan feses sulit untuk keluar dan terjebak dalam tubuh.\nAdmumnya, penyakit hirschsprung disebabkan karena adanya kelainan saraf pada bagian usus besar sehingga menyebabkan bayi sulit atau tidak dapat BAB secara normal. Fungsi saraf dalam usus besar memiliki fungsi untuk mendorong feses keluar dari usus besar. Gangguan pada usus besar ini menyebabkan feses sulit untuk keluar dan terjebak dalam tubuh.\nPenyakit ini bisa disebabkan karena adanya penyakit bawaan yang dialami oleh bayi ketika lahir seperti sindrom Down atau penyakit jantung bawaan. Bagi ibu hamil, selalu lakukan pengecekan terhadap kandungan secara rutin dan mengonsumsi makanan yang sehat agar pertumbuhan janin dalam kandungan bisa berlangsung secara optimal.\nMeskipun umumnya penyakit hirschsprung sudah diketahui sejak bayi dilahirkan, namun gejala yang muncul terlihat ketika bayi mengalami pertumbuhan usia. Umumnya, bayi yang mengalami penyakit ini tidak buang air besar selama 48 jam setelah bayi dilahirkan.\njala lainnya adalah bayi mengalami kondisi tidak nyaman pada perutnya sehingga ia akan lebih rewel dibandingkan bayi yang lainnya. Selain itu, bayi dengan kondisi hirschsprung mengalami muntah dan keluarnya cairan berwarna coklat atau hijau.\nKondisi ini biasanya disertai dengan perut yang membuncit akibat bayi tidak mengeluarkan feses selama beberapa hari dalam perut. Pada penyakit hirschsprung dengan kondisi yang cukup ringan, biasanya gejala muncul ketika bayi mengalami pertumbuhan dan perkembangan dalam hidupnya. Gejala hirschsprung pada anak-anak adalah mudah merasa lelah, perut terlihat buncit, sembelit kronis, kehilangan nafsu makan, dan berat badan tidak bertambah.',
        author: {
            id: "588c2e092403d111454fff77",
            username: "Jane"
        }
    },
    {
        name: 'Durasi Tepat Main Gadget Supaya Mata Tetap Sehat',
        image: 'https://d1bpj0tv6vfxyp.cloudfront.net/durasi-tepat-main-gadget-supaya-mata-tetap-sehat-2halodoc.jpg',
        description: 'Menurut data penelitian yang dipublikasikan oleh Humanistic Network for Science and Technology tahun 2018, terdapat pengaruh yang signifikan terhadap penggunaan gadget dan kesehatan mata. Terlebih lagi pada remaja usia 16-18 tahun.Sejatinya memang waktu berlebihan yang dihabiskan di depan layar gadget dapat mengurangi kelembapan mata dan menjadikannya kering. Apa akibat dari mata kering? Mata jadi rentan terhadap beberapa komplikasi. Ada aturan kesehatan yang menerapkan sistem 20–20–20.\nSetiap 20 menit dihabiskan di depan layar, kamu harus melihat sesuatu yang berjarak 20 meter selama 20 menit. Kemudian, bagaimana lagi cara supaya mata tetap sehat meski sering terpapar gadget?\nKatiap 20 menit dihabiskan di depan layar, kamu harus melihat sesuatu yang berjarak 20 meter selama 20 menit. Kemudian, bagaimana lagi cara supaya mata tetap sehat meski sering terpapar gadget?\nSalah satu efek dari paparan layar gadget ini adalah myopia (rabun jauh). Ketika anak-anak lebih suka tinggal di rumah dan bermain game komputer atau menonton TV sepanjang hari, kebiasaan ini mungkin membuat mereka tidak terbiasa melihat jarak jauh, sehingga meningkatkan risiko myopia.',
        author: {
            id: "588c2e092403d111454fff77",
            username: "Jane"
        }
    },
    {
        name: 'Kelola Stres untuk Mencegah Perdarahan Uterus Abnormal',
        image: 'https://d1bpj0tv6vfxyp.cloudfront.net/kelola-stres-untuk-mencegah-perdarahan-uterus-abnormal.jpg',
        description: 'Pernah mengalami perdarahan menstruasi yang sangat deras atau terjadi penggumpalan yang ukurannya besar? Atau pernahkah mengalami menstruasi yang lebih dari satu pekan atau perdarahan pada vagina padahal tidak sedang menstruasi? Dalam dunia medis, kondisi ini bisa ditandai sebagai gejala perdarahan uterus abnormal. Jika hal ini kamu alami, jangan panik! Terdapat beberapa hal untuk mencegah perdarahan uterus abnormal.\nGejala dari perdarahan uterus abnormal memang mengganggu aktivitas. Hal ini bisa menyebabkan wanita harus rajin mengganti pembalut mereka saat sedang menstruasi. Tahukah kamu bahwa salah satu upaya untuk mencegah perdarahan uterus abnormal adalah dengan mengelola stres yang kamu alami. Nah, mari simak ulasan lengkapnya berikut!\nSaat seorang wanita dilanda stres, entah itu karena pekerjaan atau apapun, maka hal ini memengaruhi keseimbangan hormonnya. Tidak hanya stres fisik, stres emosional bisa memicu hal ini.  Saat stres, hormon pengatur siklus menstruasi atau dikenal estrogen mengalami dampaknya. Pasalnya stres menyebabkan produksi hormon kortisol menjadi lebih tinggi dan kemudian menekan hormon estrogen. Akibatnya, proses ovulasi menjadi terhambat dan mengacaukan menstruasi.\nApabila stres sulit dikelola, maka gejala dari perdarahan uterus abnormal ini akan muncul. Gejalanya bisa meliputi pusing, pingsan, lemas, tekanan darah rendah, detak jantung meningkat, kulit pucat, nyeri, keluar gumpalan darah yang besar, dan lebih sering ganti pembalut. Jika gejala tersebut kamu rasakan, maka segera periksakan diri ke dokter kandungan. Tak perlu khawatir karena kini buat janji dengan dokter bisa dilakukan melalui aplikasi Halodoc. Dengan begini kamu tidak perlu repot menunggu lama sehingga stres tidak semakin bertambah.\n<strong>Langkah Mengatasi Stres pada Wanita</strong>\nWanita lebih rentan mengalami stres karena mereka memiliki peran ganda sebagai seorang istri, ibu rumah tangga, pendidik, menjalankan tugas reproduksi, anggota masyarakat, dan bahkan pencari nafkah. Di dalam menjalankan peran tersebut, mereka kerap dihinggapi masalah yang menyangkut kejiwaan, yang apabila tidak diatasi juga berakibat pada stres.',
        author: {
            id: "588c2e092403d111454fff77",
            username: "Jane"
        }
    },
    {
        name: 'Macarons ? Apakah Kandungan Gula Macarons Standar ?',
        image: 'data:image/jpeg;base64,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',
        description: 'Macaron adalah makanan manis yang berasal dari Prancis. Macaron adalah kue berbasis meringue yang biasanya dibuat dengan putih telur,gula icing,gula pasir,tepung almond atau almond bubuk dan pewarna makanan. Macaron umumnya terdiri dari ganache atau isian lain seperti buttercream sebagai isi dari dua kue kering yang mengapit isian tersebut. Kata Macaron berasal dari kata Italia macarone, maccarone atau maccherone, yaitu meringue.\nManisan ini ditandai dengan bagian atas yang halus,bagian pinggiran yang kasar (disebut dengan "foot" atau "pied"),dan bagian bawah yang rata. Macaron biasanya ditemukan dengan berbagai rasa,warna dan isian dari macaron tradisional (Cokelat,Rasberi) hingga yang lebih modern (Matcha,butterscotch,bubblegum).\nNama macaron sendiri sering disamakan dengan macaroon yaitu kue kering atau biskuit kelapa yang berbeda dengan macaron. Macaron kadang-kadang disamakan dengan macaroon karena beberapa kata dalam bahasa Prancis saat diterjemahkan ke bahasa inggris dapat terjadi penggandaan huruf (bandingkan baloon dengan pengucapan bahasa Prancis ballon).',
        author: {
            id: "588c2e092403d111454fff77",
            username: "Jane"
        }
    },
    {
        name: 'Penyebab Inkompabilitas Rhesus Bisa Terjadi pada Janin',
        image: 'https://d1bpj0tv6vfxyp.cloudfront.net/penyebabkelainandarahbisaterjadipadajaninhalodoc.jpg',
        description: 'Kebanyakan orang Indonesia memiliki darah dengan Rh positif, yang berarti mereka menghasilkan faktor Rh, sebuah protein yang ditemukan pada permukaan sel darah merah. Namun, tidak menutup kemungkinan seseorang dilahirkan dengan membawa Rh negatif dalam darahnya. Memang, kesehatan orang dengan Rh negatif seharusnya tidak memiliki pengaruh sama sekali.\nSayangnya, seorang ibu yang memiliki Rh negatif memiliki risiko tinggi memiliki anak dengan penyakit Rh jika bayi mewarisi jenis darah Rh positif dari sang ayah. Sederhananya, penyakit Rh terjadi ketika darah seorang ibu dan janin tidak cocok. Jika ibu memiliki Rh negatif dan bayi dalam kandungan memiliki Rh positif, maka sel darah merah janin dapat masuk ke aliran darah ibu. Oleh sistem imunitas ibu, sel darah ini dianggap sebagai benda asing.\n<h2>Apa yang Menyebabkan Janin Kelainan Darah?</h2>\nPenyakit Rh hanya terjadi ketika ibu memiliki Rh yang berbeda dengan janin dan ibu mengalami proses sensitisasi (respons imun tubuh ibu terhadap masuknya aliran darah janin yang berbeda rhesus) setelah terpapar darah Rh positif. Apakah seseorang memiliki Rh positif atau negatif ditentukan oleh adanya antigen rhesus D yang ditemukan di permukaan sel darah merah.\nGolongan darah seseorang bergantung pada gen yang diwarisi dari kedua orangtua. Apakah dalam darah terkandung Rh positif atau negatif bergantung pada seberapa banyak salinan antigen RhD yang diwarisi, bisa satu gen, keduanya, atau tidak mewarisi gen sama sekali. Pada kasus tidak adanya pewarisan antigen RhD dari kedua orangtua, maka Rh adalah negatif.\nSeorang ibu dengan darah Rh negatif dapat memiliki bayi dengan Rh positif jika golongan darah ayah memiliki Rh positif. Apabila ayah memiliki dua salinan antigen RhD, setiap bayi akan memiliki darah dengan RhD positif. Namun, jika ayah hanya memiliki satu salinan antigen RhD, ada kemungkinan bayi memiliki darah dengan Rh positif adalah sebesar 50 persen.\nBaorang ibu dengan darah Rh negatif dapat memiliki bayi dengan Rh positif jika golongan darah ayah memiliki Rh positif. Apabila ayah memiliki dua salinan antigen RhD, setiap bayi akan memiliki darah dengan RhD positif. Namun, jika ayah hanya memiliki satu salinan antigen RhD, ada kemungkinan bayi memiliki darah dengan Rh positif adalah sebesar 50 persen.',
        author: {
            id: "588c2e092403d111454fff77",
            username: "Jane"
        }
    },
    {
        name: 'Muncul Gejala DBD, Haruskah Langsung ke Dokter?',
        image: 'https://d1bpj0tv6vfxyp.cloudfront.net/muncul-gejala-dbd-haruskah-langsung-ke-dokter.png',
        description: 'Apabila gejala yang seperti disebutkan sebelumnya kamu alami, maka kamu wajib segera memeriksakan diri ke dokter untuk mencegah gejala demam berdarah semakin parah. Tanpa perlu repot, kamu juga bisa dengan mudah buat janji dengan dokter melalui aplikasi Halodoc. Meski gejala yang disebutkan di atas masih tergolong ringan, namun penanganan yang tepat sejak dini sangat diperlukan guna mencegah risiko yang lebih fatal.\nUntuk memastikan diagnosis, biasanya dokter meminta pasien untuk melakukan tes darah. Tes darah ini dilakukan guna memastikan seseorang positif mengidap DBD atau tidak.\nSayangnya hingga saat ini belum ditemukan penawar dari virus Dengue yang menyebabkan penyakit ini. Jadi, belum ada obat yang dapat digunakan sebagai langkah penyembuhan demam berdarah. Perawatan pada pengidap demam berdarah yang diberikan hanya bertujuan untuk mengurangi dan mengendalikan gejala yang muncul, sehingga pengidap dapat pulih kembali.\nKetyangnya hingga saat ini belum ditemukan penawar dari virus Dengue yang menyebabkan penyakit ini. Jadi, belum ada obat yang dapat digunakan sebagai langkah penyembuhan demam berdarah. Perawatan pada pengidap demam berdarah yang diberikan hanya bertujuan untuk mengurangi dan mengendalikan gejala yang muncul, sehingga pengidap dapat pulih kembali.\nPada pengidap demam berdarah yang mengalami gejala serius, pengidap akan mengalami masa-masa kritis selama 24-48 jam. Selama waktu 24-48 jam itu akan menentukan seberapa besar kesempatan pengidap untuk kembali bertahan hidup. Di samping itu, apabila selama masa-masa kritis pengidap tidak mendapat penanganan yang cepat dan tepat, pengidap kondisi ini bisa saja kehilangan nyawanya.',
        author: {
            id: "588c2e092403d111454fff77",
            username: "Jane"
        }
    }
]
var dataBerita = [
    {
        name: 'Pesan Noriyu Soal Menteri Kesehatan Pilihan Presiden Mendatang',
        image: 'https://akcdn.detik.net.id/community/media/visual/2017/02/21/2fcbe5f6-5796-470e-87a8-d49db25e49a9_169.jpg?w=700&q=90',
        description: 'Masalah kesehatan di Indonesia tampaknya cukup pelik serta banyak permasalahan yang harus segera diselesaikan. Karena itu, Nova Riyanti Yusuf selaku anggota DPR RI menyarankan presiden terpilih Joko Widodo (Jokowi) untuk menentukan menteri kesehatan yang sesuai dengan kriteria visi dan misinya.\n"Kayaknya masalah kesehatan ini pelik di Indonesia, harus ada fresh idea, ide yang segar, ide yang sesuai dengan keinginan Pak Jokowi," ujarnya saat ditemui di acara Diskusi Publik L2PK di Cikini, Jakarta Pusat, Rabu (31/7/2019).\nMenurutnya, Menkes periode sebelumnya yaitu Nila F. Moeloek sudah berkontribusi maksimal terhadap perkembangan kesehatan di Indonesia. Namun, Noriyu sapaan akrabnya, mengatakan bahwa untuk lima tahun ke depan dibutuhkan menkes yang lebih paham dan peduli soal kesehatan mental.\n"Pak Jokowi nih arahnya ke lembaga menejemen talenta, SDM ke depan, 2045 generas emas, dan lain sebagainya yang semua butuh perhatian ke mental health, pola asuh, vocational," imbuh wanita yang juga seorang psikiater itu.\nNoriyu menambahkan, presiden sendiri lah yang harus menentukan kriteria yang tepat untuk memilih menkes yang sesuai dengan visi dan misinya. Misalnya memiliki pengalaman tertentu atau track record yang diinginkan.',
        author: {
            id: "588c2e092403d111454fff76",
            username: "Jack"
        }
    },
    {
        name: 'Pantauan AirVisual: Polusi Udara Jakarta Hari Ini Kian Parah',
        image: 'https://akcdn.detik.net.id/community/media/visual/2019/07/04/1e1f0cd6-5879-4869-81aa-dc344ecd0bb2_169.jpeg?w=780&q=90',
        description: 'DKI Jakarta menjadi salah satu dari wilayah yang mengalami polusi terburuk di dunia. Peringkat tersebut berdasarkan data dari aplikasi pemantau kualitas udara AirVisual.\nDKI Jakarta sempat menempati urutan pertama sebagai kota dengan polusi paling parah pada Kamis (25/7/2019) pagi tadi. Data AirVisual terus diperbarui setiap jam.\nData pada hari ini, AirVisual menunjukkan air quality index (AQI) DKI Jakarta lebih parah dari hari sebelumnya Rabu (24/7) yaitu mencapai nilai 170. Hingga pukul 09.30 WIB, AQI di Jakarta menunjukkan nilai sebesar 158. Nilai tersebut menujukkan udara di Jakarta dikategorikan tidak sehat.\nGubernur DKI Jakarta Anies Baswedan sendiri menempuh berbagai cara untuk menangkal polusi udara. Cara yang ditempuh mulai dari kewajiban uji emisi bagi setiap kendaraan hingga menggunakan tanaman lidah mertua.\nAnies mengatakan semua kendaraan wajib melakukan uji emisi. Dia mengatakan semua kendaraan ataupun benda yang menghasilkan asap kotor akan diganti.\n"Bus-bus kita yang hari ini mengeluarkan asap polusi yang luar biasa tinggi sedang dalam proses untuk pergantian di BPBJ dan sudah dalam proses. Nanti harapannya, kendaraan-kendaraan yang merusak kualitas udara kita diganti dengan yang baru dan ini harapannya sebagian sudah bisa dilakukan di tahun 2019," ujar Anies di Balai Kota DKI Jakarta, Jalan Medan Merdeka Selatan, Jumat (5/7)\nAnies juga mewajibkan seluruh bengkel di Jakarta dan SPBU memiliki alat uji emisi. Total hingga saat ini sudah ada 150 bengkel yang memiliki alat uji emisi.\n"Jadi semua bengkel di Jakarta saat ini ada 750 yang resmi, itu harus memiliki kemampuan untuk melakukan uji emisi. Begitu juga dengan pompa bensin, seperti menyediakan pompa ban, mereka juga harus menyediakan alat untuk uji emisi," ujar Anies.',
        author: {
            id: "588c2e092403d111454fff71",
            username: "Jill"
        }
    },
]
var dataEvent = [
    {
        name: 'Pengetahuan Resusitasi Jantung Paru Harus Menjadi Bekal Tiap Orang',
        image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1503915332/attached_image/pengetahuan-resusitasi-jantung-paru-harus-menjadi-bekal-tiap-orang-alodokter.jpg',
        description: 'Resusitasi jantung paru (RJP) merupakan langkah pertolongan medis untuk mengembalikan fungsi napas dan atau sirkulasi darah di dalam tubuh yang terhenti. Resusitasi jantung paru bertujuan menjaga darah dan oksigen tetap beredar ke seluruh tubuh.\nRJP atau yang dalam bahasa Inggrisnya CPR, biasanya dilakukan kepada orang-orang yang mengalami henti jantung serta tidak mampu bernapas secara normal. Tandanya bisa terlihat dari tiba-tiba pingsan dan tidak merespons ketika dipanggil. RJP perlu dilakukan pada mereka yang tidak bernapas atau denyut nadinya terhenti setelah mengalami kecelakaan, tenggelam, atau serangan jantung. Untuk melakukan RJP, seseorang disarankan sudah pernah menjalani pelatihan yang memadai. Namun meski tidak memiliki sertifikat pelatihan, bukan berarti Anda tidak diperbolehkan menolong orang yang membutuhkan pertolongan RJP.\nSelain itu, RJP juga wajib diberikan jika orang yang mengalami kecelakaan tidak bergerak atau tidak merespons tindakan penyadaran yang diberikan orang lain. Untuk melakukan RJP, seseorang disarankan sudah pernah menjalani pelatihan medis dasar.',
        author: {
            id: "588c2e092403d111454fff76",
            username: "Jack"
        }
    },
    {
        name: 'Annual Child and Family Healthcare Nursing Conference 2019',
        image: 'https://jadwalevent.web.id/wp-content/uploads/2018/05/Annual-Child-and-Family-Healthcare-Nursing-Conference-2018.jpg',
        description: 'With the support of organizing committee and worldwide organisations , we are having immense pleasure to organize “Annual Child and Family Healthcare Nursing Conference”, August-13-14 ,2018 at Bali, Indonesia.We are cordially welcome all the eminent researchers, students and delegates to take part in this upcoming healthcare conference to witness prompt keynote presentations, Oral talks, Poster presentations and Exhibitions, panel discussion.',
        author: {
            id: "588c2e092403d111454fff71",
            username: "Jill"
        }
    },
]
seedDB = () => {
    // Remove all article
    Article.deleteMany({}, async (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Removed Article')
        }
    })
    Event.deleteMany({}, async (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Removed Event')
        }
    })
    Berita.deleteMany({}, async (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Removed Berita')
        }
    })
    // Add a few article
    dataArtikel.forEach(async (seed) => {
        Article.create(seed, async (err, article) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Added Article');
                //Create a comment
                Comment.create(
                    {
                        text: 'This Guide is Great',
                        author: {
                            id: "588c2e092403d111454fff76",
                            username: "Jack"
                        }
                    }, async (err, comment) => {
                        if (err) {
                            console.log(err)
                        } else {
                            article.comments.push(comment);
                            article.save();
                            console.log('Created new Comment')
                        }
                    }
                )
            }
        })
    });
    dataEvent.forEach(async (seed) => {
        Event.create(seed, async (err, event) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Added Event');
                //Create a comment
                Comment.create(
                    {
                        text: 'This Event Rocks',
                        author: {
                            id: "588c2e092403d111454fff76",
                            username: "Jack"
                        }
                    }, async (err, comment) => {
                        if (err) {
                            console.log(err)
                        } else {
                            event.comments.push(comment);
                            event.save();
                            console.log('Created new Comment')
                        }
                    }
                )
            }
        })
    })
    dataBerita.forEach(async (seed) => {
        Berita.create(seed, async (err, berita) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Added Berita');
                //Create a comment
                Comment.create(
                    {
                        text: 'This Event Rocks',
                        author: {
                            id: "588c2e092403d111454fff76",
                            username: "Jack"
                        }
                    }, async (err, comment) => {
                        if (err) {
                            console.log(err)
                        } else {
                            berita.comments.push(comment);
                            berita.save();
                            console.log('Created new Comment')
                        }
                    }
                )
            }
        });
    })
}

module.exports = seedDB;