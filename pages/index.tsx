import {
  AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon,
} from '@heroicons/react/outline';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import Layout from '../components/layouts/Layout';
import Title from '../components/ui/Title';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Homepage() {
  const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: AnnotationIcon,
    },
  ];
  return (
    <Layout title="Homepage">
      <section className="max-w-screen min-h-[70vh] md:min-h-[55vh] bg-gradient-to-tr from-indigo-500 via-indigo-400 to-indigo-300 flex items-center justify-center">
        <div className="flex items-center justify-center -translate-y-12 md:-translate-y-12 w-10/12 md:8/12 lg:6/12 mx-auto">
          <div className="text-center">
            <Title type="h1" extraclass="text-white text-5xl">TEST</Title>
            <Title type="h4" extraclass="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore veritatis doloremque ducimus aliquid accusamus minus</Title>
          </div>
          {/* <Image className="hidden md:block" src="/homepageHero.jpg" alt="logo" width={200} height={200} /> */}
        </div>
      </section>
      <div className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative block z-50">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 mb-16 bg-slate-100 h-[110vh]" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={100} isIntrinsicHeight totalSlides={2}>
          <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
            What our customers are
            <br />
            saying
          </h1>
          <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">What our customers are saying</h1>
          <Slider>
            <Slide index={0} tabIndex={0}>
              <div className="flex">
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 19.7072H10.1869C10.0128 27.1315 7.90703 27.9742 5.2623 28.2148L4.24242 28.3412V36.5049L5.418 36.4419C8.87154 36.2476 12.6897 35.625 15.2371 32.4803C17.4701 29.7236 18.4545 25.2198 18.4545 18.3062V5.49512H0V19.7072Z" fill="#4338CA" />
                        <path d="M23.5459 5.49512V19.7072H33.5968C33.4227 27.1315 31.3851 27.9742 28.7403 28.2148L27.7883 28.3412V36.5049L28.896 36.4419C32.3496 36.2476 36.2019 35.625 38.7493 32.4803C40.982 29.7236 42.0004 25.2198 42.0004 18.3062V5.49512H23.5459Z" fill="#4338CA" />
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Some of the best work that was done!</h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                    </div>
                    <div className="md:mt-0 mt-8">
                      <p className="text-base font-medium leading-4 text-gray-800">Anna Smith</p>
                      <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Senior Web Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img src="./homepageHero.jpg" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 19.7072H10.1869C10.0128 27.1315 7.90703 27.9742 5.2623 28.2148L4.24242 28.3412V36.5049L5.418 36.4419C8.87154 36.2476 12.6897 35.625 15.2371 32.4803C17.4701 29.7236 18.4545 25.2198 18.4545 18.3062V5.49512H0V19.7072Z" fill="#4338CA" />
                        <path d="M23.5459 5.49512V19.7072H33.5968C33.4227 27.1315 31.3851 27.9742 28.7403 28.2148L27.7883 28.3412V36.5049L28.896 36.4419C32.3496 36.2476 36.2019 35.625 38.7493 32.4803C40.982 29.7236 42.0004 25.2198 42.0004 18.3062V5.49512H23.5459Z" fill="#4338CA" />
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Some of the best work that was done!</h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                    </div>
                    <div className="md:mt-0 mt-8">
                      <p className="text-base font-medium leading-4 text-gray-800">Anna Smith</p>
                      <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Senior Web Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
          <div className="flex items-center mt-8">
            <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.667 8H3.33366" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.33301 12L3.33301 8" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.33301 4L3.33301 8" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonBack>

            <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.45801 15.5H24.5413" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.792 23.25L24.542 15.5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.792 7.75L24.542 15.5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </Layout>
  );
}

export default Homepage;
