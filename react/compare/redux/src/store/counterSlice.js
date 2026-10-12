import {createSlice} from "@reduxjs/toolkit"

//카운터의 초기값  0 -> 전역상태 초기값

const initialState ={
    value:0,
}
//createSlice - 리덕스에 핵심 3개
//createSlice  = 상태 + 액션 + 리듀서를 한번에만드는 도구
// name - 상태의 이름(구분), state(데이터),  reducers(상태변경 로직)

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state) =>{
            state.value +=1;
        },
        decrement : (state) =>{
            state.value -=1;
        },
        reset: (state) =>{
             state.value = 0;
        }
    }
});
export const {increment, decrement, reset} = counterSlice.actions;
//dispatch{increment} -> 버튼 클릭시 사용할 명령서

export default counterSlice.reducer;
//store에 등록할 상태 관리함수

//버튼클릭 ->dispatch(increment) -> reducers 실행 -> state.value 1증가 
//-> 화면 업데이트