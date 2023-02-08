import { AppDispatch, RootState } from './store';
import { useDispatch } from "react-redux"
import { TypedUseSelectorHook } from 'react-redux/es/types';
import { useSelector } from 'react-redux/es/exports';

export interface Student {
    name:string,
    surname:string,
    examens:Examen[]
}

export interface Examen {
    subject:string,
    rate:number
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector