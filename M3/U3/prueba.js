function medioTransporte(distancia)
{
    if (distancia <= 0) 
    { 
        console.log("Ingrese un valor válido");
    }
    else if (distancia < 1000 && distancia > 0)
    {
        console.log("Vaya a pie");
    }
    else if (distancia < 10000)
    {
        console.log("Vaya en bicicleta");
    }
    else if (distancia < 30000)
    {
        console.log("Vaya en colectivo");
    }
    else if (distancia < 100000)
    {
        console.log("Vaya en auto");
    }
    else if (distancia >= 100000)
    {
        console.log("Vaya en avion");
    }
}

medioTransporte(100);
medioTransporte(1000);
medioTransporte(2000);
medioTransporte(10000);
medioTransporte(40000);
medioTransporte(1000000);
medioTransporte(123000);

function mayor(array)
{
    mayor = array[0];
    for (i=1; i<array.length; i++)
    {
        if (mayor < array[i])
        {
            mayor = array[i];
        }
    }

    return mayor;
}

array = [43,23,654,89,-12,4];

console.log(mayor(array));