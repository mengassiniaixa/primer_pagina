const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const contenedor = document.getElementById("contenedor");

let pagina = 1;

btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina -= 1;
        cargarPeliculas();
    }
});

btnSiguiente.addEventListener("click", () => {
    if (pagina < 1000) {
        pagina += 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e42445c0e0b92c337e9ebeaa5b40a7c1&language=es-MX&page=${pagina}`)
        console.log(respuesta);

        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos);

            let peliculas = [];

            datos.results.forEach(pelicula => {
                peliculas += `
                    <div class="peliculas">
                        <div class="pelicula">
                            <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="imgTendencias" alt="...">
                            <div >
                                <a class="tituloPelicula">${pelicula.title}</a>
                            </div>
                        </div>
                    </div>
                `;
            });

            contenedor.innerHTML = peliculas;
        }
    } catch (error) {
        console.log(error.message);
    }
}

cargarPeliculas();
