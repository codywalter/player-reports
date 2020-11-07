// CREATING ACCESS TO FILES IMPORTED BY USER

const selectedFile = document.getElementById("input").files[0];
const inputElement = document.getElementById("input");
const numFiles = FileList.length;

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
      complete: function (res, file) {
        console.log(res, file);
      },
    });
  });
