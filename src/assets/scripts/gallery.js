const imageList = document.querySelector('.imageList');

dragging = (e) => {
  imageList.scrollLeft = e.pageX;
}

imageList.addEventListener("mousemove", dragging)