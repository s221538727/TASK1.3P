<template>
  <div id="app">
    <nav>
      <div class="container">
        <div class="logo">Portfolio</div>
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view /> <!-- This is where the route components will be displayed -->
  </div>
</template>

<style scoped>
nav {
  background-color: #574185; /* Background color of the navigation bar */
  color: #fff; /* Text color */
  border-radius: 20px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.nav-list li {
  font-size: 16px;
  position: relative; /* Add relative positioning */
}

.nav-list li a {
  text-decoration: none; /* Remove underlines from links */
  color: inherit; /* Inherit text color */
  transition: color 0.3s; /* Smooth color transition on hover */
}

/* Style for links on hover */
.nav-list li a:hover {
  color: #ff6600; /* Different color on hover, e.g., orange */
  font-weight: bold; /* Optionally, make text bold on hover */
}

/* Style for the active route link */
.router-link-active a {
  font-weight: bold;
  color: #ff6600;
}
</style>
