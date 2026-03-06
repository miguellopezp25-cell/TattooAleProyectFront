import Image from "next/image"

export const Background = () => {
    return (

<Image
    src="/images/ale.jpg"
    alt="Artista tatuando en estudio"
    fill
    /* Cambiamos a object-[center_top] o porcentajes.
       El primer valor es X (horizontal), el segundo es Y (vertical).
       Prueba incrementando el 10% de 5 en 5 hasta que te guste.
    */
    className="object-cover object-[50%_90%] scale-100" 
    priority
/>
    )
}
