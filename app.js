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
    title: "臺北市消防局儀表板展示",
    data: generateSampleData(),
  });
});

// API 路由 - 提供圖表資料
app.get("/api/chart-data", (req, res) => {
  res.json(generateSampleData());
});

function generateSampleData() {
  return {
    timings: {
      months: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      years: [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      danger1: [4.01, 3.65, 3.82, 3.77, 3.73, 3.82],
      nonDanger1: [3.83, 3.83, 3.78, 3.83, 4.07, 3.83],
      danger2: [6.1, 5.43, 5.63, 6.2, 6.3, 6.53],
      nonDanger2: [6.07, 6.63, 6.33, 6.22, 6.15],
      averge1: [3.83, 3.77, 3.8, 3.73, 3.83, 3.85],
      averge2: [5.4, 5.45, 5.65, 5.98, 5.65, 6.23],
      lastYearAverage1: [
        3.92, 3.82, 3.8, 3.75, 3.78, 3.75, 4.03, 3.92, 4.03, 3.95, 3.93, 3.87,
      ],
      lastYearAverage2: [
        5.93, 5.47, 5.78, 5.93, 5.4, 5.78, 5.7, 5.53, 5.6, 5.6, 5.58, 5.53,
      ],
    },
    gauge: Math.floor(Math.random() * 100),
    pie: [
      { value: 1, name: "2車送一人" },
      { value: 100, name: "其他" },
    ],
    SGA: [
      { value: 20, name: "SGA 放置" },
      { value: 100, name: "其他" },
    ],
    Endo: [
      { value: 45, name: "Endo 放置" },
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
    mixed: {
      categories: ["救護出勤車輛次", "急救送醫人次"],
      lastYear: [82082, 64650],
      thisYear: [80120, 63247],
    },
    firstAidTreament: {
      FATCountPerYear: [
        2974, 2638, 2372, 2307, 2345, 2348, 2337, 2376, 2323, 2181, 2317, 2317,
      ],
      totalPerYear: [
        87679, 90539, 98486, 98113, 97529, 100053, 98873, 101504, 97529, 100053,
        98873, 101504,
      ],
      lazy: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],

      divisionCalculator(numerators, denominators) {
        if (numerators.length !== denominators.length) {
          throw new Error("兩個陣列長度必須相同");
        }

        return numerators.map((num, i) => {
          const denom = denominators[i];
          if (denom === 0) {
            return 0; // 避免除以 0，可以回傳 null 或 0
          }
          return ((num / denom) * 100).toFixed(2); // 保留兩位小數
        });
      },

      get percentagePerYear() {
        return this.divisionCalculator(this.FATCountPerYear, this.totalPerYear);
      },

      get percentagePerMonth() {
        return this.divisionCalculator(
          this.FATCountPerMonth,
          this.totalPerMonth
        );
      },

      get FATCountPerMonth() {
        return this.divisionCalculator(this.FATCountPerYear, this.lazy);
      },

      get totalPerMonth() {
        return this.divisionCalculator(this.totalPerYear, this.lazy);
      },
    },
  };
}

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器正在運行於 http://localhost:${PORT}`);
});
