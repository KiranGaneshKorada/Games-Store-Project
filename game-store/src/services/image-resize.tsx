

const imageResize=(url:string)=>{
    const bit=url.indexOf("media/")
    url=url.slice(0,bit+6)+"crop/600/400/"+url.slice(bit+6)
    return url
}

export default imageResize;