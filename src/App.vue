<template>
  <div id="app">
    <div>
      <b-navbar class="navBar" toggleable type="dark">
        <b-navbar-brand href="/">Water</b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="/cart"><img alt="Cart" class="cart" src="./assets/cart.png" title="Panier"></b-nav-item>
          </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view/>

  </div>
</template>

<script>
  import Cart from './components/Cart'
  export default {
    components: {Cart},
    props: {
      cart: []
    },
    name: 'App'
  }
</script>

<style>
  body {
    background-color: #F2F2F2;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  .navBar {
    background-color: #6EA0BA;
  }

  .cart {
    width: 25px;
  }
</style>
