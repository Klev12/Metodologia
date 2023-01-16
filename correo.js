const username= "admin"
const password= "s3cr3t"
const ingresado=prompt ("Ingresar usuario");
if(username==ingresado){
    alert("Usuario valido");
    ingresado=prompt("Ingresar contraseña");
    if(password==ingresado){
        alert("Contraseña correcta");
    }
    else{
        alert("Contraseña incorecta")

}
}
else{
    alert("Usuario incorrecto")
}