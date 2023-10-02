import { create } from "zustand";


interface GenreStateInterface{
    genreId:number|null;
    onClickingOnGenre:(id:number)=>void
}

const useGenreState=create<GenreStateInterface>(setOrUpdateState=>({genreId:null,onClickingOnGenre:(id)=>(setOrUpdateState(()=>({genreId:id})))}))

export default useGenreState;