// CREATING ACCESS TO FILES IMPORTED BY USER

const selectedFile = document.getElementById("input").files[0];
const inputElement = document.getElementById("input");
const generateChart = document.getElementById("generate-chart");
const numFiles = FileList.length;

inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files;
  console.log(fileList);
}
const metrics = [];
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
            { x: 5, y: 10 },
            { x: 20, y: 15 },
            { x: 30, y: 25 },
            { x: 40, y: 30 },
            { x: 50, y: 28 },
          ],
        },
      ],
    });

    chart.render();
  }
  generateChart();
});
//   window.onload = function () {
//   var chart = new CanvasJS.Chart("chartContainer", {
//     data: [
//       {
//         type: "scatter",
//         dataPoints: [
//           { x: 10, y: 10 },
//           { x: 20, y: 15 },
//           { x: 30, y: 25 },
//           { x: 40, y: 30 },
//           { x: 50, y: 28 },
//         ],
//       },
//     ],
//   });

//   chart.render();
// };
