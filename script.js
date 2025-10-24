function cekDanArahkan() {
    let kataInput = document.getElementById("kotakInput").value.toLowerCase();

     switch (kataInput) {
        case "trigonometri":
            window.location.href = "trigonometri.html";
            break;
        case "logaritma":
            window.location.href = "Logaritma.html";
            break;
        case "eksponen":
            window.location.href = "Eksponen.html";
            break;
        case "Baris dan Deret":
            window.location.href = "baris dan deret.html";
            break;
        case "baris dan deret":
            window.location.href = "baris dan deret.html";
            break;
        case "limit":
            window.location.href = "limit.html";
             break;
        default:
            alert("Kata tidak ditemukan. Coba lagi!");
            break;
    }
}

