<template>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://media.kingston.com/hyperx/product/hx-product-mouse-pulsefire-dart-3-zm-lg.jpg" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">Мышка HyperX Dart</h5>
        <p class="card-text">50000 тенге</p>
        <div class="card-footer">
          <button class="btn btn-success">В корзину</button>
          <router-link class="btn btn-info ms-3" to="/detail/1">Подробнее</router-link> 
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpy_ouVE7CAQO8sslUHExfkPBie4fWzXWHvoaBt3UCa4FZOO64foaNS6DtBK9bDNWoCw&usqp=CAU" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">Мышка HyperX Pulsefire Surge</h5>
        <p class="card-text">19000 тенге</p>
        <div class="card-footer">
          <button class="btn btn-success">В корзину</button>
          <router-link class="btn btn-info ms-3" to="/detail/1">Подробнее</router-link> 
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.satu.kz/174747647_w700_h500_mysh-igrovaya-hyperx.jpg" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">Мышка HyperX Pulsfire PRO FPS</h5>
        <p class="card-text">26000 тенге</p>
              <div class="card-footer">
          <button class="btn btn-success">В корзину</button>
          <router-link class="btn btn-info ms-3" to="/detail/1">Подробнее</router-link> 
        </div>
      </div>
    </div>
  </div>

    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['allProducts'])
  }
  
}
</script>
