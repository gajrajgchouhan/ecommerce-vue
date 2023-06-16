
<script setup>
import { useCartStore } from '../store';

const cartStore = useCartStore();
</script>

<template>
    <div>
        <template v-for="product in cartStore.getState">
            {{ JSON.stringify(product) }}
        </template>
    </div>
</template>