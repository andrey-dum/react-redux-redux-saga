import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import api from "../../modules/api/api"
import { JOBS } from "../../modules/api/endpoints"
import { apiActions } from "../../redux/actions"


export const Jobs = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.api[JOBS])

    useEffect(async () => {
        try {
            dispatch(apiActions.fetch(JOBS));

            const data = await api.fetch(JOBS);

            dispatch(apiActions.fetchSuccess(JOBS, data))

        } catch(e) {
            dispatch(apiActions.fetchFailure(JOBS, e))
        }

    } , [])

    return (
        <div>
            Jobs
        </div>
    )
}