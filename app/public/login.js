const USERNAME = document.querySelector('#user');
const PASSWORD = document.querySelector('#pass');
const SUBMIT = document.querySelector('#submit');
const MSG = document.querySelector('#errMsg');

const submitFunc = async () => {
    const username = USERNAME.value;
    const password = PASSWORD.value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            MSG.style.visibility = 'inline';
            MSG.innerHTML = data.message;
            location.href = './viewPasswords.html';
        } else {
            MSG.style.visibility = 'inline';
            MSG.innerHTML = data.message;
        }
    } catch (error) {
        MSG.style.visibility = 'inline';
        MSG.innerHTML = `An error occurred. Please try again later.`;
        console.log(error);
        return 3;
    }
};

SUBMIT.onclick = submitFunc;
