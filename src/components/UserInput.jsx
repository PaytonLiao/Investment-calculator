

export default function UserInput({labelName, onInfoUpdate}) {    
    return (
        <p>
            <label>{labelName}</label>
            <input type="number" required onChange={event=>(onInfoUpdate(labelName, event.target.value))}/>
        </p>
    )
}