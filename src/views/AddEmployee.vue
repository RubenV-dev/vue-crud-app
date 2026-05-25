<template>
  <h2>Add New Employee</h2>
  <form @submit.prevent="addEmployee">
    <input placeholder="Name" v-model="name" />
    <input placeholder="Position" v-model="position" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const name = ref("");
const position = ref("");
const router = useRouter();
const addEmployee = async () => {
  try {
    await axios.post("http://localhost:3000/employees", {
      name: name.value,
      position: position.value,
    });
    router.push("/"); // Redirect to home after adding
  } catch (error) {
    console.error("Error adding employee:", error);
  }
};
const handleSubmit = () => {
  console.log("Form submitted with:", name.value, position.value);
};
</script>
