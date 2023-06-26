// Wait for the HTML document to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the timer element
    const timerElement = document.getElementById('timer');
    
    // Set the initial game time to 0
    let gameTime = 0;
    
    // Function to update the timer display
    function updateTimer() {
      timerElement.innerText = `Game Time: ${gameTime} minutes`;
    }
    
    // Function to handle rune and tormentor spawns
    function handleSpawns() {
      // Check for bounty rune spawn every 3 minutes
      if (gameTime % 3 === 0) {
        console.log('Bounty Rune Spawn!');
      }
      
      // Check for wisdom rune spawn every 7 minutes
      if (gameTime % 7 === 0) {
        console.log('Wisdom Rune Spawn!');
      }
      
      // Check for tormentor spawn at 15 minutes
      if (gameTime === 15) {
        console.log('The Tormentor Spawn!');
      }
    }
    
    // Function to increment the game time every minute
    function incrementTime() {
      gameTime++;
      updateTimer();
      handleSpawns();
    }
    
    // Call the incrementTime function every minute (60,000 milliseconds)
    setInterval(incrementTime, 60000);
  });
  