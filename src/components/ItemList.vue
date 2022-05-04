<template>
  <div class="container">
    <div class="row row-cols-lg-2 row-cols-sm-1 justify-content-center tiles">
      <div class="col m-5 tile" v-for="(product) in Products">
        <img :title="product.productName" alt="ProductImage" class="mx-auto d-block imgProduct"
             src="../assets/eau.jpg"/>
        <h5>Product name : {{product.productName}}</h5>
        <div class="row">
          <dic class="col">
            Price : {{product.productPrice}}€
          </dic>
          <div class="col">
            <div class="float-right">
              <button @click="addToCart(product.productId)" class="btn"><img alt="Cart" class="addToCart"
                                                                             src="../assets/cart.png"
                                                                             title="Ajouter au panier"/></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Products from '../../products'

  export default {
    name: 'ItemList',
    data () {
      return {
        Products,
        cart: []
      }
    },

    methods: {
      addToCart (product) {

      }
    },

    mounted () {
      // eslint-disable-next-line no-undef
      console.log(Products[1].productId)
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  .tile {
    margin: 5px;
    max-width: 500px;
    padding: 10px;
    border-radius: 20px;
    background: #F2F2F2;
    box-shadow: 8px 8px 16px #cecece,
    -8px -8px 16px #ffffff;
  }

  .imgProduct {
    border-radius: 5px;
    margin: 5px 0;
    width: 300px;
  }

  .btn {
    border: none;
    background-color: white;
    border-radius: 5px;
  }

  .addToCart {
    width: 25px;
  }
</style>
