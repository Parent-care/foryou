function checkName() {
  const nama = document.getElementById("namaInput").value.toLowerCase();
  
  if (nama === "una" || nama === "lisa" || nama === "mariatul husna") {
    window.location.href = "foryou.html";
  } else {
    alert("Hanya Tania Salsabila Putri yang bisa mengakses halaman selanjutnya.");
  }
}

    