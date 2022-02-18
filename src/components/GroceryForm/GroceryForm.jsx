function GroceryForm(params) {
    return (
        <>
             <form >
                <h2>Add an Item</h2>
                <input autoFocus onChange={(event) => setItem(event.target.value)}
                    // value={student.github_name}
                    placeholder="Itme" />
                <input onChange={(event) => setQuantity(event.target.value)}
                    // value={student.github_name}
                    placeholder="quenatehw" />
                <input onChange={(event) => setUnit(event.target.value)}
                    // value={student.github_name}
                    placeholder="DUh units" />
            </form>
        </>
    )
}

export default GroceryForm