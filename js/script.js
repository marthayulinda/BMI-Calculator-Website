document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let gender = document.querySelector('input[name="jk"]:checked');
  let weight = document.getElementById("weight").value;
  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let hasilDiv = document.querySelector(".hasil");

  // Reset error messages
  document.getElementById("jk-error").textContent = "";
  document.getElementById("weight-error").textContent = "";
  document.getElementById("age-error").textContent = "";
  document.getElementById("height-error").textContent = "";

  let isValid = true;

  if (!gender) {
    document.getElementById("jk-error").textContent = "Pilih jenis kelamin!";
    isValid = false;
  }

  if (weight === "" || weight <= 0) {
    document.getElementById("weight-error").textContent =
      "Masukkan berat badan yang valid!";
    isValid = false;
  }

  if (age === "" || age <= 0) {
    document.getElementById("age-error").textContent =
      "Masukkan usia yang valid!";
    isValid = false;
  }

  if (height === "" || height <= 0) {
    document.getElementById("height-error").textContent =
      "Masukkan tinggi badan yang valid!";
    isValid = false;
  }

  if (isValid) {
    let bmi = calculateBMI(weight, height);
    displayResult(bmi, hasilDiv);
    displaySummary(bmi);
  }
});

document.querySelector(".button-reset").addEventListener("click", function () {
  document.getElementById("bmiForm").reset();

  // Reset hasil dan pesan kesalahan
  let hasilDiv = document.querySelector(".hasil");
  hasilDiv.innerHTML = "<p>.....</p><p>------</p><p>------</p>";

  document.getElementById("jk-error").textContent = "";
  document.getElementById("weight-error").textContent = "";
  document.getElementById("age-error").textContent = "";
  document.getElementById("height-error").textContent = "";

  // Reset summary
  document.getElementById("summary1").textContent = "";
  document.getElementById("summary2").textContent = "";
  document.getElementById("summary3").textContent = "";
});

function calculateBMI(weight, height) {
  height = height / 100; // Convert cm to meters
  return weight / (height * height);
}

function displayResult(bmi, hasilDiv) {
  let bmiCategory = getBMICategory(bmi);

  hasilDiv.innerHTML = `
      <h2>${bmiCategory.title}</h2>
      <h3>${bmi.toFixed(1)}</h3>
      <p>${bmiCategory.message}</p>
      <button class="button-tengah">Download Hasil BMI</button>
  `;
}

function displaySummary(bmi) {
  let summary1 = document.getElementById("summary1");
  let summary2 = document.getElementById("summary2");
  let summary3 = document.getElementById("summary3");

  if (bmi < 18.5) {
    summary1.textContent =
      "Hasil BMI Anda menunjukkan bahwa Anda kekurangan berat badan.";
    summary2.textContent =
      "Kekurangan berat badan dapat meningkatkan risiko beberapa masalah kesehatan seperti kekurangan nutrisi.";
    summary3.textContent =
      "Sebaiknya Anda berbicara dengan ahli gizi untuk mendapatkan saran tentang cara menambah berat badan secara sehat.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    summary1.textContent =
      "Hasil BMI Anda menunjukkan bahwa berat badan Anda dalam kisaran normal.";
    summary2.textContent =
      "Mempertahankan berat badan ideal dapat membantu mengurangi risiko penyakit jantung, diabetes, dan kondisi lainnya.";
    summary3.textContent =
      "Tetap lanjutkan pola hidup sehat untuk menjaga berat badan Anda tetap dalam kisaran ideal.";
  } else if (bmi >= 25 && bmi < 29.9) {
    summary1.textContent =
      "Hasil BMI Anda menunjukkan bahwa Anda memiliki berat badan berlebih.";
    summary2.textContent =
      "Kelebihan berat badan dapat meningkatkan risiko masalah kesehatan seperti tekanan darah tinggi dan diabetes tipe 2.";
    summary3.textContent =
      "Pertimbangkan untuk mengubah pola makan dan menambah aktivitas fisik untuk menurunkan berat badan.";
  } else {
    summary1.textContent =
      "Hasil BMI Anda menunjukkan bahwa Anda berada dalam kategori obesitas.";
    summary2.textContent =
      "Obesitas dapat meningkatkan risiko berbagai masalah kesehatan serius, termasuk penyakit jantung dan diabetes.";
    summary3.textContent =
      "Bicaralah dengan dokter atau ahli gizi untuk mendapatkan rencana yang sesuai untuk menurunkan berat badan.";
  }
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return {
      title: "Berat Badan Kurang",
      message: "Anda memiliki berat badan di bawah normal.",
    };
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return {
      title: "Berat Badan Normal",
      message: "Anda memiliki berat badan yang ideal.",
    };
  } else if (bmi >= 25 && bmi < 29.9) {
    return {
      title: "Berat Badan Lebih",
      message: "Anda memiliki berat badan berlebih.",
    };
  } else {
    return {
      title: "Obesitas",
      message: "Anda memiliki berat badan yang sangat berlebih.",
    };
  }
}
