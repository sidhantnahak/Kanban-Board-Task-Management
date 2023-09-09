import React, { useEffect } from 'react'

const Row = ({ data,i }) => {

    useEffect(() => {

    }, [data])
    

    return (
        <>{
            <tr key={i}>
                <td >{`${i}`}</td>
                <td >{data.name}</td>
                <td >{data.address}</td>
            </tr>

        }
        </>
    )
}

export default Row