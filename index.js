// Words for typing
const words = [
    "javascript", "developer", "typing", "challenge", "keyboard", 
    "performance", "accuracy", "practice", "speed", "programming"
  ];
  
  let time = 60; // Timer in seconds
  let timer;
  let wordCount = 0;
  let correctChars = 0;
  let totalChars = 0;
  
  const wordDisplay = document.getElementById("word-display");
  const inputBox = document.getElementById("input-box");
  const timeDisplay = document.getElementById("time");
  const wpmDisplay = document.getElementById("wpm");
  const accuracyDisplay = document.getElementById("accuracy");
  const restartButton = document.getElementById("restart");
  
  // Display a random word
  function showNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.textContent = words[randomIndex];
  }
  
  // Start the timer
  function startTimer() {
    timer = setInterval(() => {
      time--;
      timeDisplay.textContent = time;
  
      if (time === 0) {
        clearInterval(timer);
        inputBox.disabled = true;
        calculateResults();
      }
    }, 1000);
  }
  
  // Calculate WPM and accuracy
  function calculateResults() {
    const wpm = Math.round((wordCount / 60) * (60 - time));
    const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;
  
    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = accuracy;
  }
  
  // Event listener for input
  inputBox.addEventListener("input", () => {
    const typedWord = inputBox.value.trim();
    const targetWord = wordDisplay.textContent;
  
    totalChars++;
  
    // Check for correct characters
    if (typedWord === targetWord) {
      correctChars += targetWord.length;
      wordCount++;
      inputBox.value = "";
      showNewWord();
    }
  });
  
  // Restart the game
  restartButton.addEventListener("click", () => {
    time = 60;
    wordCount = 0;
    correctChars = 0;
    totalChars = 0;
  
    inputBox.disabled = false;
    inputBox.value = "";
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "0";
    timeDisplay.textContent = "60";
  
    showNewWord();
    clearInterval(timer);
    startTimer();
  });
  
  // Initialize the game
  showNewWord();
  startTimer();
  