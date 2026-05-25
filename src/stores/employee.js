import { defineStore } from "pinia";
import axios from "axios";

export const useEmployeeStore = defineStore("employee", {
  state: () => ({
    employees: [],
    selectedEmployee: null,
  }),
  actions: {
    async fetchEmployees() {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        this.employees = response.data;
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },
    async addEmployee(payload) {
      try {
        const response = await axios.post(
          "http://localhost:3000/employees",
          payload,
        );
        this.employees.push(response.data);
      } catch (error) {
        console.error("Error adding employee:", error);
      }
    },
    async deleteEmployee(id) {
      try {
        await axios.delete(`http://localhost:3000/employees/${id}`);
        this.employees = this.employees.filter((emp) => emp.id !== id);
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    },
    async fetchEmployeeById(id) {
      try {
        const response = await axios.get(
          `http://localhost:3000/employees/${id}`,
        );
        this.selectedEmployee = response.data;
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    },
    async updateEmployee(id, payload) {
      try {
        const response = await axios.put(
          `http://localhost:3000/employees/${id}`,
          payload,
        );
        this.employees = this.employees.map((emp) =>
          emp.id === id ? response.data : emp,
        );
      } catch (error) {
        console.error("Error updating employee:", error);
      }
    },
  },
});
