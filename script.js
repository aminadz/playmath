// Global Variables
let currentLevel = null;
let currentLesson = null;
let currentExerciseIndex = 0;
let exercises = [];

// Dynamic Curriculum Data Structure
let curriculum = {};

// Function to build the curriculum from extendedExercises
function buildCurriculum() {
    const levelTitles = {
        1: "السنة الأولى متوسط",
        2: "السنة الثانية متوسط",
        3: "السنة الثالثة متوسط",
        4: "السنة الرابعة متوسط"
    };

    for (let level in extendedExercises) {
        curriculum[level] = {
            title: levelTitles[level],
            lessons: {}
        };

        for (let lessonTitle in extendedExercises[level]) {
            curriculum[level].lessons[lessonTitle] = {
                title: lessonTitle,
                description: `تمارين في ${lessonTitle}`,
                exercises: extendedExercises[level][lessonTitle].exercises || []
            };
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    showMainMenu(); // Show main menu by default
});

function initializeApp() {
    try {
        // Build the curriculum dynamically
        buildCurriculum();

        // Add click listeners to level cards
        const levelCards = document.querySelectorAll('.level-card');
        levelCards.forEach(card => {
            card.addEventListener('click', function() {
                const level = parseInt(this.getAttribute('data-level'));
                if (curriculum[level]) {
                    selectLevel(level);
                } else {
                    console.error('Level not found in curriculum:', level);
                    alert('عذراً، حدث خطأ في تحميل المستوى. يرجى إعادة تحميل الصفحة.');
                }
            });
        });
    } catch (error) {
        console.error('Error initializing app:', error);
        alert('عذراً، حدث خطأ في تحميل التطبيق. يرجى إعادة تحميل الصفحة.');
    }

    // Add event listeners for exercise controls
    const showSolutionBtn = document.getElementById('showSolutionBtn');
    const nextExerciseBtn = document.getElementById('nextExerciseBtn');
    
    if (showSolutionBtn) {
        showSolutionBtn.addEventListener('click', toggleSolution);
    }
    
    if (nextExerciseBtn) {
        nextExerciseBtn.addEventListener('click', nextExercise);
    }
    
    // Add event listener for back to levels button
    const backToLevelsBtn = document.getElementById('backToLevels');
    if (backToLevelsBtn) {
        backToLevelsBtn.addEventListener('click', showLevelSelection);
    }

    // Initialize progress
    updateProgress(0);
    
    // Update total exercises count
    updateTotalExercises();
}

function selectLevel(level) {
    if (!curriculum[level]) {
        console.error('Level not found:', level);
        return;
    }
    
    currentLevel = level;
    currentLesson = null;
    currentExerciseIndex = 0;
    
    // Hide main menu, level selection and show lesson selection
    const mainMenu = document.getElementById('mainMenu');
    const levelSelection = document.getElementById('levelSelection');
    const lessonSelection = document.getElementById('lessonSelection');
    const exerciseSection = document.getElementById('exerciseSection');
    
    if (mainMenu && levelSelection && lessonSelection && exerciseSection) {
        mainMenu.style.display = 'none';
        levelSelection.style.display = 'none';
        lessonSelection.style.display = 'block';
        exerciseSection.style.display = 'none';
    }
    
    // Update lesson title
    document.getElementById('lessonTitle').textContent = `اختر الدرس - ${curriculum[level].title}`;
    
    // Populate lessons
    populateLessons(level);
    
    // Add animation
    document.getElementById('lessonSelection').classList.add('fade-in');
}

function populateLessons(level) {
    const lessonsGrid = document.getElementById('lessonsGrid');
    if (!lessonsGrid) {
        console.error('Lessons grid not found');
        return;
    }
    
    lessonsGrid.innerHTML = '';
    
    const lessons = curriculum[level].lessons;
    
    Object.keys(lessons).forEach(lessonKey => {
        const lesson = lessons[lessonKey];
        const lessonCard = document.createElement('div');
        lessonCard.className = 'lesson-card';
        lessonCard.setAttribute('data-lesson', lessonKey);
        
        lessonCard.innerHTML = `
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <small>${lesson.exercises.length} تمرين</small>
        `;
        
        lessonCard.addEventListener('click', function() {
            selectLesson(lessonKey);
        });
        
        lessonsGrid.appendChild(lessonCard);
    });
}

function selectLesson(lessonKey) {
    if (!curriculum[currentLevel] || !curriculum[currentLevel].lessons[lessonKey]) {
        console.error('Lesson not found:', lessonKey);
        return;
    }
    
    currentLesson = lessonKey;
    currentExerciseIndex = 0;

    // استعادة الهيكل الأساسي لقسم التمارين
    const exerciseContent = document.getElementById('exerciseContent');
    if (!exerciseContent) {
        console.error('Exercise content not found');
        return;
    }
    
    exerciseContent.innerHTML = `
        <div class="exercise-question" id="exerciseQuestion"></div>
        <div class="exercise-options" id="exerciseOptions"></div>
        <div class="exercise-solution" id="exerciseSolution" style="display: none;">
            <h3><i class="fas fa-check-circle"></i> الحل:</h3>
            <div id="solutionContent"></div>
        </div>
    `;

    // Get all exercises for the lesson and shuffle them
    let allExercises = curriculum[currentLevel].lessons[lessonKey].exercises;
    exercises = shuffleArray(allExercises);

    // Hide main menu, lesson selection and show exercise section
    const mainMenu = document.getElementById('mainMenu');
    const lessonSelection = document.getElementById('lessonSelection');
    const exerciseSection = document.getElementById('exerciseSection');
    
    if (mainMenu && lessonSelection && exerciseSection) {
        mainMenu.style.display = 'none';
        lessonSelection.style.display = 'none';
        exerciseSection.style.display = 'block';
    }

    // Load first exercise
    loadExercise();

    // Add animation
    document.getElementById('exerciseSection').classList.add('slide-in');
}

function loadExercise() {
    if (currentExerciseIndex >= exercises.length) {
        showCompletionMessage();
        return;
    }

    const exercise = exercises[currentExerciseIndex];
    const optionsContainer = document.getElementById('exerciseOptions');
    const solutionDiv = document.getElementById('exerciseSolution');
    const exerciseTitle = document.getElementById('exerciseTitle');
    const exerciseQuestion = document.getElementById('exerciseQuestion');
    const nextBtn = document.getElementById('nextExerciseBtn');
    const showSolutionBtn = document.getElementById('showSolutionBtn');

    if (!optionsContainer || !solutionDiv || !exerciseTitle || !exerciseQuestion || !nextBtn || !showSolutionBtn) {
        console.error('Required exercise elements not found');
        return;
    }

    // Update exercise title
    exerciseTitle.textContent = 
        `${curriculum[currentLevel].lessons[currentLesson].title} - التمرين ${currentExerciseIndex + 1}`;

    // Load question
    exerciseQuestion.innerHTML = `
        <h3><i class="fas fa-question-circle"></i> السؤال:</h3>
        <p>${exercise.question}</p>
    `;

    // Clear previous options and hide solution/feedback
    optionsContainer.innerHTML = '';
    solutionDiv.style.display = 'none';
    solutionDiv.innerHTML = '<h3><i class="fas fa-check-circle"></i> الحل:</h3><div id="solutionContent"></div>'; // Reset structure

    // Hide next button until an answer is chosen or solution is shown
    nextBtn.style.display = 'none';
    showSolutionBtn.style.display = 'inline-block';

    // Load options as buttons
    exercise.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.innerHTML = option;
        optionBtn.addEventListener('click', () => checkAnswer(index, exercise.answer, optionBtn));
        optionsContainer.appendChild(optionBtn);
    });

    // Update progress based on the start of the exercise
    const progress = (currentExerciseIndex / exercises.length) * 100;
    updateProgress(progress);

    // Update final button text
    if (currentExerciseIndex === exercises.length - 1) {
        nextBtn.innerHTML = '<i class="fas fa-check"></i> إنهاء الدرس';
    } else {
        nextBtn.innerHTML = '<i class="fas fa-forward"></i> التمرين التالي';
    }
}

function checkAnswer(selectedOptionIndex, correctAnswer, btnElement) {
    const optionsContainer = document.getElementById('exerciseOptions');
    const optionBtns = optionsContainer.querySelectorAll('.option-btn');
    const exercise = exercises[currentExerciseIndex];
    const selectedOptionText = exercise.options[selectedOptionIndex];

    const isCorrect = selectedOptionText.trim() === correctAnswer.trim();
    const correctOptionIndex = exercise.options.findIndex(opt => opt.trim() === correctAnswer.trim());

    // Disable all option buttons
    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctOptionIndex) {
            btn.classList.add('correct');
        }
    });

    // If the selected answer is wrong, highlight it as incorrect
    if (!isCorrect) {
        btnElement.classList.add('incorrect');
    }

    // Show the next exercise button and hide the solution button
    const nextBtn = document.getElementById('nextExerciseBtn');
    const showSolutionBtn = document.getElementById('showSolutionBtn');
    
    if (nextBtn && showSolutionBtn) {
        nextBtn.style.display = 'inline-block';
        showSolutionBtn.style.display = 'none';
    }
    
    // Update progress after answering
    const progress = ((currentExerciseIndex + 1) / exercises.length) * 100;
    updateProgress(progress);
}

function toggleSolution() {
    const solutionDiv = document.getElementById('exerciseSolution');
    const solutionContent = document.getElementById('solutionContent');
    const exercise = exercises[currentExerciseIndex];
    
    if (!solutionDiv || !solutionContent || !exercise) {
        console.error('Required elements not found for solution');
        return;
    }
    
    // Populate and show the solution
    if (currentLesson === "مقارنة وترتيب الأعداد العشرية") {
        // For ordering questions that contain '|', add specific styling
        if (exercise.answer.includes('|')) {
            solutionContent.innerHTML = `<div dir="ltr" style="text-align: left; font-family: 'Courier New', monospace; letter-spacing: 2px;">${exercise.answer}</div>`;
        } else {
            // For comparison questions
            solutionContent.innerHTML = `<div style="text-align: left; direction: ltr; font-family: 'Courier New', monospace;">${exercise.answer}</div>`;
        }
    } else {
        solutionContent.innerHTML = exercise.answer;
    }
    
    solutionDiv.style.display = 'block';

    // Highlight the correct option button using index-based comparison
    const optionBtns = document.querySelectorAll('.option-btn');
    const correctOptionIndex = exercise.options.findIndex(opt => opt.trim() === exercise.answer.trim());

    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctOptionIndex) {
            btn.classList.add('correct');
        }
    });

    // Show next button and hide solution button
    const nextBtn = document.getElementById('nextExerciseBtn');
    const showSolutionBtn = document.getElementById('showSolutionBtn');
    
    if (nextBtn && showSolutionBtn) {
        nextBtn.style.display = 'inline-block';
        showSolutionBtn.style.display = 'none';
    }

    // Update progress as if the question was answered
    const progress = ((currentExerciseIndex + 1) / exercises.length) * 100;
    updateProgress(progress);
}

function nextExercise() {
    currentExerciseIndex++;
    
    if (currentExerciseIndex >= exercises.length) {
        // All exercises completed
        showCompletionMessage();
    } else {
        loadExercise();
    }
}

function showCompletionMessage() {
    const exerciseContent = document.querySelector('.exercise-content');
    if (!exerciseContent) {
        console.error('Exercise content not found for completion message');
        return;
    }
    
    exerciseContent.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <i class="fas fa-trophy" style="font-size: 4rem; color: #ffd700; margin-bottom: 20px;"></i>
            <h2 style="color: #48bb78; margin-bottom: 20px;">أحسنت! 🎉</h2>
            <p style="font-size: 1.2rem; color: #4a5568; margin-bottom: 30px;">
                لقد أكملت جميع تمارين درس "${curriculum[currentLevel].lessons[currentLesson].title}"
            </p>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button onclick="showLessonSelection()" class="btn btn-primary">
                    <i class="fas fa-arrow-right"></i> العودة لاختيار الدرس
                </button>
                <button onclick="showLevelSelection()" class="btn btn-success">
                    <i class="fas fa-star"></i> العودة لاختيار المستوى
                </button>
                <button onclick="showMainMenu()" class="btn btn-info">
                    <i class="fas fa-home"></i> العودة للقائمة الرئيسية
                </button>
            </div>
        </div>
    `;
    
    updateProgress(100);
}

function showMainMenu() {
    const mainMenu = document.getElementById('mainMenu');
    const levelSelection = document.getElementById('levelSelection');
    const lessonSelection = document.getElementById('lessonSelection');
    const exerciseSection = document.getElementById('exerciseSection');
    
    if (mainMenu && levelSelection && lessonSelection && exerciseSection) {
        mainMenu.style.display = 'block';
        levelSelection.style.display = 'none';
        lessonSelection.style.display = 'none';
        exerciseSection.style.display = 'none';
    }
    
    // Reset variables
    currentLevel = null;
    currentLesson = null;
    currentExerciseIndex = 0;
    exercises = [];
    
    updateProgress(0);
}

function showGames() {
    window.location.href = 'games.html';
}

function showSituations() {
    window.location.href = 'situations.html';
}

function showLevelSelection() {
    const mainMenu = document.getElementById('mainMenu');
    const levelSelection = document.getElementById('levelSelection');
    const lessonSelection = document.getElementById('lessonSelection');
    const exerciseSection = document.getElementById('exerciseSection');
    
    if (mainMenu && levelSelection && lessonSelection && exerciseSection) {
        mainMenu.style.display = 'none';
        levelSelection.style.display = 'block';
        lessonSelection.style.display = 'none';
        exerciseSection.style.display = 'none';
    }
    
    // Reset variables
    currentLevel = null;
    currentLesson = null;
    currentExerciseIndex = 0;
    exercises = [];
    
    updateProgress(0);
}

function showLessonSelection() {
    if (currentLevel) {
        const mainMenu = document.getElementById('mainMenu');
        const levelSelection = document.getElementById('levelSelection');
        const lessonSelection = document.getElementById('lessonSelection');
        const exerciseSection = document.getElementById('exerciseSection');
        
        if (mainMenu && levelSelection && lessonSelection && exerciseSection) {
            mainMenu.style.display = 'none';
            levelSelection.style.display = 'none';
            lessonSelection.style.display = 'block';
            exerciseSection.style.display = 'none';
        }
        
        // Reset exercise variables
        currentLesson = null;
        currentExerciseIndex = 0;
        exercises = [];
        
        updateProgress(0);
    }
}

function updateProgress(percentage) {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        progressFill.style.width = percentage + '%';
        progressText.textContent = Math.round(percentage) + '%';
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' || event.key === ' ') {
        // Next exercise or show solution
        const exerciseSection = document.getElementById('exerciseSection');
        if (exerciseSection && exerciseSection.style.display !== 'none') {
            const solutionDiv = document.getElementById('exerciseSolution');
            if (solutionDiv && solutionDiv.style.display === 'none') {
                toggleSolution();
            } else {
                nextExercise();
            }
        }
    }
    
    if (event.key === 'Escape') {
        // Go back
        const exerciseSection = document.getElementById('exerciseSection');
        const lessonSelection = document.getElementById('lessonSelection');
        const levelSelection = document.getElementById('levelSelection');
        
        if (exerciseSection && exerciseSection.style.display !== 'none') {
            showLessonSelection();
        } else if (lessonSelection && lessonSelection.style.display !== 'none') {
            showLevelSelection();
        } else if (levelSelection && levelSelection.style.display !== 'none') {
            showMainMenu();
        }
    }
    
    if (event.key === 'Home') {
        // Go to main menu
        showMainMenu();
    }
});

// Add loading animation for better UX
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element) {
    element.innerHTML = '';
}

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Function to update total exercises count
function updateTotalExercises() {
    let total = 0;
    
    for (let level in curriculum) {
        for (let lesson in curriculum[level].lessons) {
            total += curriculum[level].lessons[lesson].exercises.length;
        }
    }
    
    const totalExercisesElement = document.getElementById('totalExercises');
    if (totalExercisesElement) {
        totalExercisesElement.textContent = total;
    }
}

// Function to show level selection
function showLevelSelection() {
    const mainMenu = document.getElementById('mainMenu');
    const levelSelection = document.getElementById('levelSelection');
    const lessonSelection = document.getElementById('lessonSelection');
    const exerciseSection = document.getElementById('exerciseSection');
    
    if (mainMenu && levelSelection && lessonSelection && exerciseSection) {
        mainMenu.style.display = 'none';
        levelSelection.style.display = 'block';
        lessonSelection.style.display = 'none';
        exerciseSection.style.display = 'none';
    }
}

// Function to show games
function showGames() {
    window.location.href = 'games.html';
}

// Function to show situations
function showSituations() {
    window.location.href = 'situations.html';
}

// Function to show calculator
function showCalculator() {
    window.location.href = 'calculator.html';
}

// Function to show graphing
function showGraphing() {
    window.location.href = 'graphing.html';
}

function showGraphingDesktop() {
    window.location.href = 'graphing-desktop.html';
}

// Function to show lesson selection
function showLessonSelection() {
    const mainMenu = document.getElementById('mainMenu');
    const levelSelection = document.getElementById('levelSelection');
    const lessonSelection = document.getElementById('lessonSelection');
    const exerciseSection = document.getElementById('exerciseSection');
    
    if (mainMenu && levelSelection && lessonSelection && exerciseSection) {
        mainMenu.style.display = 'none';
        levelSelection.style.display = 'none';
        lessonSelection.style.display = 'block';
        exerciseSection.style.display = 'none';
    }
}
