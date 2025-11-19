import { ref } from "vue";

export default function useAlert() {
  const alertIsVisible = ref(false);
  function hideAlert() {
    alertIsVisible.value = false;
  }
  function showAlert() {
    alertIsVisible.value = true;
  }
  return [alertIsVisible, hideAlert, showAlert];
}
