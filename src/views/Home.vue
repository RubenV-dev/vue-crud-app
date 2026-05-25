<script setup>
import { onMounted } from "vue";
import { useEmployeeStore } from "../stores/employee";

const store = useEmployeeStore();

onMounted(() => {
  store.fetchEmployees();
});

const deleteEmployee = async (id) => {
  store.deleteEmployee(id);
};
</script>

<template>
  <main>
    <div>
      <h2>Employee List</h2>
      <router-link to="add"> Add New </router-link>
      <ul>
        <li v-for="employee in store.employees" :key="employee.id">
          {{ employee.name }} - {{ employee.position }}
          <router-link :to="`edit/${employee.id}`"> Edit </router-link>
          <button @click="deleteEmployee(employee.id)">Delete</button>
        </li>
      </ul>
    </div>
  </main>
</template>
