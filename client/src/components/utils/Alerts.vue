<template>
  <div class="toast" :class="{show: error}" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="mr-auto">{{ error && error.code}}</strong>
      <button
        @click="clearError"
        type="button"
        class="ml-2 mb-1 close"
        data-dismiss="toast"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">{{error && error.message}}</div>
  </div>
</template>

<script>
export default {
  name: "App-Alert",
  computed: {
    error() {
      return this.$store.state.errors;
    },
  },
  methods: {
    clearError() {
      this.$store.commit("SET_ERRORS", null);
    },
  },
};
</script>

<style scoped>
.toast {
  position: absolute;
  right: -5%;
  top: 5%;
  z-index: 100;
  max-width: 300px;
  transition: all ease-in 0.2s;
}
.toast-body {
  background-color: ivory;
}
.toast-header {
  background-color: antiquewhite;
}
.toast.show {
  transition: all ease-in 0.2s;
  right: 2%;
}
button {
  outline: none !important;
}
</style>