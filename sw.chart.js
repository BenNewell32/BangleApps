var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Recent Friendly Matches",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
        ],
        borderColor: [
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
          "rgba(33, 118, 224)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

var ctx = document.getElementById("myChart2").getContext("2d");
var myChart2 = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Recent Tournament Matches",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgb(49,162,76)",
          "rgb(49,162,76)",
          "rgb(49,162,76)",
          "rgb(49,162,76)",
          "rgb(49,162,76)",
          "rgb(49,162,76)",
        ],
        borderColor: [
          "rgb(49,162,76)",
          "rgb(49,162,76)",
          "rgb(49,162,76)",
          "rgb(49,162,76)",
          "rgb(49,162,76)",
          "rgb(49,162,76)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

var ctx = document.getElementById("myChart3").getContext("2d");
var chart3 = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Recent Friendly Matches",
        backgroundColor: "rgba(33, 118, 224)",
        borderColor: "rgba(33, 118, 224)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

var ctx = document.getElementById("myChart4").getContext("2d");
var chart4 = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Recent Tournament Matches",
        backgroundColor: "rgb(49,162,76)",
        borderColor: "rgb(49,162,76)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },

  // Configuration options go here
  options: {},
});
