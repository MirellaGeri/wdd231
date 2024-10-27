function setTimestamp() {
    const timestampInput = document.getElementById('timestamp');
    const now = new Date();
    timestampInput.value = now.toISOString();
}
function storeData(event) {
    event.preventDefault();

    localStorage.setItem('userName', document.getElementById('name').value);
    localStorage.setItem('userEmail', document.getElementById('email').value);
    localStorage.setItem('userMessage', document.getElementById('message').value);

    
    const currentDate = new Date();
    localStorage.setItem('submissionTime', currentDate.toLocaleString());

    window.location.href = "thankyou.html";
}