<template>
  <div class="users-container">
    <div class="users-card">
      <h2 class="page-title">👥 Manage Users</h2>
      <p class="page-subtitle">Add new users and manage existing accounts</p>
      <UserForm @userAdded="loadUsers" />
      <UserList ref="userList" />
    </div>
  </div>
</template>

<script>
import UserForm from '../components/UserForm.vue'
import UserList from '../components/UserList.vue'

export default {
  components: { UserForm, UserList },
  methods: {
    loadUsers() {
      this.$refs.userList.loadUsers()
    }
  }
}
</script>

<style scoped>
.users-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #74ebd5 0%, #9face6 100%);
  animation: fadeIn 1s ease-in-out;
}

.users-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  transform: scale(0.95);
  animation: zoomIn 0.5s forwards;
}

.page-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  margin-bottom: 1.5rem;
  color: #555;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  to { transform: scale(1); }
}
</style>
