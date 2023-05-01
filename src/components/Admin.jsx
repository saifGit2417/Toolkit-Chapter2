import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useAddAcountMutation, useDeletAcountMutation, useGetAcountsQuery, useUpdateAcountMutation } from '../api/adminSlice'
import axios from 'axios'

const Admin = () => {

    const [inputAmount, setInputAmount] = useState('')

    // RTK query to fetch data
    const { data, error, isLoading } = useGetAcountsQuery()

    // RTK query to POST data
    const [addAcount, responseAddAcount] = useAddAcountMutation()

    // RTK query to DELETE data
    const [deleteAcount, responseDeleteAcount] = useDeletAcountMutation()


    // RTK query to update existing data
    const [updateAcount, responseUpdateAcount] = useUpdateAcountMutation()
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const handleAddData = () => {
        addAcount(inputAmount, time)
        setInputAmount('')
    }

    const handleDeleteData = (id) => {
        deleteAcount(id)
    }

    const handleUpdateData = (id, inputAmount) => {
        console.log(inputAmount)
        setInputAmount(inputAmount)
        updateAcount({ id: id, amount: inputAmount })
    }
    return (
        <div >
            <h1>Admin Component</h1>
            <div style={{ textAlign: "center", alignItems: "centre", justifyContent: "center" }}>
                <input type="number" placeholder='enter your amount here'
                    value={inputAmount}
                    onChange={(e) => { setInputAmount(e.target.value) }}
                />
                <Button
                    variant="contained"
                    color="success" z
                    sx={{ margin: 10 }}
                    onClick={handleAddData}
                >
                    Add Acount
                </Button>
                <div>
                    <table border="2px">
                        <tr style={{ padding: "10px" }}>
                            <th >Amount</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        {data && data.map((acount, id) => {
                            return <tr style={{ padding: "10px" }} key={id}>
                                <td style={{ padding: "10px" }} >
                                    {acount.id} : {acount.amount}
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <button
                                        onClick={() => handleDeleteData(acount.id)}>
                                        Delete Data
                                    </button>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <button
                                        onClick={() => handleUpdateData(acount.id, acount.amount)}
                                    >
                                        Update Data
                                    </button>
                                </td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Admin