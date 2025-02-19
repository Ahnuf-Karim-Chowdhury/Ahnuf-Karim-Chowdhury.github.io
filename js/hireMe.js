
    // Get references to the button and section
    const hireMeButton = document.getElementById('hireMeButton');
    const hireMeSection = document.getElementById('hire-me');

    // Add click event listener to the button
    hireMeButton.addEventListener('click', function() {
        // Toggle the 'hire-me-hidden' class to show or hide the section
        hireMeSection.classList.toggle('hire-me-hidden');
    });
