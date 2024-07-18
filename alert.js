
const data = [
    'Rojo',
    'Azul',
    'Verde',
    'Amarillo',
    'Naranja',
    'Blanco',
    'Negro' 
];

const listaColores = document.getElementById('listaColores');
const contenedorMain = document.getElementById('contenedor-main');
const agregar = document.getElementById('agregar');
const eliminar = document.getElementById('eliminar');
const cancelar = document.getElementById('cancelar');
const cerrar = document.getElementById('cerrar');
const buscador = document.getElementById('buscador');


buscador.addEventListener('keyup', function(){
    const buscar = buscador.value.toLowerCase();
    listaColores.querySelectorAll('.color').forEach(color => {
        const textColor = color.textContent.toLowerCase();
        if(textColor.includes(buscar)){
            color.classList.remove('filtro');
        } else {
            color.classList.add('filtro');
        }
    });
});


agregar.addEventListener('click', function(){
    const color = buscador.value.trim();
    if(color && !data.includes(color)){
        data.push(color);
    const li = document.createElement('li');
    li.textContent = color;
    listaColores.appendChild(li);
    buscador.value = '';
    document.querySelectorAll('.color').forEach(color => color.classList.remove('filtro'));
    alert('se ha agregado el color nuevo')
    } else {
        buscador.value = '';
        document.querySelectorAll('.color').forEach(color => color.classList.remove('filtro'));
        alert('El color ya existe')
    }
});

//meter el elemento lista dentro de una caja llamada listaColores creando un elemento llamado li que tiene class 'color', de textContent color y agregandolo con appendChild a la lista colores el li 
data.forEach(
    color => {
        const li = document.createElement('li');
        li.className = 'color';
        li.textContent = color;
        listaColores.appendChild(li);
    }
);

cerrar.addEventListener('click', function(){
    const confirmar = confirm('Seguro que quieres cerrar ?');
    if(confirmar){
        window.close()
    } else{
        alert('no se ha cerrado el navegador');
    }
});

cancelar.addEventListener('click', function(){
    const limpiar = document.getElementById('buscador');
    limpiar.value = '';
    document.querySelectorAll('.color').forEach(color =>{ color.classList.remove('filtro')})
});

eliminar.addEventListener('click', function(){
    const color = buscador.value.trim();
    if (color && data.includes(color)){
        const index = data.indexOf(color);
        data.splice(index,1);
        
        const e = listaColores.getElementsByClassName('color');
        for (let i = 0 ; i < e.length; i++ ){
            if(e[i].textContent === color){
                listaColores.removeChild(e[i]);
                break;
            } 
        }
        buscador.value = " ";
        document.querySelectorAll('.color').forEach(color => color.classList.remove('filtro'));
        alert('El color fue eliminado de la lista')
    } else {
        buscador.value = " ";
        document.querySelectorAll('.color').forEach(color => color.classList.remove('filtro'));
        alert(' El color no existe en la lista')
    }
})

