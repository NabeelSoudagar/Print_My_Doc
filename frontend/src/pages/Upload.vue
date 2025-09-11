<template>
  <div class="form-wrapper">
    <h2 class="form-title">📄 Upload Document</h2>
    <form @submit.prevent="submitOrder" class="form">
      <input type="file" @change="onFileChange" required />
      <input v-model.number="copies" type="number" min="1" placeholder="Number of Copies" required />
      <select v-model="color">
        <option value="bw">B&W</option>
        <option value="color">Color</option>
      </select>
      <button type="submit" :disabled="loading">{{ loading ? 'Uploading...' : 'Order Now' }}</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
import { supabase } from "../services/supabase";
import { placeOrder } from "../services/api";

export default {
  data() {
    return { file: null, copies: 1, color: "bw", loading: false, message: "" };
  },
  methods: {
    onFileChange(e) { this.file = e.target.files[0]; },
    async submitOrder() {
      if (!this.file) { this.message = "Select file"; return; }
      this.loading = true; this.message = "";
      try {
        const filePath = `${Date.now()}_${this.file.name}`;
        // upload to public bucket 'documents' (must exist)
        const { data, error } = await supabase.storage
          .from("documents")
          .upload(filePath, this.file, { cacheControl: "3600", upsert: false });
        if (error) throw error;
        // get public URL (if bucket public)
        const { data: { publicUrl } } = supabase.storage.from("documents").getPublicUrl(filePath);
        // send order metadata to backend
        const res = await placeOrder({
          file_url: publicUrl,
          file_name: this.file.name,
          copies: this.copies,
          color: this.color
        });
        this.message = "Order placed!";
      } catch (err) {
        console.error(err);
        this.message = err.message || "Upload failed";
      } finally {
        this.loading = false;
      }
    }
  }
};
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

.form input,
.form select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form input:focus,
.form select:focus {
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

.form button:hover:not(:disabled) {
  background: linear-gradient(135deg, #0056b3, #00a6d6);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Message */
.message {
  margin-top: 1rem;
  font-weight: bold;
  animation: fadeIn 0.5s;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
