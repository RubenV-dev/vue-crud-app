<script setup>
import { onMounted } from "vue";
import { useEmployeeStore } from "../stores/employee";
import EmployeeList from "../components/EmployeeList.vue";
import { RouterLink } from "vue-router";

const store = useEmployeeStore();

onMounted(() => {
  store.fetchEmployees();
});

const deleteEmployee = async (id) => {
  store.deleteEmployee(id);
};
</script>

<template>
  <div>
    <h2>Employee List</h2>
    <RouterLink to="add"> Add New </RouterLink>
    <EmployeeList :employees="store.employees" @delete="deleteEmployee" />
  </div>
</template>
