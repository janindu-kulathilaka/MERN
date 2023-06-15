const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-input').value;
  const password = document.querySelector('#password-input').value;

  const data = {
    email: email,
    password: password
  };

  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log('Signup successful!');
      // Perform any necessary actions or redirect to a new page
    } else {
      const error = await response.text();
      console.error('Signup failed:', error);
    }
  } catch (error) {
    console.error('Error occurred during signup:', error);
  }
});

