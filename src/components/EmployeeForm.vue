<template>
  <form @submit.prevent="submitForm">
    <label>
      Name:
      <input v-model="formData.name" required />
    </label>
    <label>
      Position:
      <input v-model="formData.position" required />
    </label>
    <button type="submit">{{ submitLabel }}</button>
  </form>
</template>

<script setup>
import { reactive, watch } from "vue";

const props = defineProps({
  initialData: Object,
  submitLabel: {
    type: String,
    default: "Submit",
  },
});

const emit = defineEmits(["submit"]);

const formData = reactive({
  name: "",
  position: "",
});

watch(
  () => props.initialData,
  (newVal) => {
    if (newVal) {
      formData.name = newVal.name || "";
      formData.position = newVal.position || "";
    }
  },
  { immediate: true },
);

const submitForm = () => {
  emit("submit", { ...formData });
};
</script>
