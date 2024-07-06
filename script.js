document.addEventListener('DOMContentLoaded', function() {
    const sortButton = document.getElementById('sortButton');
    const wordInput = document.getElementById('wordInput');
    const sortedWords = document.getElementById('sortedWords');

    sortButton.addEventListener('click', function() {
        // Get input value and split into an array of words
        let words = wordInput.value.split(',').map(word => word.trim());

        // Remove any empty strings from the array
        words = words.filter(word => word !== '');

        // Sort words alphabetically
        words.sort();

        // Display sorted words in the sortedWords div
        sortedWords.textContent = 'Sorted Words: ' + words.join(', ');
    });
});


