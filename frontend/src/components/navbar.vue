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
@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes glow {
  0%, 100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
  50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4); }
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #1e3c72, #2a5298, #3b82f6);
  background-size: 200% 200%;
  color: #f0f0f0;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #144d8c;
  animation: slideDown 0.8s ease-out;
  position: relative;
  overflow: hidden;
}

.navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.navbar:hover::before {
  left: 100%;
}

.navbar h1 {
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.navbar h1:hover {
  animation: glow 1.5s ease-in-out infinite;
  transform: scale(1.05);
}

.navbar ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 2;
}

.navbar li {
  position: relative;
}

.navbar a {
  text-decoration: none;
  color: #f0f0f0;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8rem 1.4rem;
  border-radius: 25px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  user-select: none;
  position: relative;
  overflow: hidden;
  display: block;
}

.navbar a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.navbar a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 8px;
  left: 50%;
  background: linear-gradient(90deg, #ffdd57, #ffc107);
  transition: all 0.4s ease;
  border-radius: 2px;
  transform: translateX(-50%);
}

.navbar a:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.navbar a:hover::before {
  left: 100%;
}

.navbar a:hover::after {
  width: 80%;
}

.navbar a:active {
  transform: translateY(-1px) scale(1.02);
}
</style>
