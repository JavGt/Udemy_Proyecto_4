document.addEventListener('DOMContentLoaded',function(){
	scrollNav();

	negacionFija();
});

function negacionFija(){

	const barra = document.querySelector('.header');
	// Registra la Intersection Observer
	const observer = new IntersectionObserver(function(entries){
		if (entries[0].isIntersecting) {
			barra.classList.remove('fijo');
		}else{
			barra.classList.add('fijo');
		}
	});
	// Elemento a observar
	observer.observe(document.querySelector('.sobre-festival'));
}

function scrollNav(){
	//obtiene todos los enlaces
	const enlaces = document.querySelectorAll('.navegacion-principal');

	//muestra uno por uno para poder agregarle atributos
	enlaces.forEach(function(enlace){
		//Le agrega una accion de dar clic
		enlace.addEventListener('click',function(e){
			//Quita la accion por dafult
			e.preventDefault();
			//Crea una variable que contenga el Id 
			const seccion = document.querySelector(e.target.attributes.href.value);

			//Agrega la animacion
			seccion.scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
}
document.addEventListener('DOMContentLoaded',function(){
	crearGaleria();
});

function crearGaleria(){
	//Asigna la ID de el ul a una variable "galeria"
	const galeria =document.querySelector('.galeria-imagenes');

	for(let i =1 ; i<=12; i++){
		//crear una etiqueta "img" y la guarda en una variable
		const imagen = document.createElement('IMG');
		//Agrega Id a las imagenes
		imagen.dataset.imagenId = i;
		//Le asigna la propiedad "src" a la etiqueta creada
		imagen.src = `build/img/thumb/${i}.webp`;

		//Añadir la funcion de la imagen que mande a una funcion
		imagen.onclick = mostrarImagen;
		// console.log(imagen);

		//crear una etiqueta "li" y la guarda en una variable
		const lista = document.createElement('LI');
		//indica que las etiquetas establecidas en la variable "imagen" es hijo de la lista o "li"
		//ejemplo
		//<li>
		//	<img>
		lista.appendChild(imagen);
		//añade las etiquetas hijas al ul que esta en el html "index.html"
		galeria.appendChild(lista);
	}
}

function mostrarImagen(evento) {
	//Crear el id obtenido de string a int
	const id = parseInt(evento.target.dataset.imagenId);
	
	// Generar la imagen
	const imagen = document.createElement('IMG');
	imagen.src = `build/img/grande/${id}.webp`;

	const overlay = document.createElement('DIV');
	overlay.appendChild(imagen);
	overlay.classList.add('overlay');

	// Para cerrar la galeria
	overlay.onclick = function(){
		overlay.remove();
		body.classList.remove('fijar-body');
	}

	//Boton para cerrar la imagen
	const cerrarImagen = document.createElement('P');
	cerrarImagen.textContent = 'X';
	cerrarImagen.classList.add('btn-cerrar');

	cerrarImagen.onclick = function(){
		overlay.remove();
		body.classList.remove('fijar-body');
	}

	overlay.appendChild(cerrarImagen);

	//Mostrar en el html
	const body = document.querySelector('body');
	body.appendChild(overlay);
	body.classList.add('fijar-body');

	

}