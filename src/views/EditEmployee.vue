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
import { useRouter, useRoute } from "vue-router";
import { useEmployeeStore } from "../stores/employee";

const router = useRouter();
const route = useRoute();
const store = useEmployeeStore();

const name = ref("");
const position = ref("");

const updateEmployee = async () => {
  try {
    await store.updateEmployee(route.params.id, {
      name: name.value,
      position: position.value,
    });
    router.push("/"); // Redirect to home after updating
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};

onMounted(async () => {
  await store.fetchEmployeeById(route.params.id);
  name.value = store.selectedEmployee.name;
  position.value = store.selectedEmployee.position;
});
</script>
