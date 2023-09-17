/* eslint-disable react/prop-types */

const ImageOwner = ({ name, imageUrl }) => {
    return (
        <div className="flex flex-col shadow-xl h-80 w-80 lg:h-96 lg:w-96">
            <img src={imageUrl} alt={name} className="object-cover h-[85%]" />
            <p className="text-center text-base font-semibold text-black p-3">{name}</p>
        </div>
    )
}

export default ImageOwner
