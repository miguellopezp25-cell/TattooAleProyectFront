import Image from "next/image"

export const Background = () => {
    return (

        <Image
            src="/images/EveFondo3.png"
            alt="Artista tatuando en estudio"
            fill
            className="object-contain object-center scale-200"
            priority
        />


    )
}
