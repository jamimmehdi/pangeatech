import { createSlice } from '@reduxjs/toolkit'

export const chartSlice = createSlice({
    name: 'chart',
    initialState: {
        rawData: [],
        data: [],
        filter: [],
        currentPageData: [],
        currentPage: 1,
        activeFilter: []
    },
    reducers: {
        loadData: (state, action) => {
            state.rawData = [...action.payload];
            state.data = [...action.payload];
            state.filter = [...new Set(action.payload.map((item) => item.revenue_type))];
        },
        revenueTypeFilter: (state, action) => {
            state.filter = [...action.payload]
        },
        setCurrentPageData: (state, action) => {
            state.currentPageData = state.data.slice(action.payload * 10, (action.payload + 1) * 10);
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        addFilter: (state, action) => {
            if (action.payload === "alldata") {
                state.activeFilter = ['alldata']
                return;
            }
            if (state.activeFilter.includes(action.payload)) state.activeFilter.splice(state.activeFilter.indexOf(action.payload), 1);
            else (state.activeFilter.push(action.payload))
        },
        filterData: (state, action) => {
            if (state.activeFilter.length < 1) {
                state.data = [...action.payload];
                return;
            }
            if (state.activeFilter.includes('alldata')) {
                state.data = [...action.payload];
                return;
            }

            let filteredItems = [];
            state.activeFilter.forEach((filter) => {
                const filterItem = action.payload.filter((item) => item.revenue_type === filter);
                filteredItems = [...filteredItems, ...filterItem];
            })
            state.data = [...filteredItems];
        }
    },
})

export const { loadData, revenueTypeFilter, setCurrentPageData, setCurrentPage, addFilter, filterData } = chartSlice.actions

export default chartSlice.reducer;