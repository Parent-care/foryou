function checkName() {
  const nama = document.getElementById("namaInput").value.toLowerCase();
  
  if (nama === "unaa" || nama === "una" || nama === "husna" || nama === "mariatul husna") {
    window.location.href = "foryou.html";
  } else {
    alert("Hanya Mariatul Husna Tercinta yang bisa mengakses halaman selanjutnya.");
  }
}

    