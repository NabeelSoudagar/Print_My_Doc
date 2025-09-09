<template>
  <div class="upload-container">
    <div class="upload-card">
      <h1 class="title">📄 Upload & Print</h1>
      <p class="subtitle">Upload your document and place an order instantly!</p>

      <form @submit.prevent="submitOrder" class="upload-form">
        <!-- File Upload -->
        <label class="file-label">
          <span>Choose Document</span>
          <input type="file" @change="handleFileUpload" required />
        </label>

        <!-- Copies -->
        <label>
          Number of Copies
          <input type="number" v-model="order.copies" min="1" required />
        </label>

        <!-- Print Type -->
        <label>
          Print Type
          <select v-model="order.type">
            <option value="bw">🖤 Black & White</option>
            <option value="color">🌈 Color</option>
          </select>
        </label>

        <!-- Binding Type -->
        <label>
          Binding Type
          <select v-model="order.binding_type">
            <option value="none">None</option>
            <option value="staple">Staple</option>
            <option value="glue">Glue</option>
            <option value="spiral">Spiral</option>
          </select>
        </label>

        <!-- Payment Method -->
        <label>
          Payment Method
          <select v-model="order.payment_method">
            <option value="cash_on_delivery">Cash on Delivery</option>
          </select>
        </label>

        <!-- Delivery Address -->
        <label class="add">
          Delivery Address
          <textarea v-model="order.delivery_address" placeholder="Enter your delivery address" required></textarea>
        </label>

        <!-- Order Now Button -->
        <button type="submit" class="order-btn">
          🖨️ Order Now
        </button>

        <!-- Print Button (after order) -->
        <button v-if="orderId" type="button" @click="printOrder" class="print-btn">
          🖨️ Print Document
        </button>
      </form>

      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { uploadDocument, printDocument } from "../services/api";

export default {
  data() {
    return {
      file: null,
      order: {
        copies: 1,
        type: "bw",
        binding_type: "none",
        payment_method: "cash_on_delivery",
        delivery_address: ""
      },
      orderId: null,
      message: ""
    };
  },
  methods: {
    handleFileUpload(e) {
      this.file = e.target.files[0];
    },
    async submitOrder() {
      if (!this.file) {
        this.message = "⚠️ Please select a file first.";
        return;
      }

      try {
        const formData = new FormData();
        formData.append("file", this.file);
        formData.append("copies", this.order.copies);
        formData.append("type", this.order.type);
        formData.append("binding_type", this.order.binding_type);
        formData.append("delivery_address", this.order.delivery_address);

        const response = await uploadDocument(formData);
        this.orderId = response.data.order.id;
        this.message = "✅ Order placed successfully!";
        this.file = null;
        this.order = { copies: 1, type: "bw", binding_type: "none", payment_method: "cash_on_delivery", delivery_address: "" };
      } catch (err) {
        console.error(err);
        this.message = "❌ Failed to place order.";
      }
    },
    async printOrder() {
      if (!this.orderId) {
        this.message = "⚠️ No order to print.";
        return;
      }

      try {
        await printDocument(this.orderId);
        this.message = "✅ Document sent to printer!";
      } catch (err) {
        console.error(err);
        this.message = "❌ Failed to print document.";
      }
    }
  }
};
</script>

<style scoped>
.upload-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #74ebd5 0%, #9face6 100%);
  animation: fadeIn 1s ease-in-out;
}

.upload-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  transform: scale(0.95);
  animation: zoomIn 0.5s forwards;
}

.title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  margin-bottom: 1.5rem;
  color: #555;
}

.upload-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.upload-form input,
.upload-form select {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s;
}

.upload-form input:focus,
.upload-form select:focus {
  border-color: #007bff;
  outline: none;
}

.file-label {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: .3rem;
}


.order-btn {
  padding: 0.8rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.order-btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.message {
  margin-top: 1rem;
  font-weight: bold;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  to { transform: scale(1); }
}
</style>
