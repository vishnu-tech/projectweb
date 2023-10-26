// Get references to elements and initialize the count
const currentCountElement = document.getElementById("currentCount");
const enterCountElement = document.getElementById("enterCount");
const enterButton = document.getElementById("enterButton");
const exitCountElement = document.getElementById("exitCount");
const exitButton = document.getElementById("exitButton");
const errorMessageElement = document.getElementById("errorMessage");

let currentCount = 0;
const maxCapacity = 500;

// Entery
enterButton.addEventListener("click", function() {
    const enteringCount = parseInt(enterCountElement.value);
    
    if (!isNaN(enteringCount) && enteringCount >= 0) {
        const newCount = currentCount + enteringCount;
        if (newCount <= maxCapacity) {
            currentCount = newCount;
            updateCountDisplay();
        } else {
            errorMessageElement.textContent = "Exceeds maximum capacity!";
        }
    } else {
        errorMessageElement.textContent = "Invalid input!";
    }
});

// Exit
exitButton.addEventListener("click", function() {
    const exitingCount = parseInt(exitCountElement.value);
    
    if (!isNaN(exitingCount) && exitingCount >= 0) {
        currentCount = Math.max(0, currentCount - exitingCount);
        updateCountDisplay();
    } else {
        errorMessageElement.textContent = "Invalid input!";
    }
});

// Function to update the count display
function updateCountDisplay() {
    currentCountElement.textContent = currentCount;
    errorMessageElement.textContent = "";
}