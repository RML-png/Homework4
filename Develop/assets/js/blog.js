// Select the main element
const mainElement = document.querySelector('main');

// Select the Back button element by its ID
const backButton = document.getElementById('back');

// Function to create and append a new div element
function createAndAppendElement(content, className) {
    const newDiv = document.createElement('div');
    newDiv.textContent = content;
    newDiv.className = className;
    mainElement.appendChild(newDiv);
}

// Call the function to create and append a new div
createAndAppendElement('This is a new div element!', 'my-new-div');

// Function to handle the case where there are no blog posts to display
function noPostsFunction() {
    createAndAppendElement("No Blog posts yet...", 'my-new-div');
}

// Function to render the list of blog posts
function renderBlogList() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length > 0) {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>By: ${post.username}</p>
                <p>${post.content}</p>
            `;
            document.getElementById('blogList').appendChild(postElement);
        });
    } else {
        noPostsFunction();
    }
}

// Call the `renderBlogList` function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    renderBlogList();
});

// Redirect to the home page using the `redirectPage` function when the back button is clicked
backButton.addEventListener('click', () => {
    redirectPage('index.html'); 
});

// Redirect function
function redirectPage(url) {
    location.assign(url);
}