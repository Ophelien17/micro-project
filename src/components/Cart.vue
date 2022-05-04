<template>
  <div class="container">
    <div class="empty" v-if="this.itemInCart.length===0">
      Le panier est vide. Découvrez nos produits <a href="/">ici</a>
    </div>

    <div class="items" v-else>
      <div class="row item" v-for="(item) in itemInCart">
        <div class="col">
          <img alt="Image produit" class="imgProduct" src="../assets/eau.jpg" title="">
        </div>

        <div class="col">
          <h5>{{item.productName}}</h5>
          <h5>Prix unitaire</h5>
          <h5>Quantité</h5>
        </div>
        <div class="col">
          <button class="btn">
            <img alt="Trash" class="trash" src="../assets/delete.png" title="Supprimer">
          </button>
          <p>{{item.productPrice}}€</p>
          <p>- 2 +</p>
          <h5>TOTAL : 0€</h5>
        </div>
      </div>
    </div>

    <div class="final">
      <div class="row">
        <div class="input-group mb-3">
          <input aria-describedby="basic-addon1" aria-label="code" class="form-control" placeholder="Code promo"
                 type="text">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>TOTAL : </h5>
        </div>
        <div class="col">
          <h5>{{}}€</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    data () {
      return {
        itemInCart: [{
          'productId': '212A14C7-E781-4F4E-88CE-6D4D2AAF44FB',
          'productName': 'Eau aromatisée fraise VOLVIC JUICY',
          'productPicture': 'http://ville.biarritz.fr/mon-quotidien-egunerokoa/environnement/eau-potable-494.html',
          'productPrice': 112
        },
          {
            'productId': '212A14C7-E781-4F4E-88CE-6D4D2AAF44FB',
            'productName': 'Eau aromatisée fraise VOLVIC JUICY',
            'productPicture': 'http://ville.biarritz.fr/mon-quotidien-egunerokoa/environnement/eau-potable-494.html',
            'productPrice': 112
          }]
      }
    },
    mounted () {
      let total = 0
      console.log(this.itemInCart)
      for (var i = 0; i < this.itemInCart.length; i++) {
        console.log(i.productPrice)
        total = total + i.productPrice
        console.log(total)
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

  .btn {
    border: none;
    background-color: #FFF;
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
