<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #4d308c;
    color: #fff;
    text-align: center;
    padding: 3px 0;
    border-radius: 20px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
  