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
        async registerUser({ commit }, { email, password }) {
            commit('clearError', null, { root: true })
            commit('setLoading', true, { root: true })

            const promise = new Promise((resolve) => {
                setTimeout(() => resolve('Success'), 3000)
            })

            try {
                await promise
                const newUser = {
                    id: Date.now().toString(),
                    email: email,
                    password: password
                }
                commit('setUser', newUser)
                commit('setLoading', false, { root: true })
                console.log('User registered:', newUser)
            } catch (error) {
                commit('setLoading', false, { root: true })
                commit('setError', 'Ошибка регистрации. Попробуйте позже.', { root: true })
                console.error('Registration error:', error)
            }
        },

        async loginUser({ commit }, { email, password }) {
            commit('clearError', null, { root: true })
            commit('setLoading', true, { root: true })

            const promise = new Promise((resolve) => {
                setTimeout(() => resolve('Success'), 3000)
            })

            try {
                await promise
                const user = {
                    id: Date.now().toString(),
                    email: email,
                    password: password
                }
                commit('setUser', user)
                commit('setLoading', false, { root: true })
                console.log('User logged in:', user)
            } catch (error) {
                commit('setLoading', false, { root: true })
                commit('setError', 'Ошибка входа. Неверный email или пароль.', { root: true })
                console.error('Login error:', error)
            }
        },

        logoutUser({ commit }) {
            commit('setUser', null)
            console.log('User logged out')
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