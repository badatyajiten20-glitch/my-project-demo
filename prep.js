// prep.js - Handles registration storage and login validation
document.addEventListener('DOMContentLoaded', function() {
    // Handle registration form (on registration.html)
    const regForm = document.querySelector('#regForm'); // Adjust ID as per your form
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const regUsername = document.querySelector('#regUsername')?.value || 'user1';
            const regPassword = document.querySelector('#regPassword')?.value || 'pass123';
            
            // Store registration data
            localStorage.setItem('regUser', regUsername);
            localStorage.setItem('regPass', regPassword);
            
            alert('Registration successful! Please login.');
            window.location.href = 'login.html'; // Redirect to login after reg
        });
    }
    
    // Handle login validation (on login.html)
    const loginCheckForm = document.querySelector('#loginForm');
    if (loginCheckForm) {
        loginCheckForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputUser = document.querySelector('#username')?.value;
            const inputPass = document.querySelector('#password')?.value;
            const storedUser = localStorage.getItem('regUser');
            const storedPass = localStorage.getItem('regPass');
            
            if (inputUser === storedUser && inputPass === storedPass) {
                window.location.href = 'preparation.html';
            } else {
                alert('Error: Username or password does not match!');
            }
        });
    }
});
// Handle logout functionality
const logoutBtn = document.querySelector('#logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('regUser');
        localStorage.removeItem('regPass');
        window.location.href = 'login.html';
    });
}