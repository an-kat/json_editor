import React from 'react'
import { useDispatch } from 'react-redux'
import { editData } from '../store/mainSlice'

function findType(type) {
    if (typeof type === 'string') {
        if (type.length > 50) return 'textarea'
        else if (type.match(/\S+@\S+\.\S+/)) {
            return 'email';
        }
        else if (isNaN(type) && !isNaN(Date.parse(type))) return 'Date'
        return 'string'
    }
    else if (typeof type === 'number') return 'number'
    else if (typeof type === 'boolean') return 'checkbox'
}
export const CustomInput = props => {
    const { string, value, id } = props
    const dispatch = useDispatch()
    const handleChange = (e) => {
        SetState(e.target.value)
    }
    const [state, SetState] = React.useState(value)
    const typeofValue = findType(value)
    function toggle() {
        dispatch(editData({ text: !state, id, string }))
    }
    function onSubmit(obj) {
        dispatch(editData(obj))
    }
    function getInput(type) {
        if (type === 'textarea') {
            return <textarea value={state} onBlur={() => onSubmit({ text: state, id, string })} onChange={handleChange} />
        }
        else if (type === 'string') {
            return (<input type="string"
                readOnly={string === "_id" | string === "guid" ? true : null}
                value={state}
                onBlur={() => onSubmit({ text: state, id, string })}
                onChange={handleChange} />)
        }
        else if (type === 'number') {
            return <input type="number" value={+state} onBlur={() => onSubmit({ text: state, id, string })} onChange={handleChange} />
        }
        else if (type === 'checkbox') {
            return <input type="checkbox" name="checkbox" value="value" onChange={() => toggle()} checked={state} />
        }
        else if (type === 'Date') {
            return <input type="date" value={state} onBlur={() => onSubmit({ text: state, id, string })} onChange={handleChange} />
        }
        else if (type === 'email') {
            return <input type="email" value={state} onBlur={() => onSubmit({ text: state, id, string })} onChange={handleChange} />
        }
        return null
    }

    return (
        <>
            {getInput(typeofValue)}
        </>
    )
}