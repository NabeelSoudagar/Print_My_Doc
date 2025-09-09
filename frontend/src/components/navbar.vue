<template>
  <nav class="navbar">
    <h1>📄 Print Service</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/users">Sign Up</router-link></li>
      <li><router-link to="/Upload">Order</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  color: #f0f0f0;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 2px solid #144d8c;
}

.navbar h1 {
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1px;
  user-select: none;
}

.navbar ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.navbar a {
  text-decoration: none;
  color: #f0f0f0;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  user-select: none;
  position: relative;
}

.navbar a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 4px;
  left: 0;
  background-color: #f0f0f0;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  transform: scale(1.05);
}

.navbar a:hover::after {
  width: 100%;
}
</style>
