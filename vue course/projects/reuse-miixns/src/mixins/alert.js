export default {
  data() {
    return {
      alertIsVisible: false,
    };
  },
  methods: {
    hideAlert() {
      this.alertIsVisible = false;
    },
    showAlert() {
      this.alertIsVisible = true;
    },
  },
};
