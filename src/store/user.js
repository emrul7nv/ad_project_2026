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
            // Очищаем ошибки и включаем лоадер
            commit('clearError', null, { root: true })
            commit('setLoading', true, { root: true })

            // Имитация запроса к серверу (3 секунды)
            const promise = new Promise((resolve) => {
                setTimeout(() => resolve('Success'), 3000)
            })

            try {
                await promise

                // Успешная регистрация
                const newUser = {
                    id: Date.now().toString(),
                    email: email,
                    password: password
                }
                commit('setUser', newUser)
                commit('setLoading', false, { root: true })
                console.log('User registered:', newUser)

            } catch (error) {
                // Ошибка регистрации
                commit('setLoading', false, { root: true })
                commit('setError', 'Ошибка регистрации. Попробуйте позже.', { root: true })
                console.error('Registration error:', error)
            }
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