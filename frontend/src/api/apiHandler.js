import LoadingPage from "../components/home/Loading";

const ApiHandler = ({children, loading, error}) => {
    if (error){
        return "something went wrong";
    }
    return (
        <div>
            {loading ? children : <LoadingPage />}
        </div>
    )
}


export default ApiHandler;