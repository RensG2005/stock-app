import Link from 'next/link';

function Footer() {
  return (
    <footer id="footer" className="relative z-50 pt-16">
      <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
        <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
          <div className="lg:flex">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                      <Link href="javascript:void(0)">
                          <a className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">Components</a>
                        </Link>
                    </li>
                  <li className="mt-6">
                      <Link href="javascript:void(0)">
                          <a className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">Templates</a>
                        </Link>
                    </li>
                  <li className="mt-6">
                      <Link href="javascript:void(0)">
                          <a className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">Pricing</a>
                        </Link>
                    </li>
                  <li className="mt-6">
                      <Link href="javascript:void(0)">
                          <a className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">FAQ</a>
                        </Link>
                    </li>
                  <li className="mt-6">
                      <a href="javascript:void(0)" className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">
                          Documentation
                                        </a>
                    </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                      <Link href="javascript:void(0)">
                          <a className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">Free components</a>
                        </Link>
                    </li>

                  <li className="mt-6">
                      <Link href="javascript:void(0)">
                          <a className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">Blog</a>
                        </Link>
                    </li>
                  <li className="mt-6">
                      <Link href="javascript:void(0)">
                          <a className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">Changelog</a>
                        </Link>
                    </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex">
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                      <a href="javascript:void(0)" className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">
                          Privacy policy
                                        </a>
                    </li>
                  <li className="mt-6">
                      <Link href="javascript:void(0)">
                          <a className="text-base lg:text-sm leading-none hover:text-brand text-gray-500">Terms of service</a>
                        </Link>
                    </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                <div className="flex items-center mb-6">
                  <a href="javascript:void(0)">
                      <div className="text-gray-500 cursor-pointer hover:text-brand ">
                          <svg className="footer-icon feather feather-github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </div>
                    </a>
                  <a href="javascript:void(0)">
                      <div className="pl-4">
                          <svg className="footer-icon feather feather-twitter text-gray-500 cursor-pointer hover:text-brand " xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </div>
                    </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 flex flex-col justify-center items-center">
        <Link href="javascript:void(0)">
          <a>
            logo
          </a>
        </Link>
        <p className="mt-6 text-base lg:text-sm leading-none text-gray-900">2021 Stock-app. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
