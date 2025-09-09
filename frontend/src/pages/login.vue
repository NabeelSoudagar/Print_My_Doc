<template>
  <div class="form-wrapper">
    <h2 class="form-title">🔐 Login</h2>
    <form @submit.prevent="loginUser" class="form">
      <input v-model="credentials.email" type="email" placeholder="Email Address" required />
      <input v-model="credentials.password" type="password" placeholder="Password" required />
      <button type="submit">➡️ Login</button>
    </form>

    <!-- Success / Error message -->
    <p v-if="message" :class="status">{{ message }}</p>
  </div>
</template>

<script>
import { loginUser as loginApi } from '../services/api'

export default {
  data() {
    return {
      credentials: { email: '', password: '' },
      message: "",
      status: "" // "success" or "error"
    }
  },
  methods: {
    async loginUser() {
      try {
        const res = await loginApi(this.credentials)
        this.message = "✅ Login successful! Redirecting..."
        this.status = "success"

        // Store token in localStorage
        localStorage.setItem('token', res.data.token)

        // Clear inputs
        this.credentials = { email: '', password: '' }

        // Redirect to home after 2s
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)
      } catch (error) {
        this.message = "❌ Invalid email or password"
        this.status = "error"
        console.error(error.response?.data || error.message)

        setTimeout(() => { this.message = "" }, 3000)
      }
    }
  }
}
</script>

<style scoped>
/* Wrapper */
.form-wrapper {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: center;
  animation: fadeIn 0.8s ease-in-out;
}

.form-title {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
}

/* Form */
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form input:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  transform: translateY(-2px);
}

.form button {
  padding: 0.9rem;
  background: linear-gradient(135deg, #007bff, #00c6ff);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.form button:hover {
  background: linear-gradient(135deg, #0056b3, #00a6d6);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Status Messages */
.success {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
  animation: fadeIn 0.5s;
}
.error {
  margin-top: 1rem;
  color: red;
  font-weight: bold;
  animation: fadeIn 0.5s;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
