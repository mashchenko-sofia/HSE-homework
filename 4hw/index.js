const box = document.querySelector(".box");
document.addEventListener("mousemove", (e) => {
    box.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});
