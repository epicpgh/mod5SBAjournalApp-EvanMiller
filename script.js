const today = new Date();

const form = document.getElementById("journal-form");
const titleInput = document.getElementById('entry-title');
const journalInput = document.getElementById("jpurnal-content);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString(undefined, options);

document.getElementById("spanDate").textContent = `Today's Date: ${formattedDate}`;