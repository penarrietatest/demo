<template>
  <div class="footer"> 
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      //
    }),
  }
</script>
