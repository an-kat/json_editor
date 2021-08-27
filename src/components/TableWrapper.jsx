import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import dataBig from '../dataBig.json'
import { getData } from '../store/mainSlice';
import LabelComponents from './LabelComponents';

const TableWrapper = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.main.data)
    React.useEffect(() => {
        dispatch(getData(dataBig))
    }, [])
    const newArr = Object.entries(state)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            {newArr && newArr.map(item => (
                <LabelComponents key={Math.random()*10000} obj={item[1]} />
            ))}
        </div>
    )
}

export default TableWrapper
