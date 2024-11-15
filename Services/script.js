// Get the modal and button elements
var popupForm = document.getElementById("popupForm");
var openFormBtn = document.getElementById("openFormBtn");
var closeFormBtn = document.getElementById("closeFormBtn");

// Open the popup when the "Let's get started" button is clicked
openFormBtn.onclick = function() {
    popupForm.style.display = "block";
}

// Close the popup when the "X" button is clicked
closeFormBtn.onclick = function() {
    popupForm.style.display = "none";
}

// Close the popup if the user clicks anywhere outside of the form
window.onclick = function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = "none";
    }
}


function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.icont').forEach(section => {
        section.style.display = 'none';
    });

    // Show only the selected section
    document.getElementById(sectionId).style.display = 'flex';

    // Remove 'active' class from all nav items
    document.querySelectorAll('.nav p').forEach(navItem => navItem.classList.remove('active'));

    // Add 'active' class to clicked nav item
    document.querySelector(`#${sectionId.replace('Nav', 'DevNav')}`).classList.add('active');
}

