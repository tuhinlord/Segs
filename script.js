// Get references to the buttons and message
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");

// Function to move the "No" button randomly on the screen
noButton.addEventListener("click", () => {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

// Function to show the message when "Yes" is clicked
yesButton.addEventListener("click", () => {
  message.style.display = "block";
  message.innerHTML = "Yesssss, I knew you want it too. So tonight??😋";
});
