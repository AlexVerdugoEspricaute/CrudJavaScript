const data = [
    'Morado',
    'Rojo',
    'Amarillo',
    'Verde',
    'Azul',
    'Rosado',
    'Naranja',
    'Celeste',
    'Negro',
    'Blanco',
];

const listaColores = document.getElementById('listaColores'); // el getElementById es para traer los elementos desde el html por su id 
const agregar = document.getElementById('agregar');
const eliminar = document.getElementById('eliminar');
const buscar = document.getElementById('buscador');
const cancelar = document.getElementById('cancelar');

// Función para agregar un color
agregar.addEventListener('click', () => {
    const color = buscar.value.trim(); 
    if (color && !data.includes(color)) {
        data.push(color);   // pushear es agregar, a la data que es la lista de elementos , y que le pasaremos el contenido color
        const li = document.createElement('li');
        li.className = 'color';
        li.textContent = color;
        listaColores.appendChild(li); // appendChild es para agregar un nuevo elemento a dentro de una lista o datos
        buscar.value = ''; //value es el valor de buscar, lo cual se iguala a " " nada para que vuelva a 0
        document.querySelectorAll('.color').forEach(color => color.classList.remove('filtro')); // el querySelectorAll es para traer todos los elementos dentro del html por cualquier otro atributo, ya sea con # o . dependiendo del elemento
        alert('El color fue agregado correctamente'); 
    } else if (data.includes(color)) {
        alert('El color ya existe en la lista');
    } else {
        alert('Ingrese un color válido');
    }
});

// Función para eliminar un color
eliminar.addEventListener('click', () => {
    const color = buscar.value.trim();
    if (color && data.includes(color)) {
        const index = data.indexOf(color);
        data.splice(index, 1);

        // Eliminar visualmente el elemento de la lista
        const e = listaColores.getElementsByClassName('color');
        for (let i = 0; i < e.length; i++) {
            if (e[i].textContent === color) {
                listaColores.removeChild(e[i]);
                break; // Salir del bucle una vez eliminado el elemento
            }
        }
        buscar.value = ''; // Limpiar el campo de color
        document.querySelectorAll('.color').forEach(color => color.classList.remove('filtro'));
        alert('El color fue eliminado correctamente');
    } else {
        alert('El color no existe en la lista');
    }
});


cancelar.addEventListener('click', () => {
    buscar.value = '';
    document.querySelectorAll('.color').forEach(color => color.classList.remove('filtro'));
});


buscar.addEventListener('keyup', () => {
    const busqueda = buscar.value.toLowerCase();

    document.querySelectorAll('.color').forEach(color => {
        const colorText = color.textContent.toLowerCase();
        if (colorText.includes(busqueda)) {
            color.classList.remove('filtro');
        } else {
            color.classList.add('filtro');
        }
    });
});

// Llenar la lista de colores inicialmente
data.forEach(color => {
    const li = document.createElement('li');
    li.className = 'color';
    li.textContent = color;
    listaColores.appendChild(li);
});
