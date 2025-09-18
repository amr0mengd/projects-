<!-- this component uses slots to pass an element with it's own style to other components that have the same wanted style -->
<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header" >The Default</slot>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  width: 50rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
