import { useState } from "react"
import BiryaniImg1 from "../assets/biryani3.png";
import BiryaniImg2 from "../assets/biryani5.png";
import BiryaniImg3 from "../assets/biryani2.png";
import Vector from "../assets/vector3.png";

const ImageList = [
    {
        id: 1,
        img: BiryaniImg1
    },
    {
        id: 2,
        img: BiryaniImg2,
    },
    {
        id: 3,
        img: BiryaniImg3
    }
];

const Hero = () => {
    const [imageId, setImageId] = useState(BiryaniImg1); // Initialize state with the first image
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

    return (
        <>
            <div className="min-h-[550px] sm:min-h-[616px] bg-gray-100 flex justify-center items-center"
                style={bgImage}
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">


                        {/* text content section */}
                        <div
                            data-aos="zoom-out"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
                        >
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                Welcome{" "} to the {""}
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondery">
                                    Foodie
                                </span>{" "}
                                Zone
                            </h1>
                            <p className="text-sm">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quis dolor odio! Odio vero delectus expedita maiores porro ipsum voluptate
                            </p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondery hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer">
                                    Order Now
                                </button>
                            </div>
                        </div>


                        {/* Image section */}
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                            {/* MAİN İMAGE SECTİON */}
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration="400"
                                    data-aos-once="true"
                                    src={imageId} // Use the state to set the image source
                                    alt="Biryani img"
                                    className="w-[300px] sm:w-[450px] mx-auto spin"
                                />
                            </div>
                            {/* İMAGE LİST SECTİON */}
                            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-2 bg-white/30 rounded-full">
                                {
                                    ImageList.map((item) => (
                                        <img
                                            key={item.id} // Add a key prop for each item
                                            data-aos="zoom-in"
                                            data-aos-duration="400"
                                            data-aos-once="true"
                                            src={item.img}
                                            onClick={() => setImageId(item.img)} // Set the imageId to the clicked image
                                            alt="biryani img"
                                            className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer" // Added cursor-pointer for better UX
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;