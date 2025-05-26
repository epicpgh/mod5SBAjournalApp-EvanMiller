const today = new Date();
const spanDate = document.getElementById("spanDate")

const form = document.getElementById("journal-form");
const titleInput = document.getElementById('entry-title');
const journalInput = document.getElementById("journal-content");
const searchInput = document.getElementById("search");
const entriesInput = document.getElementById("entries");


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString(undefined, options);

document.getElementById("spanDate").textContent = `Today's Date: ${formattedDate}`;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const content = journalInput.value.trim();
    if (!title || !content) return;

    const entry ={
        title, content,
        date: new Date().toLocaleString()
    };
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.unshift(entry);
    localStorage.setItem("entries", JSON.stringify(entries));
  
    titleInput.value = "";
    contentInput.value = "";
    loadEntries();
  });

  localStorage.setItem("key", JSON.stringify(data));
