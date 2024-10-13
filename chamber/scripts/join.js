function setTimestamp() {
    const timestampInput = document.getElementById('timestamp');
    const now = new Date();
    timestampInput.value = now.toISOString();
}

function showModal(modalId) {
    const dialog = document.getElementById(modalId);
    dialog.showModal();
}

function closeModal(modalId) {
    const dialog = document.getElementById(modalId);
    dialog.close();
}

function storeData() {
    localStorage.setItem('userName', document.getElementById('name').value);
    localStorage.setItem('userLastname', document.getElementById('lastname').value);
    localStorage.setItem('userEmail', document.getElementById('email').value);
    localStorage.setItem('userPhone', document.getElementById('phone').value);
    localStorage.setItem('userCompany', document.getElementById('organization').value);
    
    const currentDate = new Date();
    localStorage.setItem('submissionTime', currentDate.toLocaleString());
}

window.onclick = function(event) {
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
};