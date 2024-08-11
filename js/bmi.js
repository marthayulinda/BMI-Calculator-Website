document.querySelector(".hasil").addEventListener("click", function (event) {
  if (event.target.classList.contains("button-tengah")) {
    downloadBMIResult();
  }
});

function downloadBMIResult() {
  let hasilDiv = document.querySelector(".hasil");
  let summary1 = document.getElementById("summary1").textContent;
  let summary2 = document.getElementById("summary2").textContent;
  let summary3 = document.getElementById("summary3").textContent;

  let bmiTitle = hasilDiv.querySelector("h2").textContent;
  let bmiValue = hasilDiv.querySelector("h3").textContent;
  let bmiMessage = hasilDiv.querySelector("p").textContent;

  let content = `
      Hasil BMI: ${bmiValue}\n
      Kategori: ${bmiTitle}\n
      ${bmiMessage}\n\n
      Ringkasan:\n
      1. ${summary1}\n
      2. ${summary2}\n
      3. ${summary3}
  `;

  let blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  let url = window.URL.createObjectURL(blob);

  let a = document.createElement("a");
  a.href = url;
  a.download = "Hasil_BMI.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
/*link botton*/
document.getElementById("consultButton").addEventListener("click", function () {
  window.open(
    "https://marthayulinda.github.io/Blog-Website/contact.html",
    "_blank"
  );
});

document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    window.open(
      "https://marthayulinda.github.io/Blog-Website/login.html",
      "_blank"
    );
  });
