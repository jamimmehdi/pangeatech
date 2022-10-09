import { createSlice } from '@reduxjs/toolkit';

export const chartSlice = createSlice({
    name: 'revenue',
    initialState: {
        isLoading: false,
        data: [],
        sumOfRevenueProduct: {},
        filterList: [],
        activeFilter: [],
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setData: (state, action) => {
            state.data = [...action.payload];

            const sumOfRevenueProduct = {};
            action.payload.forEach((data) => {
                if (!state.filterList.includes(data.revenue_type)) state.filterList = [...state.filterList, data.revenue_type];
                if (!Object.hasOwn(sumOfRevenueProduct, data.month)) sumOfRevenueProduct[data.month] = {};
                if (!Object.hasOwn(sumOfRevenueProduct[data.month], data.product)) sumOfRevenueProduct[data.month][data.product] = 0;
                sumOfRevenueProduct[data.month][data.product] += data.acv;
            })

            state.sumOfRevenueProduct = { ...sumOfRevenueProduct };
        },
    },
})

export const { setData, setLoading } = chartSlice.actions;

export default chartSlice.reducer;