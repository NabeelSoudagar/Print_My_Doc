<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>📄 Fast & Reliable Document Printing</h1>
        <p>Upload your files, choose delivery, and get your documents printed hassle-free.</p>
        <router-link to="/users" class="btn-primary">Get Started</router-link>
      </div>
      <div class="hero-image">
        <img src="https://olaclick.com/wp-content/uploads/2023/02/aplicacion-Ito-scaled-compressed-3-scaled.jpg" alt="Printing" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>✨ Why Choose Us?</h2>
      <div class="features-grid">
        <div class="card">
          <img src="https://tse4.mm.bing.net/th/id/OIP.dUYWrnxC2dgqJntVV2R8vwHaHa?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt="High Quality" />
          <h3>High Quality</h3>
          <p>Crystal clear printing with premium paper options.</p>
        </div>
        <div class="card">
          <img src="https://thfvnext.bing.com/th/id/OIP.xeyC0b2D2ULGtGCGbnRbFQHaEU?w=277&h=180&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3" alt="Fast Delivery" />
          <h3>Fast Delivery</h3>
          <p>Get your documents delivered within hours.</p>
        </div>
        <div class="card">
          <img src="https://tse4.mm.bing.net/th/id/OIP.NbMbQ0Nehpgy2Bw9zMjzOwHaHN?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Affordable" />
          <h3>Affordable</h3>
          <p>Best printing rates with no hidden charges.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background: linear-gradient(135deg, #407dae, #6bc1b8);
  color: white;
}
.hero-content {
  max-width: 50%;
}
.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
.hero-image img {
  max-width: 350px;
}
.btn-primary {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #ffdd57;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: 0.3s;
}
.btn-primary:hover {
  background: #ffc107;
}

/* Features */
.features {
  text-align: center;
  padding: 3rem 2rem;
}
.features h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.features-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 250px;
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}
.card img {
  width: 70px;
  margin-bottom: 1rem;
}
.card h3 {
  margin-bottom: 0.5rem;
}
</style>
