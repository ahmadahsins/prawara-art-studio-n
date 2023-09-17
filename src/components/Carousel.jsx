/* eslint-disable react/prop-types */
const Carousel = ({ imageUrl }) => {
  return (
    <>
        <div className="carousel w-full h-screen">
            {imageUrl.map((url, index) => (
            <div id={`slide${index}`} className="carousel-item relative w-full overflow-hidden" key={index}>
                <img src={url} className="w-full object-cover object-center" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index === 0 ? 3 : index - 1}`} className="btn btn-circle">❮</a> 
                <a href={`#slide${index === 3 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
                </div>
            </div>             
            ))}
        </div>
    </>
  )
}

export default Carousel
