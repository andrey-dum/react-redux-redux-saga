import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { JOBS } from "../../modules/api/endpoints"
import { Navigation } from "../common/Navigation"


export const Jobs = () => {

    // const dispatch = useDispatch()
    // const state = useSelector(state => state.api[JOBS])

    // useEffect(async () => {
    //     try {
    //         dispatch(apiActions.fetch(JOBS));

    //         const data = await api.fetch(JOBS);

    //         dispatch(apiActions.fetchSuccess(JOBS, data))

    //     } catch(e) {
    //         dispatch(apiActions.fetchFailure(JOBS, e))
    //     }

    // } , [])

    const { response, performFetch } = useFetch(JOBS);
    const { loading, data } = response;

    useEffect(() => {
        performFetch()
    }, [performFetch])

    console.log(response)

    return (
            <Navigation
                loading={loading}
                services={data}
            />
    )
}