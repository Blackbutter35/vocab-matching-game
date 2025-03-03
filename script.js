document.addEventListener('DOMContentLoaded', () => {
    const levels = [
        // การเขียนโปรแกรม (4 ด่าน)
        [
            { word: "Variable", meaning: "ตัวแปร", example: "A variable stores a value that can change during execution.", translation: "ตัวแปรใช้เก็บค่าที่สามารถเปลี่ยนแปลงได้ในระหว่างการทำงานของโปรแกรม" },
            { word: "Function", meaning: "ฟังก์ชัน", example: "A function groups a block of reusable code together.", translation: "ฟังก์ชันใช้รวมบล็อกของโค้ดที่สามารถนำมาใช้ซ้ำได้" },
            { word: "Loop", meaning: "ลูป", example: "Loops allow a program to repeat a block of code multiple times.", translation: "ลูปช่วยให้โปรแกรมทำซ้ำบล็อกของโค้ดหลายครั้ง" },
            { word: "Array", meaning: "อาเรย์", example: "An array is a collection of elements stored in a single variable.", translation: "อาเรย์คือชุดของค่าที่เก็บในตัวแปรเดียว" },
            { word: "Condition", meaning: "เงื่อนไข", example: "Conditional statements execute code based on a condition.", translation: "คำสั่งเงื่อนไขทำให้โค้ดทำงานตามเงื่อนไขที่กำหนด" }
        ],
        [
            { word: "Object-Oriented", meaning: "เชิงวัตถุ", example: "Object-oriented programming organizes code into reusable objects.", translation: "การเขียนโปรแกรมเชิงวัตถุช่วยจัดระเบียบโค้ดให้เป็นออบเจ็กต์ที่นำกลับมาใช้ใหม่ได้" },
            { word: "Class", meaning: "คลาส", example: "A class is a blueprint for creating objects in OOP.", translation: "คลาสเป็นแม่แบบสำหรับสร้างออบเจ็กต์ใน OOP" },
            { word: "Method", meaning: "เมธอด", example: "A method defines a function inside a class.", translation: "เมธอดคือนิยามของฟังก์ชันภายในคลาส" },
            { word: "Inheritance", meaning: "การสืบทอด", example: "Inheritance allows a class to acquire properties from another class.", translation: "การสืบทอดช่วยให้คลาสได้รับคุณสมบัติจากคลาสอื่น" },
            { word: "Encapsulation", meaning: "การห่อหุ้ม", example: "Encapsulation hides the internal details of an object.", translation: "การห่อหุ้มช่วยซ่อนรายละเอียดภายในของออบเจ็กต์" }
        ],
        [
            { word: "Debugging", meaning: "การดีบัก", example: "Debugging is the process of finding and fixing errors in code.", translation: "การดีบักคือกระบวนการค้นหาและแก้ไขข้อผิดพลาดในโค้ด" },
            { word: "Algorithm", meaning: "อัลกอริทึม", example: "An algorithm is a set of steps to solve a problem.", translation: "อัลกอริทึมคือชุดของขั้นตอนในการแก้ปัญหา" },
            { word: "Framework", meaning: "เฟรมเวิร์ก", example: "A framework provides a foundation for developing applications.", translation: "เฟรมเวิร์กเป็นโครงสร้างพื้นฐานสำหรับพัฒนาแอปพลิเคชัน" },
            { word: "Library", meaning: "ไลบรารี", example: "A library contains reusable pieces of code.", translation: "ไลบรารีมีโค้ดที่สามารถนำกลับมาใช้ซ้ำได้" },
            { word: "IDE", meaning: "สภาพแวดล้อมพัฒนาโปรแกรม", example: "An IDE helps developers write and test code efficiently.", translation: "IDE ช่วยให้นักพัฒนาเขียนและทดสอบโค้ดได้อย่างมีประสิทธิภาพ" }
        ],
        [
            { word: "Version Control", meaning: "การควบคุมเวอร์ชัน", example: "Version control helps track changes in code over time.", translation: "การควบคุมเวอร์ชันช่วยติดตามการเปลี่ยนแปลงของโค้ดเมื่อเวลาผ่านไป" },
            { word: "Git", meaning: "กิต", example: "Git is a popular version control system.", translation: "Git เป็นระบบควบคุมเวอร์ชันที่ได้รับความนิยม" },
            { word: "Branch", meaning: "กิ่งใน Git", example: "A branch allows multiple people to work on different parts of a project.", translation: "กิ่งใน Git ช่วยให้หลายคนสามารถทำงานในส่วนต่าง ๆ ของโปรเจ็กต์พร้อมกันได้" },
            { word: "Merge", meaning: "การรวมโค้ด", example: "Merging combines changes from different branches.", translation: "การรวมโค้ดช่วยผสานการเปลี่ยนแปลงจากกิ่งต่าง ๆ" },
            { word: "Commit", meaning: "คอมมิต", example: "A commit records changes to the repository.", translation: "คอมมิตคือการบันทึกการเปลี่ยนแปลงลงในรีโพซิทอรี" }
        ],
        [
            { word: "Frontend", meaning: "ส่วนหน้าเว็บ", example: "The frontend is what users interact with on a website.", translation: "ส่วนหน้าเว็บคือสิ่งที่ผู้ใช้โต้ตอบด้วยบนเว็บไซต์" },
            { word: "Backend", meaning: "ส่วนหลังเว็บ", example: "The backend handles server-side logic and databases.", translation: "ส่วนหลังเว็บจัดการตรรกะฝั่งเซิร์ฟเวอร์และฐานข้อมูล" },
            { word: "Full Stack", meaning: "ฟูลสแต็ก", example: "A full stack developer works on both frontend and backend.", translation: "นักพัฒนาฟูลสแต็กทำงานทั้งฝั่งหน้าเว็บและฝั่งหลังเว็บ" },
            { word: "API", meaning: "อินเตอร์เฟซโปรแกรม", example: "APIs allow different applications to communicate.", translation: "API ช่วยให้แอปพลิเคชันต่าง ๆ สามารถสื่อสารกันได้" },
            { word: "Wireframe", meaning: "โครงร่างเว็บไซต์", example: "A wireframe is a visual guide for website structure.", translation: "โครงร่างเว็บไซต์เป็นแนวทางการออกแบบโครงสร้างของเว็บไซต์" }
        ],
        [
            { word: "UX", meaning: "ประสบการณ์ผู้ใช้", example: "Good UX makes websites easier to navigate.", translation: "UX ที่ดีทำให้เว็บไซต์ใช้งานง่ายขึ้น" },
            { word: "UI", meaning: "ส่วนติดต่อผู้ใช้", example: "UI design focuses on the look and feel of a website.", translation: "การออกแบบ UI เน้นที่รูปลักษณ์และประสบการณ์ของเว็บไซต์" },
            { word: "Grid System", meaning: "ระบบกริด", example: "A grid system helps arrange website content systematically.", translation: "ระบบกริดช่วยจัดเรียงเนื้อหาในเว็บไซต์อย่างเป็นระบบ" },
            { word: "Media Query", meaning: "การปรับแต่งเว็บไซต์ตามขนาดหน้าจอ", example: "Media queries make websites responsive.", translation: "Media query ช่วยให้เว็บไซต์ตอบสนองต่อขนาดหน้าจอที่แตกต่างกัน" },
            { word: "Lazy Loading", meaning: "การโหลดแบบขี้เกียจ", example: "Lazy loading delays loading images until needed.", translation: "การโหลดแบบขี้เกียจช่วยชะลอการโหลดภาพจนกว่าจะจำเป็น" }
        ],
        [
            { word: "CDN", meaning: "เครือข่ายส่งเนื้อหา", example: "CDNs improve website speed by caching content globally.", translation: "CDN ช่วยเพิ่มความเร็วของเว็บไซต์โดยการเก็บข้อมูลแคชทั่วโลก" },
            { word: "SSL", meaning: "ใบรับรองความปลอดภัย", example: "SSL certificates encrypt data between users and servers.", translation: "ใบรับรอง SSL เข้ารหัสข้อมูลระหว่างผู้ใช้และเซิร์ฟเวอร์" },
            { word: "Caching", meaning: "การแคช", example: "Caching stores website data temporarily for faster loading.", translation: "การแคชช่วยเก็บข้อมูลเว็บไซต์ชั่วคราวเพื่อให้โหลดเร็วขึ้น" },
            { word: "Web Accessibility", meaning: "การเข้าถึงเว็บ", example: "Web accessibility ensures websites are usable by everyone.", translation: "การเข้าถึงเว็บช่วยให้ทุกคนสามารถใช้งานเว็บไซต์ได้" },
            { word: "Deployment", meaning: "การเผยแพร่เว็บไซต์", example: "Deployment is the process of making a website live.", translation: "การเผยแพร่เว็บไซต์คือกระบวนการนำเว็บไซต์ขึ้นออนไลน์" }
        ],
        [
            { word: "Responsive Web Design", meaning: "การออกแบบเว็บที่ตอบสนอง", example: "Responsive design ensures a website works on all devices.", translation: "การออกแบบเว็บที่ตอบสนองช่วยให้เว็บไซต์ทำงานได้บนทุกอุปกรณ์" },
            { word: "Progressive Web App (PWA)", meaning: "เว็บแอปที่สามารถทำงานได้เสมือนแอปมือถือ", example: "PWA combines the best features of web and mobile apps.", translation: "PWA ผสมผสานคุณสมบัติที่ดีที่สุดของเว็บและแอปมือถือ" },
            { word: "Server-Side Rendering (SSR)", meaning: "การเรนเดอร์ฝั่งเซิร์ฟเวอร์", example: "SSR improves SEO by rendering pages on the server.", translation: "SSR ช่วยปรับปรุง SEO โดยการเรนเดอร์หน้าเว็บบนเซิร์ฟเวอร์" },
            { word: "Headless CMS", meaning: "ระบบจัดการเนื้อหาแบบไร้ส่วนต่อประสาน", example: "A Headless CMS provides content without a fixed frontend.", translation: "Headless CMS ช่วยให้เนื้อหาถูกแสดงโดยไม่ขึ้นอยู่กับส่วนหน้าเว็บที่ตายตัว" },
            { word: "Static Site Generator (SSG)", meaning: "เครื่องมือสร้างเว็บสถิต", example: "SSG pre-builds pages for faster performance.", translation: "SSG สร้างหน้าเว็บล่วงหน้าเพื่อให้โหลดได้เร็วขึ้น" }
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

    gameMusic.loop = true;
    gameMusic.volume = 0.3;

    function setGameVolume(value) {
        gameMusic.volume = value;
    }

    function createVolumeControl() {
        const volumeContainer = document.createElement('div');
        volumeContainer.className = 'volume-control';
        volumeContainer.innerHTML = `
            <label for="volume-slider">🔊 ปรับระดับเสียง</label>
            <input type="range" id="volume-slider" min="0" max="1" step="0.01" value="0.5">
        `;
        
        const gameSection = document.getElementById('game-section');
        if (gameSection) {
            gameSection.appendChild(volumeContainer);
        }
        
        document.getElementById('volume-slider').addEventListener('input', (event) => {
            setGameVolume(event.target.value);
        });
    }
    
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
                score += 1;
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
                score -= 1;
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

    function speakText(text) {
        if ('speechSynthesis' in window) {
            let utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            speechSynthesis.speak(utterance);
        } else {
            alert("เบราว์เซอร์ของคุณไม่รองรับการอ่านออกเสียง");
        }
    }

    function createItemWithAudio(text, pairIndex, isEnglish) {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = text;
        div.dataset.pair = pairIndex;

        if (isEnglish) { // เพิ่มไอคอนเฉพาะคำศัพท์ภาษาอังกฤษ
            const audioButton = document.createElement('button');
            audioButton.className = 'audio-button';
            audioButton.textContent = '🔊';
            audioButton.addEventListener('click', (event) => {
                event.stopPropagation(); // ป้องกันการคลิกที่ไอเท็มหลัก
                speakText(text);
            });
            div.appendChild(audioButton);
        }
        
        div.addEventListener('click', handleItemClick);
        return div;
    }

    function loadLevel(levelIndex) {
        const levelData = levels[levelIndex];
        const gameContainer = document.getElementById('game-container');
        gameContainer.innerHTML = '';

        let wordsArray = [];
        levelData.forEach((item, index) => {
            wordsArray.push(createItemWithAudio(item.word, index, true));
            wordsArray.push(createItemWithAudio(item.meaning, index, false));
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
        
        const reviewContainer = document.createElement('div');
        reviewContainer.className = 'review-container';
        reviewSection.innerHTML = '';
        reviewSection.appendChild(reviewContainer);

        levels.forEach((levelWords, index) => {
            const levelDiv = document.createElement('div');
            levelDiv.className = 'level-review';
            levelDiv.innerHTML = `<h3>คำศัพท์จากด่านที่ ${index + 1}</h3>`;
            reviewContainer.appendChild(levelDiv);

            levelWords.forEach(({ word, meaning, example, translation }) => {
                const reviewBox = document.createElement('div');
                reviewBox.className = 'review-box';
                reviewBox.innerHTML = `<strong>${word}</strong><br>${meaning}<br><em>${example}</em><br><span class='translation'>${translation}</span>`;
                
                const audioButton = document.createElement('button');
                audioButton.className = 'audio-button';
                audioButton.textContent = '🔊';
                audioButton.addEventListener('click', () => speakText(example));
                
                reviewBox.appendChild(audioButton);
                levelDiv.appendChild(reviewBox);
            });
        });
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
    createVolumeControl(); // เรียกใช้ตัวควบคุมเสียงเมื่อโหลดเกม
    gameAudio.play(); // เล่นเสียงเกมเมื่อเกมเริ่ม

});
