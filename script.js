document.addEventListener('DOMContentLoaded', function() {
    // Sign in / Sign up button functionality
    const signInUpButton = document.querySelector('.primary-button');
    signInUpButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Add your redirection logic here
        window.location.href = 'https://artisan-edreng3ayknrtnfcjybxwi.streamlit.app/';
    });

    // List a service button functionality
    const listServiceButton = document.querySelector('.secondary-button');
    listServiceButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Add your redirection logic here
        window.location.href = 'https://artisanmodel2-hufdvk6ngptcb4n3nxbfqy.streamlit.app/';
    });

    // Find an artisan form submission
    const searchForm = document.querySelector('form');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchInput = document.querySelector('#searchbutton').value;
        // search logic here
        console.log('Barbing salon near me', searchInput);
        // Optionally, you can store the searchInput in local storage
        localStorage.setItem('searchInput', searchInput);
    });

    const searchInput = document.getElementById('searchbutton'); // Assuming your input field has an id 'search-input'
    
    searchForm.addEventListener('submit', async function(event) {
        event.preventDefault(); 
    
        const searchQuery = searchInput.value.trim();
        if (searchQuery !== '') {
        try {
            // Call your search functionality, such as fetching data from a server
         const searchResults = await fetchSearchResults(searchQuery);
    
            displaySearchResults(searchResults);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                }
            } else {
                // Handle empty search query if needed
                console.log('Empty search query.');
            }
        });
    
        async function fetchSearchResults(query) {
            // Example of fetching search results from a server using fetch API
            const response = await fetch(`https://artisan-edreng3ayknrtnfcjybxwi.streamlit.app/`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results.');
            }
            return response.json();
        }
    
        function displaySearchResults(results) {
            // Example of updating the DOM with search results
            const searchResultsHTML = results.map(result => `<div>${result.title}</div>`).join('');
            searchResultsContainer.innerHTML = searchResultsHTML;
        }
    });
    

    // Browse categories button functionality
    const browseCategoriesButton = document.querySelector('.submitButton button');
    browseCategoriesButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Add your redirection logic here
        window.location.href = 'your_browse_categories_page_url';
    });

    // Footer links functionality
    const footerLinks = document.querySelectorAll('.footer a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const linkHref = this.getAttribute('href');
            // Add your redirection logic here
            window.location.href = linkHref;
        });
    });



document.addEventListener("DOMContentLoaded", function() {
    // Handle button clicks
    const signInBtn = document.querySelector(".primary-button a");
    const signUpBtn = document.querySelector(".secondary-button a");

    signInBtn.addEventListener("click", function() {
        window.location.href = "signin.html"; // Redirect to sign-in page
    });

    signUpBtn.addEventListener("click", function() {
        window.location.href = "signup.html"; // Redirect to sign-up page
    });
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

scrollRevealOption().reveal(".grid-item", {
    ...scrollRevealOption,
    delay:500,

})

scrollRevealOption().reveal(".page-container", {
    ...scrollRevealOption,
    delay:2000,
    
})

scrollRevealOption().reveal(".submitButton button", {
    ...scrollRevealOption,
    origin: "bottom",
    duration: 1000,
    delay:2500,
    
})