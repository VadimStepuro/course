import {useEffect, useState} from 'react';

const apiStatus = {
    loading : 'loading',
    complete : 'complete',
    errored : 'errored'
}

export const useApiCall = (call) => {
    const [status, setStatus] = useState(apiStatus.loading);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            await call().then((data) => {
                setData(data);
                setStatus(apiStatus.complete);
            })
            .catch(() => {
                setStatus(apiStatus.errored);
            });
        }
        fetchData();
    }, [call, status])
    return [status != apiStatus.loading, data, status == apiStatus.errored];
}