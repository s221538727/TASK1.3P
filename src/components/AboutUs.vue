<template>
  <div class="about-content">
    <!-- First section -->
    <div class="about-section">
      <div class="left">
        <img src="favicon.ico" alt="Favicon" class="favicon" />
      </div>
      <div class="right">
        <p>
          I organized the project by creating separate Vue components for the navigation bar, home, about us, and contact us pages. Each component had its template, script, and scoped styles. This modular approach made the project more manageable and allowed for easy component reuse.
        </p>
      </div>
    </div>

    <!-- Second section (repeat as needed) -->
    <div class="about-section">
      <div class="right">
        <p>
          To manage the enrollment form data and display it in a tabular format, I utilized Vue's reactive data system. I stored enrollment data in local storage, ensuring it persisted even after page refreshes. The form submission and CRUD (Create, Read, Update, Delete) operations were handled efficiently using Vue methods and reactivity. Editing a record dynamically updated the form fields, and I provided a save and cancel option for editing.
        </p>
      </div>
      <div class="left">
        <img src="favicon.ico" alt="Favicon" class="favicon" />
      </div>
   
    </div>
    <div class="about-section">
      
      <div class="left">
        <img src="favicon.ico" alt="Favicon" class="favicon" />
      </div>
      <div class="right">
        <p>
          For styling, I used scoped CSS styles for each component. I made the navigation bar horizontal and styled it with appropriate colors. I implemented responsive design using media queries and external CSS files. The enrollment form and table were styled for better readability and aesthetics.
        </p>
      </div>
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
}
</script>
<style scoped>
/* Add your CSS styles for the AboutUs component here */
.about-content {
  display: flex;
  flex-direction: column;
}

.about-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.left {
  flex: 1;
}

.right {
  flex: 1;
  margin-left: 20px; /* Add margin as needed for spacing */
}

.favicon {
  width: 200px;
  height: 200px;
}
</style>
