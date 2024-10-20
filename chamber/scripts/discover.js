const lastVisitKey = 'lastVisit';
const now = new Date();

function calculateDaysSinceLastVisit(lastVisit) {
    const lastVisitDate = new Date(lastVisit);
    const timeDiff = now - lastVisitDate; 
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
}

if (!localStorage.getItem(lastVisitKey)) {
    document.querySelector('.sidebar').innerHTML += "<p>Welcome! Let us know if you have any questions.</p>";
} else {
    const lastVisit = localStorage.getItem(lastVisitKey);
    const daysSinceLastVisit = calculateDaysSinceLastVisit(lastVisit);

    if (daysSinceLastVisit < 1) {
        document.querySelector('.sidebar').innerHTML += "<p>Back so soon! Awesome!</p>";
    } else {
        const dayWord = daysSinceLastVisit === 1 ? 'day' : 'days';
        document.querySelector('.sidebar').innerHTML += `<p>You last visited ${daysSinceLastVisit} ${dayWord} ago.</p>`;
    }
}

localStorage.setItem(lastVisitKey, now.toISOString());

