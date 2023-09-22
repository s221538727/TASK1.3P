<template>
  <div class="home-content">
    <h2>Enrollment Form</h2>

    <!-- Enrollment Form -->
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="formData.age" required />
      </div>

      <div class="form-group">
        <label for="college">College:</label>
        <input type="text" id="college" v-model="formData.college" required />
      </div>

      <div class="form-group">
        <label for="regNumber">Registration Number:</label>
        <input type="text" id="regNumber" v-model="formData.registrationNumber" required />
      </div>

      <button type="submit" v-if="!editing">Enroll</button>
      <button type="button" v-if="editing" @click="saveEdit" class="edit-button">Save</button>
      <button type="button" v-if="editing" @click="cancelEdit">Cancel</button>
    </form>

    <!-- Display Enrollment Data in a Table -->
    <table v-if="enrollments.length > 0" class="responsive-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>College</th>
          <th>Registration Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(enrollment, index) in enrollments" :key="index">
          <td>{{ enrollment.name }}</td>
          <td>{{ enrollment.age }}</td>
          <td>{{ enrollment.college }}</td>
          <td>{{ enrollment.registrationNumber }}</td>
          <td>
            <button @click="editEnrollment(index)" class="edit-button">Edit</button>
            <button @click="deleteEnrollment(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
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
        age: '',
        college: '',
        registrationNumber: '',
      },
      enrollments: JSON.parse(localStorage.getItem('enrollments')) || [], // Retrieve data from localStorage
      editing: false, // Flag for editing mode
      editingIndex: null, // Index of the enrollment being edited
    };
  },
  methods: {
    submitForm() {
      if (!this.editing) {
        // Add form data to enrollments array
        this.enrollments.push({ ...this.formData });
      } else {
        // Save edited data to the array
        this.enrollments[this.editingIndex] = { ...this.formData };
        this.editing = false; // Exit editing mode
      }

      // Store enrollment data in localStorage
      localStorage.setItem('enrollments', JSON.stringify(this.enrollments));

      // Clear form fields
      this.formData = {
        name: '',
        age: '',
        college: '',
        registrationNumber: '',
      };
    },
    editEnrollment(index) {
      // Enter editing mode and populate the form with data
      this.editing = true;
      this.editingIndex = index;
      this.formData = { ...this.enrollments[index] };
    },
    saveEdit() {
      // Save edited data to the array
      this.enrollments[this.editingIndex] = { ...this.formData };
      this.editing = false; // Exit editing mode

      // Update localStorage
      localStorage.setItem('enrollments', JSON.stringify(this.enrollments));

      // Clear form fields
      this.formData = {
        name: '',
        age: '',
        college: '',
        registrationNumber: '',
      };
    },
    cancelEdit() {
      // Exit editing mode
      this.editing = false;
      this.editingIndex = null;

      // Clear form fields
      this.formData = {
        name: '',
        age: '',
        college: '',
        registrationNumber: '',
      };
    },
    deleteEnrollment(index) {
      // Remove enrollment from the array
      this.enrollments.splice(index, 1);

      // Update localStorage
      localStorage.setItem('enrollments', JSON.stringify(this.enrollments));
    },
  },
};
</script>





<style scoped>
/* Link the external CSS file */
@import url('./styles.css');
.edit-form {
  padding: 20px;
  margin: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.edit-form h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.edit-form .form-group {
  margin-bottom: 15px;
}

.edit-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.edit-form input[type="text"],
.edit-form input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.edit-form button {
  background-color: #162e48;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-form button:hover {
  background-color: #2b5b8e;
}
.home-content {
  padding: 20px;
  margin: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
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
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background-color: #31115a;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  padding: 12px;
  text-align: left;
}

th {
  background-color: #5c2da1;
  color: #fff;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
.edit-button {
  margin-right: 10px; /* Adjust the margin as needed */
}

/* Add responsive styles for specific screen sizes using media queries */
/* No need to include responsive styles here; they are in the external CSS file */
</style>
