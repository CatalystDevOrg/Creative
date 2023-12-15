const ws = document.getElementById("workspace");
const wsctx = ws.getContext("2d");
const cls = document.getElementById("brush_cl")
const pos = document.getElementById("pos")
const ipsize = document.getElementById("psize")
pscale = 10;

function draw(e) {
    wsctx.fillRect(e.offsetX, e.offsetY, pscale, pscale);
    console.log("DEBUG", e.offsetX, e.offsetY);
}

// cursorX = Number.NaN;
// cursorY = Number.NaN;

ws.onmousemove = function(event){
    cursorX = event.offsetX;
    cursorY = event.offsetY;
    pos.innerText = `X: ${cursorX}, Y: ${cursorY},`
}

cls.addEventListener('change', function() {
    cl = cls.options[cls.selectedIndex].value;
    wsctx.fillStyle = cl;
    cls.style.color = cl;
})

addEventListener("wheel", (e) => {
    pscale = pscale + e.deltaY / 100
    ipsize.innerText = `Scale: ${pscale}`
});

ws.onclick = draw;

ws.width = window.innerWidth;
ws.height = window.innerHeight;

ipsize.innerText = `Scale: ${pscale}`;