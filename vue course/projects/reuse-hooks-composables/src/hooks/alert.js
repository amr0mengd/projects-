import { ref } from "vue";

export default function useAlert(startingVisibility = false) {
  const alertIsVisible = ref(startingVisibility);
  function hideAlert() {
    alertIsVisible.value = false;
  }
  function showAlert() {
    alertIsVisible.value = true;
  }
  return [alertIsVisible, hideAlert, showAlert];
}
