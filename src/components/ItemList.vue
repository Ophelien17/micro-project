<template>
  <div class="container">
    <div class="row row-cols-lg-2 row-cols-sm-1 justify-content-center tiles">
      <div :key="product.productId" class="col m-5 tile" v-for="(product) in Products">
        <img :title="product.productName" alt="ProductImage" class="mx-auto d-block imgProduct"
             src="../assets/eau.jpg"/>
        <h5>Product name : {{product.productName}}</h5>
        <div class="row">
          <div class="col">
            Price : {{product.productPrice}}€
          </div>
          <div class="col">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button @click="addToCart(product)" class="btn"><img alt="Cart" class="addToCart"
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
  import {mapState, mapActions} from 'vuex'

  export default {

    name: 'ItemList',
    data () {
      return {
        Products,
      }
    },

    computed: {},
    methods: {
      ...mapActions([
        'addArticle'
      ]),

      addToCart (product) {
        this.addArticle(product)
      },
    },

    mounted () {
      // eslint-disable-next-line no-undef
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
