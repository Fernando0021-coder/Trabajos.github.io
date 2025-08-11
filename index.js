let producto1 = document.getElementById('producto1');
let producto2 = document.getElementById('producto2');
let producto3 = document.getElementById('producto3');
let producto4 = document.getElementById('producto4');
let producto5 = document.getElementById('producto5');
let img1 = producto1.querySelector('img');
let img2 = producto2.querySelector('img');
let img3 = producto3.querySelector('img');
let img4 = producto4.querySelector('img');
let img5 = producto5.querySelector('img');
let container = document.getElementById('container');
let imagenDiv = document.getElementById('imagen');


producto1.addEventListener('click', function() {
    img1.style.opacity = 0;
    setTimeout(function() {
        if(img1.src.endsWith("imagen1.jpg")) {
            img1.src = "imagen1.0.jpg";
        } else {
            img1.src = "imagen1.jpg";
        }
        img1.style.opacity = 1;
    }, 500);
});


let sillaIndex = 1;
producto2.addEventListener('click', function() {
    img2.style.opacity = 0;
    setTimeout(function() {
        sillaIndex++;
        if (sillaIndex > 3) sillaIndex = 1;
        img2.src = `silla${sillaIndex}.0.jpg`;
        img2.style.opacity = 1;
    }, 500);
});

producto3.addEventListener('click', function() {
    img3.style.opacity = 0;
    setTimeout(function() {
        if(img3.src.endsWith("garaje1.0.jpg")) {
            img3.src = "garaje2.0.jpg";
        } else {
            img3.src = "garaje1.0.jpg";
        }
        img3.style.opacity = 1;
    }, 500);
});

// Script para producto 4 (pared: 1.0 a 3.0)
let paredIndex = 1;
producto4.addEventListener('click', function() {
    img4.style.opacity = 0;
    setTimeout(function() {
        paredIndex++;
        if (paredIndex > 3) paredIndex = 1;
        img4.src = `pared${paredIndex}.0.jpg`;
        img4.style.opacity = 1;
    }, 500);
});

// Script para producto 5 (arco: 1.0 y 2.0)
let arcoIndex = 1;
producto5.addEventListener('click', function() {
    img5.style.opacity = 0;
    setTimeout(function() {
        arcoIndex++;
        if (arcoIndex > 2) arcoIndex = 1;
        img5.src = `arco${arcoIndex}.0.jpg`;
        img5.style.opacity = 1;
    }, 500);
});

function info1() {
    alert("Este es un producto de alta calidad.");
}

function mostrarImagenGrande(src, texto) {
    container.style.display = 'none';
    imagenDiv.innerHTML = `
        <div style="display:flex;flex-direction:row;align-items:center;justify-content:center;gap:40px;width:100%;">
            <img src="${src}" style="max-width:45vw;max-height:70vh;border-radius:16px;box-shadow:0 4px 16px rgba(0,0,0,0.18);" />
            <div style="display:flex;flex-direction:column;align-items:flex-start;justify-content:center;">
                <p style="color:#f4f4f4;font-size:1.2em;margin:0 0 18px 0;max-width:350px;">${texto}</p>
                <button onclick="cerrarImagenGrande()" class="btn-info">Cerrar</button>
            </div>
        </div>
    `;
    imagenDiv.style.display = 'flex';
}

function cerrarImagenGrande() {
    imagenDiv.innerHTML = '';
    imagenDiv.style.display = 'none';
    container.style.display = 'block';
}

// Ejemplo de cómo usar en cada botón:
function accionProducto1() {
    mostrarImagenGrande('imagen1.0.jpg', 'Texto de ejemplo para producto 1');
}
function accionProducto2() {
    mostrarImagenGrande('silla3.0.jpg', 'Texto de ejemplo para producto 2');
}
function accionProducto3() {
    mostrarImagenGrande('garaje2.0.jpg', 'Texto de ejemplo para producto 3');
}
function accionProducto4() {
    mostrarImagenGrande('pared3.0.jpg', 'Texto de ejemplo para producto 4');
}
function accionProducto5() {
    mostrarImagenGrande('arco2.0.jpg', 'Texto de ejemplo para producto 5');
}
function accionProductoExtra() {
    mostrarImagenGrande('imagenazul.jpg', 'Texto de ejemplo para producto extra');
}