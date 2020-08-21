import React, { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import styles from "./Graph.module.css"

export default function Graph(props) {
  const [chartdata, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: ["China", "United States", "Republic of Cattle", "India"],
      datasets: [
        {
          data: [10.2, 5.3, 5.0, 2.5],
          backgroundColor: [
            "rgba(60, 60, 60, 1)",
            "rgba(60, 60, 60, 1)",
            "#ffe633",
            "rgba(60, 60, 60, 1)",
          ],
          borderWidth: 1,
        },
      ],
    })
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div className={styles.container}>
      <Bar
        className={styles.chart}
        data={chartdata}
        options={{
          tooltips: {
            enabled: false,
          },
          responsive: true,
          maintainAspectRatio: false,
          legend: { display: false },
          labels: {
            display: false,
          },
          title: {
            display: true,
            fontColor: "white",
            fontSize: "15",
            text: "Gigatons of CO2 emissions per year",
            position: "bottom",
            defaultFontFamily: "'Muli', sans-serif",
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                  color: "#333",
                },
                ticks: {
                  fontColor: "white",
                  fontSize: "14",
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(204, 204, 204, 0.1)",
                },

                ticks: {
                  beginAtZero: true,
                  fontColor: "#ccc",
                },
              },
            ],
          },
        }}
      />
    </div>
  )
}
