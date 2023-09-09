import React, { memo, useEffect } from 'react'
import Row from './Row'
import { useDispatch, useSelector } from 'react-redux'
import { getall_user } from './redux/userAction'
import Loader from './Loader'
import './home.css'

const Users = () => {
    const { users, loading } = useSelector(state => state.alluser)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getall_user())
    }, [dispatch])
    let i = 1, j = 1;


    return (
        <>
            {loading ? <Loader /> :

                <>{users && users.length > 0 ?
                    <table className='table' >
                        <thead >
                            <tr>
                                <th >Serial No.</th>
                                <th>Username</th>
                                <th >Address</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users && users.map((e) => {
                                return <Row key={j++} data={e} i={i++} />
                            })
                            }

                        </tbody>
                    </table>
                    :users&& <h3 className='text-center'>No user found</h3>
                }
                </>
            }

        </>

    )
}

export default memo(Users)