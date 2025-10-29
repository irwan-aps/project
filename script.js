function cekDanArahkan() {
    let kataInput = document.getElementById("kotakInput").value.toLowerCase();

     switch (kataInput) {
        case "trigonometri" or "trigono" or "trig":
            window.location.href = "trigonometri.html";
            break;
        case "logaritma":
            window.location.href = "logaritma.html";
            break;
        case "eksponen":
            window.location.href = "eksponen.html";
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



