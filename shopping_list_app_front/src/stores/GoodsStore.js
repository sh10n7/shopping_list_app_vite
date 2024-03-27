import { defineStore } from "pinia";
import api from "../api/axios";
import { ref } from "vue"

export const useGoodsStore = defineStore('goods', () => {
  const goods = ref([]);

  // 全ジャンルを取得するための記述を追記
  async function fetchAllGoods() {
    try {
      const response = await api.get('/goods');
      this.goods = response.data;
    }catch(error){
      console.log("リストの取得ができませんでした",error);
    }
  }

  // 保存処理を実施するためのリクエストを記載。
  async function addGoods(newGoods){
    try {
      const response = await api.post('/goods', newGoods)
      const addedGoods = response.data
      // 追加したジャンルデータをthis.goodsに追加する。
      this.goods.push({
        id: addedGoods.id,
        name: addedGoods.name,
        quantity: addedGoods.quantity,
        genreId: addedGoods.genreId,
        statusId: addedGoods.statusId
      })
    } catch (error) {
      console.log("保存ができませんでした", error);
    }
  }

  return {goods, fetchAllGoods, addGoods}
});