import React from "react"
import "./index.scss"

interface ImageObj {
  src: string
  alt: string
}

interface CarouselProps {
  images: ImageObj[]
}

export default function Carousel(props: CarouselProps) {
  const { images } = props

  const getImagesHtml = () => {
    return (
      <div className="carousel__content">
        {images.map((e: ImageObj) => (
          <img src={e.alt} alt={e.alt} loading="lazy" />
        ))}
      </div>
    )
  }
  return <div className="carousel__container">{getImagesHtml()}</div>
}
