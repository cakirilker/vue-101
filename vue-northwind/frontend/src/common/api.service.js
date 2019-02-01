import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios"
import config from "@/common/config"

const ApiService = {
    init() {
        console.log(config);
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = config.API_URL
    },
}
export default ApiService

export const OrdersService = {
    get() {
        console.log(`${Vue.axios.defaults.baseURL}/orders`)
        return Vue.axios.get(`/orders`)
            .catch(error => {
                throw new Error(`Error ${error}`)
            })
    },
}