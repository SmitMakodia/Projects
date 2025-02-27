// quiz.js
document.addEventListener('keydown', function (event) {
    if (
        (event.ctrlKey && event.key === 'r') || 
        (event.key === 'F5') || 
        (event.key === 'F12') || 
        (event.ctrlKey && event.shiftKey && event.key === 'I')
    ) {
        event.preventDefault();
        alert('Restricted key press detected!');
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('Right-click is disabled');
});

// Prompt user if they try to refresh or close the page
window.addEventListener('beforeunload', function (event) {
    const confirmationMessage = "Are you sure you want to leave? Your progress will be lost.";
    event.returnValue = confirmationMessage; // Standard for most browsers
    return confirmationMessage; // For some older browsers
});

// Detect if DevTools is open (by checking screen width)
var checkDevTools = setInterval(function() {
    if (window.outerWidth - window.innerWidth > 100) {
        alert('Developer tools detected!');
        document.body.style.backgroundColor = "red";
    }
}, 1000); // Check every second

const quizData = {
    "circle": [
        { "question": "Which AI-powered tool is used to detect spam emails?", "options": ["ChatGPT", "Email Scanner", "Spam Filter", "Antivirus"], "correctAnswer": "Spam Filter" },
        { "question": "Which AI application recommends movies on Netflix?", "options": ["Data Sorting", "Machine Learning Algorithm", "Predictive Analytics", "Recommendation System"], "correctAnswer": "Recommendation System" },
        { "question": "What AI feature suggests words while typing?", "options": ["AutoCorrect", "AI Typing", "Predictive Text", "Grammar Checker"], "correctAnswer": "Predictive Text" },
        { "question": "Which AI feature in mobile cameras helps improve image quality?", "options": ["Noise Reduction", "AI Beautification", "Auto Enhancement", "All of the above"], "correctAnswer": "All of the above" },
        { "question": "Which of the following is NOT AI-powered?", "options": ["Google Assistant", "Microsoft Word", "Tesla Autopilot", "ChatGPT"], "correctAnswer": "Microsoft Word" },
        { "question": "What is AI's role in healthcare?", "options": ["Replacing doctors", "Enhancing diagnosis & treatment", "Making medicine", "Storing patient records"], "correctAnswer": "Enhancing diagnosis & treatment" },
        { "question": "Which of these AI applications helps detect fake news?", "options": ["Sentiment Analysis", "Fact Checker AI", "NLP Processing", "Chatbots"], "correctAnswer": "Fact Checker AI" },
        { "question": "What is AI-powered facial recognition used for?", "options": ["Entertainment", "Security & Authentication", "Watching movies", "Creating avatars"], "correctAnswer": "Security & Authentication" },
        { "question": "Which AI system plays chess better than humans?", "options": ["IBM Watson", "Google Assistant", "AlphaZero", "Tesla AI"], "correctAnswer": "AlphaZero" },
        { "question": "What is the future goal of AI?", "options": ["Replacing humans", "Enhancing human capabilities", "Making robots", "Automating social media"], "correctAnswer": "Enhancing human capabilities" }
    ],
    "square": [
        { "question": "Which of these is NOT an application of AI?", "options": ["Predicting stock prices", "Driving a car", "Cooking food", "Detecting diseases"], "correctAnswer": "Cooking food" },
        { "question": "AI is capable of:", "options": ["Making jokes", "Learning from experience", "Feeling emotions", "Sleeping"], "correctAnswer": "Learning from experience" },
        { "question": "What is the main ingredient that AI needs to work properly?", "options": ["Human input", "Data", "Electricity", "High-speed internet"], "correctAnswer": "Data" },
        { "question": "Which AI feature predicts text while typing emails?", "options": ["AutoCorrect", "Smart Compose", "AI Grammar", "Predictive AI"], "correctAnswer": "Smart Compose" },
        { "question": "What can AI-powered chatbots do?", "options": ["Answer customer queries", "Process orders", "Provide recommendations", "All of the above"], "correctAnswer": "All of the above" },
        { "question": "AI technology used in voice assistants like Siri is called:", "options": ["Neural Networks", "Natural Language Processing", "Computer Vision", "Deep Learning"], "correctAnswer": "Natural Language Processing" },
        { "question": "Which AI system is used to power smart home devices?", "options": ["AI Hub", "IoT AI", "Smart Assistant AI", "HomeBot"], "correctAnswer": "Smart Assistant AI" },
        { "question": "What is Deep Learning in AI?", "options": ["A subset of Machine Learning using neural networks", "A new programming language", "A type of supercomputer", "A form of AI hardware"], "correctAnswer": "A subset of Machine Learning using neural networks" },
        { "question": "AI can help doctors by:", "options": ["Diagnosing diseases", "Replacing surgeons", "Making medicines", "Printing reports"], "correctAnswer": "Diagnosing diseases" },
        { "question": "Which of these AI applications helps in weather forecasting?", "options": ["Predictive Analytics", "AI Sensors", "Climate Learning Model", "Forecasting AI"], "correctAnswer": "Predictive Analytics" }
    ],
    "triangle": [
    { "question": "Which of these is NOT an AI assistant?", "options": ["Alexa", "Siri", "Bing Search", "Google Assistant"], "correctAnswer": "Bing Search" },
    { "question": "AI is mainly designed to:", "options": ["Replace humans", "Enhance human capabilities", "Work without human intervention", "Solve all problems"], "correctAnswer": "Enhance human capabilities" },
    { "question": "Which of the following technologies is closely related to AI?", "options": ["Blockchain", "Augmented Reality", "Machine Learning", "Internet of Things"], "correctAnswer": "Machine Learning" },
    { "question": "Which AI feature helps recommend friends on social media platforms?", "options": ["Face Recognition", "Friend Suggestion Algorithm", "Auto-Tagging", "Social AI"], "correctAnswer": "Friend Suggestion Algorithm" },
    { "question": "Which of the following apps uses AI to recognize songs?", "options": ["Spotify", "Shazam", "YouTube", "Snapchat"], "correctAnswer": "Shazam" },
    { "question": "Which AI technology helps filter spam emails?", "options": ["Predictive AI", "Deep Learning", "NLP", "Rule-Based Filtering"], "correctAnswer": "Rule-Based Filtering" },
    { "question": "Which of these AI technologies is used for face detection in photos?", "options": ["Object Recognition", "Computer Vision", "Deep Learning", "Neural Networks"], "correctAnswer": "Computer Vision" },
    { "question": "Which of these is an AI-based recommendation system?", "options": ["Amazon Recommendations", "Email Filtering", "GPS Navigation", "Google Search"], "correctAnswer": "Amazon Recommendations" },
    { "question": "Which AI-based technology helps in self-driving cars?", "options": ["Deep Learning", "Reinforcement Learning", "Sensor Fusion", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "What is the full form of ML in AI?", "options": ["Machine Learning", "Managed Logic", "Mobile Learning", "Mixed Logic"], "correctAnswer": "Machine Learning" }
  ],
  "star": [
    { "question": "Which of the following is an example of AI in daily life?", "options": ["Weather apps", "Virtual assistants", "Online shopping recommendations", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "What does AI need to learn and improve over time?", "options": ["More users", "More storage", "More data", "More sensors"], "correctAnswer": "More data" },
    { "question": "Which of these is a key component of AI?", "options": ["Sensors", "Algorithms", "Batteries", "Screens"], "correctAnswer": "Algorithms" },
    { "question": "What is Machine Learning (ML)?", "options": ["Teaching computers to learn from data", "A new programming language", "A part of computer hardware", "A type of robot"], "correctAnswer": "Teaching computers to learn from data" },
    { "question": "Which AI-powered engine can talk like a human?", "options": ["Boston Dynamics", "Siri", "Tesla Bot", "Meta AI"], "correctAnswer": "Siri" },
    { "question": "Which AI technology is used in video games to make characters smarter?", "options": ["Pathfinding AI", "Neural AI", "Reinforcement Learning", "3D Rendering AI"], "correctAnswer": "Pathfinding AI" },
    { "question": "What do AI-powered virtual assistants do?", "options": ["Play music", "Answer questions", "Control smart devices", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which technology allows AI to recognize objects in images?", "options": ["Optical Character Recognition (OCR)", "Speech Recognition", "Machine Translation", "Text Prediction"], "correctAnswer": "Optical Character Recognition (OCR)" },
    { "question": "Which AI-powered tool is used in virtual meetings?", "options": ["AI Video Editor", "AI Transcription", "AI Noise Cancellation", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which of the following is an example of AI in smartphones?", "options": ["GPS Navigation", "AI Voice Assistants", "Smart Camera Filters", "All of the above"], "correctAnswer": "All of the above" }
  ],
  "umbrella": [
    { "question": "Which AI-powered tool is used to detect spam emails?", "options": ["ChatGPT", "Email Scanner", "Spam Filter", "Antivirus"], "correctAnswer": "Spam Filter" },
    { "question": "Which AI application recommends movies on Netflix?", "options": ["Data Sorting", "Machine Learning Algorithm", "Predictive Analytics", "Recommendation System"], "correctAnswer": "Recommendation System" },
    { "question": "What AI feature suggests words while typing?", "options": ["AutoCorrect", "AI Typing", "Predictive Text", "Grammar Checker"], "correctAnswer": "Predictive Text" },
    { "question": "Which AI feature in mobile cameras helps improve image quality?", "options": ["Noise Reduction", "AI Beautification", "Auto Enhancement", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which of the following is NOT AI-powered?", "options": ["Google Assistant", "Microsoft Word", "Tesla Autopilot", "ChatGPT"], "correctAnswer": "Microsoft Word" },
    { "question": "What is AI's role in healthcare?", "options": ["Replacing doctors", "Enhancing diagnosis & treatment", "Making medicine", "Storing patient records"], "correctAnswer": "Enhancing diagnosis & treatment" },
    { "question": "Which of these AI applications helps detect fake news?", "options": ["Sentiment Analysis", "Fact Checker AI", "NLP Processing", "Chatbots"], "correctAnswer": "Fact Checker AI" },
    { "question": "What is AI-powered facial recognition used for?", "options": ["Entertainment", "Security & Authentication", "Watching movies", "Creating avatars"], "correctAnswer": "Security & Authentication" },
    { "question": "Which AI system plays chess better than humans?", "options": ["IBM Watson", "Google Assistant", "AlphaZero", "Tesla AI"], "correctAnswer": "AlphaZero" },
    { "question": "What is the future goal of AI?", "options": ["Replacing humans", "Enhancing human capabilities", "Making robots", "Automating social media"], "correctAnswer": "Enhancing human capabilities" }
  ],
  "heart": [
    { "question": "What does AI use to learn and improve from data?", "options": ["Algorithms", "Human feedback", "Large databases", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which AI technology is used in Google Maps for navigation?", "options": ["Computer Vision", "Machine Learning", "GPS Tracking", "AI Navigation"], "correctAnswer": "Machine Learning" },
    { "question": "Which of these is a common use of AI?", "options": ["Weather prediction", "Chatbots", "Virtual assistants", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Ways to achieve AI in real life are_________.", "options": ["Machine Learning", "Deep Learning", "Neural Networks", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "The main tasks of an AI agent are_______.", "options": ["Perceiving the environment", "Processing data", "Taking actions", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which AI technology helps translate languages instantly?", "options": ["Machine Learning", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"], "correctAnswer": "Natural Language Processing" },
    { "question": "Which of these is a chatbot powered by AI?", "options": ["Siri", "Google Assistant", "ChatGPT", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which of these can AI NOT do?", "options": ["Play chess", "Recognize faces", "Feel emotions", "Predict weather"], "correctAnswer": "Feel emotions" },
    { "question": "What feature in smartphones allows voice control using AI?", "options": ["Voice Command", "Text-to-Speech", "Voice Assistant", "Speech Recognition"], "correctAnswer": "Voice Assistant" },
    { "question": "Which of these is an example of AI in social media?", "options": ["Auto-tagging in photos", "Liking posts", "Sending messages", "Setting profile picture"], "correctAnswer": "Auto-tagging in photos" }
  ],
  "diamond": [
    { "question": "What is the main goal of AI?", "options": ["To replace humans", "To make machines self-aware", "To automate and enhance human tasks", "To eliminate jobs"], "correctAnswer": "To automate and enhance human tasks" },
    { "question": "What AI-powered application is used for face recognition on smartphones?", "options": ["GPS Tracker", "Face Unlock", "Chatbot", "Digital Assistant"], "correctAnswer": "Face Unlock" },
    { "question": "What does AI mainly focus on?", "options": ["Automating repetitive tasks", "Enhancing intelligence in animals", "Replacing humans in every job", "Storing large amounts of data"], "correctAnswer": "Automating repetitive tasks" },
    { "question": "Which of the following is an example of AI?", "options": ["Self-driving cars", "Smartphones", "Microwaves", "Washing machines"], "correctAnswer": "Self-driving cars" },
    { "question": "Which of these is NOT a type of AI?", "options": ["Supervised AI", "Weak AI", "Strong AI", "Artificial General Intelligence"], "correctAnswer": "Supervised AI" },
    { "question": "Which of the following is an AI-powered search engine?", "options": ["Google", "Bing", "Perplexity AI", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which language is most commonly used for AI programming?", "options": ["Java", "Python", "C++", "JavaScript"], "correctAnswer": "Python" },
    { "question": "What AI-based feature suggests words while typing on a phone?", "options": ["AutoCorrect", "Predictive Text", "Grammar Checker", "AI Keyboard"], "correctAnswer": "Predictive Text" },
    { "question": "Which AI-powered platform is widely used for video recommendations?", "options": ["YouTube", "Netflix", "Instagram", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which AI technology converts spoken words into text?", "options": ["OCR", "NLP", "Speech Recognition", "Computer Vision"], "correctAnswer": "Speech Recognition" }
  ],
  "rectangle": [
    { "question": "What does AI stand for?", "options": ["Automated Intelligence", "Artificial Innovation", "Artificial Intelligence", "Advanced Interaction"], "correctAnswer": "Artificial Intelligence" },
    { "question": "AI is mainly used to make machines:", "options": ["Self-aware", "Think and act like humans", "Perform magic", "Replicate nature"], "correctAnswer": "Think and act like humans" },
    { "question": "Artificial Intelligence is about_____.", "options": ["Programming computers to mimic human behavior", "Making computers mechanical", "Designing computer screens", "Writing automation scripts"], "correctAnswer": "Programming computers to mimic human behavior" },
    { "question": "Which of the following best describes AI?", "options": ["AI is a technology that mimics human intelligence", "AI is a physical robot", "AI is a new language", "AI is an advanced database system"], "correctAnswer": "AI is a technology that mimics human intelligence" },
    { "question": "What is an AI model?", "options": ["A programming language", "A system that learns from data to make decisions", "A type of smartphone", "A new type of robot"], "correctAnswer": "A system that learns from data to make decisions" },
    { "question": "What is the full form of NLP in AI?", "options": ["Natural Learning Process", "Neural Language Processing", "Natural Language Processing", "Network Logic Processing"], "correctAnswer": "Natural Language Processing" },
    { "question": "Which of these technologies uses AI for real-time data analysis?", "options": ["Predictive Analytics", "Smart Home Devices", "Autonomous Vehicles", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which of these industries benefits the most from AI?", "options": ["Healthcare", "Education", "Entertainment", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "Which AI system is used for language translation?", "options": ["Google Translate", "DeepL Translator", "Bing Translator", "All of the above"], "correctAnswer": "All of the above" },
    { "question": "What is AI's role in business?", "options": ["Automating tasks", "Analyzing data", "Improving decision-making", "All of the above"], "correctAnswer": "All of the above" }
  ]
}



let currentSet = '';
let currentQuestionIndex = 0;
let correctAnswers = 0;
let extraLife = 0;  // 0 means no extra life, 1 means extra life is available
let timer;
let timeRemaining = 180; // 3 minutes (180 seconds)
let timerRunning = false; // Flag to check if timer is running
let progressGif = document.getElementById("progress-gif-container");

// quiz.js

// Show the popup for entering player number when the page loads
window.onload = function () {
    document.getElementById("player-number-popup").style.display = "flex"; 
};

// Start quiz from the input player number
function startQuizFromInput() {
    const playerNumber = parseInt(document.getElementById("player-number-input").value);

    // Ensure the input is a valid number
    if (isNaN(playerNumber) || playerNumber < 0) {
        alert("Please enter a valid player number.");
        return;
    }

    // Calculate the shape based on the player number modulo 8
    const quizSetIndex = playerNumber % 8;

    // Assign the set based on the index
    switch (quizSetIndex) {
        case 0:
            currentSet = "circle";
            break;
        case 1:
            currentSet = "square";
            break;
        case 2:
            currentSet = "triangle";
            break;
        case 3:
            currentSet = "star";
            break;
        case 4:
            currentSet = "umbrella";
            break;
        case 5:
            currentSet = "heart";
            break;
        case 6:
            currentSet = "diamond";
            break;
        case 7:
            currentSet = "rectangle";
            break;
    }

    // Hide the popup and start the quiz
    document.getElementById("player-number-popup").style.display = "none";
    startQuiz(currentSet); // Start the quiz with the selected shape set
}


// Function to update the position of the GIF
function updateGifPosition() {
    const pageHeight = document.documentElement.scrollHeight;
    const movePercentage = 0.05;  // Move 7% of the page height per correct answer
    const maxPosition = pageHeight * 0.75;  // The GIF should not move past 75% of the screen height
    const currentPosition = Math.min(correctAnswers * movePercentage * pageHeight, maxPosition); // Incremental movement

    // Update the position of the GIF (move upward)
    progressGif.style.bottom = `${currentPosition}px`;
}

// Initialize or resume quiz from sessionStorage
function initializeQuiz() {
    const storedProgress = JSON.parse(sessionStorage.getItem('quizProgress'));
    const storedBackgroundColor = sessionStorage.getItem('backgroundColor');
    const isQuizFailed = sessionStorage.getItem('quizFailed');

    // If quiz was previously failed, lock the background color and disable all buttons
    if (isQuizFailed === 'true') {
        document.body.style.backgroundColor = "red";
        disableAnswerButtons();
    }

    if (storedProgress) {
        // Resume quiz progress
        currentSet = storedProgress.currentSet;
        currentQuestionIndex = storedProgress.currentQuestionIndex;
        correctAnswers = storedProgress.correctAnswers;
        extraLifeGiven = storedProgress.extraLifeGiven || false;
        loadQuestion();
    } else {
        // Show the shape selection page
        document.getElementById("quiz-container").style.display = "none";
    }
}

// Other existing functions...


// Update the timer display every second
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeRemaining <= 0) {
        clearInterval(timer); // Stop the timer
        quizFailed(); // Trigger failure if time runs out
    } else {
        timeRemaining--; // Decrease time remaining
    }
}

function startQuiz(shape) {
    document.getElementById("quiz-container").style.marginTop="0px"
    // Prevent re-selection if quiz is already started
    if (sessionStorage.getItem('quizProgress') || sessionStorage.getItem('quizFailed') === 'true') return;

    // Start the timer
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(updateTimer, 1000); // Update every second
    }
    currentSet = shape;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    extraLifeGiven = false;
    
    // Save the initial state in sessionStorage
    sessionStorage.setItem('quizProgress', JSON.stringify({ currentSet, currentQuestionIndex, correctAnswers }));

    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionData = quizData[currentSet][currentQuestionIndex];
    
    // Update the question text inside the speech bubble
    document.querySelector('.speech-bubble').innerText = questionData.question;

    document.getElementById("quiz-title").innerText = `${currentSet.charAt(0).toUpperCase() + currentSet.slice(1)} Quiz`;
    
    // Render the options for the current question
    document.getElementById("question-container").innerHTML = `
        <div id="options-container">
            ${questionData.options.map(option => `
                <button class="option-btn" onclick="checkAnswer('${option}')">${option}</button>
            `).join('')}
        </div>
    `;
}

function updateProgress() {
    let progressBar = document.getElementById("progress-bar");
    let progressText = document.getElementById("progress-text");
    
    let progressPercentage = (correctAnswers / 10) * 100; // Assuming 10 questions total
    progressBar.value = progressPercentage;
    progressText.innerText = `${correctAnswers}`;
}

function quizFailed() {
    // Set background color to red and show the message
    document.body.style.backgroundColor = "red";
    document.getElementById("result-message").innerText = "Time's up! You failed the quiz.";
    
    // Disable all buttons
    disableAnswerButtons();

    // Store the failed state in sessionStorage
    sessionStorage.setItem('quizFailed', 'true');
}

// Disable shape selection after the quiz starts
function disableShapeSelection() {
    document.getElementById("circle").disabled = true;
    document.getElementById("square").disabled = true;
    document.getElementById("triangle").disabled = true;
    document.getElementById("star").disabled = true;
}

// Disable answer selection (buttons) after incorrect answer is selected
function disableAnswerButtons() {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
}
// Check the selected answer
function checkAnswer(selectedOption) {
    const questionData = quizData[currentSet][currentQuestionIndex];
    const correctAnswer = questionData.correctAnswer;

    if (selectedOption === correctAnswer) {
        correctAnswers++;
        updateProgress();
        updateGifPosition();
        document.getElementById("question-container").classList.add("correct");

        if (correctAnswers === 5 && extraLife === 0) {
            extraLife = 1; // Extra life earned
            addlife(); // Show "extra life earned" modal
        }
    } else {
        // If student has completed 5 questions correctly, give them an extra life
        if (extraLife === 1) {
            // If they have an extra life and answer incorrectly, show "extra life taken" modal
            extraLife = 0; // Revoke the extra life
            showModal(); // Show custom modal instead of alert
            sessionStorage.setItem('quizProgress', JSON.stringify({
                currentSet,
                currentQuestionIndex: currentQuestionIndex + 1,
                correctAnswers,
                extraLife,
                progress: (correctAnswers / 10) * 100
            }));
            return;
        }

        // If no extra life left, game over
        document.body.style.backgroundColor = "red";
        document.getElementById("result-message").innerText = "You are Dead, please take your Soul and leave...";

        // Save the failed state in sessionStorage
        sessionStorage.setItem('quizFailed', 'true');

        // Disable all answer buttons
        disableAnswerButtons();

        // Store the failed state in sessionStorage
        sessionStorage.setItem('backgroundColor', 'red');
        clearInterval(timer); // Stop the timer on failure
        return;
    }

    // Save progress in sessionStorage
    sessionStorage.setItem('quizProgress', JSON.stringify({
        currentSet,
        currentQuestionIndex: currentQuestionIndex + 1, // Move to the next question
        correctAnswers,
        extraLife
    }));

    // If all questions are answered
    if (currentQuestionIndex === 9) {
        if (correctAnswers === 10) {
            document.body.style.backgroundColor = "green";
            disableAnswerButtons();
            disableShapeSelection();
            document.getElementById("result-message").innerText = "Congratulations player... moving towards the next Stage";
        } else {
            document.body.style.backgroundColor = "red";
            document.getElementById("result-message").innerText = "Game Over, try again!";
        }
        clearInterval(timer); // Stop the timer on quiz completion
        return;
    }

    // Increment the question index and load the next question
    currentQuestionIndex++;
    loadQuestion(); // Load the new question after answer is checked
}


// Function to show the modal when extra life is earned
function addlife() {
    document.getElementById("add-life-modal").style.display = "flex";
}

// Function to close the extra life earned modal
function closeaddlife() {
    document.getElementById("add-life-modal").style.display = "none";
}

// Function to show the modal
function showModal() {
    document.getElementById("extra-life-modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("extra-life-modal").style.display = "none";
}

// Call this function to initialize the quiz when the page is loaded
initializeQuiz();
