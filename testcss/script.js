// Hàm 1: Khi di chuột hoặc Tab vào
function upDate(previewPic) {
    var imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm 2: Khi rút chuột hoặc Tab ra
function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Hàm 3: Vòng lặp thêm tabindex
function addTabIndex() {
    console.log("Đã kích hoạt vòng lặp gán tabindex cho ảnh!");
    var images = document.querySelectorAll(".preview");
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}