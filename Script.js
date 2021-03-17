const randomSelectorButton = document.getElementById("randomSelector");
const messageDisplay = document.getElementById("message-deliver");

//Parts of the  message
let topics = [
  "JavaScript History",
  "Callback Function",
  "Promises",
  "Loops",
  "Variables",
  "Data Types",
  "Functions",
  "Document Object Model",
  "Node.js",
  "Budgs and Errors",
  "Global Scope",
  "Arrays",
  "Classes",
  "Objects",
];
let time = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
let resources = [
  "https://javascript.info/",
  "https://www.w3schools.com/js/DEFAULT.asp",
  "https://www.codecademy.com/learn/introduction-to-javascript",
  "https://learnjavascript.online/",
  "https://eloquentjavascript.net/",
  "https://channel9.msdn.com/Series/Javascript-Fundamentals-Development-for-Absolute-Beginners",
];

//Function to select random message parts and deliver message
function randomSelector() {
  let topicSelected = topics[Math.floor(Math.random() * topics.length)];
  let timeSelected = time[Math.floor(Math.random() * time.length)];
  let resourceSelected =
    resources[Math.floor(Math.random() * resources.length)];
  return `Give yourself ${timeSelected} minutes and study ${topicSelected}. A great resource to help you 
    on this is ${resourceSelected}!`;
}

//start random selection
randomSelectorButton.addEventListener("click", () => {
  // Generate message to display
  message = randomSelector();
  messageDisplay.innerText = message;
});
