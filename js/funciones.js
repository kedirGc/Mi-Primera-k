function validar_login()
{
    var dni = document.getElementById("dni").value;
    var contraseña = document.getElementById("contraseña").value;
    if (dni=="")
    {
        alert("debe de ingresar dni");
        return false;
    }
    if(contraseña=="")
    {
        alert("debe de ingresar contraseña");
        return false;
    }
}