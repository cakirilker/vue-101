import Vue from "vue";
import { OrdersService } from "@/common/api.service";
import {
    FETCH_ORDER
} from "@/store/actions.type";
import {
    SET_ORDER,
    RESET_ORDER,
} from "@/store/mutations.type";

const initialState = {
    order: {
        Employee: {},
        OrderDetails: []
    }
}

export const state = { ...initialState }

export const actions = {
    async [FETCH_ORDER]({ commit }, id) {
        if (id === state.order.OrderId)
            return state.order;
        commit(RESET_ORDER);
        return OrdersService.getOrder(id)
            .then(({ data }) => {
                commit(SET_ORDER, data);
            })
            .catch(error => {
                throw new Error(error);
            });
    }
}

export const mutations = {
    [SET_ORDER](state, order) {
        state.order = order;
    },
    [RESET_ORDER](state) {
        for (let f in state) {
            Vue.set(state, f, initialState[f]);
        }
    }
}

export const getters = {
    order(state) {
        return state.order;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}