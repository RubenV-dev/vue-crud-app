<template>
  <div>
    <h2>Edit Employee</h2>
    <EmployeeForm
      v-if="store.selectedEmployee"
      :initial-data="store.selectedEmployee"
      @submit="updateEmployee"
      submit-label="Update"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useEmployeeStore } from "../stores/employee";
import EmployeeForm from "../components/EmployeeForm.vue";

const router = useRouter();
const route = useRoute();
const store = useEmployeeStore();

const updateEmployee = async (formData) => {
  try {
    await store.updateEmployee(route.params.id, formData);
    router.push("/"); // Redirect to home after updating
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};

onMounted(async () => {
  await store.fetchEmployeeById(route.params.id);
});
</script>
