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
    orders: []
  },
  mutations: {
    createOrder(state, payload) {
      state.orders.push(payload)
    },
    markOrderDone(state, orderId) {
      const order = state.orders.find(o => o.id === orderId)
      if (order) {
        order.done = !order.done
      }
    }
  },
  actions: {
    async createOrder({ commit }, { name, phone, adId, userId }) {
      let payload = new Order(name, phone, adId, userId, false)
      
      commit('clearError', null, { root: true })
      
      // Имитация запроса к серверу
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
    orders(state, getters) {
      if (!getters.user) return []
      return state.orders.filter(order => order.userId === getters.user.id)
    }
  }
}