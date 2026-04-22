export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        registerUser({ commit }, { email, password }) {
            // Имитация регистрации (позже заменим на реальный API)
            const newUser = {
                id: Date.now().toString(),
                email: email,
                password: password
            }
            commit('setUser', newUser)
            console.log('User registered:', newUser)
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        isUserLoggedIn(state) {
            return state.user !== null
        }
    }
}