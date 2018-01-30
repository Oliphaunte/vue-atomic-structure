<template>
  <main class="t__example">
    <div class="o__example-links">
      <router-link :to="{ name: 'example_1' }">Example Page 1</router-link>
      <router-link :to="{ name: 'example_2' }">Example Page 2</router-link>
    </div>

    <router-view></router-view>
  </main>
</template>

<script>
  export default {
    name: "example",
    data() {
      return {}
    },
    created() {},
    methods: {},
    watch: {},
    components: {}
  }
</script>