import React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {increment, incrementByAmount} from '../Reducers/reawrdReducer'
const Reward = () => {
    const initialReward = useSelector(state => state.reward.rewards)
    const dispatchActions=useDispatch()

    return (
        <div >
            {/* ///chapter 2 till 2:25 hr */}
            <h1>Reawrd Component</h1>
            <h1>Total Points: {initialReward}</h1>
            <div style={{ textAlign: "center", display: "flex", alignItems: "centre", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: 5 }}
                    onClick={()=>{dispatchActions(increment())}}
                >
                    Increment +
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: 5 }}
                    onClick={()=>{dispatchActions(incrementByAmount(9))}}
                >
                    Increment By 9
                </Button>
            </div>
        </div>
    )
}

export default Reward;