# ECharts 儀表板專案

這是一個使用 Node.js + Express 框架建立的簡單 ECharts 儀表板應用程式。

## 功能特色

- 📊 多種圖表類型：線圖、圓餅圖、儀表圖、柱狀圖
- 🔄 即時資料更新
- 📱 響應式設計
- 🎨 美觀的 UI 介面
- ⚡ 輕量級架構

## 專案結構

```
echarts-dashboard/
├── app.js              # 主要應用程式檔案
├── package.json        # NPM 套件配置
├── README.md          # 專案說明文件
├── views/             # EJS 模板檔案
│   └── index.ejs      # 主頁模板
└── public/            # 靜態檔案目錄 (CSS, JS, 圖片等)
```

## 安裝與執行

### 1. 建立專案目錄並初始化

```bash
mkdir echarts-dashboard
cd echarts-dashboard
```

### 2. 安裝相依套件

```bash
npm install
```

### 3. 開發模式執行 (使用 nodemon)

```bash
npm run dev
```

### 4. 生產模式執行

```bash
npm start
```

### 5. 開啟瀏覽器

訪問 `http://localhost:3000` 即可查看儀表板

## API 端點

- `GET /` - 主要儀表板頁面
- `GET /api/chart-data` - 獲取圖表資料的 API

## 技術棧

- **後端**: Node.js, Express.js
- **模板引擎**: EJS
- **圖表庫**: ECharts 5.4.3
- **開發工具**: Nodemon

## 自訂化

### 修改圖表資料

編輯 `app.js` 中的 `generateSampleData()` 函數來客製化你的資料。

### 新增圖表類型

1. 在 `views/index.ejs` 中新增圖表容器
2. 在 JavaScript 部分新增對應的圖表配置
3. 在 `updateCharts()` 函數中更新新圖表

### 樣式客製化

修改 `views/index.ejs` 中的 CSS 樣式來調整外觀。

## 進階功能建議

- 連接真實資料庫 (MongoDB, MySQL)
- 新增使用者認證
- 實作即時 WebSocket 連接
- 新增更多圖表類型
- 新增資料匯出功能

## 授權

MIT License
