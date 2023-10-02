import { create } from "zustand"


interface OrderByStateInterface{
    orderByValue:string
    setOrderByValue:(order:string)=>void
}

const useOrderBy=create<OrderByStateInterface>(setOrUpdateState=>({orderByValue:'',setOrderByValue:(value)=>(setOrUpdateState(()=>({orderByValue:value})))}))

export default useOrderBy;