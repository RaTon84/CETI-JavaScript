document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function(ev) {
        const name = document.getElementById('name');
        const lastname = document.getElementById('lastname');
        const user = document.getElementById('user');
        const terms = document.getElementById('terms');

        const isNameValid = name.value !== '';
        const isLastnameValid = lastname.value !== '';
        const isUserValid = user.value.length > 4 && user.value.length <= 8 && !user.value.includes(' ');
        const isTermsValid = terms.checked;

        if (!isNameValid) {
            name.setAttribute('class', 'form-control is-invalid');
        } else {
            name.setAttribute('class', 'form-control is-valid');
        }

        if (!isLastnameValid) {
            lastname.setAttribute('class', 'form-control is-invalid');
        } else {
            lastname.setAttribute('class', 'form-control is-valid');
        }

        if (!isUserValid) {
            user.setAttribute('class', 'form-control is-invalid');
        } else {
            user.setAttribute('class', 'form-control is-valid');
        }

        if (!isTermsValid) {
            terms.setAttribute('class', 'form-control is-invalid');
        } else {
            terms.setAttribute('class', 'form-control is-valid');
        }

        if (!isNameValid || !isLastnameValid || !isUserValid || !isTermsValid) {
            ev.preventDefault();
            return false;
        }
    })
});
