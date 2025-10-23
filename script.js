function cekDanArahkan() {
    let kataInput = document.getElementById("kotakInput").value.toLowerCase();

    switch (kataInput) {
        case "trigonometri":
            window.location.href = "trigonometri.html";
            break;
       
        default:
            alert("Kata tidak ditemukan. Coba lagi!");
            break;
    }
}