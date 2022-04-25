<template>
  <div>
    <h1>Page Home</h1>
    <tableau-crypto></tableau-crypto>
  </div>
</template>

<script>
import TableauCrypto from "../components/TableauCrypto.vue"
export default {
  
  name: "HomeView",
  components: {
    TableauCrypto
  }
}
</script>