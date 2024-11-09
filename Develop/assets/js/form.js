// TODO: Create a variable that selects the form element
const formElement = document.querySelector('form');
const userNameEl = document.getElementById("username")
const titleEl = document.getElementById("Title")
const contentEl = document.getElementById("content")
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function submitForm(event) {
  event.preventDefault()
   console.log (userNameEl.value)
   console.log (titleEl.value)
   console.log (contentEl.value.trim())
   let singlePost = {
    username:userNameEl.value,
    title:titleEl.value,
    content:contentEl.value.trim(),
   }
  storeLocalStorage(singlePost);
    redirectPage('blog.html'); // Redirect to posts page after storing
  }
// done: Add an event listener to the form on submit. Call the function to handle the form submission.

formElement.addEventListener('submit', submitForm );


