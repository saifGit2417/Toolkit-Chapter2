import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../Actions/actions'



const AcountComponents = () => {
    const initialAmount = useSelector(state => state.account.amount)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(null)
    const inputToNumber = parseInt(inputValue)
    return (
        <div style={{ textAlign: "centre" }}>
            <h1>AcountComponents</h1>
            <h1>Amount {initialAmount} : </h1>
            <div style={{ textAlign: "center", display: "flex", alignItems: "centre", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: 5 }}
                    onClick={() => { dispatch(increment()) }}
                >
                    Increment +
                </Button>
                <Button
                    variant="contained"
                    sx={{ margin: 5 }}
                    onClick={() => { dispatch(decrement()) }}
                >
                    Decrement -
                </Button>
                <TextField
                    type='number'
                    sx={{ margin: 5 }}
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value) }}
                />
                <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: 5 }}

                    onClick={() => { dispatch(incrementByAmount(inputToNumber)) }}
                >
                    Increment By {inputValue} +
                </Button>
            </div>
        </div>
    )
}

export default AcountComponents