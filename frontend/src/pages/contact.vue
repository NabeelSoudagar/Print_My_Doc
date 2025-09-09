<template>
  <div class="contact-page">
    <section class="contact-hero">
      <h1>📞 Contact Us</h1>
      <p>We’re here to help you with all your printing and delivery needs.</p>
    </section>

    <!-- Contact Form -->
    <section class="contact-form">
      <form @submit.prevent="submitForm">
        <input v-model="form.name" type="text" placeholder="Your Name" required />
        <input v-model="form.email" type="email" placeholder="Your Email" required />
        <textarea v-model="form.message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>

    <!-- Contact Info -->
    <section class="contact-info">
      <div class="card">
        <h2>📍 Address</h2>
        <p>Shiv basav nagar belagavi Karnataka , India</p>
      </div>
      <div class="card">
        <h2>📧 Email</h2>
        <p>support@printservice.com</p>
      </div>
      <div class="card">
        <h2>📱 Phone</h2>
        <p>+91 7022461499</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { name: "", email: "", message: "" },
    };
  },
  methods: {
    submitForm() {
      alert(`✅ Thank you, ${this.form.name}! We’ll get back to you soon.`);
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
.contact-page {
  padding: 2rem;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

.contact-hero {
  margin-bottom: 2rem;
}

.contact-hero h1 {
  font-size: 2.5rem;
  color: #007bff;
  animation: bounceIn 1s ease-in-out;
}

.contact-form {
  max-width: 500px;
  margin: 0 auto 2rem;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
}

.contact-form button {
  padding: 0.9rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.contact-form button:hover {
  background: #0056b3;
  transform: scale(1.05);
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 250px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounceIn {
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); }
}
</style>
