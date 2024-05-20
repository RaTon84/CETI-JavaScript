function send_request(value) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:3000/" + value, true);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            update_response(xhr.response);
        }
    }
}

function update_response(data) {
    let respuesta = document.getElementById('respuesta');
    respuesta.innerHTML = data;
}

document.addEventListener("DOMContentLoaded", function(event) {
    options = [document.getElementById('option1'), document.getElementById('option2'), document.getElementById('option3')];
    for (option of options) {
        option.addEventListener('change', function() {
            send_request(this.value);
        });
    }
});
