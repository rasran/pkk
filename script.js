const questions = [
  {
    type: "image",
    question: "Apa nama tarian ini?",
    tileSources: [
      "gambar/tebak_ganbar1/jaipon_piece_0_0.png",
      "gambar/tebak_ganbar1/jaipon_piece_0_1.png",
      "gambar/tebak_ganbar1/jaipon_piece_0_2.png",
      "gambar/tebak_ganbar1/jaipon_piece_1_0.png",
      "gambar/tebak_ganbar1/jaipon_piece_1_1.png",
      "gambar/tebak_ganbar1/jaipon_piece_1_2.png",
      "gambar/tebak_ganbar1/jaipon_piece_2_0.png",
      "gambar/tebak_ganbar1/jaipon_piece_2_1.png",
      "gambar/tebak_ganbar1/jaipon_piece_2_2.png"
    ],
    coloredTileSources: [ // tambahkan ini
      "gambar/tebak_ganbar1/jaipongwarna_piece_0_0.png",
      "gambar/tebak_ganbar1/jaipongwarna_piece_0_1.png",
      "gambar/tebak_ganbar1/jaipongwarna_piece_0_2.png",
      "gambar/tebak_ganbar1/jaipongwarna_piece_1_0.png",
      "gambar/tebak_ganbar1/jaipongwarna_piece_1_1.png",
      "gambar/tebak_ganbar1/jaipongwarna_piece_1_2.png",
      "gambar/tebak_ganbar1/jaipongwarna_piece_2_0.png",
      "gambar/tebak_ganbar1/jaipongwarna_piece_2_1.png",
      "gambar/tebak_ganbar1/jaipongwarna_piece_2_2.png",
    ],
    options: ["Tari Piring", "Tari Jaipong", "Tari Saman", "Tari Kecak"],
    answer: "Tari Jaipong"
  },
  {
    type: "video",
    src: "video/Tari_Topeng.mp4",
    question: "Tari apa dalam video ini?",
    options: ["Tari Topeng", "Tari Merak", "Tari Pendet", "Tari Saman"],
    answer: "Tari Topeng"
  },
  {
    question:"Dalam konteks budaya, Tari Merak mengandung simbolisme...",
    options: ["Perlawanan terhadap penjajah","Kedewasaan wanita Sunda","Keindahan, keanggunan, dan pesona", "Kekuatan dan kekuasaan pria"],
    answer: "Keindahan, keanggunan, dan pesona"
  },
  {
    type: "image",
    question: "Apa nama tarian ini?",
    tileSources: [
      "gambar/tebak_ganbar1/topeng_piece_0_0.png",
      "gambar/tebak_ganbar1/topeng_piece_0_1.png",
      "gambar/tebak_ganbar1/topeng_piece_0_2.png",
      "gambar/tebak_ganbar1/topeng_piece_1_0.png",
      "gambar/tebak_ganbar1/topeng_piece_1_1.png",
      "gambar/tebak_ganbar1/topeng_piece_1_2.png",
      "gambar/tebak_ganbar1/topeng_piece_2_0.png",
      "gambar/tebak_ganbar1/topeng_piece_2_1.png",
      "gambar/tebak_ganbar1/topeng_piece_2_2.png"
    ],
    coloredTileSources: [ // tambahkan ini
      "gambar/tebak_ganbar1/topeng_0_0.png",
      "gambar/tebak_ganbar1/topeng_0_1.png",
      "gambar/tebak_ganbar1/topeng_0_2.png",
      "gambar/tebak_ganbar1/topeng_1_0.png",
      "gambar/tebak_ganbar1/topeng_1_1.png",
      "gambar/tebak_ganbar1/topeng_1_2.png",
      "gambar/tebak_ganbar1/topeng_2_0.png",
      "gambar/tebak_ganbar1/topeng_2_1.png",
      "gambar/tebak_ganbar1/topeng_2_2.png"
    ],
    options: ["Tari Piring", "Tari Jaipong", "Tari Saman", "Tari Topeng"],
    answer: "Tari Topeng"
  },
  {
    type: "video",
    src: "video/Tari_Merak.mp4",
    question: "Tari apa dalam video ini?",
    options: ["Tari Topeng", "Tari Merak", "Tari Pendet", "Tari Saman"],
    answer: "Tari Merak"
  },
  {
    question:"Apa makna filosofis penggunaan warna topeng dalam Tari Topeng Cirebon?",
    options:["Warna mewakili wilayah tarian", "Mewakili kepribadian atau karakter moral", " Membedakan antara laki-laki dan perempuan", "Digunakan hanya untuk dekorasi artistik"],
    answer: "Mewakili kepribadian atau karakter moral"
  },

  {
    type: "image",
    question: "Apa nama tarian ini?",
    tileSources: [
      "gambar/tebak_ganbar1/merak_tile_0_0.jpg",
      "gambar/tebak_ganbar1/merak_tile_0_1.jpg",
      "gambar/tebak_ganbar1/merak_tile_0_2.jpg",
      "gambar/tebak_ganbar1/merak_tile_1_0.jpg",
      "gambar/tebak_ganbar1/merak_tile_1_1.jpg",
      "gambar/tebak_ganbar1/merak_tile_1_2.jpg",
      "gambar/tebak_ganbar1/merak_tile_2_0.jpg",
      "gambar/tebak_ganbar1/merak_tile_2_1.jpg",
      "gambar/tebak_ganbar1/merak_tile_2_2.jpg"
    ],
    coloredTileSources: [ // tambahkan ini
      "gambar/tebak_ganbar1/merak_piece_0_0.png",
      "gambar/tebak_ganbar1/merak_piece_0_1.png",
      "gambar/tebak_ganbar1/merak_piece_0_2.png",
      "gambar/tebak_ganbar1/merak_piece_1_0.png",
      "gambar/tebak_ganbar1/merak_piece_1_1.png",
      "gambar/tebak_ganbar1/merak_piece_1_2.png",
      "gambar/tebak_ganbar1/merak_piece_2_0.png",
      "gambar/tebak_ganbar1/merak_piece_2_1.png",
      "gambar/tebak_ganbar1/merak_piece_2_2.png"
    ],
    options: ["Tari Merak", "Tari Jaipong", "Tari Saman", "Tari Kecak"],
    answer: "Tari Merak"
  },
  {
    type: "video",
    src: "video/Tari_Jaipong.mp4",
    question: "Tari apa dalam video ini?",
    options: ["Tari Topeng", "Tari Merak", "Tari Jaipong", "Tari Saman"],
    answer: "Tari Jaipong"
  },
  {
  question:"Apa hubungan antara gerakan dalam Tari Jaipong dan seni bela diri tradisional?",
  options:["Semua gerakan Jaipong adalah jurus silat", "Gerakan tari meniru postur bertahan silat", "Silat hanya digunakan untuk pembukaan", "Tidak ada hubungan sama sekali"],
  answer:"Gerakan tari meniru postur bertahan silat"
  },
  {
    question:"Tari Topeng ditarikan secara solo, berpasangan, atau kelompok tergantung...",
    options:["Banyaknya properti yang dibawa", "Status sosial penari", "Usia penonton", "Jenis upacara dan makna cerita yang dibawakan"],
    answer:"Jenis upacara dan makna cerita yang dibawakan"
    }
];

let currentQuestion = 0;
let score = 0;
let lives = 3;
let puzzleSelesai = false; // Status puzzle

const questionText = document.getElementById("questionText");
const videoQuestion = document.getElementById("videoQuestion");
const puzzleContainer = document.getElementById("puzzleContainer");
const livesDisplay = document.getElementById("lives");
const levelText = document.getElementById("levelText");
const nextButton = document.getElementById("nextButton");
const intro = document.getElementById("intro");
const optionButtons = [
  document.getElementById("optionA"),
  document.getElementById("optionB"),
  document.getElementById("optionC"),
  document.getElementById("optionD")
];

function updateLives() {
  livesDisplay.innerHTML = "❤️ ".repeat(lives);
}

document.getElementById('startButton').addEventListener('click', function() {
  const playerName = document.getElementById('playerName').value;
  const playerClass = document.getElementById('playerClass').value;

  if (playerName && playerClass) {
    intro.style.display = 'none';
    document.getElementById('quiz_music').style.display = 'block';
    startQuiz();
  } else {
    alert('Silakan masukkan nama dan kelas Anda!');
  }
});

// Fungsi untuk memulai kuis
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  lives = 3;
  puzzleSelesai = false; // reset status puzzle saat mulai soal baru
  updateLives();
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  levelText.textContent = `Soal ${currentQuestion + 1}`;
  puzzleContainer.style.display = "none";
  videoQuestion.style.display = "none";
  nextButton.style.display = "none";
  
  puzzleSelesai = false; // reset status puzzle saat mulai soal baru

  if (q.type === "image") {
    loadPuzzle(q.tileSources);
    puzzleContainer.style.display = "grid";
  } else if (q.type === "video") {
    videoQuestion.src = q.src;
    videoQuestion.style.display = "block";
  }

  optionButtons.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.style.backgroundColor = "";
    btn.disabled = (q.type === "image"); // Disable buttons initially if puzzle image
    btn.onclick = () => {
      if (q.type === "image" && !puzzleSelesai) {
        alert("Anda harus menyusun puzzle terlebih dahulu sampai selesai!");
      } else {
        selectAnswer(q.options[i], q.answer, btn);
      }
    };
  });
}

function selesaiSusunPuzzle() {
  puzzleSelesai = true;
  // Enable option buttons after puzzle is completed
  optionButtons.forEach(btn => btn.disabled = false);
  console.log("Puzzle selesai disusun!");
}

const music = document.getElementById('soal_music');
const toggleButton = document.getElementById('musicButton');
const audio = document.getElementById('soal_music');
const musicButton = document.getElementById('musicButton');

let isPlaying = true;

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicButton.textContent = 'Play Music';
    } else {
        audio.play();
        musicButton.textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
}

musicButton.addEventListener('click', toggleMusic);

const correctSound = new Audio('benar.mp3'); // Ganti dengan jalur yang benar
const wrongSound = new Audio('salah.mp3'); // Ganti dengan jalur yang benar

function selectAnswer(selected, correct, button) {
  optionButtons.forEach(btn => btn.disabled = true);

  const q = questions[currentQuestion];

  if (selected === correct) {
    button.style.backgroundColor = "lightgreen";
    score += 10;
    correctSound.play();

    if (q.type === "image" && q.coloredTileSources) {
      const tiles = [...puzzleContainer.children];
      tiles.forEach((tile, idx) => {
        tile.src = q.coloredTileSources[idx];
      });
    }

  } else {
    button.style.backgroundColor = "salmon";
    lives--;
    updateLives();
    wrongSound.play();

    if (lives <= 0) {
      setTimeout(showResult, 1000);
      return;
    }
  }

  // Remove nextButton usage and automatically advance after 3 seconds
  setTimeout(() => {
    if (lives <= 0 || currentQuestion >= questions.length - 1) {
      showResult();
    } else {
      currentQuestion++;
      showQuestion();
    }
  }, 3000);
}

// Remove onclick handler for nextButton since it's not used anymore
nextButton.onclick = null;

function showResult() {
  document.querySelector("h1").style.display = "none";
  const playerName = document.getElementById('playerName').value;
  const playerClass = document.getElementById('playerClass').value;

  document.getElementById("finalScore").textContent = `Skor Akhir: ${score}`;
  document.getElementById("finalName").textContent = `Nama: ${playerName}`;
  document.getElementById("finalClass").textContent = `Kelas: ${playerClass}`;

  document.getElementById("resultScreen").style.display = "block";
  document.getElementById("questionText").style.display = "none";
  document.getElementById("container").style.display = "none";
  puzzleContainer.style.display = "none";
  videoQuestion.style.display = "none";
  optionButtons.forEach(btn => btn.style.display = "none");
  nextButton.style.display = "none";
}

function calculateGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 75) return "B";
  else if (score >= 60) return "C";
  else return "D";
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadPuzzle(tileSources) {
  puzzleContainer.innerHTML = '';

  const correctOrder = [...tileSources];
  const shuffledOrder = shuffle([...tileSources]);

  shuffledOrder.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "puzzle-tile";
    img.draggable = true;
    img.dataset.index = correctOrder.indexOf(src);

    img.addEventListener("dragstart", dragStart);
    img.addEventListener("dragover", dragOver);
    img.addEventListener("drop", dropTile);

    puzzleContainer.appendChild(img);
  });

  // Disable option buttons initially for puzzle question
  optionButtons.forEach(btn => btn.disabled = true);

  puzzleSelesai = false; // reset puzzle status here too
}

let draggedTile = null;

function dragStart(e) {
  draggedTile = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dropTile(e) {
  e.preventDefault();

  const targetTile = e.target;
  if (draggedTile && targetTile && draggedTile !== targetTile) {
    const tempSrc = draggedTile.src;
    const tempIndex = draggedTile.dataset.index;

    draggedTile.src = targetTile.src;
    draggedTile.dataset.index = targetTile.dataset.index;

    targetTile.src = tempSrc;
    targetTile.dataset.index = tempIndex;

    checkPuzzleCompletion();
  }
}

function checkPuzzleCompletion() {
  const tiles = [...puzzleContainer.children];
  const correct = tiles.every((tile, idx) => Number(tile.dataset.index) === idx);

  if (correct) {
    selesaiSusunPuzzle(); // Call this function when puzzle is completed
  }
}

updateLives();
showQuestion();
