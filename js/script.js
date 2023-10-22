// Define the URL of your backend API endpoint for making moves
const apiUrl = 'http://127.0.0.1:8000/chess/games/<game_id>/move/';

document.getElementById('submit-move').addEventListener('click', function() {
    const moveInput = document.getElementById('move-input').value;

    // Create a JSON object with the move data
    const moveData = {
        move: moveInput
    };

    // Make a POST request to the backend API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(moveData),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the backend, e.g., update the chessboard
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
