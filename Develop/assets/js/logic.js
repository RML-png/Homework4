const themeSwitcher = document.querySelector('#toggle');
const container = document.querySelector('body');
const usernameInput = document.querySelector('#username'); // Assuming you have an input with id 'username'
const blogTitleInput = document.querySelector('#blog-title'); // Assuming you have an input with id 'blog-title'
const blogContentInput = document.querySelector('#blog-content'); // Assuming you have an input with id 'blog-content'

// Set default mode to dark

let mode = localStorage.getItem('mode') || 'light';


// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // Toggle mode
  mode = (mode === 'dark') ? 'light' : 'dark';
  container.setAttribute('class', mode);
  localStorage.setItem('mode', mode); // Save mode to local storage
});



// Function to read from local storage
function readLocalStorage() {
  const blogData = JSON.parse(localStorage.getItem('blog')) || [];
  return blogData;
}

// Function to store data in local storage
function storeLocalStorage(newPost) {
  const blogData = readLocalStorage();
  
  blogData.push(newPost);
  localStorage.setItem('blog', JSON.stringify(blogData));
}



let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};