<template>
  <div class="dashboard"> 
     <v-main class="pt-0 pt-sm-12 pt-md-15">

      <Header class="computer d-none d-sm-flex" />

      <!-- <HeaderMovile class="movile d-sm-none" /> -->

      <v-row no-gutters class="my-md-5 my-sm-5 mx-md-16 mt-3 text-center">
        <v-col>

          <h3 class="mx-1">Dashboard</h3>

        </v-col>
      </v-row>
      

    </v-main>
    <Footer />
  </div>
</template>

<script>

  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  
  export default {
    name: 'Dashboard',
    components: {
      Header,
      Footer
    },
    data: () => ({
      //
    }),
  }
</script>
