import axios from "axios";
import { setData, setFilteredData, setLoading } from "../../helper/chartSlice";


export const getData = async (dispatch) => {
    dispatch(setLoading(true));

    const URL = "http://fetest.pangeatech.net/data";
    const response = await axios.get(URL);

    dispatch(setData(response.data));
    dispatch(setLoading(false));
}

export const getFilteredData = async (filters, dispatch) => {
    dispatch(setLoading(true));

    const URL = "http://fetest.pangeatech.net/data";
    const response = await axios.get(URL);

    if (filters.includes("ALL") || filters.length === 0) {
        dispatch(setData(response.data))
        return;
    };

    const filteredData = filters.map((filter) => {
        return response.data.filter((data) => data.revenue_type === filter)
    });
    const faltted = filteredData.flat(1)
    dispatch(setData(faltted));
    dispatch(setLoading(false));
}