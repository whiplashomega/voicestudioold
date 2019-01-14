<template>
  <div id="app">
    <navigation></navigation>
  <div class="container">
    <router-view/>
  </div>
  </div>
</template>

<script>
import navigation from '@/components/navigation';

export default {
  components: {
    navigation
  }
};
</script>

<style lang="scss" src="@/scss/globalstyles.scss">

</style>
