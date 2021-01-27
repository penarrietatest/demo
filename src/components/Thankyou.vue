<template>
  <div class="thankyou"> 
    <div class="report">
        <v-row no-gutters>
            <v-col cols="12" sm="12" md="12">
                <h3 class="mt-5 text-center">Congratulations... Your report is on its way</h3>
                <p></p>
            </v-col>
        </v-row>
    </div>
    <v-row no-gutters class="my-md-5 my-sm-5 mx-md-16 mx-sm-2">
      <v-col cols="12" sm="12" md="12">
        <h3 class="text-center">Producto de bajo precio</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Thankyou',

    data: () => ({
      //
    }),
  }
</script>

<style lang="scss" scoped>
    .report{
        background-color: yellow;
    }
</style>
