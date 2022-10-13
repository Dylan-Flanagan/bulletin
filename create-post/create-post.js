/* Imports */

import '../auth/user.js';
import { createPost, uploadImage } from '../fetch-utils.js';

/* DOM Elements*/

const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error-display');

/* State */

let error = null;

/*Events*/

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);

    const imageFile = formData.get('image_url');
    const randomFolder = Math.floor(Date.now() * Math.random());
    const imagePath = `posts/${randomFolder}/${imageFile.name}`;

    const url = await uploadImage('post-images', imagePath, imageFile);

    const post = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        contact: formData.get('contact'),
        image_url: url,
    };
    const response = await createPost(post);
    error = response.error;

    if (error) {
        displayError();
    } else {
        //location.assign('/')
    }
});

/* Display Functions */

function displayError() {
    if (error) {
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
