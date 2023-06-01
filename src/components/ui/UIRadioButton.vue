<template>
  <label class="container tetx-base font-normal"
    >{{ label }}
    <input
      type="radio"
      name="radio"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background: url("../../assets/radio-btn/radio_btn.png");
}

.container input:checked ~ .checkmark {
  background: url("../../assets/radio-btn/radio_btn_checked.png");
}
</style>
