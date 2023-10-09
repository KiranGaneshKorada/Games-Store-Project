import useGameMedia from "../hooks/useGameMedia";

interface Props{
    slug:string
}

function TrailerCumSS({slug}:Props){
    const { gameMedia, error, isLoading } = useGameMedia(slug!);

    console.log(gameMedia);
    return<></>

}

export default TrailerCumSS;