import { OrdersService } from "@/common/api.service";
import {
    FETCH_ORDERS
} from "@/store/actions.type";
import {
    FETCH_START,
    FETCH_END,
} from "@/store/mutations.type";

const initialState = {
    orders: [],
    isLoading: true
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
        state.isLoading = true;
    },
    [FETCH_END](state, orders) {
        state.orders = orders;
        state.isLoading = false;
    }
}

export const getters = {
    orders(state) {
        return state.orders;
    },
    isLoading(state) {
        return state.isLoading;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}