export default ({
    // Variables in store
    state: {
        count: 0,
    },
    mutations: {
        // increment(state) {
        //     state.count++;
        // },
        // decrement(state) {
        //     state.count--;
        // },
        setStoredCount(state, newCount) {
            state.count = newCount;
        },
    },
    actions: {
        async setCount({ commit }, payload) {
            commit("setStoredCount", payload);
        },
        async increment({ commit }) {
            commit("setStoredCount", this.state.def.count + 1);
        },
        async decrement({ commit }) {
            commit("setStoredCount", this.state.def.count - 1);
        },
    },
    // Getters are way to access variables
    getters: {
        safelyStoredCount: (state) => state.count,
        storedCountMatches: (state) => (matchNumber: number) => state.count === matchNumber,
        // Same as above but longer
        // storedCountMatches(state) {
        //   return (mathchNumber: number) => {
        //     return state.count === mathchNumber;
        //   }
        // }
    },
});
