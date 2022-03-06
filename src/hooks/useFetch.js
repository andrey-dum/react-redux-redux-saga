import { useCallback, useMemo } from "react"

import camelCase from 'camelcase';
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "../redux/actions";
import { selectApiState } from '../modules/api/selectors'


export const useFetch = (endpoint) => {
    const apiState = useSelector(selectApiState);
    const dispatch = useDispatch();

    const perforFetch = useCallback(data => dispatch(apiActions.fetch(endpoint, data)), [endpoint, dispatch])
    const response = useMemo(() => apiState[camelCase(endpoint)], [apiState, endpoint])


    return {
        response,
        perforFetch
    }
}

