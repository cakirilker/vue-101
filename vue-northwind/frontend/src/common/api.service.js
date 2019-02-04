import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import config from "@/common/config";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = config.API_URL
    },
}
export default ApiService

export const OrdersService = {
    async get() {
        try {
            return Vue.axios.get(`/orders`);
        }
        catch (error) {
            throw new Error(`Error ${error}`);
        }
    },
    async getOrder(id) {
        try {
            return Vue.axios.get(`/orders/${id}`);
        } catch (error) {
            throw new Error(`Error ${error}`);
        }
    }
}