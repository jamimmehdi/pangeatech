import { configureStore } from '@reduxjs/toolkit'
import chartSlice from '../helper/chartSlice'

export default configureStore({
    reducer: {
        revenue: chartSlice,
    },
})