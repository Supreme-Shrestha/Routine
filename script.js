const routineDiv = document.getElementById('routine');
const scheduleDiv = document.getElementById('schedule');

function getDayFolder() {
    const today = new Date();
    // Get the day of the week (0 for Sunday, 6 for Saturday)
    const day = today.getDay();
    return day === 0 ? 'Sunday' : weekdays[day - 1];
}

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const folderName = getDayFolder();

// Load the content from the corresponding folder's index.html
fetch(`./${folderName}/index.html`)
    .then(response => response.text())
    .then(htmlContent => {
        routineDiv.innerHTML = htmlContent;
    })
    .catch(error => {
        console.error('Error fetching content:', error);
        routineDiv.textContent = 'Error loading content.';
    });

fetch(`./schedules.html`)
    .then(response => response.text())
    .then(htmlContent => {
        scheduleDiv.innerHTML = htmlContent;
    })
    .catch(error => {
        console.error('Error fetching content:', error);
        scheduleDiv.textContent = 'Error loading content.';
    });