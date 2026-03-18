import Image from "next/image"

export const Background = () => {
    return (

<Image
    src="/images/ale.jpg"
    alt="Artista tatuando en estudio"
    fill
    className="object-cover object-[50%_90%] scale-100" 
    priority
/>
    )
}
