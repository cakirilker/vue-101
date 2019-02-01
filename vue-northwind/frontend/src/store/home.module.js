import { OrdersService } from "@/common/api.service";
import {
    FETCH_ORDERS
} from "@/store/actions.type";
import {
    FETCH_START,
    FETCH_END,
} from "@/store/mutations.type";

const initialState = {
    orders: []
}

export const state = { ...initialState }

export const actions = {
    async [FETCH_ORDERS]({ commit }) {
        commit(FETCH_START);
        return OrdersService.get()
            .then(({ data }) => {
                commit(FETCH_END, data);
            })
            .catch(error => {
                throw new Error(error);
            });
    }
}

export const mutations = {
    [FETCH_START](state) {
    },
    [FETCH_END](state, orders) {
        state.orders = orders;
    }
}

export const getters = {
    orders(state) {
        return state.orders;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}