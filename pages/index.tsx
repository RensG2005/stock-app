import {
  AnnotationIcon,
  ChartBarIcon,
  InformationCircleIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import HomepageSliderSlide from '../components/ui/HomepageSliderSlide';
import Layout from '../components/layouts/Layout';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { motion } from 'framer-motion';
import { darkModeContext } from './_app';
import { useContext } from 'react';

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

function Homepage() {
  const features = [
    {
      name: 'Fully featured charts',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ChartBarIcon,
    },
    {
      name: 'Explanations on all Terms',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: InformationCircleIcon,
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

  interface Testimonial {
    image: string;
    title: string;
    testimonial: string;
    name: string;
    position: string;
  }

  const testimonials: Testimonial[] = [
    {
      image: 'https://i.ibb.co/4g1D9cv/imgslider1.png',
      title: 'Some of the best work that was done!',
      testimonial:
        'Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.',
      name: 'Anna Smith',
      position: 'Senior Web Designer',
    },
    {
      image: './homepageHero.jpg',
      title: 'Some of the best work that was done!',
      testimonial:
        'Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.',
      name: 'Anna Smith',
      position: 'Senior Web Designer',
    },
  ];

  const { setDarkSide, darkSide } = useContext(darkModeContext);

  return (
    <Layout title="Homepage" setDarkSide={setDarkSide} darkSide={darkSide}>
      <section className="max-w-screen min-h-[90vh] xl:min-h-[80vh] flex items-center justify-center">
        <div className="flex items-center justify-center -translate-y-12 md:-translate-y-12 w-10/12 md:8/12 lg:6/12 mx-auto">
          <motion.div
            initial={{ y: -100, x: 0, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <div className="flex flex-col items-center text-center mt-24 md:mt-12 lg:mt-0">
              <h1 className=" text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[6rem] leading-none break-words w-10/12 font-bold tracking-wide">
                THE BEST STOCK APP IN THE WORLD
              </h1>
              <h3 className="mt-5 font-medium text-sm md:text-lg xl:text-xl w-6/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                dolore veritatis doloremque ducimus aliquid accusamus minus
              </h3>
              <button>
                <a
                  href="/auth/signin"
                  className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700"
                >
                  Start Investing now
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="py-10 relative">
        <motion.div
          initial={{ y: -100, x: 0, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">
                Transactions
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to send money
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative block z-20">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <motion.div
          initial={{ y: -100, x: 0, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            isIntrinsicHeight
            totalSlides={2}
          >
            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
              What our customers are
              <br />
              saying
            </h1>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
              What our customers are saying
            </h1>
            <Slider>
              {testimonials.map((testimonial: Testimonial, index) => (
                <HomepageSliderSlide testimonial={testimonial} key={index} />
              ))}
            </Slider>
            <div className="flex items-center mt-8">
              <ButtonBack
                className="cursor-pointer "
                role="button"
                aria-label="previous slide"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.667 8H3.33366"
                    stroke="#4B5563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.33301 12L3.33301 8"
                    stroke="#4B5563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.33301 4L3.33301 8"
                    stroke="#4B5563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="next slide"
                className="cursor-pointer ml-2"
              >
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.45801 15.5H24.5413"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.792 23.25L24.542 15.5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.792 7.75L24.542 15.5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </motion.div>
      </div>
    </Layout>
  );
}

export default Homepage;
