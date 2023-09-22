<template>
  <div class="contact-us">
    <div class="contact-form">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitFeedback">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>

        <button type="submit">Send Feedback</button>
      </form>
    </div>
    <div class="contact-address">
      <h3>Contact Address</h3>
      <address>
        Your Company Name<br />
        123 Main Street<br />
        City, State ZIP Code<br />
        Phone: (123) 456-7890<br />
        Email: info@example.com
      </address>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/FooterPage.vue';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitFeedback() {
      // Handle form submission (e.g., send feedback to a server)
      console.log('Feedback submitted:', this.formData);
      // Clear form fields
      this.formData = {
        name: '',
        email: '',
        message: '',
      };
    },
  },
};
</script>

<style scoped>
.contact-us {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.contact-form {
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input[type="text"],
input[type="email"],
textarea {
  width: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

.contact-address {
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-address h3 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

address {
  font-style: normal;
}

/* Add responsive styles for specific screen sizes using media queries */
/* No need to include responsive styles here; they are in the external CSS file */
</style>
