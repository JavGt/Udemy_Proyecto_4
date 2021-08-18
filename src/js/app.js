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