<template>
<div class="container">
<div class="row">
<div class="col">
<h1>Корзина</h1>
<table class="table table-hover">
<thead>
<tr>
<th>#</th>
<th></th>
<th>Название</th>
<th>Цена</th>
<th>Количество</th>
<th></th>
</tr>
</thead>
<tbody>
    <td>1</td>
    <td><img src="https://media.kingston.com/hyperx/product/hx-product-mouse-pulsefire-dart-3-zm-lg.jpg" class="card-img-top img-basket" alt=""></td>
    <td>Мышка HyperX Dart</td>
    <td>50000 тг.</td>
    <td>
        <input type="number" min="1" max="100" class="form-control forma">
    </td>
    <td>
        <div>
        <button class="btn btn-danger">Удалить</button>
        <router-link class="btn btn-info ms-3" to="/detail/1">Подробнее</router-link>
        </div> 
    </td>
</tbody>
<tbody>
    <td>2</td>
    <td><img src="https://media.kingston.com/hyperx/product/hx-product-mouse-pulsefire-dart-3-zm-lg.jpg" class="card-img-top img-basket" alt=""></td>
    <td>Мышка HyperX Dart</td>
    <td>50000 тг.</td>
    <td>
        <input type="number" min="1" max="100" class="form-control forma">
    </td>
    <td>
        <div>
        <button class="btn btn-danger">Удалить</button>
        <router-link class="btn btn-info ms-3" to="/detail/1">Подробнее</router-link>
        </div> 
    </td>
</tbody>
<tfoot>
    <tr>
        <td colspan="6"><strong>Общая сумма: 50000 тг. </strong></td>
    </tr>
</tfoot>
</table>
</div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>