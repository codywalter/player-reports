// CREATING ACCESS TO FILES IMPORTED BY USER

const selectedFile = document.getElementById("input").files[0];
const inputElement = document.getElementById("input");
const generateChart = document.getElementById("generate-chart");
const numFiles = FileList.length;
const metrics = [];
const batSpeed = [];

inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files;
  console.log(fileList);
}

let btn_upload = document
  .getElementById("upload-csv")
  .addEventListener("click", () => {
    Papa.parse(document.getElementById("input").files[0], {
      download: true,
      header: true,
      complete: function (data) {
        console.log(data);
        metrics.push(data);
      },
    });
    console.log(metrics);
  });

generateChart.addEventListener("click", () => {
  function generateChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
      data: [
        {
          type: "scatter",
          dataPoints: [
            {
              x: parseInt(metrics[0].data[0]["Attack Angle (deg)"]),
              y: parseInt(metrics[0].data[0]["Bat Speed (mph)"]),
            },
            // { x: 20.5, y: 15 },
            // { x: 30, y: 25 },
            // { x: 40, y: 30 },
            // { x: 50, y: 28 },
          ],
        },
      ],
    });

    chart.render();
  }
  generateChart();
});

// for (let index = 0; index < metrics.length; index++) {
//   const metrics = metrics[index][data]["Bat Speed (mph)"];
//   parseInt(metrics);
//   console.log(metrics);
// }
