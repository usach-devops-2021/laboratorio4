const consultarApi = async(accion, sueldo, ahorro) => {
    try {
        const resp  = await fetch(`http://localhost:8081/rest/msdxc/${ accion }?sueldo=${ sueldo }&ahorro=${ ahorro }`);
        const data  = await resp.json(); 
        console.log(data)
        return data;


    } catch (error) {
        console.error(error)
    }  
}

const getValue = async (boton) =>{

    var input_sueldo = document.getElementById("input_sueldo").value;
    var input_ahorro = document.getElementById("input_ahorro").value;
    
    var result = await consultarApi(boton, input_sueldo, input_ahorro);
    
    switch(boton){
        case 'impuesto':
            document.getElementById("resultado").innerHTML = `Impuesto: ${result.impuesto}`;
            break;
        case 'saldo':
            document.getElementById("resultado").innerHTML = `Saldo: ${result.saldo}`;
            break;
        case 'dxc':
            document.getElementById("resultado").innerHTML = `DXC: ${result.dxc}`;
            break;
    }
}



 //http://localhost:8080/rest/msdxc/dxc?sueldo=4000&ahorro=5000
 //http://localhost:8080/rest/msdxc/saldo?sueldo=4000&ahorro=5000
 //http://localhost:8080/rest/msdxc/impuesto?sueldo=4000&ahorro=5000