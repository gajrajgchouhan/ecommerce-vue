<script setup>
import { provide, ref } from 'vue';
import Nav from './components/Nav.vue';
import Products from './components/Products.vue';

const cart = ref([]);
const addToCart = (product) => {
  console.log(product);
  cart.value.push(product);
};

provide('cart', cart);
provide('addToCart', addToCart);

</script>

<template>
  <Nav />
  <Products />
</template>

