const ws = document.getElementById("workspace");
const wsctx = ws.getContext("2d");
const cls = document.getElementById("brush_cl")
const pos = document.getElementById("pos")

function draw(e) {
    wsctx.fillStyle = "black";
    wsctx.fillRect(e.offsetX, e.offsetY, 10, 10);
    console.log("DEBUG", e.offsetX, e.offsetY);
}

cursorX = Number.NaN;
cursorY = Number.NaN;

ws.onmousemove = function(event){
    cursorX = event.offsetX;
    cursorY = event.offsetY;
    pos.innerText = `X: ${cursorX}, Y: ${cursorY}`
}

cls.addEventListener('change', function() {
    cl = cls.options[cls.selectedIndex].value;
    wsctx.fillStyle = cl;
    cls.style.color = cl;
})

ws.onclick = draw;
