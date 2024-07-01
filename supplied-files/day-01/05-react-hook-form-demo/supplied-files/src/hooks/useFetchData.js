import { useState, useEffect } from "react";

const useFetchData = (fetch, dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchHelper = async () => {
        setLoading(true);

        try {
            const data = await fetch();
            setData(data);
        } catch (error) {
            setError(error);
        }

        setLoading(false);
    };

    // Feature 1: pagination (fetching workshops)
    useEffect(
        () => {
            fetchHelper();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dependencies // dependencies array
    );

    return {
        data,
        loading,
        error,
        fetchHelper,
    };
};

export default useFetchData;
