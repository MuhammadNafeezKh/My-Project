function showMessage(choice) {
    let message = "";
    switch (choice) {
        case 1:
            message = "Berbicara dengan seseorang yang Anda percayai dapat membantu. Hubungi teman atau anggota keluarga.";
            break;
        case 2:
            message = "Penting untuk berbicara dengan ahli kesehatan mental. Mereka dapat memberikan dukungan dan bimbingan.";
            break;
        case 3:
            message = "Kenapa kamu memilih ini? Pilihlah yang lain, karena hidupmu masih berharga.";
            break;
        case 4:
            message = "Anda dapat mengikuti kami di media sosial: ";
            message += '<a href="https://www.instagram.com/sanvictus_/" target="_blank">Instagram</a>';
            break;
        default:
            message = "Pilihan tidak valid. Silakan coba lagi.";
    }
    document.getElementById("response").innerHTML = message;
}