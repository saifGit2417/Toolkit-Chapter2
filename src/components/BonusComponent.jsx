import React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../Slices/bonusSlice'

const BonusComponent = () => {
    const initialBonus = useSelector(state => state.bonus.points)
    const dispatchActions=useDispatch()

    return (
        <div >
            {/* ///chapter 2 till 2:25 hr */}
            <h1>BonusComponent</h1>
            <h1>Total Points: {initialBonus}</h1>
            <div style={{ textAlign: "center", display: "flex", alignItems: "centre", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    color="success"z
                    sx={{ margin: 5 }}
                    onClick={()=>{dispatchActions(increment())}}
                >
                    Increment +
                </Button>
            </div>
        </div>
    )
}

export default BonusComponent