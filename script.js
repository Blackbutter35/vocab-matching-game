document.addEventListener('DOMContentLoaded', () => {
    const levels = [
        [
            { word: "dog", meaning: "หมา" },
            { word: "cat", meaning: "แมว" },
            { word: "apple", meaning: "แอปเปิ้ล" },
            { word: "banana", meaning: "กล้วย" },
            { word: "grape", meaning: "องุ่น" }
        ],
        [
            { word: "strawberry", meaning: "สตรอเบอร์รี่" },
            { word: "orange", meaning: "ส้ม" },
            { word: "watermelon", meaning: "แตงโม" },
            { word: "lemon", meaning: "มะนาว" },
            { word: "pineapple", meaning: "สับปะรด" }
        ],
        [
            { word: "elephant", meaning: "ช้าง" },
            { word: "tiger", meaning: "เสือ" },
            { word: "giraffe", meaning: "ยีราฟ" },
            { word: "lion", meaning: "สิงโต" },
            { word: "zebra", meaning: "ม้าลาย" }
        ],
        [
            { word: "monkey", meaning: "ลิง" },
            { word: "crocodile", meaning: "จระเข้" },
            { word: "snake", meaning: "งู" },
            { word: "frog", meaning: "กบ" },
            { word: "hippopotamus", meaning: "ฮิปโปโปเตมัส" }
        ],
        [
            { word: "car", meaning: "รถ" },
            { word: "bus", meaning: "รถบัส" },
            { word: "train", meaning: "รถไฟ" },
            { word: "bicycle", meaning: "จักรยาน" },
            { word: "motorcycle", meaning: "มอเตอร์ไซค์" }
        ],
        [
            { word: "airplane", meaning: "เครื่องบิน" },
            { word: "boat", meaning: "เรือ" },
            { word: "ship", meaning: "เรือเดินสมุทร" },
            { word: "helicopter", meaning: "เฮลิคอปเตอร์" },
            { word: "truck", meaning: "รถบรรทุก" }
        ],
        [
            { word: "table", meaning: "โต๊ะ" },
            { word: "chair", meaning: "เก้าอี้" },
            { word: "bed", meaning: "เตียง" },
            { word: "sofa", meaning: "โซฟา" },
            { word: "cupboard", meaning: "ตู้เก็บของ" }
        ],
        [
            { word: "shelf", meaning: "ชั้นวางของ" },
            { word: "lamp", meaning: "โคมไฟ" },
            { word: "window", meaning: "หน้าต่าง" },
            { word: "door", meaning: "ประตู" },
            { word: "mirror", meaning: "กระจก" }
        ],
        [
            { word: "sun", meaning: "ดวงอาทิตย์" },
            { word: "moon", meaning: "ดวงจันทร์" },
            { word: "star", meaning: "ดวงดาว" },
            { word: "planet", meaning: "ดาวเคราะห์" },
            { word: "galaxy", meaning: "กาแล็กซี" }
        ],
        [
            { word: "comet", meaning: "ดาวหาง" },
            { word: "asteroid", meaning: "ดาวเคราะห์น้อย" },
            { word: "black hole", meaning: "หลุมดำ" },
            { word: "universe", meaning: "จักรวาล" },
            { word: "constellation", meaning: "กลุ่มดาว" }
        ]
        

    ];

    const badges = [
        "Beginner", "Intermediate", "Advanced", "Expert", "Master"
    ];

    let currentLevel = 0;
    let score = 0;
    let firstSelection = null;
    let secondSelection = null;
    let isProcessing = false;  // เพิ่มตัวแปรนี้

    const loginMusic = document.getElementById('login-music');
    const gameMusic = document.getElementById('game-music');
    const reviewSection = document.getElementById('review-section');
    reviewSection.style.display = 'none'; // ซ่อนหน้าทบทวนคำศัพท์ตอนเริ่ม
    
    function stopAllMusic() {
        loginMusic.pause();
        gameMusic.pause();
        loginMusic.currentTime = 0; // รีเซ็ตเพลงล็อกอิน
        // ไม่รีเซ็ตเพลงเกมเพื่อให้เล่นต่อเนื่อง
    }

    // ฟังก์ชันเล่นเพลงล็อกอิน
    function playLoginMusic() {
        console.log("Playing login music...");
        stopAllMusic(); 
        loginMusic.play().catch((error) => {
            console.log("Autoplay was prevented. User interaction is required.");
        });
    }

    // ฟังก์ชันเล่นเพลงเกม
    function playGameMusic() {
        console.log("Playing game music...");
        if (gameMusic.paused) {
            gameMusic.play().catch((error) => {
                console.log("Autoplay was prevented. User interaction is required.");
            });
        }
    }

    function setupMusicHandlers() {
        // กรณีที่ผู้ใช้กดปุ่ม "เริ่มเกม"
        document.getElementById('start-button').addEventListener('click', () => {
            const usernameInput = document.getElementById('username-input').value.trim();
            if (usernameInput) {
                localStorage.setItem('username', usernameInput);
                playGameMusic(); // เริ่มเล่นเพลงเกม
                loadProfile(usernameInput, 0, 0);
                document.getElementById('start-section').classList.add('hidden');
                document.getElementById('profile-section').classList.remove('hidden');
                document.getElementById('game-section').classList.remove('hidden');
                startGame();
            } else {
                alert("กรุณากรอกชื่อผู้ใช้");
            }
        });
    
    
        // เมื่อผู้ใช้ทำการล็อกเอาท์ หยุดเพลงเกมและเล่นเพลงล็อกอิน
        document.getElementById('logout-button').addEventListener('click', () => {
            localStorage.clear(); // ลบข้อมูลทั้งหมด
            stopAllMusic(); // หยุดเพลงทั้งหมด
            playLoginMusic(); // เล่นเพลงล็อกอิน
            window.location.href = 'game.html'; // รีเฟรชหน้า
        });

        document.body.addEventListener('click', () => {
            const savedUsername = localStorage.getItem('username');
            if (!savedUsername) {
                playLoginMusic(); // เล่นเพลงล็อกอินถ้ายังไม่มีการล็อกอิน
            }
        });
    }

    function initialize() {
        const savedUsername = localStorage.getItem('username');
        const savedScore = localStorage.getItem('totalScore') || 0;
        const savedLevel = localStorage.getItem('passedLevel') || 0;
    
        document.getElementById('close-popup').addEventListener('click', closePopup);
        document.getElementById('start-button').addEventListener('click', () => {
            const usernameInput = document.getElementById('username-input').value.trim();
            if (usernameInput) {
                localStorage.setItem('username', usernameInput);
                playGameMusic(); // เริ่มเล่นเพลงเกม
                loadProfile(usernameInput, 0, 0);
                document.getElementById('start-section').classList.add('hidden');
                document.getElementById('profile-section').classList.remove('hidden');
                document.getElementById('game-section').classList.remove('hidden');
                startGame();
            } else {
                alert("กรุณากรอกชื่อผู้ใช้");
            }
        });
    
        if (savedUsername) {
            loadProfile(savedUsername, savedScore, savedLevel);
            document.getElementById('start-section').classList.add('hidden');
            document.getElementById('profile-section').classList.remove('hidden');
            document.getElementById('game-section').classList.remove('hidden');
            playGameMusic(); // เล่นเพลงในเกม
            startGame();
        } else {
            document.getElementById('start-section').classList.remove('hidden');
            document.getElementById('profile-section').classList.add('hidden');
            document.getElementById('game-section').classList.add('hidden');
            playLoginMusic(); // เล่นเพลงล็อกอิน
        }
    }
        
    

    function loadGameState() {
        const savedScore = localStorage.getItem('totalScore') || 0;
        const savedLevel = localStorage.getItem('currentLevel') || 0;
    
        document.getElementById('profile-total-score').textContent = savedScore;
        document.getElementById('profile-level').textContent = savedLevel;
    
        // ตรวจสอบว่าเกมถูกเล่นหรือไม่
        if (savedLevel > 0) {
            playGameMusic(); // เล่นเพลงเกมถ้ามีการเล่น
        } else {
            playLoginMusic(); // เล่นเพลงล็อกอินถ้ายังไม่ได้เล่น
        }
    }


    function saveGameState(username, score, level) {
        const gameState = {
            username: username,
            score: score,
            level: level || currentLevel
        };
        localStorage.setItem('gameState', JSON.stringify(gameState));
        localStorage.setItem('currentLevel', currentLevel);
    }

    function loadProfile(username, totalScore, passedLevel) {
        const savedScore = localStorage.getItem('totalScore') || 0;
        const savedLevel = localStorage.getItem('passedLevel') || 0;
        document.getElementById('profile-username').textContent = username;
        document.getElementById('game-username').textContent = username;
        document.getElementById('profile-total-score').textContent = savedScore;
        document.getElementById('profile-level').textContent = savedLevel;

        const badgesList = JSON.parse(localStorage.getItem('badges'));
        displayBadges(badgesList);

        currentLevel = parseInt(passedLevel, 10) || 0;
        score = parseInt(totalScore, 10) || 0;
        document.getElementById('level').textContent = `ด่าน: ${currentLevel + 1}`;

        stopAllMusic();
        playGameMusic();
    }
    
    function updateProfile(levelScore) {
        let totalScore = parseInt(localStorage.getItem('totalScore')) || 0;
        totalScore += levelScore;

        let passedLevel = parseInt(localStorage.getItem('passedLevel')) || 0;
        if (currentLevel + 1 > passedLevel) {
            localStorage.setItem('passedLevel', currentLevel + 1);
            awardBadge(currentLevel + 1);
        }

        localStorage.setItem('totalScore', totalScore);
        localStorage.setItem('currentLevel', currentLevel);

        document.getElementById('profile-total-score').textContent = totalScore;
        document.getElementById('profile-level').textContent = currentLevel + 1;
    }  

    function updateUI() {
        const levelElement = document.getElementById('level');
        const scoreElement = document.getElementById('score');
        const coinsElement = document.getElementById('profile-coins');
    
        if (levelElement) {
            levelElement.textContent = `ด่าน: ${currentLevel + 1}`;
        }
        if (scoreElement) {
            scoreElement.textContent = `คะแนน: ${score}`;
        }
        if (coinsElement) {
            coinsElement.textContent = `Coins: ${coins}`;
        }
    }


    function handleItemClick(event) {
        const correctSound = new Audio('sounds/correct.wav');
        const wrongSound = new Audio('sounds/wrong.wav');

        if (isProcessing || event.target.classList.contains('matched') || event.target === firstSelection) return;

        const item = event.target;

        if (!firstSelection) {
            firstSelection = item;
            firstSelection.style.backgroundColor = '#d3d3d3';
        } else {
            secondSelection = item;

            if (firstSelection.dataset.pair === secondSelection.dataset.pair) {
                correctSound.play();
                firstSelection.classList.add('matched', 'disabled');
                secondSelection.classList.add('matched', 'disabled');
                score += 10;
                document.getElementById('score').textContent = `คะแนน: ${score}`;

                firstSelection = null;
                secondSelection = null;

                if (document.querySelectorAll('.matched').length === levels[currentLevel].length * 2) {
                    setTimeout(() => {
                        updateProfile(score);

                        if (currentLevel < levels.length - 1) {
                            currentLevel++;
                            saveGameState();
                            startGame();
                        } else {
                            alert('คุณผ่านทุกด่านแล้ว!');
                            showReviewWords();
                        }
                    }, 500);
                }
            } else {
                wrongSound.play();
                score -= 5;
                document.getElementById('score').textContent = `คะแนน: ${score}`;
                firstSelection.style.backgroundColor = '#f8d7da';
                secondSelection.style.backgroundColor = '#f8d7da';

                setTimeout(() => {
                    firstSelection.style.backgroundColor = '';
                    secondSelection.style.backgroundColor = '';
                    firstSelection = null;
                    secondSelection = null;
                }, 1000);
            }
        }

        saveGameState(localStorage.getItem('username'), score, currentLevel);
    }
    
   
    

    function startGame() {
        score = 0;
        document.getElementById('score').textContent = `คะแนน: ${score}`;
        document.getElementById('level').textContent = `ด่าน: ${currentLevel + 1}`;

        stopAllMusic();
        playGameMusic();

        loadLevel(currentLevel);
    }
    

    function loadLevel(levelIndex) {
        const levelData = levels[levelIndex];
        const gameContainer = document.getElementById('game-container');
        gameContainer.innerHTML = '';

        let wordsArray = [];
        levelData.forEach((item, index) => {
            wordsArray.push(createItem(item.word, index));
            wordsArray.push(createItem(item.meaning, index));
        });

        wordsArray = shuffle(wordsArray);
        wordsArray.forEach(item => gameContainer.appendChild(item));
    }

    function updateGameProgress(score, level) {
        const username = document.getElementById('username-input').value;
        saveGameState(username, score, level);
    }
    

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    function createItem(text, pairIndex) {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = text;
        div.dataset.pair = pairIndex;
        div.addEventListener('click', handleItemClick);
        return div;
    }


    function awardBadge(level) {
        const badgesList = JSON.parse(localStorage.getItem('badges')) || [];
        if (level - 1 < badges.length) {
            const newBadge = badges[level - 1];
            badgesList.push(newBadge);
            localStorage.setItem('badges', JSON.stringify(badgesList));
            displayBadges(badgesList);
            showRewardPopup(newBadge); // เรียกใช้ป๊อปอัพ
        }
    }
    

    function displayBadges(badgesList) {
        const badgesContainer = document.getElementById('profile-badges');
        badgesContainer.innerHTML = '';
    
        if (badgesList && badgesList.length > 0) { // ตรวจสอบว่า badgesList มีข้อมูล
            badgesList.forEach(badge => {
                const badgeItem = document.createElement('div');
                badgeItem.className = 'badge';
    
                const badgeImg = document.createElement('img');
                badgeImg.src = `images/badge-${badge.toLowerCase()}.png`;
                badgeImg.alt = badge;
    
                const badgeText = document.createElement('span');
                badgeText.textContent = badge;
    
                badgeItem.appendChild(badgeImg);
                badgeItem.appendChild(badgeText);
    
                badgesContainer.appendChild(badgeItem);
            });
        } else {
            console.log("No badges to display");
        }
    }

    function showPopup() {
        document.getElementById('reward-popup').style.display = 'block';
    }
    
    function closePopup() {
        const popup = document.getElementById('reward-popup');
        popup.style.display = 'none'; // ซ่อนป๊อปอัพ
    }
    
    function showRewardPopup(badge) {
        const popup = document.getElementById('reward-popup');
        if (!popup) return; // ตรวจสอบว่ามีป๊อปอัพนี้อยู่หรือไม่
        const badgeText = document.getElementById('badge-text');
        const badgeImage = document.getElementById('badge-image');
    
        badgeText.textContent = `คุณได้รับเหรียญตรา: ${badge}`;
        badgeImage.src = `images/badge-${badge.toLowerCase()}.png`; // ปรับตามที่อยู่ของรูปภาพ
        popup.style.display = 'block'; // แสดงป๊อปอัพ
    }

    function showEndGamePopup() {
        const endGamePopup = document.getElementById('end-game-popup');
        endGamePopup.style.display = 'block'; // แสดงป๊อปอัพ
        document.getElementById('close-end-popup').addEventListener('click', closeEndPopup);
        document.getElementById('go-to-review').addEventListener('click', goToReview);
    }

    function showReviewPopup() {
        document.getElementById('review-popup').style.display = 'block';
    }
    
    function closeReviewPopup() {
        document.getElementById('review-popup').style.display = 'none'; // ซ่อนป๊อปอัพ
    }

    function closeEndPopup() {
        document.getElementById('end-game-popup').style.display = 'none'; // ซ่อนป๊อปอัพ
    }

    function goToReview() {
        closeEndPopup();
        showReviewWords(); // เรียกใช้ฟังก์ชันเพื่อแสดงหน้าทบทวน
    }

    
    document.getElementById('close-review-popup').addEventListener('click', closeReviewPopup);
    document.getElementById('go-to-review').addEventListener('click', function() {
        closeReviewPopup();
        showReviewWords(); // เรียกใช้ฟังก์ชันแสดงหน้าทบทวนคำศัพท์
    });
    
    

    function showReviewWords() {
        const reviewSection = document.getElementById('review-section');
        reviewSection.style.display = 'block';
        document.getElementById('game-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'block';
    
        const reviewContainer = document.createElement('div');
        reviewContainer.className = 'review-container';
        reviewSection.innerHTML = ''; // เคลียร์เนื้อหาเก่า
        reviewSection.appendChild(reviewContainer); // เพิ่ม container สำหรับกรอบ
    
        levels.forEach((levelWords, index) => {
            const levelDiv = document.createElement('div');
            levelDiv.className = 'level-review';
            levelDiv.innerHTML = `<h3>คำศัพท์จากด่านที่ ${index + 1}</h3>`;
            reviewContainer.appendChild(levelDiv); // เพิ่มชื่อด่านเข้าไป
    
            const questionBox = document.createElement('div');
            questionBox.className = 'question-box'; // กรอบใหญ่สำหรับข้อ
            levelDiv.appendChild(questionBox); // เพิ่มกรอบใหญ่เข้าไปในระดับ
    
            levelWords.forEach(({ word, meaning }) => {
                const reviewBox = document.createElement('div');
                reviewBox.className = 'review-box';
                reviewBox.innerHTML = `<strong>${word}</strong><br>${meaning}`;
                questionBox.appendChild(reviewBox); // เพิ่มกรอบเล็กเข้าไปในกรอบใหญ่
            });
        });
    
        localStorage.setItem('isReviewing', 'true');
    }
    

    function resetReviewStatus() {
        localStorage.removeItem('isReviewing');
    }


    function endGame() {
        const username = localStorage.getItem('username');
        updateHighScore(username, score); // เรียกใช้การบันทึก High Score
        alert(`คุณผ่านทุกด่านแล้ว! High Score: ${score}`);
    
        // แสดงป๊อปอัพแจ้งเตือน
        showRewardPopup("คุณผ่านทุกด่านแล้ว!"); // หรือข้อความที่คุณต้องการ
    }

    setupMusicHandlers();
    initialize();
    awardBadge(level); // ฟังก์ชันที่ให้เหรียญตรา

});
