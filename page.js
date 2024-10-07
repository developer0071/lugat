
const toggleButton = document.getElementById('theme-toggle');
const icon = document.getElementById('icon');
const body = document.body;


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    

    if (body.classList.contains('dark-mode')) {
        icon.textContent = '🌜'; 
    } else {
        icon.textContent = '🌞';
    }
});