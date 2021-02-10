const nameInput = document.getElementById('name-input');
const pronounsInput = document.getElementById('pronouns-input');
const changeButton = document.getElementById('name-change-button');
const nameDisplay = document.getElementById('name');

changeButton.addEventListener('click', () => {
    nameDisplay.textContent =  nameInput.value;
    nameInput.value='';
});


