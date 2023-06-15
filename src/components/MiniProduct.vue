<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>
<script setup>
import { inject } from 'vue';
const addToCart = inject('addToCart');
</script>
<template>
    <div class="flex flex-col w-[300px] h-[450px] items-center bg-white text-[16px] m-4 rounded-[10px]">
        <img :src="product.image" class="w-[300px] h-[300px] rounded-[10px] object-contain" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }}</p>
        <button class="border-2 border-black p-2" @click="() => {
            addToCart(product)
        }">Add to Cart</button>
    </div>
</template>