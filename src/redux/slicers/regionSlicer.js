import { createSlice } from '@reduxjs/toolkit';
import { getState, getCity } from '../../utils/Region';
import { dispatch } from '../app/store';

const initialState = {
    cstates: [],
    ccity: [],
    pstates: [],
    pcity: [],
    isLoading: false,
    isError: null
};

const regionSlicer = createSlice({
    name: 'region',
    initialState,
    reducers: {
        isPending: (state) => {
            state.isLoading = true
        },
        cisState: (state, { payload }) => {
            state.isLoading = false;
            state.cstates = payload;
        },
        cisCity: (state, { payload }) => {
            state.isLoading = false;
            state.ccity = payload;
        },
        pisState: (state, { payload }) => {
            state.isLoading = false;
            state.pstates = payload;
        },
        pisCity: (state, { payload }) => {
            state.isLoading = false;
            state.pcity = payload
        },
        isRejected: (state, { payload }) => {
            state.isLoading = false;
            state.isError = payload;
        }
    }
});

export default regionSlicer.reducer;

export const { isPending, cisState, cisCity, pisCity, pisState, isRejected } = regionSlicer.actions;

export const cStateAction = () => {
    dispatch(isPending());
    try {
        const stateSort = AllSorts(getState)
        const res = stateSort.filter(s => {
            return s.countryCode === 'IN' && s.isoCode === 'JH'
        });
        console.log(res)
        dispatch(cisState(res))
    } catch (error) {
        dispatch(isRejected(error.message));
    }
}

export const cCityAction = (statecode) => {
    dispatch(isPending());
    try {
        const citySort = AllSorts(getCity)
        const res = citySort.filter(city => {
            return city.stateCode === statecode
        });
        console.log(res)
        dispatch(cisCity(res))
    } catch (error) {
        dispatch(isRejected(error.message));
    }
}


export const pStateAction = () => {
    dispatch(isPending());
    try {
        const stateSort = AllSorts(getState)
        const res = stateSort.filter(s => {
            return s.countryCode === 'IN' && s.isoCode === 'JH'
        });
        dispatch(pisState(res))
    } catch (error) {
        dispatch(isRejected(error.message));
    }
}

export const pCityAction = (statecode) => {
    dispatch(isPending());
    try {
        const citySort = AllSorts(getCity)
        const res = citySort.filter(city => {
            return city.stateCode === statecode
        });
        dispatch(pisCity(res))
    } catch (error) {
        dispatch(isRejected(error.message));
    }
}


const AllSorts = (arr) => {
    const Sorts = arr.sort((a, b) => {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        // names must be equal
        return 0;
    })
    return Sorts
}