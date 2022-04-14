import { ChangeEvent, useState } from "react";

export const useForm = ( initialState = {} ) => {
    //initialState -> objeto con los campos del formulario
    const [values, setValues] = useState(initialState); 

    const handleInputChange = ( {target} : ChangeEvent<HTMLInputElement> ) => {
        // console.log(ev);
        setValues({
            ...values, 
            [ target.name ] : target.value
        });
    }

    const reset = () =>{
        setValues( initialState );
    }

    return [ values , handleInputChange , reset ];
}
