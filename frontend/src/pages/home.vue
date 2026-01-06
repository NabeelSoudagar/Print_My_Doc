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
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 221, 87, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 221, 87, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 221, 87, 0); }
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.home {
  font-family: Arial, sans-serif;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 400% 400%;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 70vh;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  background-size: 200% 200%;
  animation: shimmer 3s infinite;
  pointer-events: none;
}

.hero-content {
  max-width: 50%;
  animation: fadeInLeft 1s ease-out;
  z-index: 2;
  position: relative;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #ffdd57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 1.2s ease-out 0.3s both;
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: fadeInUp 1.2s ease-out 0.6s both;
}

.hero-image {
  animation: fadeInRight 1s ease-out 0.4s both;
  z-index: 2;
  position: relative;
}

.hero-image img {
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  animation: float 3s ease-in-out infinite;
}

.hero-image img:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
}

.btn-primary {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ffdd57, #ffc107);
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 1.2s ease-out 0.9s both, pulse 2s infinite;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s;
}

.btn-primary:hover {
  background: linear-gradient(45deg, #ffc107, #ff9800);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 30px rgba(255, 193, 7, 0.4);
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:active {
  transform: translateY(-1px) scale(1.02);
}

/* Features */
.features {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.features h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 1s ease-out;
}

.features-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background: #fff;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 280px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 1s ease-out;
  cursor: pointer;
}

.card:nth-child(1) { animation-delay: 0.2s; }
.card:nth-child(2) { animation-delay: 0.4s; }
.card:nth-child(3) { animation-delay: 0.6s; }

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.6s;
}

.card:hover {
  transform: translateY(-15px) scale(1.05);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
}

.card:hover::before {
  left: 100%;
}

.card img {
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  object-fit: cover;
}

.card:hover img {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #333;
  transition: color 0.3s ease;
}

.card:hover h3 {
  color: #667eea;
}

.card p {
  color: #666;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.card:hover p {
  color: #555;
}
</style>
