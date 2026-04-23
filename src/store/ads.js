export default {
    state: {
        ads: [
            {
                title: "French Avenue - Oud Satin",
                desc: "Роскошный аромат с нотами уда, розы и ванили",
                promo: true,
                src: "https://picsum.photos/id/100/400/300",
                id: "1",
                userId: "1"
            },
            {
                title: "French Avenue - Amber Oud",
                desc: "Теплый янтарный аромат с древесными оттенками",
                promo: true,
                src: "https://picsum.photos/id/101/400/300",
                id: "2",
                userId: "1"
            },
            {
                title: "French Avenue - Vetiver Noir",
                desc: "Свежий ветиверовый аромат с цитрусовыми нотами",
                promo: true,
                src: "https://picsum.photos/id/102/400/300",
                id: "3",
                userId: "2"
            },
            {
                title: "French Avenue - Leather Rush",
                desc: "Кожаный аромат с пряными и древесными акцентами",
                promo: true,
                src: "https://picsum.photos/id/103/400/300",
                id: "4",
                userId: "2"
            }
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        async createAd({ commit, getters }, payload) {
            // Добавляем id и userId текущего пользователя
            payload.id = Date.now().toString()
            payload.userId = getters.user ? getters.user.id : '1'

            commit('clearError', null, { root: true })
            commit('setLoading', true, { root: true })

            // Имитация запроса к серверу
            const promise = new Promise((resolve) => {
                setTimeout(() => resolve('Success'), 2000)
            })

            try {
                await promise
                commit('createAd', payload)
                commit('setLoading', false, { root: true })
                console.log('Ad created:', payload)
            } catch (error) {
                commit('setLoading', false, { root: true })
                commit('setError', 'Ошибка создания объявления', { root: true })
                console.error('Create ad error:', error)
            }
        }
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => ad.promo)
        },
        myAds(state, getters) {
            if (!getters.user) return []
            return state.ads.filter(ad => ad.userId === getters.user.id)
        },
        adById(state) {
            return (id) => {
                return state.ads.find(ad => ad.id === id)
            }
        }
    }
}