// auth.js
document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('Пожалуйста, войдите для доступа к этой странице.');
        window.location.href = 'login.html';
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}
