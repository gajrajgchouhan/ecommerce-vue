<script setup>
import { useCartStore } from '../store';

const cartStore = useCartStore();
</script>
<template>
    <nav class="flex p-3 gap-1">
        <router-link to="/">Home</router-link>
        <div>
            Items in cart : {{ cartStore.getLength }}
        </div>
        <router-link class="border-2 border-black px-3" to="/cart">Go to Cart</router-link>
    </nav>
</template>