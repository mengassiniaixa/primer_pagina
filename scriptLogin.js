document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm'); 

    loginForm.addEventListener('submit', function(event){
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
    
        if(email === '' || password === ''){
            event.preventDefault();
            alert('Por favor, complete todos los campos.');
        }else {
            console.error('Formulario de login no encontrado');
        }
    });

});