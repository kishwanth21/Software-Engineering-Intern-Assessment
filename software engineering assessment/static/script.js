function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('/login/', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('message').textContent = 'Login successful';
        } else {
            document.getElementById('message').textContent = 'Invalid credentials';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}