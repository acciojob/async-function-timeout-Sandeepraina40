const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Function that returns a Promise which resolves after 'ms' milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Button click event
btn.addEventListener("click", async () => {
  const text = textInput.value.trim();
  const delay = Number(delayInput.value);

  // Basic input validation
  if (!text) {
    output.textContent = "Please enter a message.";
    return;
  }
  if (!delay || delay < 0) {
    output.textContent = "Please enter a valid delay in milliseconds.";
    return;
  }

  output.textContent = "Waiting...";

  // Wait for the specified delay
  await wait(delay);

  // Show the message
  output.textContent = text;
});
