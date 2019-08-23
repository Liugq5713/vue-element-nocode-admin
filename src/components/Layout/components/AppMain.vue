<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.path + JSON.stringify(this.$route.query);
    }
  }
};
</script>

<style scoped>
</style>
