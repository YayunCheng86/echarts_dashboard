function chartOption(data) {
  return {
    // 線圖配置
    lineOption: {
      title: {
        text: "救護案件時序分析",
        left: "center",
      },
      grid: {
        left: "15%",
        right: "15%",
        top: "10%",
        bottom: "25%",
      },
      tooltip: {
        trigger: "axis",
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        data: data.timings.months,
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} 分",
        },
      },
      legend: [
        {
          data: [
            "危急：反應時間一(到達現場時間 - 出勤時間)",
            "非危急：反應時間一(到達現場時間 - 出勤時間)",
            "危急：反應時間二(初評時間 - 出勤時間)",
            "非危急：反應時間二(初評時間 - 出勤時間)",
          ],
          bottom: "10%",
        },
        {
          data: [
            "全部平均值：反應時間一(到達現場時間 - 出勤時間)",
            "全部平均值：反應時間二(初評時間 - 出勤時間)",
          ],
          bottom: "5%",
        },
        {
          data: [
            "113年平均值：反應時間一(到達現場時間 - 出勤時間)",
            "113年平均值：反應時間二(初評時間 - 出勤時間)",
          ],
          bottom: "0%",
        },
      ],
      series: [
        {
          name: "危急：反應時間一(到達現場時間 - 出勤時間)",
          data: data.timings.danger1,
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#F76D6D",
          },
          symbolSize: "7",
        },
        {
          name: "非危急：反應時間一(到達現場時間 - 出勤時間)",
          data: data.timings.nonDanger1,
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#5470c6",
          },
          symbolSize: "7",
        },
        {
          name: "危急：反應時間二(初評時間 - 出勤時間)",
          data: data.timings.danger2,
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#F76D6D",
            borderCap: "square",
          },
          lineStyle: {
            type: "dashed",
          },
          symbol: "rect",
          symbolSize: "7",
        },
        {
          name: "非危急：反應時間二(初評時間 - 出勤時間)",
          data: data.timings.nonDanger2,
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#5470c6",
          },
          lineStyle: {
            type: "dashed",
          },
          symbol: "rect",
          symbolSize: "7",
        },
        {
          name: "全部平均值：反應時間一(到達現場時間 - 出勤時間)",
          data: data.timings.averge1,
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#91cc75",
          },
          lineStyle: {
            type: "solid",
          },
          symbolSize: "0",
        },
        {
          name: "全部平均值：反應時間二(初評時間 - 出勤時間)",
          data: data.timings.averge2,
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#91cc75",
          },
          lineStyle: {
            type: "solid",
          },
          symbolSize: "0",
        },
        {
          name: "113年平均值：反應時間一(到達現場時間 - 出勤時間)",
          data: data.timings.lastYearAverage1,
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#FF9F45",
          },
          lineStyle: {
            type: "solid",
          },
          symbolSize: "0",
        },
        {
          name: "113年平均值：反應時間二(初評時間 - 出勤時間)",
          data: data.timings.lastYearAverage2,
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#FF9F45",
          },
          lineStyle: {
            type: "solid",
          },
          symbolSize: "0",
        },
      ],
    },
    // 圓餅圖配置
    pieOption: {
      title: {
        text: "2車送1人比例表",
        left: "center",
      },
      color: ["#fac858", "#3C82D9"],
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
        bottom: "0%",
      },
      series: [
        {
          name: "救護案件",
          type: "pie",
          radius: "50%",
          data: data.pie,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    },
    // 圓餅圖配置
    pieOption2: {
      title: {
        text: "醫顧會 SGA 放置統計表",
        left: "center",
      },
      color: ["#fac858", "#3C82D9"],
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
        bottom: "0%",
      },
      series: [
        {
          name: "救護案件",
          type: "pie",
          radius: "50%",
          data: data.SGA,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    },
    // 圓餅圖配置
    pieOption3: {
      title: {
        text: "醫顧會 Endo 放置統計表",
        left: "center",
      },
      color: ["#fac858", "#3C82D9"],
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
        bottom: "0%",
      },
      series: [
        {
          name: "救護案件",
          type: "pie",
          radius: "50%",
          data: data.Endo,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    },
    // 雙層圓餅圖配置
    trafficPieOption: {
      title: {
        text: "未送醫原因比例表",
        left: "center",
      },
      color: [
        "#4BA3F7",
        "#91cc75",
        "#fac858",
        // 未送醫
        "#4BA3F7",
        "#6EC9F5",
        "#3C82D9",
        // 已接觸未送醫
        "#91CC75",
        "#4CAF50",
        "#A3E635",
        "#D9F99D",
        // 出勤
        "#FFD166",
        "#FF9F45",
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "horizontal",
        bottom: "0%",
        left: "center",
        data: [
          "未接觸",
          "有接觸未送醫",
          "出勤待命",
          "未發現",
          "誤報",
          "中途取消",
          "拒送",
          "警察處理",
          "現場死亡",
          "其他",
          "火警",
          "支援勤務",
        ],
      },
      series: [
        {
          name: "類別",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],
          label: {
            position: "inner",
            fontSize: 14,
          },
          labelLine: {
            show: false,
          },
          data: data.traffic.inner,
        },
        {
          name: "細項",
          type: "pie",
          radius: ["45%", "60%"],
          labelLine: {
            length: 30,
          },
          label: {
            formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
            backgroundColor: "#F6F8FC",
            borderColor: "#8C8D8E",
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: "#6E7079",
                lineHeight: 22,
                align: "center",
              },
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              b: {
                color: "#4C5058",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 33,
              },
              per: {
                color: "#fff",
                backgroundColor: "#4C5058",
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
          data: data.traffic.outer,
        },
      ],
    },
    // 混合柱狀圖配置
    mixedBarOption: {
      title: {
        text: "年度月份累計次數（人次／車次）",
        left: "center",
        top: "10%",
      },
      grid: {
        top: "30%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ["去年同期", "今年累計"],
      },
      yAxis: [
        {
          type: "category",
          data: data.mixed.categories,
          axisPointer: {
            type: "shadow",
          },
        },
      ],
      xAxis: [
        {
          type: "value",
          name: "次數",
          min: 0,
          max: 100000,
          interval: 10000,
          axisLabel: {
            formatter: "{value} 次",
          },
        },
      ],
      series: [
        {
          name: "去年同期",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " 次";
            },
          },
          data: data.mixed.lastYear,
        },
        {
          name: "今年累計",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " 次";
            },
          },
          data: data.mixed.thisYear,
        },
      ],
    },
    // 混合柱狀圖配置
    mixedBarOption2: {
      title: {
        text: "急救處置統計表",
        left: "center",
        top: 10,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      //   toolbox: {
      //     feature: {
      //       dataView: { show: true, readOnly: false },
      //       magicType: { show: true, type: ["line", "bar"] },
      //       restore: { show: true },
      //       saveAsImage: { show: true },
      //     },
      //   },
      legend: {
        data: ["人次"],
      },
      xAxis: [
        {
          type: "category",
          data: data.timings.months,
          axisPointer: {
            type: "shadow",
          },
          axisLabel: {
            fontSize: 9, // Set the desired font size here
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "百分比",
          min: 0,
          max: 3.5,
          interval: 0.5,
          axisLabel: {
            formatter: "{value} %",
          },
        },
      ],
      series: [
        {
          name: "處置率",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " %";
            },
          },
          data: data.firstAidTreament.percentagePerMonth,
        },
      ],
    },
  };
}

export default chartOption;
