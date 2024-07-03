//Function to set the active class
function setActiveNav(){
    //Get the current URL path
    const currentPath = window.location.pathname.split('/').pop();

    //Select all navigation links
    const navLinks = document.querySelectorAll('.navbar ul li a');

    //Loop through each link and add the active class to the matching links
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentPath){
            link.parentElement.classList.add('active');
        }
        else{
            link.parentElement.classList.remove('active');
        }
    });
}

//Toggle menu function
function toggleMenu(){
    const menu = document.querySelector('.navbar ul');
    menu.classList.toggle('show');
}

//Call the function on page load
window.onload = setActiveNav;

//Giving action to navigation buttons
const backButton = document.getElementById("backBtn");
const nextButton = document.getElementById("nextBtn");
const pages = [
    'index.html',
    'service-product.html',
    'our-works.html', 
    'about-us.html', 
    'contacts.html'
];

function getCurrentPageIndex(){
    const currentPage = window.location.pathname.split('/').pop();
    return pages.indexOf(currentPage);
}

backButton.addEventListener('click', function(){
    const currentIndex = getCurrentPageIndex();
    if (currentIndex > 0) {
        window.location.href = pages[currentIndex - 1];
    }
});

nextButton.addEventListener('click', function(){
    const currentIndex = getCurrentPageIndex();
    if (currentIndex < pages.length - 1) {
        window.location.href = pages[currentIndex + 1];
    }
});
