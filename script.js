document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            window.location.href = 'index.html'; 
        });
    }
    const signupForm = document.getElementById('signupform');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            window.location.href = 'login.html'; 
        });
    }
});
