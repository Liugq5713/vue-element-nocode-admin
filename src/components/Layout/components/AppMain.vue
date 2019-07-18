<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
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
      console.log("this.$route.path", this.$route.path);
      return this.$route.path + JSON.stringify(this.$route.query);
    }
  }
};
</script>

<style scoped>
</style>
