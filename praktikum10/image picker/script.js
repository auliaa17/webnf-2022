function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "img/chanyeol.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar chanyeol.jpg";
        alert("Ini adalah gambar chanyeol.jpg");
    } else if (picker == "light") {
        images.src = "img/baekhyun.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar baekhyun.jpg";
        alert("Ini adalah gambar baekhyun.jpg");
    } else if (picker == "earth") {
        images.src = "img/kyungsoo.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar kyungsoo.jpg";
        alert("Ini adalah gambar kyungsoo.jpg");
    } else if (picker == "teleport") {
        images.src = "img/kai.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar kai.jpg";
        alert("Ini adalah gambar kai.jpg");
    } else if (picker == "wind") {
        images.src = "img/sehun.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar sehun.jpg";
        alert("Ini adalah gambar sehun.jpg");
    } else if (picker == "water") {
        images.src = "img/suho.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar suho.jpg";
        alert("Ini adalah gambar suho.jpg");
    } else if (picker == "dark") {
        images.src = "img/lay.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar lay.jpg";
        alert("Ini adalah gambar lay.jpg");
    } else if (picker == "white") {
        images.src = "img/chen.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar chen.jpg";
        alert("Ini adalah gambar chen.jpg");
    } else {
        alert("Gagal");
    }
}