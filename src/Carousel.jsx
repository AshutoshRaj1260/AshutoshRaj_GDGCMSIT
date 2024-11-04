import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



import './styles.css';

// import required modules
import { EffectCoverflow, Pagination} from 'swiper/modules';

// Example data for slides with unique titles, descriptions, and button labels
const slidesData = [
    {
        img: "src/assets/image1.jpg",
        title: "Leh Ladakh",
        text: "Leh Ladakh, a breathtaking high-altitude region in northern India, captivates with its rugged landscapes, serene monasteries, and vibrant cultural heritage.",
        buttonLabel: "Book Tour"
    },
    {
        img: "src/assets/image2.jpg",
        title: "Times Square",
        text: "Times Square is a vibrant commercial and entertainment hub in New York City, renowned for its bright lights, Broadway theaters, and bustling atmosphere.",
        buttonLabel: "Book Tour"
    },
    {
        img: "src/assets/image3.jpg",
        title: "Taj Mahal",
        text: "The Taj Mahal, a majestic white marble mausoleum in Agra, is a timeless symbol of love and architectural brilliance.",
        buttonLabel: "Book Tour"
    },
    {
        img: "src/assets/image4.webp",
        title: "Eiffel Tower",
        text: "The Eiffel Tower is an iconic iron lattice tower in Paris, built for the 1889 World's Fair, standing at 324 meters tall.",
        buttonLabel: "Book Tour"
    },
    {
        img: "src/assets/image5.webp",
        title: "he London Eye",
        text: "The London Eye, a striking 135-meter tall observation wheel on the South Bank of the Thames, offers panoramic views of the city's landmarks.",
        buttonLabel: "Book Tour"
    },
    {
        img: "src/assets/image6.jpg",
        title: "Museum of the Future",
        text: "The Museum of the Future in Dubai is a visionary architectural gem that explores cutting-edge innovations and the potential of tomorrow's technology.",
        buttonLabel: "Book Tour"
    },
    {
        img: "src/assets/image7.jpg",
        title: "Male Beach",
        text: "Male Beach, the pristine stretch of golden sand on Malé Atoll, offers a serene escape with crystal-clear waters and vibrant marine life.",
        buttonLabel: "Book Tour"
    }
];

export default function Carousel() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <img src={slide.img} alt={slide.title} className="slide-image" />
                        <div className="slide-overlay">
                            <div className="slide-content">
                                <h3>{slide.title}</h3>
                                <p>{slide.text}</p>
                                <button className='bg-white rounded-md text-red-600 hover:bg-red-600 hover:text-white'>{slide.buttonLabel}</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
