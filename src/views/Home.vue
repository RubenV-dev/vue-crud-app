<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const employees = ref([]);

onMounted(() => {
  fetchEmployees();
});

const fetchEmployees = async () => {
  try {
    const response = await axios.get("http://localhost:3000/employees");
    employees.value = response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};

const deleteEmployee = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/employees/${id}`);
    fetchEmployees(); // Refresh the employee list
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
};
</script>

<template>
  <main>
    <div>
      <h2>Employee List</h2>
      <router-link to="add"> Add New </router-link>
      <ul>
        <li v-for="employee in employees" :key="employee.id">
          {{ employee.name }} - {{ employee.position }}
          <router-link :to="`edit/${employee.id}`"> Edit </router-link>
          <button @click="deleteEmployee(employee.id)">Delete</button>
        </li>
      </ul>
    </div>
  </main>
</template>
