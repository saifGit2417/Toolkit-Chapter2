import React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { incrementBonus } from '../Actions/actions'

const BonusComponent = () => {
    const initialBonus = useSelector(state => state.bonus.points)

    const dispatch = useDispatch()
    return (
        <div >
            {/* ///chapter 2 till 2:25 hr */}
            <h1>BonusComponent</h1>
            <h1>Total Points: {initialBonus}</h1>
            <div style={{ textAlign: "center", display: "flex", alignItems: "centre", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: 5 }}
                    onClick={()=>{dispatch(incrementBonus())}}
                >
                    Increment +
                </Button>
            </div>
        </div>
    )
}

export default BonusComponent