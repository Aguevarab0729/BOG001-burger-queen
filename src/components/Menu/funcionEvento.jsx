import React {useState} from 'react';
import MenuItem from "../shared/menuItem";

// identificar botones 
//obtener click de los botones
//capturar el evento click
//retornar informacion que queremos almacenar en un objeto producto, cantidad, precio

const capturarEvento = () => {
    let botones = document.querySelectorAll('.menuItem');
    botones [count, setCount] = useState(0);

    return(
        <div>
            <p>Hiciste click {count} veces</p>
            <button onClick={() => setCount(count + 1)}>Haz click</button>
        </div>
    );
}

const capturarDatos = () => {
    let resumenOrder ={
        producto: itemsMenu.txtLabel.value,
        cantidad: count(itemsMenu),
        precio: itemsMenu.price.value
    }
    return resumenOrder;
}

const count = () => {

}

/* import React, { useState } from 'react';

const EventClick(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Hiciste click {count} veces</p>
            <a onClick={() => setCount(count + 1)}>Haz click</a>
        </div>
    );
}

export default EventClick; */