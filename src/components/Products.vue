<script>
let products = ref([]);
export default {
    mounted() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                products.value = data;
            });
    },
}
</script>
<script setup>
import { ref } from 'vue';
import MiniProduct from './MiniProduct.vue';

</script>

<template>
    <div v-if="products.length > 0" class="flex flex-wrap px-10 py-6 justify-between">
        <div v-for="product in products" :key="product.id">
            <MiniProduct :product="product" />
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>