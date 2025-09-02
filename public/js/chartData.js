import chartOption from "./chartOption.js";

// 載入初始資料
const dataScript = document.getElementById("chart-data");
const initialData = JSON.parse(dataScript.textContent);

// 初始化所有圖表
let lineChart,
  //   gaugeChart,
  pieChart,
  piechart2,
  pieChart3,
  barChart,
  trafficPieChart,
  mixedBarChart,
  mixedBarChart2;

function initCharts() {
  // 線圖
  lineChart = echarts.init(document.getElementById("lineChart"));

  // 圓餅圖
  pieChart = echarts.init(document.getElementById("pieChart"));

  // 圓餅圖
  piechart2 = echarts.init(document.getElementById("pieChart2"));

  // 圓餅圖
  pieChart3 = echarts.init(document.getElementById("pieChart3"));

  // 雙層圓餅圖
  trafficPieChart = echarts.init(document.getElementById("trafficPieChart"));

  // mixed bar chart
  mixedBarChart = echarts.init(document.getElementById("mixedBarChart"));

  // mixed bar chart
  mixedBarChart2 = echarts.init(document.getElementById("mixedBarChart2"));
  updateCharts(initialData);
}

function updateCharts(data) {
  let {
    lineOption,
    pieOption,
    pieOption2,
    pieOption3,
    trafficPieOption,
    mixedBarOption,
    mixedBarOption2,
  } = chartOption(data);

  // 更新圖表
  lineChart.setOption(lineOption);
  // gaugeChart.setOption(gaugeOption);
  pieChart.setOption(pieOption);
  piechart2.setOption(pieOption2);
  pieChart3.setOption(pieOption3);
  // barChart.setOption(barOption);
  trafficPieChart.setOption(trafficPieOption);
  mixedBarChart.setOption(mixedBarOption);
  mixedBarChart2.setOption(mixedBarOption2);

  document.getElementById("switchBtn").addEventListener("click", () => {
    let status = document.getElementById("status");

    if (status.className === "FATStatus_months") {
      status.className = "FATStatus_years";
      mixedBarChart2.setOption({
        xAxis: [
          {
            data: data.timings.years,
          },
        ],
        series: [
          {
            data: data.firstAidTreament.percentagePerYear,
          },
        ],
      });
    } else {
      status.className = "FATStatus_months";
      mixedBarChart2.setOption({
        xAxis: [
          {
            data: data.timings.months,
          },
        ],
        series: [
          {
            data: data.firstAidTreament.percentagePerMonth,
          },
        ],
      });
    }
  });
}

// 重新整理資料
async function refreshData() {
  try {
    const response = await fetch("/api/chart-data");
    const newData = await response.json();
    updateCharts(newData);
  } catch (error) {
    console.error("資料重新整理失敗:", error);
  }
}

// 響應式調整
window.addEventListener("resize", function () {
  lineChart.resize();
  pieChart.resize();
  barChart.resize();
  trafficPieChart.resize();
});

// 頁面載入完成後初始化圖表
window.onload = function () {
  initCharts();
};
