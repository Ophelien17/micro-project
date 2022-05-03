<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <div class="row tiles">
      <div class="col tile">
        <img alt="" src="">
        <h3>Product name</h3>
      </div>
      <div class="col tile">
        2 of 2
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
