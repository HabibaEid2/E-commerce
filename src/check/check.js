import { useState } from "react";

export default function Check() {
    let [form , setForm] = useState({name : '' , email : ""})
    
    console.log(form.name)
    console.log(form.email)

    function getValue(e) {
        setForm({...form, [e.target.name] : e.target.value})


    }

    return (
        <div>
            <input name = "name" placeholder="name" type="text" value={form.name} onChange={getValue}/>
            <input name = "email" placeholder="email" type="text" value={form.email} onChange={getValue}/>
        </div>
    )
}