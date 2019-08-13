var express = require('express');
var router = express.Router();
var Penyakit = require('../models/penyakit');

// Penyakit.create(
//     {
//         name: 'Asma',
//         image: 'https://miro.medium.com/max/1200/1*qUlE-dZeBuL9IQ8Oj81z7Q.jpeg',
//         description: 'Asma adalah penyakit kronis yang disebabkan oleh peradangan dalam saluran pernapasan.Peradangan ini membuat saluran pernapasan bengkak dan sangat sensitif. Akibatnya, saluran pernapasan menyempit, menyebabkan kurangnya udara yang mengalir ke paru-paru. Sel di saluran pernapasan juga mungkin membuat lebih banyak lendir dari biasanya. Lendir ini selanjutnya dapat makin mempersempit saluran pernapasan.'
//     },
//     {
//         name: 'Anemia',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPbtAnRGplxlZOY1zApLRYFsQSsjAbScTbWZimZJujH9toUS3',
//         description: 'Penyakit anemia adalah suatu kondisi di mana jumlah sel darah merah Anda lebih rendah dari jumlah normal. Anemia juga bisa terjadi jika sel-sel darah merah tidak mengandung cukup hemoglobin. Hemoglobin adalah protein kaya zat besi yang memberikan warna merah darah. Protein ini membantu sel-sel darah merah membawa oksigen dari paru-paru ke seluruh tubuh.\n Jika Anda memiliki anemia, tubuh Anda tidak mendapatkan cukup darah yang kaya oksigen. Akibatnya, Anda mungkin merasa lelah atau lemah. Anda juga mungkin memiliki gejala lain, seperti sesak napas, pusing, atau sakit kepala.'
//     },
//     {
//         name: 'Amnesia',
//         image: 'https://i.ytimg.com/vi/62R0BsYe0iw/maxresdefault.jpg',
//         description: 'Amnesia, atau dikenal juga sebagai sindrom amnesik, adalah kondisi yang menyebabkan kehilangan memori. Hal ini meliputi kehilangan informasi, fakta-fakta, dan pengalaman personal. Ada banyak kondisi kesehatan yang dapat menyebabkan amnesia, seperti dementia, stroke, atau cedera kepala. Lebih parah dari kehilangan memori, amnesia dapat mengganggu kemampuan menghasilkan memori baru. Amnesia bisa hanya sementara namun juga dapat menjadi kondisi permanen. Penting untuk mencari perhatian medis untuk mengatasi penyebab amnesia.'
//     },
//     {
//         name: 'Batuk',
//         image: 'https://cdn1.medicalnewstoday.com/content/images/hero/321/321189/321189_1100.jpg',
//         description: 'Batuk adalah reaksi yang terjadi apabila sel-sel pada saluran udara di belakang kerongkongan teriritasi. Iritasi ini memicu paru-paru untuk mengeluarkan udara dengan tekanan yang tinggi. Tergantung pada durasi, batuk dapat menjadi akut, sub-akut atau kronis.Batuk adalah refleks yang natural dan umum terjadi, untuk melindungi paru-paru Anda. Batuk membantu membersihkan saluran udara dari iritan, seperti asap dan lendir, serta mencegah infeksi. \n Batuk yang berkepanjangan dapat menyebabkan banyak efek samping dan dapat menjadi berbahaya jika tidak segera diperiksa. Kondisi ini dapat terjadi pada pasien dengan usia berapapun. Batuk dapat ditangani dengan mengurangi faktor-faktor risiko. Diskusikan dengan dokter untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Batu Ginjal',
//         image: 'https://cdn.idntimes.com/content-images/community/2019/07/cover-6c6f45b5505d69ac13318ea8c2a63b63_600x400.jpg',
//         description: 'Batu di ginjal adalah endapan keras yang terbentuk dari zat yang ada di air kencing. Prosesnya disebut nephrolithiasis. Penyakit batu ginjal atau kencing batu ini biasanya berukuran sangat kecil atau bisa mencapai sekitar beberapa inci. Ukuran batu yang lebih besar yang mengisi saluran yang membawa kencing dari ginjal ke kandung kemih disebut batu staghorn. \n Penyakit batu ginjal atau kencing batu umum terjadi, yang biasanya menyerang orang yang berusia di atas 40 tahun. Penyakit batu ginjal atau kencing batu bisa diatasi dengan mengurangi faktor-faktor yang berisiko untuk kesehatan kita. Harap berdiskusi dengan dokter Anda untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Bisul',
//         image: 'https://media.healthdirect.org.au/images/inline/original/gs06_-abscess-incision-and-drainage_resized-72dadf.png',
//         description: 'Bisul adalah benjolan pada kulit yang berisi nanah. Kondisi ini biasanya disebabkan oleh infeksi pada folikel rambut dalam kulit. Benjolan berisi nanah bisa muncul di daerah wajah, leher, ketiak, pantat, dan paha. Bisul juga mungkin muncul lebih dari 1 benjolan dalam waktu bersamaan. Kondisi ini tidaklah serius dan mudah disembuhkan.Bisul adalah salah satu kondisi kulit yang paling yang sering terjadi. Wanita, pria, tua, dan mudah bisa saja mengalaminya sewaktu-waktu. \n Meski begitu, orang yang sedang sakit dan sedang minum obat tertentu yang mepengaruhi sistem kekebalan tubuh akan lebih rentan untuk mengalami bisulan. Beberapa penyakit yang dapat melemahkan sistem kekebalan tubuh termasuk diabetes atau gagal ginjal. Jika Anda memiliki sistem kekebalan tubuh yang lemah misalnya karena usia tua atau karena HIV, Anda juga rentan bisulan.Secara umum penyakit ini berhubungan dengan penyebab lain. Diskusikan dengan dokter Anda untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Cacar Air',
//         image: 'https://thumbor.medkomtek.com/LvrSRaZ8NvoEAbOCKnlo2ldW9F0=/640x360/smart/klikdokter-media-buckets/medias/2066815/original/099124800_1523252358-7-Fakta-tentang-Cacar-Air-yang-Anda-Harus-Tahu-By-ViChizh-shutterstock.jpg',
//         description: 'Cacar air adalah penyakit kulit akibat infeksi virus varicella yang menyebabkan timbulnya lenting pada seluruh tubuh dan wajah. Infeksi juga bisa menyerang selaput lendir (membran mukosa), seperti di mulut. Penyakit cacar air atau chickenpox dapat menular ke orang yang belum pernah terkena atau belum pernah menerima vaksin cacar air. \n Virus biasanya menyerang di masa anak-anak. Akan tetapi, tak menutup kemungkinan seseorang baru terkena penyakit ini di usia dewasa. Cacar air bisa berkembang menjadi penyakit yang disebut dengan herpes zoster saat dewasa atau kemunculan kedua. Lenting herpes zoster atau cacar api biasanya lebih terasa nyeri dan bisa mengakibatkan komplikasi yang berat.'
//     },
//     {
//         name: 'Campak',
//         image: 'https://cdn2.tstatic.net/palembang/foto/bank/images/rubella_20180907_213607.jpg',
//         description: 'Rubeola, atau yang lebih dikenal dengan penyakit campak adalah infeksi menular yang disebabkan oleh virus. Sebelum imunisasi campak digalakkan, campak adalah salah satu penyakit endemik yang menyebabkan kematian terbanyak setiap tahunnya. \n Penyakit ini disebabkan oleh virus dalam keluarga paramyxovirus yang biasanya ditularkan melalui kontak langsung dengan penderita atau lewat udara. Virus menginfeksi saluran pernapasan dan kemudian menyebar ke seluruh tubuh. \n Gejala spesifik dari penyakit ini adalah ruam kulit berwarna kemerahan yang muncul 7-14 hari setelah paparan dan dapat bertahan selama 4-10 hari. Pada anak-anak, penyakit ini bisa menyebabkan komplikasi serius yang mematikan jika tidak ditangani dengan baik. Oleh sebab itu, segera konsultasi ke dokter atau penyedia layanan kesehatan terdekat jika Anda atau anak Anda mengalami penyakit ini.'
//     },
//     {
//         name: 'Cegukan',
//         image: 'https://cdn.medcom.id/images/content/2019/04/20/1012808/8QySEd52Vz.jpg',
//         description: 'Cegukan adalah kontraksi yang terjadi pada diafragma (otot yang memisahkan dada dan perut) dengan sendirinya. Otot diafragma ini memiliki peran penting dalam mengatur pernapasan manusia.Ketika cegukan terjadi, kontraksi tidak hanya terjadi di diafragma, namun juga di pita suara, pangkal tenggorokan, dan glotis. Hal ini dapat menyebabkan masuknya udara secara tiba-tiba melalui tenggorokan, sehingga muncul suara seperti terjepit. \n Kondisi ini umumnya hanya berlangsung selama beberapa menit dan tidak membahayakan kesehatan. Namun, pada beberapa kasus yang sangat jarang terjadi, cegukan dapat terjadi selama beberapa hari, bahkan bulan. Kasus yang paling lama terjadi berlangsung selama 60 tahun. \n Cegukan adalah kondisi yang sangat umum terjadi. Hampir setiap orang pasti pernah mengalaminya beberapa kali seumur hidupnya. Keadaan ini juga dapat menimpa semua orang dari seluruh golongan usia, termasuk bayi dan anak-anak.'
//     },
//     {
//         name: 'Demam',
//         image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1541056504/attached_image/jangan-buru-buru-minum-obat-penurun-panas-saat-demam-alodokter.jpg',
//         description: 'Demam adalah peningkatan suhu tubuh sementara dalam menanggapi penyakit atau rasa sakit. Suhu tubuh kita tidak selalu sama sepanjang hari. Bahkan, biasanya lebih tinggi di sore hari. Namun, jika suhu Anda lebih tinggi dari 38oC, maka Anda mengalami demam. Demam biasanya terjadi dalam menanggapi infeksi seperti virus flu atau infeksi bakteri radang tenggorokan, atau peradangan yang terjadi pada cedera atau karena penyakit. \n Demam pada orang dewasa umum terjadi. Kondisi ini dianggap sebagai bagian penting dari pertahanan tubuh terhadap infeksi. Kondisi ini biasanya lebih banyak terjadi pada perempuan dibandingkan laki-laki. Siapapun bisa mengalami demam dalam hidup mereka. \n Namun, ketika suhu naik terlalu tinggi, bisa berbahaya dan menyebabkan penyakit serius. Demam pada anak-anak perlu dianggap serius. Kondisi ini dapat dikelola dengan mengurangi faktor risiko Anda. Silahkan diskusikan dengan dokter Anda untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Depresi',
//         image: 'https://doktersehat.com/wp-content/uploads/2016/01/depresi.jpg',
//         description: 'Depresi adalah kondisi yang digambarkan sebagai suatu kelainan mood yang menyebabkan perasaan sedih dan hilang minat yang menetap. \n Depresi bisa mempengaruhi perasaan Anda, cara berpikir dan berperilaku, serta dapat membuat Anda memiliki berbagai masalah emosi dan fisik. Jika rasa sedih berlangsung dalam beberapa hari atau minggu, mengganggu pekerjaan atau kegiatan lain dengan keluarga atau teman, atau berpikir untuk bunuh diri, kemungkinan ini adalah depresi. Diskusikan dengan dokter Anda jika Anda merasakan gejala depresi. \n Depresi adalah kondisi yang sering terjadi di masyarakat. Menurut penelitian, depresi terjadi pada 80% orang pada beberapa waktu dalam hidupnya dan dapat terjadi pada usia berapapun. Depresi lebih sering terjadi pada wanita dibandingkan laki-laki.'
//     },
//     {
//         name: 'Diare',
//         image: 'http://stmedia.stimg.co/ctyp_730e4e_constipated.jpg?w=800',
//         description: 'Diare adalah gangguan pencernaan yang ditandai dengan buang air besar terus menerus. Feses yang keluar saat BAB biasanya lembek atau cair. Orang awam sering menyebutnya dengan istilah “buang-buang air” atau mencret. \n Masalah BAB ini dibedakan jenisnya menjadi dua, yaitu diare akut dan diare kronis. Diare akut adalah buang-buang air yang berlangsung selama kurang lebih 3 hari hingga seminggu. Kebanyakan orang mengalami diare jangka pendek karena adanya infeksi pada saluran pencernaan.Sedangkan, diare kronis berlangsung lebih dari 4 minggu atau bahkan lebih. Kondisi ini kurang umum dan biasanya disebabkan oleh kondisi medis, alergi, obat-obatan, atau infeksi kronis.Kondisi ini sangat umum terjadi pada orang dewasa maupun anak-anak, tanpa kenal jenis kelamin dan usia. Rata-rata orang dewasa dapat mengalami diare 4 kali dalam setahun.'
//     },
//     {
//         name: 'Ebola',
//         image: 'http://cdn.24.co.za/files/Cms/General/d/7961/f40a3c16d6d84561b4e979c80973b1ea.jpg',
//         description: 'Ebola adalah penyakit mematikan yang disebabkan oleh virus. Ada 5 strain virus Ebola yang, 4 diantaranya diketahui menyerang manusia.Virus ebola menyerang sistem imun dan organ lainnya, terutama sel pembeku darah. Pada akhirnya, infeksi ini menyebabkan perdarahan yang serius dan tidak terkendali. \n Ebola sangat menular dan mengancam nyawa. Sekitar 90% dari pasien yang terinfeksi penyakit ini tidak dapat bertahan hidup. Penting untuk segera mencari penanganan medis apabila Anda menduga terkena penyakit ini. \n Ebola adalah penyakit yang jarang ditemui namun tergolong sangat serius. Penyakit ini paling banyak terjadi di Afrika. Meski begitu, bisa juga ditemui di negara-negara lainnya.'
//     },
//     {
//         name: 'Epilepsi',
//         image: 'https://cdn.idntimes.com/content-images/community/2019/03/images-100-6e90ce5a0ea23c1b80ef45ff5f1537c0_600x400.jpeg',
//         description: 'Ayan atau epilepsi adalah penyakit kronis yang memiliki ciri khas berupa kejang kambuhan yang seringnya muncul tanpa pencetus. Kejang epilepsi terjadi karena adanya gangguan sistem saraf pusat (neurologis) yang menyebabkan kejang atau terkadang hilang kesadaran. \n Kejang memang gejala utama penyakit epilepsi, namun tidak semua orang yang mengalami kejang pasti mengidap kondisi ini. Umumnya, seseorang tidak dianggap mengidap ayan jika ia tidak pernah mengalami dua kali kejang atau lebih dalam waktu 24 jam kejang tanpa alasan jelas. Beberapa orang bisa sangat jarang mengalami kejang ayan, sedangkan sebagian lainnya bisa mengalami kejang hingga ratusan kali dalam sehari.'
//     },
//     {
//         name: 'Erosi Gigi',
//         image: 'https://d2zp5xs5cp8zlg.cloudfront.net/image-13984-800.jpg',
//         description: 'Erosi gigi atau dental erosion adalah terkikisnya enamel gigi yang disebabkan oleh asam. Enamel adalah lapisan keras pelindung gigi, yang melindungi dentin yang sensitif. Apabila enamel terkikis, dentin di bawahnya akan terekspos, yang dapat menyebabkan rasa sakit dan sensitivitas. \n Erosi gigi dapat disebabkan oleh konsumsi minuman ringan berlebih (kadar fosfor dan asam sitrat yang tinggi),minuman dari buah (beberapa asam pada minuman dari buah lebih erosif daripada asam baterai), mulut kering atau air liur yang sedikit (xerostomia), makanan (tinggi akan gula dan pati), asam lambung, gangguan pencernaan, obat-obatan, genetik (kondisi turunan), faktor lingkungan ( gesekan, keausan, stres, dan korosi )'
//     },
//     {
//         name: 'Flu',
//         image: 'https://media.mnn.com/assets/images/2018/09/woman_bed_flu.jpg.653x0_q80_crop-smart.jpg',
//         description: 'Influenza atau flu adalah infeksi virus pada saluran pernapasan. Flu adalah kondisi yang datang secara tiba-tiba, biasanya berlangsung selama 7 sampai 10 hari. Flu bisa hilang begitu saja dan ada yang diobati menggunakan obat obatan alami atau obat resep. Kebanyakan kasus flu umumnya bisa sembuh sepenuhnya. Flu adalah kondisi yang sangat umum dan bisa mempengaruhi pasien dari segala usia. Influenza bisa dihindari dengan mengurangi faktor risiko Anda.'
//     },
//     {
//         name: 'Flu Babi',
//         image: 'https://c.ndtvimg.com/2018-10/bth890vo_swine-flu_625x300_12_October_18.jpg',
//         description: 'Flu babi, yang juga dikenal dengan influenza H1N1 2009 tipe A, adalah penyakit infeksi pernapasan yang terjadi pada manusia, disebut “flu babi” karena virusnya menyerupai virus pada babi, namun kondisi ini cukup berbeda dengan flu yang sesungguhnya terjadi pada babi. Flu ini telah berevolusi dan dapat menular dari orang ke orang lainnya walau tidak memiliki kontak apapun dengan babi. \n Biasanya, Anda tidak perlu mengunjungi dokter jika Anda dalam kondisi sehat dan hanya memiliki gejala flu. Namun, jika Anda masuk ke dalam golongan berisiko tinggi, Anda harus mengunjungi dokter pada tanda-tanda awal dari flu. Selain itu, selama wabah, jika Anda memiliki tanda-tanda atau gejala-gejala di atas atau pertanyaan lainnya, konsultasikanlah dengan dokter Anda.'
//     },
//     {
//         name: 'Flu Burung',
//         image: 'http://life.nthu.edu.tw/~g854236/H5N1logo.gif',
//         description: 'Flu burung, atau yang dikenal juga sebagai avian influenza, adalah salah satu jenis infeksi virus yang umumnya ditemukan pada unggas. Namun, virus yang menyebabkan flu burung dapat bermutasi dan menyebar ke manusia. Apabila manusia terinfeksi virus flu burung, gejala yang tampak akan bervariasi, mulai dari yang ringan hingga parah dan berpotensi membahayakan nyawa. Penularan ini biasanya terjadi akibat adanya kontak dengan burung yang terinfeksi virus atau proses memasak unggas yang kurang matang. \n Penyakit ini tidak dapat ditularkan antar manusia, tapi para ahli mengkhawatirkan adanya kemungkinan virus flu burung dapat bermutasi lagi dan bisa tersebar dengan mudah ke sesama manusia.'
//     },
//     {
//         name: 'Gangguan pencernaan',
//         image: 'https://hellosehat.com/wp-content/uploads/2016/03/Gangguan-Pencernaan.jpg',
//         description: 'Gangguan pencernaan adalah berbagai jenis masalah yang terjadi pada sistem pencernaan tubuh. Meski sering dianggap sebagai hal sepele, gangguan pencernaan ringan yang tidak diatasi dapat menyebabkan penyakit yang lebih serius dan kronis. \n Sistem pencernaan merupakan bagian tubuh yang rumit dan luas. Pencernaan meliputi dari sepanjang mulut hingga anus. Sistem pencernaan berperan dalam mengeluarkan kotoran dan membantu tubuh menyerap nutrisi yang penting.'
//     },
//     {
//         name: 'Gangguan pendengaran',
//         image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1536801389/attached_image/gangguan-pendengaran-alodokter.jpg',
//         description: 'Gangguan pendengaran adalah gangguan kesehatan di mana Anda kehilangan kemampuan untuk mendengar suara secara bertahap. Ada 3 jenis gangguan pendengaran, tergantung pada bagian yang terpengaruh yaitu gangguan pendengaran sensorineural, gangguan pendengaran konduktif, dan gangguan pendengaran campuran. \n Gangguan pendengaran sensorineural terjadi apabila sel-sel pada bagian dalam telinga atau saraf auditori rusak. Kondisi ini terjadi secara alami akibat proses penuaan atau setelah cedera. Gangguan pendengaran konduktif disebabkan oleh penyumbatan yang menyebabkan suara tidak dapat melewati telinga luar ke dalam telinga dalam.Gangguan pendengaran campuran terjadi apabila gangguan pendengaran konduktif dan gangguan pendengaran sensorineural terjadi dalam waktu yang bersamaan. \n Gangguan pendengaran adalah kondisi yang sangat umum terjadi. Kondisi ini biasanya terjadi pada lansia. Gangguan pendengaran dapat ditangani dengan mengurangi faktor-faktor risiko. Diskusikan dengan dokter untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Gangguan tidur',
//         image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/D4E0/production/_104369445_0b19b561-f45c-479e-bb41-501094d14f19.jpg',
//         description: 'Gangguan tidur adalah kelainan apapun yang mempengaruhi, mengganggu, atau melibatkan tidur. Terdapat sekitar 80 jenis gangguan tidur misalnya obstructive sleep apnea, insomnia, parasomnia, dan sebagainya. \n Kondisi kesehatan ini sangat umum. Gangguan tidur dapat mempengaruhi pasien pada semua usia. Penyakit ini bisa diatasi dengan mengurangi faktor risiko. Tergantung jenis kelainan, banyak gejala yang bisa dikenali. Mereka umumnya adalah tidur berjalan, mendengkur, insomnia, restless legs syndrome, narkolepsi, dan sleep apnea.'
//     },
//     {
//         name: 'HIV/AIDS',
//         image: 'https://cdn0-production-images-kly.akamaized.net/xG7724MNdyuV41yV8cZqT2C_lmE=/0x15:1024x592/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2478758/original/051414600_1543308162-HIV.jpg',
//         description: 'HIV/AIDS merupakan hal yang berbeda tetapi saling berhubungan. Human Immunodeficiency Virus atau biasa disingkat HIV adalah virus yang menyebabkan penyakit AIDS (Acquired Immune Deficiency Syndrome). HIV secara drastis dapat menurunkan sistem kekebalan tubuh, sehingga memungkinkan penyakit, bakteri, virus, dan infeksi lainnya menyerang tubuh Anda. HIV menyerang dan menghancurkan sel CD4 yang seharusnya melawan infeksi dari sistem kekebalan tubuh. Akibatnya, tubuh jadi kesulitan melawan infeksi dan kanker terkait HIV tertentu. \n Tidak seperti virus lainnya, tubuh Anda tidak bisa menyingkirkan HIV sepenuhnya. Jika Anda terinfeksi HIV, Anda akan memilikinya seumur hidup. Sementara itu, AIDS adalah kondisi penyakit kronis dari infeksi virus HIV. Biasanya kondisi ini ditandai dengan munculnya penyakit lain, seperti kanker dan berbagai infeksi yang muncul seiring dengan melemahnya sistem kekebalan tubuh Anda.'
//     },
//     {
//         name: 'Hipertensi',
//         image: 'https://doktersehat.com/wp-content/uploads/2019/01/hipertensi-doktersehat.jpg',
//         description: 'Hipertensi adalah nama lain dari tekanan darah tinggi. Tekanan darah itu sendiri adalah kekuatan aliran darah dari jantung yang mendorong dinding pembuluh darah (arteri). Kekuatan tekanan darah ini bisa berubah dari waktu ke waktu, dipengaruhi oleh aktivitas apa yang sedang dilakukan jantung (misalnya sedang berolahraga atau dalam keadaan normal/istirahat) dan daya tahan pembuluh darahnya. \n Jika tidak terdeteksi dini dan terobati tepat waktu, hipertensi dapat mengakibatkan komplikasi serius penyakit jantung koroner, gagal jantung, stroke, gagal ginjal, kebutaan, diabetes, dan banyak penyakit berbahaya lainnya. Stroke (51%) dan Penyakit Jantung Koroner (45%) merupakan penyebab kematian akibat hipertensi tertinggi di Indonesia.'
//     },
//     {
//         name: 'Hipotermia',
//         image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1541056504/attached_image/jangan-buru-buru-minum-obat-penurun-panas-saat-demam-alodokter.jpg',
//         description: 'Hipotermia adalah kondisi yang terjadi ketika temperatur tubuh menjadi sangat rendah, jauh di bawah suhu tubuh normal sekitar 37º Celsius. Orang dengan hipotermia bisa memiliki suhu tubuh hingga di bawah 35º C. Hal ini dapat terjadi saat tubuh kehilangan panas lebih cepat daripada produksinya. \n Hipotermia adalah keadaan darurat. Jantung, sistem saraf, dan organ lain tidak dapat bekerja dengan baik dan dapat membahayakan nyawa.Hipotermia adalah kondisi yang lebih sering terjadi pada lansia dan anak kecil akibat cuaca yang sangat dingin. Orang dengan hipotermia harus segera dirawat sesegera mungkin. Anda dapat meminimalisir kemungkinan terkena hipotermia dengan mengurangi risikonya.'
//     },
//     {
//         name: 'Infeksi Pernafasan',
//         image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1509529038/attached_image/infeksi-saluran-pernapasan-alodokter.jpg',
//         description: 'Infeksi pernapasan adalah sejumlah penyakit infeksi pada saluran pernapasan. Infeksi jenis ini biasanya diklasifikasikan lebih lanjut sebagai infeksi saluran pernapasan atas (URI atau URTI) atau infeksi saluran pernapasan bawah (LRI atau LRTI). Infeksi saluran pernapasan bawah, seperti pneumonia, adalah kondisi yang cenderung lebih serius daripada infeksi saluran pernapasan atas, seperti pilek. \n Meskipun ada sejumlah ketidaksepakatan pada batas yang tepat antara saluran pernapasan atas dan bawah, saluran pernapasan atas secara umum dianggap sebagai jalan napas di atas glottis atau pita suara. Ini termasuk hidung, sinus, faring, dan laring. Infeksi lazim dari saluran pernapasan atas termasuk tonsillitis, faringitis, laryngitis, sinusitis, otitis media, jenis influenza tertentu, dan pilek. Gejala URI dapat meliputi batuk sakit tenggorokan, hidung meler, hidung tersumbat, sakit kepala, demam ringan, tekanan pada wajah dan bersin-bersin.'
//     },
//     {
//         name: 'Infeksi Telinga',
//         image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1541056504/attached_image/jangan-buru-buru-minum-obat-penurun-panas-saat-demam-alodokter.jpg',
//         description: 'Infeksi telinga adalah kondisi yang biasanya terjadi saat Anda menderita demam, radang tenggorokan, atau serangan alergi, dan kemudian menyebabkan cairan terjebak pada telinga tengah. Kondisi ini sering kali menyebabkan rasa sakit akibat peradangan dan penumpukan cairan. \n Pada orang dewasa, gejala infeksi telinga umumnya adalah sakit pada telinga (nyeri yang terasa tajam, tiba-tiba atau ringan dan berkelanjutan), nyeri tajam disertai keluarnya cairan hangat dari saluran telinga, merasa penuh pada telinga, mual, pendengaran yang meredam, keluarnya cairan dari telinga \n Pada anak-anak, gejala infeksi telinga dapat adalah menarik-narik telinga, kualitas tidur yang buruk, demam, mudah marah atau lelah, keluarganya cairan dari telinga, hilangnya nafsu makan, dan menangis pada malam hari saat berbaring. \n Kebanyakan infeksi telinga tidak menyebabkan komplikasi jangka panjang. Namun, infeksi yang sering dan tidak kunjung hilang dapat menyebabkan komplikasi serius seperti gangguan bicara dan pendengaran atau keterlambatan perkembangan, penyebaran infeksi, robeknya gendang telinga.'
//     },
//     {
//         name: 'Insomnia',
//         image: 'https://imgix.bustle.com/uploads/image/2018/10/10/56a85fa7-24d1-45ce-83f4-83b22a56239d-fotolia_220484340_subscription_monthly_m.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70',
//         description: 'Insomnia adalah kondisi di mana Anda merasa sangat sulit untuk tidur, sulit untuk tidur nyenyak, atau keduanya. Kondisi ini bisa menjadi kronis sehingga membuat Anda sama sekali tak bisa tidur, bahkan ketika Anda ingin tidur. Jika memiliki gangguan tidur ini, Anda biasanya akan bangun tidur dalam keadaan lelah. Akibatnya, aktivitas Anda di esok harinya akan terganggu. \n Gangguan tidur memiliki dua tipe, yaitu tipe primer dan sekunder. Tipe primer menandakan bahwa insomnia sebagai penyakit, yaitu muncul dengan sendirinya tidak terkait dengan kondisi medis apa pun. Sementara tipe sekunder menandakan sebagai gejala yang muncul akibat adanya kondisi medis lain. \n  Selain itu, gangguan tidur ini juga dibedakan berdasarkan intensitasnya, yaitu akut dan kronis. Insomnia akut terjadi dalam jangka pendek. Ini berlangsung dari satu malam hingga atau dalam beberapa minggu, hanya saja gejalanya datang dan pergi. Sementara insomnia kronis bisa bertahan lebih lama, yaitu tiga malam seminggu, sebulan, atau lebih dan hampir dirasakan setiap malam.'
//     },
//     {
//         name: 'Jerawat',
//         image: 'https://cdn.idntimes.com/content-images/community/2017/04/qwqq-482ecdb9e8fe997ac6b5f9c1e767553b_600x400.jpg',
//         description: 'Jerawat adalah penyakit kulit tidak menular yang terjadi saat folikel rambut tersumbat oleh kulit mati dan minyak. Folikel rambut adalah bagian yang menghubungkan pori-pori dengan kelenjar minyak (sebasea). Jika dibiarkan kondisi ini bisa memicu peradangan di kulit. Jerawat atau dalam istilah medis disebut acne vulgaris dapat berupa bintil merah ringan hingga kistik (jerawat batu) yang nyeri. \n '
//     },
//     {
//         name: 'Jamur Kuku',
//         image: 'https://hellosehat.com/wp-content/uploads/2018/10/perbedaan-psoriasis-kuku-dan-jamur-kuku.jpg',
//         description: 'Jamur kuku adalah kondisi di mana kuku-kuku jari tangan atau kuku-kuku jari kaki menunjukkan bercak putih atau kuning. Hal ini diakibatkan oleh infeksi jamur yang biasa  terjadi. Pengobatan untuk jamur di kuku umumnya tidak sulit. Namun, jika tidak ditangani dengan baik, penyakit ini bisa saja timbul kembali. \n Semua orang dapat mengalami jamur pada kuku, terutama bagi orang penderita diabetes. Anda dapat mencegah penyakit ini dengan menghindari faktor-faktor risiko. Hubungi dokter atau periksakan ke rumah sakit jika kondisi ini terus berlanjut, dan tidak kunjung reda. Anda juga harus menemui dokter jika Anda memiliki diabetes dan menderita jamur kuku. Status dan kondisi dapat bermacam-macam pada banyak orang. Selalu diskusikan dengan dokter Anda untuk menetapkan metode diagnosis, perawatan, dan pengobatan yang terbaik untuk Anda'
//     },
//     {
//         name: 'Jantung Lemah',
//         image: 'https://hellosehat.com/wp-content/uploads/2016/03/Lemah-Jantung-.jpg',
//         description: 'Jantung lemah adalah istilah yang digunakan ketika otot jantung melemah atau kardiomiopati. Kardiomiopati adalah penyakit di mana otot jantung melemah, merenggang, atau memiliki masalah pada strukturnya. Pada kasus yang jarang terjadi, jantung lemah akan tergantikan jaringannya dengan jaringan luka. \n Kondisi ini sering kali terjadi saat jantung tidak dapat memompa atau berfungsi dengan baik. Hal tersebut berpotensi menyebabkan detak jantung tidak beraturan, darah menumpuk di paru-paru, masalah katup jantung, atau gagal jantung. \n Kardiomiopati dapat diturunkan, yang artinya penyakit ini dapat diwariskan dari orang tua atau anggota keluarga. Penyakit ini juga bisa muncul akibat berbagai faktor penyebab lainnya atau sebagai dampak dari suatu masalah kesehatan lain.'
//     },
//     {
//         name: 'Kaki Bengkak',
//         image: 'https://hellosehat.com/wp-content/uploads/2017/12/edema-idiopatik-pembengkakan.jpg',
//         description: 'Edema perifer, atau yang lebih dikenal dengan kaki bengkak adalah kondisi kesehatan yang terjadi akibat penumpukan cairan di bagian kaki atau pergelangan kaki. Kondisi ini dapat timbul karena Anda terlalu lama berdiri, berjalan, atau duduk. Kaki bengkak juga bisa jadi tanda jika Anda kelebihan berat badan, malas gerak, atau memiliki kondisi medis tertentu. \n Penumpukan cairan ini biasanya tidaklah menyakitkan, kecuali jika disebabkan oleh cedera. Seseorang yang kakinya mengalami pembengkakan mungkin akan sedikit terganggu untuk melakukan aktivitas sehari-hari. \n Kaki bengkak adalah kondisi kesehatan yang sangat umum terjadi. Kondisi ini dapat menimpa pasien pada usia berapa pun. Namun, Anda dapat mencegahnya dengan mengurangi faktor risiko yang ada. Diskusikanlah dengan dokter Anda untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Kanker',
//         image: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/05/01/2336446421.jpg',
//         description: 'Penyakit ini terjadi karena pertumbuhan sel-sel abnormal yang tidak terkendali, yang menyebabkan jaringan tubuh normal rusak. Pada dasarnya, tubuh manusia terdiri dari triliunan sel yang tersebar di setiap organ dan bagian. Sel-sel ini nantinya akan terus tumbuh dan berkembang menjadi sel baru. Sementara sel-sel yang sudah tua, tidak sehat, dan tidak berfungsi lagi akan mati secara alamiah. \n Sementara sel kanker tidak akan mati dengan sendirinya. Sel ini akan terus mengganda dan memperbanyak diri hingga jumlah yang sudah tak bisa dikendalikan lagi. Perubahan inilah yang bisa memicu munculnya sel kanker. \n Dibandingkan dengan sel tubuh, sel kanker memiliki banyak sekali perbedaan. Sel ini dapat tumbuh secara agresif dan menyebar ke bagian tubuh lainnya guna membentuk sebuah jaringan baru. Sel kanker juga tidak bisa mati dan rusak dengan sendirinya. Penyakit kanker bisa muncul pada bagian tubuh manapun karena asalnya dari sel dalam tubuh manusia. \n Penyakit ini bisa menyerang siapapun tanpa pandang bulu. Mulai dari balita hingga lanjut usia, wanita maupun laki-laki, bahkan mereka yang gaya hidupnya cukup sehat. Hal ini dapat dikendalikan dengan mengurangi faktor risiko Anda'
//     },
//     {
//         name: 'Keracunan Makanan',
//         image: 'https://cdn.images.express.co.uk/img/dynamic/11/750x445/1060364.jpg',
//         description: 'Keracunan makanan adalah kondisi gangguan pencernaan yang terjadi karena makanan dan minuman yang terkontaminasi. Organisme menular seperti bakteri, virus, dan parasit adalah penyebab paling umum dari kondisi ini. Penyakit ini biasanya tidak serius dan kebanyakan orang kembali sehat dalam beberapa hari tanpa pengobatan. Kondisi ini umum terjadi dan dapat mempengaruhi pasien pada usia berapa pun.\nAnda harus menghubungi dokter Anda jika Anda memiliki salah satu dari gejala  keracunan makanan  seperti muntah, diare selama lebih dari tiga hari, sakit perut ekstrem atau kram perut yang parah, haus yang berlebihan, mulut kering, buang air kecil sedikit atau tidak sama sekali, kelemahan yang parah, pusing, penglihatan buram, kelemahan otot dan kesemutan di lengan.'
//     },
//     {
//         name: 'Leher Kaku',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkaTOBT4RliF9ApY0Nrw8IycYJA_1LMa0ZHZhHy9P5rzvFZNwr',
//         description: 'Leher kaku atau sakit leher adalah kondisi kesehatan umum yang pernah dialami hampir setiap orang dalam hidup. Ada beberapa penyebab seperti cedera saat berolahraga, aktivitas fisik, pekerjaan, menyebabkan otot leher yang tegang.\nLeher kaku dapat terjadi pada pasien dengan usia berapapun, dan dapat ditangani dengan mengurangi faktor-faktor risiko. Ciri dan gejala leher kaku adalah rasa sakit yang sering kali memburuk saat menahan kepala Anda di satu posisi dalam jangka waktu yang panjang, seperti saat menyetir atau di depan komputer, ketegangan dan spasme pada otot, menurunnya kemampuan untuk menggerakkan kepala dan sakit kepala.'
//     },
//     {
//         name: 'Luka Bakar',
//         image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1546412891/attached_image/obat-luka-bakar-alami-dan-pantangan-mengatasi-luka-bakar-alodokter.jpg',
//         description: 'Luka bakar adalah kerusakan yang terjadi pada jaringan tubuh manusia. Kerusakan diakibatkan oleh panas, zat kimia, listrik, sinar matahari, atau radiasi. Kondisi ini merupakan masalah medis yang tergolong ringan hingga mengancam nyawa.\nKondisi ini memiliki ciri khas kerusakan parah pada kulit, yang menyebabkan sel-sel pada kulit yang terdampak mati. Penyebab yang paling umum adalah cairan panas, kebakaran, dan zat atau cairan yang mudah terbakar.\nKondisi ini juga dapat menyebabkan pembengkakan, kulit melepuh, terbentuk luka, dan pada beberapa kasus yang parah bisa mengakibatkan syok dan kematian. Infeksi pun juga berisiko terjadi karena lapisan pelindung kulit mengalami kerusakan.'
//     },
//     {
//         name: 'Lutut Bengkak',
//         image: 'https://hellosehat.com/wp-content/uploads/2017/05/penyebab-sakit-lutut.jpg',
//         description: 'Lutut bengkak adalah kondisi yang disebut sebagai efusi. Efusi merupakan pembengkakan pada sendi lutut. Sebuah efusi bisa disebabkan banyak hal, termasuk cedera pada ligamen, tulang rawan, tulang, atau struktur sekitarnya.\nPembengkakan bisa terjadi dalam sendi lutut (efusi) atau di luar sendi otot (bursitis), dan dapat terjadi tiba-tiba sebagai akibat cedera atau akibat cedera berlebihan.'
//     },
//     {
//         name: 'Maag',
//         image: 'https://3.bp.blogspot.com/-0piN4-4h-sQ/W1WCK3_YWNI/AAAAAAAAClw/B7_egfPXL6AT24rdAk05fT-w2cP5kR4egCK4BGAYYCw/s1600/maag.jpg',
//         description: 'Maag adalah kondisi yang biasanya digunakan untuk menggambarkan berbagai keluhan karena gangguan pencernaan. Dengan kata lain, istilah maag sebenarnya tidak ada dalam kamus medis, alias bukanlah suatu penyakit khusus.\nSelama ini istilah maag biasanya dipakai untuk menunjukkan beragam keluhan mengenai masalah pencernaan. Meliputi mual, muntah, perut kembung, sakit perut, maupun dada yang terasa nyeri seolah terbakar (heartburn).\nMaag bisa dialami oleh siapa saja, tapi gejala gangguan pencernaan yang dialami oleh setiap orang tidak selalu sama. Selain itu, frekuensi munculnya maag yang dialami oleh setiap orang pun bisa berbeda-beda. Ada yang cukup sering mengalaminya, tapi ada juga yang sangat jarang.'
//     },
//     {
//         name: 'Memar',
//         image: 'https://static.republika.co.id/uploads/images/inpicture_slide/luka-memar-di-tangan-_180811234754-113.jpg',
//         description: 'Memar adalah perubahan warna kulit yang terjadi akibat pecahnya pembuluh darah kecil di bawah kulit, setelah cedera traumatis. Darah dari pembuluh darah yang rusak berkumpul di dekat permukaan, dan muncul seperti tanda berwarna hitam dan biru.\nKondisi ini sangat umum ditemui dan dapat terjadi pada pasien dengan usia berapapun. Memar dapat ditangani dengan mengurangi faktor-faktor risiko. Awalnya, memar yang baru muncul berwarna kemerahan dan berubah warna menjadi biru keunguan dalam beberapa jam, dan menjadi kuning atau hijau setelah beberapa hari pemulihan. Memar umumnya terasa sensitif dan kadang nyeri pada beberapa hari pertama, namun rasa sakit biasanya menghilang dengan memudarnya warna.Karena kulit tidak terbuka, tidak terdapat risiko infeksi.'
//     },
//     {
//         name: 'Mimisan',
//         image: 'https://hellosehat.com/wp-content/uploads/2017/02/penyebab-mimisan.jpg',
//         description: 'Hidung berdarah atau biasa disebut mimisan adalah gejala umum yang ditandai dengan darah yang keluar dari hidung. Ini disebabkan karena pecahnya pembuluh darah dalam hidung. Biasanya, darah hanya keluar dari salah satu lubang hidung.\nHampir setiap orang mengalami mimisan setidaknya sekali seumur hidup. Pada sebagian besar kasus, mimisan dapat ditangani dengan cara menekan hidung. Namun bagi beberapa orang, dibutuhkan penanganan medis yang lebih lanjut.\nKondisi ini cukup lazim.Usia anak- anak kemungkinan mengalami mimisan dua kali lipat lebih tinggi daripada orang dewasa.Dengan mengurangi risiko penyebab pendarahan pada hidung, Anda dapat terhindar dari kondisi ini.'
//     },
//     {
//         name: 'Nyeri Dada',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKI9QPhZgq7yqF4iZoZOl6NvYUSNSFcDTHSyBG-_h8ZDJuOmTx',
//         description: 'Nyeri dada adalah rasa sakit atau nyeri yang terasa di dada. Dalam beberapa kasus, nyeri yang muncul memiliki gejala yang berbeda-beda. Sakit di dada dapat berupa sensasi panas, tertusuk-tusuk, atau tertekan. Nyeri dada juga dapat merambat naik ke leher, rahang, dan kemudian menyebar ke punggung atau lengan.\nNyeri dada dapat disebabkan oleh berbagai macam penyebab. Salah satu penyebab yang paling berbahaya dan perlu penanganan serius adalah penyakit yang berhubungan dengan jantung atau paru-paru.\nNyeri dada adalah kondisi yang dapat terjadi pada semua usia. Namun, terdapat berbagai hal yang meningkatkan kemungkinan Anda merasakan sakit di dada, yaitu apabila Anda merokok, memiliki tekanan darah tinggi, kadar kolesterol tinggi, obesitas, dan diabetes.'
//     },
//     {
//         name: 'Nyeri haid',
//         image: 'https://hellosehat.com/wp-content/uploads/2018/06/Cara-Membedakan-Nyeri-Haid-yang-Normal-dan-Tidak-Normal.jpg',
//         description: 'Nyeri haid atau dismenore adalah rasa nyeri di perut bagian bawah yang muncul baik sebelum dan/atau saat haid. Nyeri biasanya mulai terasa dari 1-2 hari sebelum haid.\nRasa sakit ini biasanya didominasi oleh kram berdenyut di perut yang menyebar ke punggung hingga paha. Intensitas nyerinya bisa bervariasi pada tiap wanita dan tiap waktunya. Kadang terasa sangat kuat tetapi singkat, di lain waktu bisa terasa ringan tapi bertahan dalam waktu lama.'
//     },
//     {
//         name: 'Nyeri otot',
//         image: 'https://d1bpj0tv6vfxyp.cloudfront.net/penting-ketahui-perbedaan-nyeri-otot-biasa-dan-cedera-otot.jpg',
//         description: 'Sakit otot, juga disebut nyeri otot atau myalgia, adalah rasa nyeri dan sakit yang melibatkan sejumlah kecil atau seluruh otot tubuh, mulai dari ringan sampai amat sangat. Otot adalah jaringan lunak yang tersusun oleh filamen protein yang memiliki panjang dan bentuk yang fleksibel. Fungsi utama otot adalah untuk mempertahankan dan mengubah postur, daya gerak, serta pergerakan organ dalam.\nWalaupun kebanyakan sakit otot biasanya hilang dalam waktu singkat, dalam beberapa kasus dapat berlangsung dalam waktu yang lebih lama. Sakit otot dapat berkembang di hampir semua bagian tubuh, termasuk leher, punggung, kaki, dan bahkan tangan.'
//     },
//     {
//         name: 'Obesitas',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0YIP3q9FmUdTYZEjaIwGsZmWMNLMuIo8CchjQv6uTR2rSdUM',
//         description: 'Kegemukan alias obesitas adalah penumpukkan lemak yang tidak normal atau berlebihan di dalam tubuh. Kondisi ini jika dibiarkan terus menerus dapat mempengaruhi kesehatan penderitanya. Ya, kondisi ini tidak hanya berdampak pada penampilan fisik penderitanya, tetapi juga meningkatkan risiko dalam kesehatan seperti penyakit jantung, diabetes, dan tekanan darah tinggi.\nObesitas adalah salah satu masalah kesehatan terbesar di seluruh dunia. Selain dapat menyebabkan masalah kesehatan secara fisik, kondisi ini juga dapat menyebabkan masalah psikologis, seperti stres dan depresi.\nObesitas dan berat badan berlebih (overweight) merupakan dua konsep yang berbeda. Overweight adalah kondisi di mana terdapat kenaikan berat badan berlebih. Namun demikian, kenaikan berat badan tidak hanya disebabkan oleh lemak berlebih, tetapi juga bisa disebabkan massa otot atau cairan dalam tubuh'
//     },
//     {
//         name: 'OCD atau Obsessive Compulsive Disorder',
//         image: 'https://www.renewedfreedomcenter.com/wp-content/uploads/2019/07/AdobeStock_216284411.jpg',
//         description: 'OCD adalah gangguan obsesif kompulsif. Ini merupakan kelainan psikologis yang mempengaruhi pikiran dan perilaku penderitanya. Begitu seseorang memiliki penyakit OCD, pikiran dan rasa takut yang tidak diinginkan akan muncul secara terus menerus, menyebabkan penderita terobsesi pada sesuatu dan melakukan tindakan tertentu secara berulang-ulang sebagai respon terhadap ketakutannya.\nPenyakit OCD seringkali muncul saat usia di bawah 20 tahun, terutama pada mereka yang pernah mengalami kejadian yang menyebabkan stres dalam hidupnya. Gejala tersebut seringkali dapat diatasi namun tidak dapat dihilangkan.  Untuk informasi lebih lanjut harap hubungi dokter.'
//     },
//     {
//         name: 'Osteoporosis',
//         image: 'http://www.hårmineralanalysen.se/wp-content/uploads/sites/3/2017/10/ThinkstockPhotos-510270603.jpg',
//         description: 'Osteoporosis adalah masalah pengeroposan dan penurunan kepadatan massa tulang secara berkelanjutan.  Bagian dalam ulang yang sehat normalnya tampak memiliki banyak ruang kecil persis seperti sarang lebah. Pengeroposan tulang akan membuat ruangan-ruangan tersebut menjadi lebih lebar.\nKondisi ini lambat laun membuat tulang kehilangan kekuatannya sehingga menjadi lebih rapuh, hingga bahkan rentan patah akibat trauma kecil. Pertumbuhan tulang bagian luar juga cenderung lebih lemah dan tipis daripada seharusnya.\nBanyak orang berpikir bahwa osteoporosis terjadi secara alami dan tidak dapat dihindari karena bagian dari penuaan. Masalah tulang keropos memang sering tidak terdeteksi dan tidak diketahui hingga tulang tersebut akhirnya patah'
//     },
//     {
//         name: 'Pendarahan Otak',
//         image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-brain-hemorrhage-causes-symptoms-treatments.jpg',
//         description: 'Pendarahan otak merupakan salah satu jenis stroke yang disebut juga dengan istilah brain hemorrhage. Kondisi ini terjadi saat pembuluh arteri pada otak pecah. Pendarahan ini menyebabkan jaringan otak iritasi dan bengkak, atau disebut juga dengan cerebral edema. Darah akan menggenang dan menggumpal (hematoma). Gumpalan tersebut bisa akan menekan jaringan otak, hingga akhirnya mempengaruhi aliran darah di sekitarnya. Aliran darah tidak lancar, membuat sel-sel di otak tidak mendapatkan oksigen dan makanan.\nKondisi ini merupakan keadaan medis yang darurat dan memerlukan perawatan sesegera mungkin. Pada beberapa kasus, pasien dengan kondisi ini berakhir dengan kelumpuhan permanen. Namun, tidak sedikit pula pasien yang berhasil pulih dengan sempurna.\nKemungkinan komplikasi dapat meliputi stroke, kehilangan fungsi otak atau efek samping dari obat-obatan atau perawatan. Kematian dapat terjadi dengan cepat, walaupun dengan perawatan medis langsung sekalipun.'
//     },
//     {
//         name: 'Pikun',
//         image: 'https://hellosehat.com/wp-content/uploads/2016/08/pikun.jpg',
//         description: 'Pikun adalah kondisi ketika seseorang butuh waktu lebih lama untuk mengingat atau lupa apa yang mereka lakukan sebelumnya. Seiring bertambahnya usia, perubahan muncul di semua bagian tubuh, termasuk otak. Inilah sebabnya pikun adalah kondisi yang biasanya terjadi dalam proses penuaan.\nDalam dunia medis, pikun adalah salah satu gejala penyakit demensia dan penyakit Alzheimer. Kedua penyakit ini mengacu pada penurunan fungsi otak seperti menurunnya daya ingat dan kemampuan berpikir serta berperilaku.\nKondisi ini paling sering dialami oleh orang lanjut usia (lansia). Meski begitu, beberapa orang muda juga bisa saja mengalami pikun. Pikun pada orang muda biasanya disebabkan karena cedera kepala dan trauma psikologis parah. Wanita lebih sering mengalami hal ini daripada pria.'
//     },
//     {
//         name: 'Pusing',
//         image: 'https://doktersehat.com/wp-content/uploads/2019/05/pusing-sebelum-menstruasi-doktersehat.jpg',
//         description: 'Pusing adalah istilah yang sering digunakan untuk mendeskripsikan perasaan pening kepala dan tidak seimbang. Pusing bukanlah suatu penyakit, namun hanya suatu gejala dari berbagai masalah kesehatan.\nPusing dapat ditangani tergantung pada penyebabnya, namun pusing dapat kambuh lagi. Pada beberapa kasus, pusing bukanlah masalah serius dan akan menghilang dengan sendirinya atau apabila kondisi penyebab telah diatasi. Namun, jika pusing mengganggu kegiatan sehari-hari Anda, Anda dapat menggunakan obat untuk mengendalikannya.Pusing sangat umum terjadi. Kondisi ini dapat terjadi pada pasien dengan usia berapapun. Pusing dapat ditangani dengan mengurangi faktor-faktor risiko. Diskusikan dengan dokter untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Quadriplegia',
//         image: 'https://resources.stuff.co.nz/content/dam/images/1/g/s/w/m/t/image.related.StuffLandscapeSixteenByNine.710x400.1gsxyf.png/1485221560175.jpg',
//         description: 'Quadriplegia, atau tetraplegia, adalah kelumpuhan pada tangan, badan, kaki dan organ pelvis. Quadriplegia disebabkan oleh kerusakan pada saraf tulang belakang Anda. Jika saraf tulang belakang Anda rusak, Anda akan kehilangan indera perasa dan pergerakan.\nBanyak masalah yang dapat terjadi setelah cedera pada saraf tulang belakang. Beberapa dari masalah meliputi tekanan darah yang sangat rendah atau detak jantung yang sangat lambat. Mungkin Anda dapat mengalami kesulitan bernapas, atau tidak dapat bernafas tanpa bantuan. Kelumpuhan dapat menyebabkan luka pada kulit dan otot berkontraksi. Anda juga dapat mengalami pembekuan darah yang dapat mengancam nyawa.\nKadang tubuh Anda tidak dapat merespon dengan tepat terhadap masalah pada kemih atau usus. Kondisi ini disebut disrefleksia autonomik yang menyebabkan tekanan darah menjadi sangat tinggi. Jika tidak diatasi segera, kondisi ini dapat menyebabkan stroke bahkan kematian. Jika Anda memiliki quadriplegia dan tidak mendapatkan perawatan, Anda tidak dapat menjaga kondisi diri Anda sendiri. Bicarakan dengan pengasuh jika Anda memiliki pertanyaan atau kekhawatiran mengenai obat atau perawatan.'
//     },
//     {
//         name: 'Rabies',
//         image: 'http://yourbronxlawyers.com/wp-content/uploads/2017/09/dogbite.jpg',
//         description: 'Rabies, atau yang juga dikenal dengan sebutan penyakit anjing gila, adalah penyakit infeksi yang disebabkan oleh virus rabies. Seseorang dapat terkena penyakit ini apabila tergigit oleh binatang yang terinfeksi virus tersebut.\nUmumnya, virus rabies ditemukan di hewan liar. Beberapa hewan liar yang menyebarkan virus tersebut adalah sigung, rakun, kelelawar, dan rubah. Namun, di beberapa negara, masih banyak binatang peliharaan yang membawa virus tersebut, termasuk kucing dan anjing.\nKetika seseorang yang terpapar virus ini mulai menunjukkan tanda-tanda dan gejala, kemungkinan telah terjadi kerusakan pada sistem saraf pusat dan otaknya. Kondisi ini dapat berakibat fatal, bahkan tidak jarang berujung pada kematian.'
//     },
//     {
//         name: 'Rambut Rontok',
//         image: 'https://www-bebeautiful-in-mumbai.s3.ap-south-1.amazonaws.com/the-difference-between-hair-fall-and-hair-breakage_MobileHome.jpg',
//         description: 'Rambut rontok adalah ketika helai-helai rambut copot dari kulit kepala atau area lain di tubuh Anda. Kondisi yang memiliki istilah medis alopecia ini disebabkan oleh banyak hal, seperti faktor keturunan, perubahan hormon tubuh, kondisi kesehatan, atau konsumsi obat-obatan tertentu.\nRambut rontok dapat terjadi dengan berbagai cara yang berbeda, tergantung dari apa yang menjadi penyebabnya. Kondisi ini dapat terjadi secara mendadak atau bertahap, dan mempengaruhi bagian kulit kepala atau seluruh tubuh Anda. Beberapa jenis kerontokan rambut hanya terjadi untuk sementara, dan ada pula yang bersifat permanen.\nRambut rontok merupakan kondisi yang sangat umum dan dapat terjadi pada semua orang dari segala golongan usia. Namun, sebuah studi menunjukkan bahwa kerontokan rambut lebih banyak terjadi pada laki-laki dibanding perempuan.'
//     },
//     {
//         name: 'Ruam',
//         image: 'https://statik.tempo.co/data/2016/09/22/id_541323/541323_620.jpg',
//         description: 'Ruam adalah kelainan warna dan tekstur kulit yang gatal, akibat radang kulit yang bisa disebabkan oleh banyak hal.Ada banyak jenis ruam, termasuk eksim, cacar air, herpes, ruam panas, ruam popok, penyakit Lyme, dan bintik.\nRuam kulit tergolong umum. Wanita lebih rentan terhadap kondisi kulit ini. Gejala umum ruam kulit adalah gatal, kulit memerah, kulit tebal dan kasar, luka lepuh bernanah, dan infeksi area kulit yang rusak.'
//     },
//     {
//         name: 'Sariawan',
//         image: 'https://doktersehat.com/wp-content/uploads/2018/10/sariawan-doktersehat.jpg',
//         description: 'Sariawan (stomatitis) adalah luka kecil dan dangkal yang terasa sakit, biasanya muncul pada jaringan lunak dalam mulut.Luka bisa muncul di di gusi, bibir, lidah, atau sepanjang sisi pipi dalam mulut. Kemunculannya bisa hanya satu atau sekali banyak dan menyebar di dalam rongga mulut.\nStomatitis adalah salah satu masalah mulut yang paling umum. Hampir setiap orang pernah mengalami sariawan setidaknya sekali setahun.Pada dasarnya, kondisi ini dapat dialami siapa saja tanpa memandang usia dan jenis kelamin.Akan tetapi, wanita mungkin lebih rentan mengalami luka di mulut. Hal ini dipengaruhi oleh perubahan hormon yang dialami wanita menjelang menstruasi bulanan, kehamilan, atau menopause.'
//     },
//     {
//         name: 'Sembelit',
//         image: 'https://cdn2.tstatic.net/tribunnews/foto/bank/images/sembelit_20161111_154439.jpg',
//         description: 'Sembelit adalah suatu kondisi dimana pergerakan usus menurun atau sulit buang air besar untuk waktu yang lama. Sembelit atau yang punya nama lain konstipasi ini, umumnya diartikan sebagai kondisi buang air besar kurang dari 3 kali dalam seminggu. Sembelit biasanya sembuh jika Anda mengubah gaya hidup Anda, namun sembelit kronik akan lebih sulit untuk diterapi dan biasanya merupakan gejala dari kondisi medis yang lain\nSembelit adalah suatu kondisi di mana pergerakan usus menurun atau sulit buang air besar untuk waktu yang lama. Sembelit atau yang punya nama lain konstipasi ini, umumnya diartikan sebagai kondisi buang air besar kurang dari 3 kali dalam seminggu. Sembelit biasanya sembuh jika Anda mengubah gaya hidup Anda, namun sembelit kronik akan lebih sulit untuk diterapi dan biasanya merupakan gejala dari kondisi medis yang lain.\nSembelit adalah sesuatu yang normal jika hanya sesekali terjadi, dan akan sembuh dengan sendirinya. Biasanya disebabkan karena makanan, stres, atau perbedaan lingkungan. Sembelit kronik juga normal namun juga dapat merupakan tanda dari masalah yang lebih serius. Meski begitu, orang yang berisiko menderita sembelit biasanya adalah lansia, orang gemuk, wanita hamil, dan orang yang banyak duduk lama.'
//     },
//     {
//         name: 'Serangan Jantung',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZklhg-HIGDjbeGtkbM4lJkNhKurGJsIn4GCklCteUGMHcsgnK',
//         description: 'Serangan jantung adalah kondisi yang terjadi ketika aliran darah yang kaya akan oksigen tiba-tiba terhambat ke otot jantung, sehingga jantung tidak mendapat oksigen.  Jika aliran darah tidak dipulihkan dengan cepat, bagian dari otot jantung akan mulai mati. Kondisi ini, juga disebut dengan infark miokard, adalah kejadian gawat darurat yang dapat berakibat fatal jika tidak ditangani secepatnya.\nSerangan jantung adalah kondisi yang sangat umum terjadi dan menjadi salah satu dari banyak penyebab kematian bagi pria maupun wanita. Wanita di atas usia 55 dan pria di atas usia 45 tahun lebih berisiko terkena serangan jantung.Serangan jantung adalah kondisi yang gejalanya cukup bisa dirasakan. Dada terasa nyeri seperti tertimpa benda berat (dari sedang hingga parah) adalah gejala yang paling umum.'
//     },
//     {
//         name: 'TBC ( Tuberculosis )',
//         image: 'https://doktersehat.com/wp-content/uploads/2015/12/gejala-tbc.jpg',
//         description: 'TBC atau tuberculosis adalah infeksi bakteri Mycobacterium tuberculosis yang menyerang dan merusak jaringan tubuh manusia. Bakteri tersebut dapat ditularkan melalui saluran udara. TBC biasanya menyerang paru-paru, namun bisa juga menyebar ke tulang, kelenjar getah bening, sistem saraf pusat, jantung, dan organ lainnya.\nJenis tuberkulosis yang diderita oleh pasien sering kali merupakan infeksi TBC laten, di mana terdapat bakteri TBC yang “tertidur” atau belum aktif secara klinis. Bakteri TBC akan aktif dan mulai menunjukkan gejala setelah periode waktu tertentu, beberapa minggu bahkan beberapa tahun, tergantung kondisi kesehatan dan daya tahan pasien. Jika pasien memiliki sistem kekebalan tubuh yang melemah (misalnya pada penderita HIV, kanker, atau pasien yang menjalani kemoterapi), maka TBC akan berkembang lebih cepat.'
//     },
//     {
//         name: 'Tuli',
//         image: 'https://media.beritagar.id/2018-01/ca593eb03ad262452eeadbe94a04d38c.jpg',
//         description: 'Kehilangan pendengaran, juga dikenal dengan sebutan tuli, adalah kondisi di mana seseorang tidak dapat mendengar suara secara sebagian atau penuh pada salah satu atau kedua telinga. Penuaan dan paparan kronis pada suara yang nyaring adalah faktor yang berkontribusi pada ketulian. Faktor lainnya, seperti kotoran telinga berlebih, juga dapat menghambat telinga dari menghantarkan suara dengan semestinya.\n'
//     },
//     {
//         name: 'Tumor',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJFN_Teckeaj2ZiUcyfAZc-LhClsEXGAK0Z4VqLb7OfTbYA0I',
//         description: 'Tumor, dikenal juga dengan neoplasma, adalah istilah yang tidak spesifik namun sering digunakan untuk mendeskripsikan kumpulan jaringan abnormal yang padat atau berisi cairan. Ada jenis tumor yang jinak (biasanya dapat disembuhkan), semi ganas (pra-kanker) atau ganas (menyebabkan kanker).\nAda banyak jenis tumor yang berbeda, dan diberi nama berdasarkan bentuk dan jenis jaringan di mana tumor muncul. Tumor adalah kondisi yang umum terjadi, jutaan orang didiagnosis dengan berbagai jenis tumor setiap tahunnya. Tumor dapat ditangani dengan mengurangi faktor-faktor risiko. Diskusikan dengan dokter untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Ulcerative Colitis',
//         image: 'https://labiotech.eu/wp-content/uploads/2018/06/Ulcerative-Colitis-Cover.jpg',
//         description: 'Ulcerative Colitis (UC) adalah sebuah penyakit yang menyebabkan peradangan pada dinding saluran pencernaan. Dikenal juga dengan nama radang usus besar. Iritasi dari cairan tertentu membantu mencerna makanan dalam usus halus dan usus besar yang menyebabkan penyebaran radang pada bagian lain. Peradangan yang terjadi kadang kala bisa menyebabkan pendarahan dan menimbulkan nanah dan lendir. Cairan dalam saluran pencernaan masuk ke usus besar. Usus besar seringkali harus dikosongkan secara berkala, sehingga menyebabkan diare.\nPria dan wanita memiliki kemungkinan yang sama untuk mengalami UC dan biasanya UC merupakan penyakit turun temurun. Orang-orang yang berumur 15-35 tahun merupakan yang paling sering terkena penyakit ini. Kebanyakan orang mengidap UC seumur hidup mereka. Sekitar setengah pengidap UC memiliki gejala ringan namun yang lainnya memiliki gejala yang lebih parah dan sering.'
//     },
//     {
//         name: 'Ulnar Neurophaty',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC30pT4hEh2tiwXugB_Lpt1WeAxQyCN68lmBRnzEfVJTVcD1ai',
//         description: 'Ulnar neurophaty adalah peradangan pada saraf. Saraf ulnar adalah salah satu dari tiga saraf utama di lengan dan tangan. Ia memberikan sensasi pada bagian tangan dan jari (jari manis dan kelingking). Saraf ulnar rentan terhambat atau macet, khususnya di sekitar siku dan pergelangan (sindrom terowongan silindris dan sindrom terowongan karpis atau carpal tunnel syndrome).\nSetiap orang bisa terkena ulnar neuropathy. Penyakit ini dapat terjadi tanpa memperhatikan usia atau jenis kelamin. Tapi orang-orang yang sering tertekan sikunya memiliki risiko lebih tinggi.'
//     },
//     {
//         name: 'Uveitis',
//         image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/uveitis_slideshow/650ss_medical_images_rm_uveitis_close_up.jpg?resize=650px:*',
//         description: 'Uveitis adalah penyakit radang yang menyebabkan pembengkakan dan merusak jaringan mata. Kondisi ini meliputi peradangan pada lapisan tengah mata yang disebut saluran uveal atau uvea. Uvea meliputi bagian berwarna mata (iris), selaput tipis yang mengandung banyak pembuluh darah (koroid) dan badan silier (bagian mata yang menyambungkan semuanya). Uvea sangat penting karena mengandung banyak pembuluh darah dan arteri yang mengantarkan darah ke bagian lain pada mata. Penyakit ini sangat mempengaruhi pandangan Anda, mengurangi penglihatan dan dapat menyebabkan kehilangan penglihatan yang parah.'
//     },
//     {
//         name: 'Vaginitis',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMCYYzhNRuLuCLYdte815D0Lpin1YwXOni6N7B5G6TFTH08BF',
//         description: 'Vaginitis adalah peradangan vagina yang menyebabkan pembengkakan, gatal, perih, atau infeksi pada vagina. Vaginitis dapat disebabkan oleh bakteri, jamur, parasit, atau virus. Penyebab paling umum dari vaginitis adalah bacterial vaginosis, infeksi jamur, trichomoniasis, dan vaginitis non infeksius. Anda perlu berkonsultasi dengan dokter untuk menemukan penyebab pasti dari infeksi dan memilih perawatan yang tepat.\nVaginitis sangat umum terjadi. Kebanyakan wanita pernah mengalami vaginitis setidaknya sekali dalam hidup. Kondisi ini dapat terjadi pada wanita dengan usia berapapun. Vaginitis paling sering terjadi pada wanita muda yang aktif secara seksual. Kondisi ini dapat ditangani dengan mengurangi faktor-faktor risiko. Diskusikan dengan dokter untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Varises',
//         image: 'https://i2.wp.com/skinsecret.id/wp-content/uploads/2017/11/bukan-masalah-kini-varises-bisa-ditangani-skinsecret.id_.jpg?fit=800%2C533&ssl=1',
//         description: 'Varises adalah pembuluh darah vena yang membengkak dan tampak dekat dari permukaan kulit. Pembuluh vena membawa darah dengan rendah oksigen dari sel dan jaringan kembali ke jantung, di mana darah bisa kembali mendapatkan oksigen.\n'
//     },
//     {
//         name: 'Vertigo',
//         image: 'https://cdn2.tstatic.net/surabaya/foto/bank/images/5-cara-sederhana-mengurangi-gejala-vertigo_20181021_145821.jpg',
//         description: 'Vertigo adalah sebuah keadaan di mana penderitanya merasa seolah-olah lingkungan di sekitarnya berputar atau melayang. Kondisi ini juga akan membuat penderitanya kehilangan keseimbangan, sehingga kesulitan untuk sekadar berdiri atau bahkan berjalan. Cara terbaik untuk menggambarkan vertigo adalah dengan memutar tubuh Anda beberapa kali dan merasakan kondisi yang dihasilkan.\nPerlu diketahui, vertigo bukanlah nama penyakit. Namun, sebuah kumpulan gejala yang bisa terjadi secara tiba-tiba atau berlangsung selama jangka waktu tertentu dalam satu waktu. Harap konsultasikan ke dokter jika kondisi Anda tidak kunjung membaik. Dokter biasanya akan menanyakan gejala Anda, melakukan pemeriksaan sederhana, serta menganjurkan pemeriksaan lebih lanjut. Terutama apabila frekuensi Anda mengalami penyakit ini termasuk sering.'
//     },
//     {
//         name: 'Wasir',
//         image: 'https://doktersehat.com/wp-content/uploads/2018/08/obat-ambeien-alami-doktersehat.jpg',
//         description: 'Wasir adalah kondisi di mana pembuluh darah vena di sekitar anus meradang atau bengkak. Kondisi juga sering disebut sebagai hemorrhoid atau lebih terkenalnya disebut sebagai ambeien.\nWasir dapat muncul di dalam rektum (saluran yang menghubungkan usus besar dengan anus) atau di sekitar anus (dubur). Biasanya wasir disebabkan karena sering dan kelamaan mengejan saat BAB (buang air besar). Penyakit ini masih dibagi menjadi dua jenis, yaitu Internal hemorrhoid dan External hemorrhoid. Pada Internal hemorrhoid, wasir muncul di dalam saluran rektum Anda. Biasanya internal hemorrhoid tidak nyeri tapi menyebabkan BAB berdarah. Pada External hemorrhoid, wasir ini terletak di luar anus dan mungkin terasa gatal atau nyeri, terkadang bisa robek dan berdarah.'
//     },
//     {
//         name: 'Whiplash',
//         image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-whiplash.jpg',
//         description: 'Whiplash adalah kondisi cedera leher di mana leher Anda dipaksa menjulur terlalu jauh ke belakang lalu secara cepat maju ke depan. Otot ikat (ligamen), otot, tulang, dan sendi terluka. Cedera Lecutan bisa jadi sangat tidak nyaman dan menyebabkan orang-orang tidak dapat bekerja.\nWhiplash dapat menjangkit siapa saja dari rentang umur manapun, dan lebih banyak ditemukan terjadi pada wanita dibandingkan pria. Anda dapat mengurangi kemungkinan terkena cedera lecutan dengan cara mengurangi faktor-faktor yang berisiko. Selalu konsultasi dengan dokter untuk informasi lebih lanjut.'
//     },
//     {
//         name: 'Xerostomia',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXjX7vpdTWIQl-Zi8wZ4fepU7-FBjWT6_ZmwrVPhB097Ior4n',
//         description: 'Xerostomia adalah kondisi ketika mulut Anda terasa sangat kering.Mulut mengering karena kelenjar air liur tidak mampu menghasilkan cukup air liur untuk melembabkan rongga mulut.Efek samping obat-obatan tertentu, sedang gugup, dan jarang minum air putih juga bisa membuat Anda mengalami xerostomia.\nKondisi ini dapat menyebabkan lidah menjadi kasar, muncul sariawan, dan bibir retak-retak. Meski bukan kondisi yang berbahaya, xerostomia tidak boleh disepelekan.Ketika mulut terus-terusan kering, Anda mungkin akan kesulitan untuk mengunyah, menelan, dan bahkan berbicara. Mulut yang dibiarkan mengering juga dapat meningkatkan risiko pembusukan gigi atau infeksi jamur.\nBila tidak ditangani dengan tepat, kondisi ini juga dapat menyebabkan komplikasi seperti kerusakan gigi yang parah.Selain itu, mulut kering yang berlangsung lama dan tidak kunjung membaik juga bisa jadi tanda penyakit serius.'
//     },
//     {
//         name: 'Yellow Fever (Demam Kuning)',
//         image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/174/174372/jaundice-is-a-sign-of-yellow-fever.jpg',
//         description: 'Yellow Fever ( demam kuning ) adalah infeksi virus yang ditularkan melalui gigitan nyamuk yang ditemukan pada bagian Amerika Selatan dan Afrika. Apabila tertular pada manusia, virus demam kuning dapat merusak hati dan organ internal lainnya dapat menjadi fatal.\nInfeksi ini paling banyak ditemukan di daerah Afrika dan Amerika Selatan, mempengaruhi pengunjung dan penduduk area tersebut. Organisasi kesehatan dunia mengestimasi 200.000 kasus demam kuning di seluruh dunia setiap tahunnya. Yellow fever meningkat akibat menurunnya imunitas terhadap infeksi pada populasi lokal, deforestasi, perubahan iklim dan urbanisasi tinggi.\nYellow fever dapat ditangani dengan mengurangi faKtor-faktor risiko. Diskusikan dengan dokter untuk informasi lebih lanjut.'
//     },
//      async (err, penyakit) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Penyakit created')
//         }
//     }
// );

//GET BERGABUNG SEBAGAI AHLI PAGE
router.get('/', async (req, res) => {
    Penyakit.find({}, async (err, allPenyakits) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/idx.ejs', { penyakits: allPenyakits });
        }
    });
});

router.get('/', async (req, res) => {
    Penyakit.find({}, async (err, allPenyakits) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/idx.ejs', { penyakits: allPenyakits });
        }
    });
});

router.post('/', async (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newPenyakit = { name: name, image: image, description: desc }
    Penyakit.create(newPenyakit, async (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/idx');
        }
    })
})

router.get('/new', async (req, res) => {
    res.render('idx/new.ejs');
});

router.get('/a', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/a/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/b', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/b/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/c', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/c/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/d', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/d/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/e', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/e/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/f', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/f/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/g', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/g/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/h', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/h/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/i', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/i/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/j', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/j/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/k', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/k/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/l', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/l/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/m', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/m/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/n', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/n/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/o', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/o/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/p', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/p/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/q', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/q/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/r', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/r/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/s', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/s/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/t', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/t/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/u', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/u/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/v', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/v/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/w', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/w/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/x', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/x/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/y', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/y/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

router.get('/z', async (req, res) => {
    res.render('idx/a.ejs');
});

router.get('/z/:id', async (req, res) => {
    Penyakit.findById(req.params.id, async (err, foundPenyakit) => {
        if (err) {
            console.log(err);
        } else {
            res.render('idx/show', { penyakit: foundPenyakit })
        }
    })
    // res.send('THIS IS THE A PAGE');
})

module.exports = router;