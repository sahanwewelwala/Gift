document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const enteredDate = document.getElementById('login-date').value;
  const correctDate = '2022-09-11'; // Replace with your correct date

  if (enteredDate === correctDate) {
    alert('Login successful! Redirecting...');
    window.location.href = 'main.html'; // Redirect to the next page
  } else {
    document.getElementById('error-message').textContent = 'Incorrect date. Please try again.';
  }
});
// script.js

// Smooth scrolling for "Scroll down" button
document.getElementById('scrollButton').addEventListener('click', () => {
  document.querySelector('.additional-section').scrollIntoView({ behavior: 'smooth' });
});

// Show/hide "Back to Top" button
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > 500) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Smooth scrolling for "Back to Top" button
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
