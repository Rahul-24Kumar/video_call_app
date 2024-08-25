import React, { useCallback, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const ZegoCloud = () => {

    const [value, setValue] = useState();
    const navigate = useNavigate();

    const joinRoom = useCallback(
        () => {
            navigate(`/room/${value}`);
        },
        [navigate, value]
    )

    return (
        <>

            <input
                type='text'
                placeholder='enter room id'
                onChange={(e) => setValue(e.target.value)}
            />

            <button onClick={joinRoom}>JOIN</button>

        </>

    )
}

export default ZegoCloud;