import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: []
}
export function dataWithId(array, key = '_id') {
  return array.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}
export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    getData: (state, action) => {
      let dataWithId = objFromArray(action.payload)
      state.data = dataWithId
    },
    editData: (state, action) => {
      const { text, id, string } = action.payload
      state.data[id] = { ...state.data[id], [string]: text }
    }
  },
})
export function objFromArray(array, key = '_id') {
  return array.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}

export const { getData, editData } = mainSlice.actions

export default mainSlice.reducer