var nombre, password, edad;
  
        function iniciar() {
            nombre = document.getElementById("nombre");
            password = document.getElementById("password");
            edad = document.getElementById("edad");
            nombre.addEventListener("input", validacion);
            password.addEventListener("input", validacion);
            edad.addEventListener("input", validacion);
            validacion();
        }
        function validacion() {
            if (nombre.value === "") {
                nombre.setCustomValidity("Inserte su nombre");
            } else {
                nombre.setCustomValidity("");
            }
            if ( password.value.length < 8){
              password.setCustomValidity("La clave debe tener mas de 8 dígitos")
            } else {
              password.setCustomValidity("")
            }
            if (edad.value < 18){
              edad.setCustomValidity("Para registrarte debes ser mayor de edad")
            } else {
              edad.setCustomValidity("")
            }
        }

        window.addEventListener("load", iniciar);
