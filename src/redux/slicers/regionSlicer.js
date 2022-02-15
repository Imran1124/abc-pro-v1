import { createSlice } from '@reduxjs/toolkit';
import { State, City } from 'country-state-city';
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

export const cStateAction = async () => {
    dispatch(isPending());
    try {
        const stateSort = AllSorts(State.getAllStates())
        const res = stateSort.filter(s => {
            return s.countryCode === 'IN' && s.isoCode === 'JH'
        });
        dispatch(cisState(res))
    } catch (error) {
        dispatch(isRejected(error.message));
    }
}

export const cCityAction = async (statecode) => {
    dispatch(isPending());
    try {
        const citySort = await AllSorts(City.getAllCities())
        const res = citySort.filter(city => {
            return city.stateCode === statecode
        });
        dispatch(cisCity(res))
    } catch (error) {
        dispatch(isRejected(error.message));
    }
}


export const pStateAction = async () => {
    dispatch(isPending());
    try {
        const stateSort = AllSorts(State.getAllStates())
        const res = stateSort.filter(s => {
            return s.countryCode === 'IN' && s.isoCode === 'JH'
        });
        dispatch(pisState(res))
    } catch (error) {
        dispatch(isRejected(error.message));
    }
}

export const pCityAction = async (statecode) => {
    dispatch(isPending());
    try {
        const citySort = await AllSorts(City.getAllCities())
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