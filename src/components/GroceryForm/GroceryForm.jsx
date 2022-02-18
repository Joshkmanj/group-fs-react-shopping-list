import React, { useState } from 'react';

function GroceryForm({taco}) {

    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState('')
    const [unit, setUnit] = useState('')


    const handleSubmit = () => {
        console.log(item);
        taco(item, quantity, unit);
        clearFormInputs()
    }

    const clearFormInputs = () => {
        setItem('')
        setQuantity('')
        setUnit('')
    }

    return (
        <>
             <form onSubmit={handleSubmit}>
                <h2>Add an Item</h2>
                <input autoFocus onChange={(event) => setItem(event.target.value)}
                    // figure these out late --> value={student.github_name}
                    placeholder="Itme" />
                <input onChange={(event) => setQuantity(event.target.value)}
                    // value={student.github_name}
                    placeholder="quenatehw" />
                <input onChange={(event) => setUnit(event.target.value)}
                    // value={student.github_name}
                    placeholder="DUh units" />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default GroceryForm