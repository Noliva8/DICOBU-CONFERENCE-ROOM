// Elements Variables


const menuDisplayEl = document.getElementById('btn-menu');
const lianyMenuSideEl = document.querySelector('.liany-menu-side');
const closeBtnEl = document.querySelector('.close-btn');
const promotionEl = document.querySelector('.promotion');
const countdownEl = document.querySelector('.countdown');





// MENU

// a) Phone Menu display

function DisplayMenu() {
    const screenSize = window.innerWidth;
    if (screenSize <= 950) {
        lianyMenuSideEl.style.display = 'block';
    } else {
        lianyMenuSideEl.style.display = 'none';
    }
}

menuDisplayEl.addEventListener('click', DisplayMenu);

// b. Closing Phone Menu display

function  closeMenu () {
    lianyMenuSideEl.setAttribute('style', 'display: none');
}

closeBtnEl.addEventListener('click', closeMenu);


// c) Window resize

window.addEventListener('resize', () => {
    const screenSize = window.innerWidth;
    if (screenSize > 974) {
        closeMenu();
    }
});


// Promotion

const promotionDaysLeft = 30; 
const endTime = new Date().getTime() + promotionDaysLeft * 24 * 60 * 60 * 1000; 

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    // Calculate days, hours, minutes, and seconds left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    countdownEl.innerHTML = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, hide the promotion
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        promotionEl.style.display = 'none';
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();

// scroll section


document.querySelectorAll('.scrolling-image').forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector('.image-container').classList.add('stopped');
        document.querySelectorAll('.scrolling-image').forEach(img => {
            img.style.transform = 'scale(1)'; // Reset scale for all images
        });
        image.style.transform = 'scale(1.5)'; // Scale up the clicked image
    });
});



// gallery


// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImage");

document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}



// contact form



(function() {
        emailjs.init("service_6thn1ir");
    })();



    document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(contactForm);

        // Convert form data to object
        const formDataObject = {};
        formData.forEach(function(value, key) {
            formDataObject[key] = value;
        });

        // Send email using EmailJS
        emailjs.send("service_6thn1ir", "template_7lne9dm", formDataObject)
            .then(function(response) {
                console.log("Email sent:", response);
                // Display success message
                successMessage.style.display = "block";
            }, function(error) {
                console.error("Error sending email:", error);
            });

        // Reset form
        contactForm.reset();
    });
});
