import { useEffect, useState } from 'react';

const useFetch = (fetchData, dependencies) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const data = await fetchData();
                    setData(data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };

            helper();
        },
        dependencies
    );

    return {
        data,
        setData,
        loading,
        error,
    };
};

export default useFetch;