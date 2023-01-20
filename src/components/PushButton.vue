<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  padding: 0.6rem 1.25rem;
  background-color: #747bff;
  border: 0;
}
button:hover {
  background-color: #535bf2;
}
</style>
