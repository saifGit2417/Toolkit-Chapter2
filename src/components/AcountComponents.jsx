import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, getUserAcount, increment, incrementByAmount } from '../Slices/acountSlice'
const AcountComponents = () => {

    const dispatchActions = useDispatch()
    const amount = useSelector(state => state.acount.amount)

    const [inputValue, setInputValue] = useState(null)
    const [userId,setUserId]=useState(null)
    const inputToNumber = parseInt(inputValue)
    const getUserId=parseInt(userId)
    return (
        <div style={{ textAlign: "centre" }}>
            <h1>AcountComponents</h1>
            <h1>Amount {amount} : </h1>
            <div style={{ textAlign: "center", display: "flex", alignItems: "centre", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: 5 }}
                    onClick={() => { dispatchActions(increment()) }}
                >
                    Increment +
                </Button>
                <Button
                    variant="contained"
                    sx={{ margin: 5 }}
                    onClick={() => { dispatchActions(decrement()) }}

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
                    sx={{ margin: 5 }} z
                    onClick={() => { dispatchActions(incrementByAmount(inputToNumber)) }}

                >
                    Increment By {inputValue} +
                </Button>
                <TextField
                    type='number'
                    sx={{ margin: 5 }}
                    value={inputValue}
                    onChange={(e) => { setUserId(e.target.value) }}
                />
                <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: 5 }}
                    onClick={() => { dispatchActions(getUserAcount(getUserId)) }}
                >
                 get user acount {userId}
                </Button>
            </div>
        </div>
    )
}

export default AcountComponents