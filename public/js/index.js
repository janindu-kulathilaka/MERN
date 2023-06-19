const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the email and password values from the form
  const email = document.querySelector("#email-input").value;
  const password = document.querySelector("#password-input").value;

  // Create a data object to send in the request body
  const data = {
    email: email,
    password: password,
  };

  try {
    // Send the POST request to the /signup endpoint
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Signup was successful
      console.log("Signup successful!");
      // Perform any necessary actions or redirect to a new page
    } else {
      // Signup failed
      const error = await response.text();
      console.error("Signup failed:", error);
    }
  } catch (error) {
    console.error("Error occurred during signup:", error);
  }
});
