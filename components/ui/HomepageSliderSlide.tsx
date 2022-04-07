import { Slide } from "pure-react-carousel";
import React from "react";
export function HomepageSliderSlide({ testimonial: { image, title, testimonial, name, position } }) {
    return <Slide index={0} tabIndex={0}>
        <div className="flex">
            <div className="mt-14 md:flex">
                <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img src={image} alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 19.7072H10.1869C10.0128 27.1315 7.90703 27.9742 5.2623 28.2148L4.24242 28.3412V36.5049L5.418 36.4419C8.87154 36.2476 12.6897 35.625 15.2371 32.4803C17.4701 29.7236 18.4545 25.2198 18.4545 18.3062V5.49512H0V19.7072Z" fill="#4338CA" />
                            <path d="M23.5459 5.49512V19.7072H33.5968C33.4227 27.1315 31.3851 27.9742 28.7403 28.2148L27.7883 28.3412V36.5049L28.896 36.4419C32.3496 36.2476 36.2019 35.625 38.7493 32.4803C40.982 29.7236 42.0004 25.2198 42.0004 18.3062V5.49512H23.5459Z" fill="#4338CA" />
                        </svg>
                    </div>
                </div>
                <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">{title}</h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">{testimonial}</p>
                    </div>
                    <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">{name}</p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">{position}</p>
                    </div>
                </div>
            </div>
        </div>
    </Slide>;
}
