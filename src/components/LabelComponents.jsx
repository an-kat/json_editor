import React from 'react'
import { CustomInput } from './CustomInput'

import s from './LabelComponent.module.css'

const LabelComponents = props => {
    const { obj } = props
    const id = obj._id
    const newArr = Object.entries(obj)
    return (
        <div style={{ margin: '0 auto' }}>
            <table>
                <tbody>
                    {newArr && newArr.map((item) => (
                        <tr key={Math.random()*10000}>
                            {typeof item[1] !== 'object' ? (
                                <>
                                    <td style={{ border: '1px solid black' }}> <strong>key:</strong> {item[0]}
                                        <div><CustomInput string={item[0]} id={id} value={item[1]} /></div>
                                    </td>
                                    <td style={{ width: '400px', maxHeight: '400px', border: '1px solid black', margin: '0 auto' }}><strong>value:</strong>{' ' + item[1]}</td>
                                </>
                            ) : null}
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default LabelComponents
