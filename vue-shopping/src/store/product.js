import shop from '@/api/shop'

const state = {
    all: []
}

const actions = {
    async getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit("receive_products", products);
        });
    },
    /*eslint no-unused-vars: ["error", { "args": "none" }]*/
    async addToCart({ dispatch, commit, state, rootState }, product) {
        commit("add_to_cart", product.id);
        // Product view'i içerisindeki notta belirtilen sorunun çözümü için burada geçiçi olarak 'add_to_cart' commiti yapılmadan önce all state'i ni doldurdum.

        // Normalde de burada belki bir API istegi olmalı. Zaten product listesini store'da tutmak cok mantiksiz, örnek gereği böyle.

        // if (state.all.length === 0) {
        //     shop.getProducts(products => {
        //         commit("receive_products", products);
        //     }).then(() => {
        //         commit("add_to_cart", product.id);
        //     });
        // }
        // else {
        //     commit("add_to_cart", product.id);
        // }
    }
}

const mutations = {
    receive_products(state, products) {
        state.all = products;
    },
    add_to_cart(state, productId) {
        state.all.find((p) => p.id == productId).inventory--;
    }
}

const getters = {
    allProducts(state) {
        return state.all;
    },
    // Works?
    /*eslint no-unused-vars: ["error", { "args": "none" }]*/
    getProduct: (state, getters) => id => state.all.find((p) => p.id == id) || {},
    // Does not work. See: https://github.com/vuejs/vuex/issues/688
    // // getProduct(state, id) {
    // //     return state.all.find((p) => p.id === id) || {};
    // // }
}

export default {
    state,
    actions,
    mutations,
    getters
}