class Order {
    constructor(name, phone, adId, userId, done = false, id = null) {
        this.name = name
        this.phone = phone
        this.adId = adId
        this.userId = userId
        this.done = done
        this.id = id || Date.now().toString()
    }
}

export default {
    state: {
        orders: [
            {
                id: "123",
                name: "Костя",
                phone: "+7(978)000-00-05",
                adId: "1",
                userId: "1",
                done: true
            },
            {
                id: "124",
                name: "Анна",
                phone: "+7(978)000-00-06",
                adId: "2",
                userId: "1",
                done: false
            },
            {
                id: "125",
                name: "Мария",
                phone: "+7(978)000-00-07",
                adId: "3",
                userId: "2",
                done: false
            }
        ]
    },
    mutations: {
        createOrder(state, payload) {
            state.orders.push(payload)
        },
        markOrderDone(state, orderId) {
            const index = state.orders.findIndex(o => o.id === orderId)
            if (index !== -1) {
                state.orders[index] = {
                    ...state.orders[index],
                    done: !state.orders[index].done
                }
            }
        }
    },
    actions: {
        async createOrder({ commit }, { name, phone, adId, userId }) {
            let payload = new Order(name, phone, adId, userId, false)

            commit('clearError', null, { root: true })

            const promise = new Promise((resolve) => {
                setTimeout(() => resolve('Success'), 2000)
            })

            try {
                await promise
                commit('createOrder', payload)
                console.log('Order created:', payload)
            } catch (error) {
                commit('setError', 'Ошибка создания заказа', { root: true })
                console.error('Create order error:', error)
            }
        },
        async markOrderDone({ commit }, orderId) {
            commit('clearError', null, { root: true })

            const promise = new Promise((resolve) => {
                setTimeout(() => resolve('Success'), 1000)
            })

            try {
                await promise
                commit('markOrderDone', orderId)
                console.log('Order status toggled:', orderId)
            } catch (error) {
                commit('setError', 'Ошибка обновления заказа', { root: true })
                console.error('Update order error:', error)
            }
        }
    },
    getters: {
        orders(state) {
            return state.orders
        }
    }
}