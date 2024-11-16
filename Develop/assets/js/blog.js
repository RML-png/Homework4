// Select the main element
const mainElement = document.querySelector('main');

// Select the Back button element by its ID
const backButton = document.getElementById('back');

// Function to create and append a new div element
function createAndAppendElement(content, className) {
    const newDiv = document.createElement('article');
    const h2El = document.createElement("h2")
    const h3El = document.createElement ("h3")
    const pEl = document.createElement("p")
    h3El.textContent ="User: "+content.username
    h2El.textContent = "Blog: "+content.title;
    pEl.textContent = "Content: "+content.content;
    newDiv.classList.add(className);
    newDiv.appendChild(h2El)
    newDiv.appendChild(h3El)
    newDiv.appendChild(pEl)
    return newDiv
}

// Call the function to create and append a new div
//createAndAppendElement('This is a new div element!', 'my-new-div');

// Function to handle the case where there are no blog posts to display
function noPostsFunction() {
    const h4El = document.createElement("h4")
    h4El.textContent = "No Blog posts yet...", 'my-new-div'
    mainElement.appendChild(h4El)
}

// Function to render the list of blog posts
function renderBlogList() {
    const blogPosts = readLocalStorage()
    if (blogPosts.length > 0) {
        blogPosts.forEach(post => {
            const postElement = createAndAppendElement(post,"card")
            mainElement.appendChild(postElement);
            //  document.createElement('div');
            // postElement.innerHTML = `
            //     <h3>${post.title}</h3>
            //     <p>By: ${post.username}</p>
            //     <p>${post.content}</p>
            // `;
            //document.getElementById('blogList').appendChild(postElement);
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


   // renderBlogList()
