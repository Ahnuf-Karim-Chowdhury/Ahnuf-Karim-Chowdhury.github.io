document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form element
    var form = event.target;

    // Make a POST request to Formspree
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Show custom success alert
                showAlert('Thank you for your suggestion!');
                form.reset();
            } else {
                // Show custom error alert
                showAlert('Oops! There was a problem with your submission.');
            }
        }
    };
    xhr.send(data);
});

// Function to show the custom alert
function showAlert(message) {
    var alertBox = document.getElementById('customAlert');
    var alertMessage = document.getElementById('alertMessage');
    
    alertMessage.textContent = message;  // Set the message in the alert box
    alertBox.classList.remove('hidden');  // Show the alert
}

// Function to close the custom alert
function closeAlert() {
    var alertBox = document.getElementById('customAlert');
    alertBox.classList.add('hidden');  // Hide the alert
}
