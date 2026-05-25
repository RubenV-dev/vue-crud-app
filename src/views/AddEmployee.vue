<template>
  <h2>Add New Employee</h2>
  <EmployeeForm @submit="handleSubmit" submit-label="Add" />
</template>

<script setup>
import { useRouter } from "vue-router";
import { useEmployeeStore } from "../stores/employee";
import EmployeeForm from "../components/EmployeeForm.vue";

const router = useRouter();
const store = useEmployeeStore();

const handleSubmit = async (formData) => {
  try {
    await store.addEmployee(formData);
    router.push("/"); // Redirect to home after adding
  } catch (error) {
    console.error("Error adding employee:", error);
  }
};
</script>
