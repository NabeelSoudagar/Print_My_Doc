<template>
  <div>
    <h3>User List</h3>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="removeUser(user.id)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getUsers, deleteUser } from '../services/api'

export default {
  data() {
    return { users: [] }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    async loadUsers() {
      const res = await getUsers()
      this.users = res.data
    },
    async removeUser(id) {
      await deleteUser(id)
      this.loadUsers()
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
}
button {
  margin-left: 1rem;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
}
</style>
