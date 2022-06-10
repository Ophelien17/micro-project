

<script>
  import ItemList from './ItemList'

  export default {
    data () {
      cartVisible: false
    },
    components: {ItemList},
    methods: {
      maFonction () {
        return 'test'
      }
    }
  }
</script>
<template>
  {{this.maFonction()}}


  <ItemList/>

</template>
