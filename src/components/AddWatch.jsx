import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';


export function AddWatch ({onAdd})  {
    const [form, setForm] = useState({name: '', zone: ''})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name.trim() === '' || form.zone.trim() === '' ) {
            return
        }
        const watch = {id: uuidv4(), ...form}
        onAdd(watch);
        setForm({name: '', zone: ''})
    }
   
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    <span>Название</span><br/>
                    <input type="text" name='name' value={form.name} onChange={handleChange}/>
                </label>
                <label>
                    <span>Временная зона</span><br/>
                    <input type="number" name="zone" value={form.zone} onChange={handleChange}/>
                </label>
                <button className='btnAdd'>Добавить</button>
            </form>
        </>
    )
}