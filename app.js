const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 設定靜態檔案目錄
app.use(express.static(path.join(__dirname, "public")));

// 設定 EJS 模板引擎
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 中介軟體
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 首頁路由
app.get("/", (req, res) => {
  res.render("index", {
    title: "ECharts 儀表板",
    data: generateSampleData(),
  });
});

// API 路由 - 提供圖表資料
app.get("/api/chart-data", (req, res) => {
  res.json(generateSampleData());
});

function generateSampleData() {
  return {
    sales: {
      months: ["1月", "2月", "3月", "4月", "5月", "6月"],
      values: [120, 200, 150, 80, 70, 110],
    },
    gauge: Math.floor(Math.random() * 100),
    pie: [
      { value: 1, name: "2車送一人" },
      { value: 100, name: "其他" },
    ],
    traffic: {
      inner: [
        { value: 383, name: "未接觸" },
        { value: 2034, name: "有接觸未送醫" },
        { value: 94, name: "出勤待命", selected: true },
      ],
      outer: [
        { value: 165, name: "未發現" },
        { value: 17, name: "誤報" },
        { value: 201, name: "中途取消" },
        { value: 1095, name: "拒送" },
        { value: 805, name: "警察處理" },
        { value: 105, name: "現場死亡" },
        { value: 29, name: "其他" },
        { value: 43, name: "火警" },
        { value: 51, name: "支援勤務" },
      ],
    },
  };
}

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器正在運行於 http://localhost:${PORT}`);
});
