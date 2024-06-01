document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    if(registerForm){
        registerForm.addEventListener('submit', function(event){
            const nombre = document.getElementById('nombre').value.trim();
            const apellido = document.getElementById('apellido').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const date = document.getElementById('date').value.trim();
            const pais = document.getElementById('pais').value;
            const terminosYCondiciones = document.getElementById('terminosYCondiciones').checked;

            if(nombre === '' || apellido === '' || email === '' || password === '' || date === '' || pais === '' || !terminosYCondiciones){
                event.preventDefault();
                alert('Por favor, complete todos los campos.');
            }

        })
    }else{
        console.error('Formulario no encontrado.');
    }

})