function cekDanArahkan() {
    let kataInput = document.getElementById("kotakInput").value.toLowerCase();

     switch (kataInput) {
        case "trigonometri":
            window.location.href = "trigonometri.html";
            break;
	case "trigono":
            window.location.href = "trigonometri.html";
            break;
	case "trig":
            window.location.href = "trigonometri.html";
            break;


        case "logaritma":
            window.location.href = "logaritma.html";
            break;
 	case "log":
            window.location.href = "logaritma.html";
            break;


        case "eksponen":
            window.location.href = "eksponen.html";
            break;

        case "baris dan deret":
            window.location.href = "baris dan deret.html";
            break;
 	case "baris":
            window.location.href = "baris dan deret.html";
            break;
 	case "deret":
            window.location.href = "baris dan deret.html";
            break;
 	case "baris aritmatik":
            window.location.href = "baris dan deret.html";
            break;
 	case "deret aritmatik":
            window.location.href = "baris dan deret.html";
            break;
	 case "baris geometri":
            window.location.href = "baris dan deret.html";
            break;
 	case "deret geometri":
            window.location.href = "baris dan deret.html";
            break;

        case "limit":
            window.location.href = "limit.html";
             break;
	case "limit fungsi":
            window.location.href = "limit.html";
             break;
        default:
            alert("Kata tidak ditemukan. Coba lagi!");
            break;
    }
}