import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { MainState } from '../redux/reducer'

const useConnect: TypedUseSelectorHook<MainState> = useSelector

export default useConnect
