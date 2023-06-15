<script>
</script>
<script setup>
import { inject } from 'vue';

const cart = inject("cart")
</script>

<template>
    <div>
        <template v-for="product in cart">
            {{ product.toString() }}
        </template>
    </div>
</template>