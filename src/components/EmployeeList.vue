<template>
  <ul>
    <li v-for="employee in employees" :key="employee.id">
      {{ employee.name }} - {{ employee.position }}
      <RouterLink :to="`edit/${employee.id}`"> Edit </RouterLink>
      <button @click="$emit('delete', employee.id)">Delete</button>
    </li>
  </ul>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  employees: Array,
});

defineEmits(["delete"]);
</script>
