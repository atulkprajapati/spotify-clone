import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("accessToken")) {
        window.location.href = 'dashboard/dashboard.login'
    } else {
        window.location.href = 'login/login.html'
    }
})

