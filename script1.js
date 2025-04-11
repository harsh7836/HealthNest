// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get form values
      const formData = {
        name: document.getElementById('name').value,
        phone_number: document.getElementById('phone-number').value,
        retype_phone_number: document.getElementById('retype-phone-number').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        appointment_date: document.getElementById('appointment-date').value
      };

      try {
        // Send form data to Pocketbase
        const response = await fetch('http://127.0.0.1:8090/api/collections/patient_data/records', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjMyNjU0ODIsImlkIjoiZGM4dXRueGg1cG9lcDZtIiwidHlwZSI6ImFkbWluIn0.FeTwf8rHkoEylPyUoRGRj8bvsWEG-YZWdiBr0mpcu2I' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const result = await response.json();
          alert('Appointment booked successfully!');
          // Optionally, clear the form or redirect
          document.querySelector('form').reset();
        } else {
          alert('Failed to book appointment. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    });
  });