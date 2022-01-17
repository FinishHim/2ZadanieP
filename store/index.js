import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'HyperX dart',
        img: 'https://media.kingston.com/hyperx/product/hx-product-mouse-pulsefire-dart-3-zm-lg.jpg',
        description: 'Some quick example',
        price: 50000,
        date: '30.12.2021',
        category: 'Мышка'
      },
      {
        id: 2,
        name: 'HyperX Pulsefire Surge',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpy_ouVE7CAQO8sslUHExfkPBie4fWzXWHvoaBt3UCa4FZOO64foaNS6DtBK9bDNWoCw&usqp=CAU',
        description: 'Some quick example',
        price: 19000,
        date: '30.12.2021',
        category: 'Мышка'
      },
      {
        id: 3,
        name: 'Мышка HyperX Pulsfire PRO FPS',
        img: 'https://images.satu.kz/174747647_w700_h500_mysh-igrovaya-hyperx.jpg',
        description: 'Some quick example',
        price: 26000,
        date: '30.12.2021',
        category: 'Мышка'
      },
    ],
    categories: [
      {id: 1, name: 'Электрооборудование'},
      {id: 2, name: 'Материал'}
    ]
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    allCategories(state) {
      return state.categories
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
