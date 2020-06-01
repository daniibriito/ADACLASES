let user;
let password;
let i = 0;

while (i < 3) {
    if (user !== "fede" || password !== "123") {
        user = prompt("Dime tu usuario");
        password = prompt("Dime tu contraseña");
    }
    else
    {
        alert("Bienvenido!");
        i = 3;
    }
    i++;
    if (i === 3 && (user !== "fede" || password !== "123")) {
        alert("NO TIENES ACCESO!");
    }
}