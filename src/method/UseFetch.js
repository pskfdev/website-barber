import { useEffect, useState } from 'react'

function UseFetch(url) {

    const [data, setData] = useState([]);                 //declare state
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {                        //decare Arrow function Expression
        const response = await fetch(url);
        const resdata = await response.json();
        setData(resdata);
    }

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true);
                    getData();
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            }
        )()
    }, [url])                                           //จะใช้งานใหม่ทุกครั้งที่ url เปลี่ยนแปลง

    return { data, error, loading }                     
}

export default UseFetch