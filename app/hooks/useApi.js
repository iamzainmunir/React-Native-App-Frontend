import { useState } from 'react'

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setError(false);

        setLoading(true)
        const response = await apiFunc(...args);
        setLoading(false)

        if(!response.ok) return setError(true);

        setError(false);
        setData(response.data.data)
    }

    return {data, error, loading, request };
}