<template>
  <div class="form-wrapper">
    <h2 class="form-title">✨ Create Account</h2>
    <form @submit.prevent="submitForm" class="form">
      <input v-model="user.name" placeholder="Full Name" required />
      <input v-model="user.email" type="email" placeholder="Email Address" required />
      <input v-model="user.password" type="password" placeholder="Password" required />
      <input v-model="user.phone_no" placeholder="Phone Number" />
      <input v-model="user.address" placeholder="Address" />
      <button type="submit">🚀 Create User</button>
    </form>

    <!-- Success / Error message -->
    <p v-if="message" :class="status">{{ message }}</p>
  </div>
</template>

<script>
import { createUser } from '../services/api'

export default {
  data() {
    return {
      user: { name: '', email: '', password: '', phone_no: '', address: '' },
      message: "",
      status: "" // "success" or "error"
    }
  },
  methods: {
    async submitForm() {
      try {
        await createUser(this.user)
        this.message = "✅ User created successfully! Redirecting to login..."
        this.status = "success"
        this.$emit('userAdded')

        // Clear the form
        this.user = { name: '', email: '', password: '', phone_no: '', address: '' }

        // Redirect after 2 seconds
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
      } catch (error) {
        this.message = "❌ Failed to create user"
        this.status = "error"
        console.error(error.response?.data || error.message)

        // Auto-hide error after 3 seconds
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
