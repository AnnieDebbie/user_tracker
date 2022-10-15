import { useState } from "react"

function AddUserForm(){
    const [nameValue, setNameValue]=useState("")
    const [ageValue, setAgeValue]=useState("")

    function nameChangeHandler(e){
        console.log(e.target.value)
        setNameValue(e.target.value)
    }
    
    function ageChangeHandler(e){
        console.log(e.target.value)
        setAgeValue(e.target.value)
    }
    return <div>
        <form>
            <div>
            <input value={nameValue} onChange={nameChangeHandler} placeholder="name" type="text" />
            <input  value={ageValue} onChange={ageChangeHandler}placeholder="age" type="text" />
            </div>

            <button> Add User </button>
        </form>
    </div>
}

export default AddUserForm