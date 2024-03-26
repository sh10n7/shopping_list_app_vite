const express = require("express");
const app = express();
app.use(express.json());

// cors対策
const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// prisma読み込み
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 全ジャンルの取得
app.get('/genres', async(req, res) => {
  try {
    const AllGenre = await prisma.genre.findMany();
    res.json(AllGenre);
  }catch(error){
    res.status(500).send("ジャンルの取得に失敗しました");
  }
})


// goodsの保存
app.post("/goods", async(req, res) => {
  try{
    const guantity = parseInt(req.body.quantity, 10);
    const savedTask = await prisma.goods.create({
      data: {
        ...req.body,
        quantity: guantity
      }
    });
    res.json(savedTask);
  }catch(error){
    res.status(500).send("リストの保存に失敗しました。")
  }
})
 
// 全商品の取得
app.get('/goods', async(req, res) => {
  try {
    const AllGoods = await prisma.goods.findMany();
    res.json(AllGoods);
  }catch(error){
    res.status(500).send("ジャンルの取得に失敗しました");
  }
})

// ポート3000を使用して、読み込みができるかテストする
app.listen(3000, () => {
  console.log("listening on localhost port 3000");
})
