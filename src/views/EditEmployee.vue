<template>
  <div>
    <h2>Edit Employee</h2>
    <form @submit.prevent="updateEmployee">
      <input placeholder="Name" v-model="name" />
      <input placeholder="Position" v-model="position" />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const name = ref("");
const position = ref("");

const fetchEmployee = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/employees/${id}`);
    name.value = response.data.name;
    position.value = response.data.position;
  } catch (error) {
    console.error("Error fetching employee:", error);
  }
};

const updateEmployee = async () => {
  try {
    await axios.put(`http://localhost:3000/employees/${id}`, {
      name: name.value,
      position: position.value,
    });
    router.push("/"); // Redirect to home after updating
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};

onMounted(() => {
  fetchEmployee();
});
</script>
