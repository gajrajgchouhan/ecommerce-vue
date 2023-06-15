<script setup>
import { inject } from 'vue';
const cart = inject("cart")
</script>
<template>
    <nav class="flex p-3 gap-1">
        <div>
            Items in cart : {{ cart.length }}
        </div>
        <a class="border-2 border-black px-3" href="/cart">Go to Cart</a>
    </nav>
</template>