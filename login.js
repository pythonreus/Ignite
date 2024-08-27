//switching from login to signup
document.getElementById("signup-link").addEventListener("click",() =>{
    document.getElementById("login-main").classList.add("d-none");
    document.getElementById("signup-main").classList.remove("d-none");
    document.getElementById("signup-main").classList.add("d-flex");
})


//switching from signup to login
document.getElementById("login-link").addEventListener("click",() =>{
    document.getElementById("signup-main").classList.add("d-none");
    document.getElementById("login-main").classList.remove("d-none");
    document.getElementById("login-main").classList.add("d-flex");
})




// Function to handle login
document.getElementById('user-login').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('https://lamp.ms.wits.ac.za/home/s2653945/ignite_login.php', { // Replace with the path to your PHP script
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                email: email,
                password: password
            })
        });

        const result = await response.text(); // Use response.text() because PHP returns plain text

        if (result.trim() === 'true') {
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            alert('Failed to login.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred.');
    }

});


// Function to handle signup
document.getElementById('user-sign-up').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmedPassword = document.getElementById('confirmed-password').value;

    // Add validation logic here (e.g., check if passwords match, email format is valid, etc.)
    if (password !== confirmedPassword) {
        alert('Passwords do not match!');
        return;
    }

    try {
        const response = await fetch('https://lamp.ms.wits.ac.za/home/s2653945/ignite_signup.php', { // Replace with the path to your PHP script
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: username,
                email: email,
                password: password
            })
        });

        const result = await response.text(); // Use response.text() because PHP returns plain text

        if (result.trim() === 'true') {
            alert('SignUp successful!');
            document.getElementById("signup-main").classList.add("d-none");
            document.getElementById("login-main").classList.remove("d-none");
            document.getElementById("login-main").classList.add("d-flex");
        } else {
            alert('Failed to SignUp.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred.');
    }

});