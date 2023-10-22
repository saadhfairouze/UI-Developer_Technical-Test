const submitBtn = document.getElementById('btnsubmit');

const validate = (e) => {
e.preventDefault();
    const emailAddress = document.getElementById('email');
    email.style.color="red";


if (emailAddress.value === "") {
document.getElementById("message").style.display = 'block';
email.style.color="red";
emailAddress.focus();
return false;
}

if (!emailIsValid(emailAddress.value)) {
document.getElementById("message").style.display = 'block';

emailAddress.focus();
return false;
}

return true; 
}

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

