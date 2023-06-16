import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: [],
    }),
    getters: {
        getState: (state) => state.cart,
        getLength: (state) => state.cart.length,
    },
    actions: {
        addToCart(product) {
            this.cart.push(product);
        },
    },
});
