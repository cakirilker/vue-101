import shop from '@/api/shop'

const state = {
    added: [],
    lastCheckout: null
}

const actions = {

    async checkout({ commit, state }, products) {
        const savedCartItems = [...state.added];
        commit('checkout_request');
        /*eslint no-unused-vars: ["error", { "args": "none" }]*/
        shop.buyProducts(products)
            .then((response) => {
                commit('checkout_successful');
            })
            .catch((error) => {
                commit('checkout_failure', savedCartItems);
            });
    }
}

const mutations = {
    add_to_cart(state, productId) {
        state.lastCheckout = null;
        const product = state.added.find(p => p.id === productId);
        if (!product) {
            state.added.push({
                id: productId,
                quantity: 1
            });
        }
        else {
            product.quantity++;
        }
    },
    checkout_request(state) {
        state.added = [];
        state.lastCheckout = null;
    },
    checkout_successful(state) {
        state.lastCheckout = "successful";
    },
    checkout_failure(state, savedCartItems) {
        state.added = savedCartItems;
        state.lastCheckout = "failed";
    }
}

const getters = {
    cartCount: state => {
        var totalCount = 0;
        state.added.forEach(({ quantity }) => {
            totalCount += quantity;
        });
        return totalCount;
    },
    cartProducts: (state, getters, rootState) => {
        return state.added.map(({ id, quantity }) => {
            const product = rootState.product.all.find(p => p.id === id);
            return {
                ...product,
                quantity
            }
        })
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}