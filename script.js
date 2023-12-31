const questionElement=document.getElementById("question"),answerButtons=document.getElementById("answer-buttons"),scoreElement=document.getElementById("score");let score=0,currentQuestionIndex=0;const quizData=[{question:"Siapakah presiden pertama Republik Indonesia?",answers:["Soekarno","Joko Widodo","Susilo Bambang Yudhoyono","Megawati Soekarnoputri",],correct:"Soekarno"},{question:"Apa nama ibukota Indonesia?",answers:["Bandung","Surabaya","Jakarta","Medan"],correct:"Jakarta"},{question:'Siapakah pahlawan nasional Indonesia yang terkenal dengan gelar "Pangeran Diponegoro"?',answers:["Gatot Soebroto","Tuanku Imam Bonjol","Cut Nyak Dien","Diponegoro",],correct:"Diponegoro"},{question:"Apa makanan khas Indonesia yang terbuat dari nasi dan dibungkus dalam daun pisang?",answers:["Nasi Kucing","Nasi Goreng","Nasi Padang","Nasi Uduk"],correct:"Nasi Uduk"},{question:"Siapakah penemu listrik?",answers:["Nikola Tesla","Thomas Edison","Albert Einstein","Alexander Graham Bell",],correct:"Nikola Tesla"},{question:"Apa nama tarian tradisional Bali yang sering ditampilkan dalam acara-acara kebudayaan?",answers:["Tari Piring","Tari Kecak","Tari Saman","Tari Legong"],correct:"Tari Legong"},{question:"Dalam sistem pencernaan manusia, apa nama organ yang bertugas untuk menghasilkan empedu?",answers:["Hati","Paru-paru","Ginjal","Pankreas"],correct:"Hati"},{question:'Siapakah penulis novel "Laskar Pelangi"?',answers:["Tere Liye","Andrea Hirata","Eka Kurniawan","Dewi Lestari"],correct:"Andrea Hirata"},{question:"Apa nama bunga nasional Indonesia yang memiliki ciri khas daun yang besar dan berbentuk hati?",answers:["Mawar","Melati","Kamboja","Anggrek"],correct:"Melati"},{question:'Siapakah tokoh pewayangan yang dikenal sebagai "Raden Inu Kertapati"?',answers:["Semar","Arjuna","Srikandi","Gatotkaca"],correct:"Semar"},{question:"Apa nama pulau terbesar di Indonesia?",answers:["Jawa","Sumatra","Kalimantan","Papua"],correct:"Papua"},{question:"Dalam sistem tata surya, berapakah urutan planet Bumi dari Matahari?",answers:["Keempat","Ketiga","Kedua","Kelima"],correct:"Ketiga"},{question:"Apa nama bentuk seni rupa yang melibatkan ukiran pada permukaan kayu?",answers:["Batik","Wayang","Keramik","Ukiran"],correct:"Ukiran"},{question:'Siapakah tokoh yang dijuluki "Bapak Proklamasi" karena peranannya dalam deklarasi kemerdekaan Indonesia?',answers:["Mohammad Hatta","Soekarno","Sutan Sjahrir","Adam Malik"],correct:"Soekarno"},{question:"Apa nama alat musik tradisional Indonesia yang terbuat dari bambu dan dimainkan dengan cara dipukul?",answers:["Gamelan","Sasando","Angklung","Kolintang"],correct:"Angklung"},{question:"Apa nama gunung tertinggi di Indonesia?",answers:["Gunung Semeru","Gunung Rinjani","Gunung Kerinci","Gunung Merapi",],correct:"Gunung Kerinci"},{question:'Siapakah penulis novel "Pramoedya Ananta Toer" yang dikenal dengan tetralogi "Bumi Manusia"?',answers:["Tere Liye","Ahmad Tohari","Eka Kurniawan","Pramoedya Ananta Toer",],correct:"Pramoedya Ananta Toer"},{question:"Apa nama tarian tradisional suku Minangkabau yang menggambarkan gerakan lembut dan elegan?",answers:["Tari Saman","Tari Kecak","Tari Piring","Tari Tari Piring"],correct:"Tari Piring"},{question:"Apa nama bahasa daerah yang digunakan di Provinsi Papua?",answers:["Bahasa Jawa","Bahasa Sundanese","Bahasa Batak","Bahasa Papua",],correct:"Bahasa Papua"},{question:'Siapakah penulis novel "Ayat-Ayat Cinta"?',answers:["Habiburrahman El Shirazy","Andrea Hirata","Tere Liye","Dewi Lestari",],correct:"Habiburrahman El Shirazy"},{question:"Apa nama tari tradisional suku Dayak yang menggambarkan tarian perang?",answers:["Tari Saman","Tari Cendrawasih","Tari Yospan","Tari Maengket"],correct:"Tari Maengket"},];function showQuestion(a){questionElement.innerText=a.question,answerButtons.innerHTML="",a.answers.forEach(n=>{let e=document.createElement("button");e.innerText=n,e.classList.add("btn"),e.addEventListener("click",()=>selectAnswer(n,a.correct)),answerButtons.appendChild(e)})}function selectAnswer(a,n){let e=answerButtons.getElementsByTagName("button");for(let r of e)r.disabled=!0;a===n?(score++,scoreElement.innerText=`Skor : ${score}`,Swal.fire("Correct!","Jawaban kamu benar!","success").then(()=>{showNextQuestion()})):Swal.fire("Incorrect!","Jawaban kamu salah!","error").then(()=>{showNextQuestion()})}function showNextQuestion(){if(++currentQuestionIndex<quizData.length){showQuestion(quizData[currentQuestionIndex]);let a=answerButtons.getElementsByTagName("button");for(let n of a)n.disabled=!1}else questionElement.innerText="Quiz Finished!",answerButtons.innerHTML=""}showQuestion(quizData[currentQuestionIndex]);