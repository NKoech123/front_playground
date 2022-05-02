export const ClickHandler = () => {
    const clickHandler = (event) => {
        console.log('Button clicked!', event)
        alert('button clicked!!')
    }

    return (
        <div>
            <button onClick={clickHandler}> Click </button>
        </div>
    )
}