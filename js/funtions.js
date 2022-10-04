function Ndias()
{
    var mes= 0;
    mes=prompt('Introduzca el número del mes:','');
    mes=parseInt(mes);
   
    if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes ==10 || mes==12)
    {
    alert('Este mes tiene 31 dias.');
    }
    else
    {
    if (mes==2)
    alert('Este mes puede tener 30 dias.');
    else
    alert('Este mes tiene 30 dias.');
    }
   

}


function Jubilacion(edad) 
{
    edad = prompt ('Por favor introduce edad:');
    switch(true)
    {
        case (edad>=65): alert("Eres pensionado"); break;
        case (edad<65): alert ("Aun no tienes la edad para pensionate"); break;
        default: alert("No ingresaste ningun valor identificado"); break;
    }  
        
}

function sueldo()
{
    var sueldo = 0;
    var aumento = 0;
    var nuevosueldo = 0;

    sueldo = parseInt(prompt("ingresa sueldo"));

    if(sueldo > 1000)
    {
        aumento = 0.10*sueldo;
    }
    else
    {
        aumento = 0.05*sueldo;
    }
    nuevosueldo = sueldo+aumento;

    alert('aumento '+aumento);
    alert('nuevo sueldo '+nuevosueldo);
}

function multiplos()
{
    var numero = 0;
    numero = parseInt(prompt("ingrese el valor del numero el cual quiere calcular sus multiplos"))
    for (var i = 1; i <=10; i++)
    {
        alert (i + " x " + numero + " = " + (i * numero))
    }
}
function IngreseEdad(edad) 
{
    edad = prompt ('Por favor introduce edad:');
    switch(true)
    {
        case (edad>=18): alert("Eres mayor de edad"); break;
        case (edad<17): alert ("Eres menor de edad"); break;
        default: alert("No ingresaste ningun valor identificado"); break;
    }  
        
}


function Ndias()
{
    var mes= 0;
    mes=prompt('Introduzca el número del mes:','');
    mes=parseInt(mes);
   
    if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes ==10 || mes==12)
    {
    alert('Este mes tiene 31 dias.');
    }
    else
    {
    if (mes==2)
    alert('Este mes puede tener 30 dias.');
    else
    alert('Este mes tiene 30 dias.');
    }
   

}