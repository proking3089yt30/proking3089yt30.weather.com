const form = document.querySelector('form');
const radios = form.elements['radio'];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            window.open(`http://www.${radios[i].value}.com`);
            break;
        }
    }
});
