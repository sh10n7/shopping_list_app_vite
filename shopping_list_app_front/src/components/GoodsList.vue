<script setup>
import { useGoodsStore } from '../stores/GoodsStore'

const goodsStore = useGoodsStore();

const statusList = [
  '未購入',
  '購入済み'
]

</script>

<template>
  <table border="1">
    <thead>
      <tr>
        <th>品目</th>
        <th>個数</th>
        <th>ステータス</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="goods in goodsStore.goods" :key="goods.id">
        <td>{{ goods.name}}</td>
        <td>{{ goods.quantity }}</td>
        <td>
          <select v-model="goods.statusId" class="form_input" :value="goods.statusId">
          <option :value="index" v-for="(status, index) in statusList" :key="index">{{ status }}</option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
table {
  margin: 24px 0;
}
th {
  padding: 8px;
}
td {
  padding: 8px;
}
</style>
