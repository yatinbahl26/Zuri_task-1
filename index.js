// Function to update the current day of the week in words
function updateDayInWords() {
  const dayWordsElement = document.getElementById("date");
  const currentDate = new Date();
  const options = { weekday: "long" };
  const dayInWords = currentDate.toLocaleDateString("en-US", options);
  dayWordsElement.textContent = dayInWords;
}

// Function to update the current UTC time in milliseconds
function updateUTCTimeInMilliseconds() {
  const utcTimeMSElement = document.getElementById("time");
  const currentUTCTimeMS = new Date().getTime();
  utcTimeMSElement.textContent = currentUTCTimeMS;
}

// Update the day in words and UTC time in milliseconds initially and then refresh them every second
updateDayInWords();
updateUTCTimeInMilliseconds();
setInterval(updateDayInWords, 1000);
setInterval(updateUTCTimeInMilliseconds, 1000);
