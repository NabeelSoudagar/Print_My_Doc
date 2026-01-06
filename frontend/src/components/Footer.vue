<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2023 Print Service. All rights reserved.</p>
      <ul class="footer-links">
        <li><router-link to="/contact">Contact Us</router-link></li>
        <li><router-link to="/privacy">Privacy Policy</router-link></li>
        <li><router-link to="/terms">Terms of Service</router-link></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  color: #f0f0f0;
  padding: 1rem 2rem;
  text-align: center;
  margin-top: auto;
  border-top: 2px solid #144d8c;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.footer-links a {
  text-decoration: none;
  color: #f0f0f0;
  font-weight: 600;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ffffff;
}
</style>
