<template>
  <div class="container">
    <div class="empty" v-if="articles.length===0">
      Le panier est vide. Découvrez nos produits
      <router-link to="/">ici</router-link>
    </div>

    <div class="items" v-else>
      <div class="row item" v-for="(item) in articleToShow">
        <div class="col">
          <img alt="Image produit" class="imgProduct" src="../assets/eau.jpg"
               title="">
        </div>

        <div class="col">
          <h5>{{item.productName}}</h5>
          <h5>Prix unitaire</h5>
          <h5>Quantité</h5>
        </div>
        <div class="col">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn" v-on:click="deleteItem(item)">
              <img alt="Trash" class="trash" src="../assets/delete.png" title="Supprimer">
            </button>
          </div>

          <p class="text-end">{{item.productPrice}}€</p>
          <p class="text-end">- {{qteArticles(item.productId)}} +</p>
          <h5 class="text-end">TOTAL : {{totalPerArticle(item)}}€</h5>
        </div>
      </div>
    </div>


    <div class="row justify-content-end">
      <div class="col-6">
        <div class="input-group mb-3">
          <input aria-describedby="basic-addon1" aria-label="code" class="form-control" placeholder="Code promo"
                 type="text">
        </div>
        <div class="row">
          <div class="col">
            <h5>TOTAL : </h5>
          </div>
          <div class="col">
            <h5 class="text-end">{{totalPrice}}€</h5>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>


<script>
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState([
        'articles',
        'price'
      ]),
      ...mapGetters([
        'totalPrice',
        'articleToShow',
        'quantityArticle'
      ]),

    },
    name: 'Cart',
    data () {
      return {}

    },
    methods: {
      ...mapActions([
        'deleteArticle'
      ]),

      deleteItem (product) {
        this.deleteArticle(product)
      },

      qteArticles (id) {
        var qte = 0
        for (var i = 0; i < this.articles.length; i++) {
          if (this.articles[i].productId === id) {
            qte++
          }
        }

        return qte
      },

      totalPerArticle (product) {
        return product.productPrice * this.qteArticles(product.productId)
      }

    },
  }
</script>

<style scoped>
  .cart {

  }

  .items {
    background-color: #FFF;
    padding: 10px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .item {
    padding: 20px;
  }

  .imgProduct {
    border-radius: 5px;
    margin: 5px 0;
    width: 300px;
  }


  .trash {
    width: 25px;
  }

  .final {
    background-color: #FFF;
    padding: 10px;
    border-radius: 10px;
  }

  .input {
    border: none;
    border-radius: 5px;
    background-color: #F2F2F2;
    margin: 10px;
    padding: 5px;
  }
</style>
