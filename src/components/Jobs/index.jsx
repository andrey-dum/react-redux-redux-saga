import { useEffect } from "react"
import api from "../../modules/api/api"
import { JOBS } from "../../modules/api/endpoints"


export const Jobs = () => {

    useEffect(async () => {
        const response = await api.fetch(JOBS)
    } , [])

    return (
        <div>
            Jobs
        </div>
    )
}