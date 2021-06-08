function validacion() {

    let usuario = document.getElementById("username").value;
    console.log(usuario)
    let contraseña = document.getElementById("pwd").value;
    console.log(contraseña)
    let aviso = document.getElementById("aviso");
    console.log(aviso)
    aviso.innerHTML = "";

    let enviar = "si";
    
    if (usuario == 0 || usuario.length == 0 ){
        let texto = "Debe introducir el usuario.<br/>" ;
        aviso.innerHTML += texto;
        enviar = "no";
    }

    if (!usuario.includes('@')){

        let texto = "El usuario debe contener un arroba.<br/>"; 
        aviso.innerHTML += texto;
        enviar = "no";

    }


    if (contraseña == 0 || contraseña.length == 0) {
        let texto = "Es obligatorio introducir el apellido.<br/>";
        aviso.innerHTML += texto;
        enviar = "no";
    }

    if (enviar == "no") {
        return false;
    }
    
}

  
