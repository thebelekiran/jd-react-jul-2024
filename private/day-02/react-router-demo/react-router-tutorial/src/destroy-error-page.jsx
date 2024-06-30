import { useRouteError } from "react-router-dom";

const DestroyErrorPage = () => {
    const error = useRouteError();
    return <div>{error.statusText || error.message}</div>
}

export default DestroyErrorPage;