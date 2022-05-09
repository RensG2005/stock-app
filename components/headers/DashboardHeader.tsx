import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import useDebounce from '../../hooks/useDebounce';
import clsx from '../../lib/clsx';
import Input from '../ui/Input';
import Spinner from '../ui/Spinner';
import Title from '../ui/Title';

const userNavigation = [
  { name: 'Your Profile', href: 'app/profile' },
  { name: 'Settings', href: 'app/settings' },
  { name: 'Sign out', href: 'auth/signout' },
];

function DashboardHeader({ user }) {
  const [navigation, setNavigation] = useState<
    { name: string; href: string; current: boolean }[]
  >([{ name: 'News', href: 'news', current: false }]);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (!searchOpen) {
      setSearchTerm('');
      setSearchResults([]);
    }
  }, [searchOpen]);

  const {
    isLoading, isIdle, isError, mutate,
  }: any = useMutation(
    'searchStock',
    () => axios.post('/api/search', {
      search: searchTerm,
    }),
    {
      onSuccess(data, variables, context) {
        setSearchResults(data.data.data.bestMatches);
      },
      onError(error, variables, context) {
        console.log(error);
      },
    },
  );

  useEffect(() => {
    let mounted = true;
    if (mounted && searchTerm.length >= 2) {
      mutate(searchTerm);
    }
    return () => {
      mounted = false;
    };
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setNavigation(
      navigation.map((item) => {
        const pathname = window.location.pathname.split('/');
        if (item.href === pathname[pathname.length - 1]) {
          return { ...item, current: true };
        }
        return { ...item, current: false };
      }),
    );
  }, []);

  return (
    <div className="min-h-full z-50">
      <Disclosure
        as="nav"
        className="bg-gray-800 border-b-2 border-white border-1"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8" src="/logo.svg" alt="Workflow" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          href={`/app/${item.href}`}
                          replace
                          key={item.name}
                        >
                          <a
                            className={clsx(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <div onBlur={() => setSearchOpen(false)} className="flex">
                      {isLoading && <Spinner />}
                      <motion.div layout>
                        {searchOpen && (
                          <Input
                            autoFocus
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(
                              e.target.value.substring(0, 6).toUpperCase(),
                            )}
                            placeholder="e.g. AAPL"
                          />
                        )}
                      </motion.div>
                    </div>
                    {!isLoading
                      && !isIdle
                      && !isError
                      && searchOpen
                      && searchResults.length > 0 && (
                        <div
                          className="z-50 flex flex-col fixed p-2 bg-gray-800 dark:bg-white text-white dark:text-black"
                          style={{ top: '70px', left: '64.5%' }}
                        >
                          {searchResults.map((item, index) => (
                            <motion.div key={item['1. symbol']}>
                              <Link
                                href={`/app/stock/${item['1. symbol']}`}
                                replace
                                passHref
                              >
                                <a>
                                  <Title type="h1">{item['2. name']}</Title>
                                  <Title type="h3">{item['1. symbol']}</Title>
                                </a>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                    )}
                    {!isLoading
                      && !isIdle
                      && !isError
                      && searchOpen
                      && searchResults.length === 0 && (
                        <div
                          className="z-50 flex flex-col fixed p-2 bg-gray-800 dark:bg-white text-white dark:text-black"
                          style={{ top: '70px', left: '64.5%' }}
                        >
                          <Title type="h1">No Results</Title>
                        </div>
                    )}
                    <button
                      type="button"
                      className="bg-gray-800 p-1 ml-6 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">Search</span>
                      <SearchIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                        onClick={() => setSearchOpen(!searchOpen)}
                      />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative z-50">
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.image}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-500"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link href={`/${item.href}`} replace>
                                  <a
                                    href={item.href}
                                    className={clsx(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700 z-50 relative',
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Link href={`/app/${item.href}`} replace key={item.name}>
                    <Disclosure.Button
                      as="a"
                      className={clsx(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.image}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user.email}
                    </div>
                  </div>

                  <Link href="/app/search" replace passHref>
                    <a>
                      <button
                        type="button"
                        className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">Search</span>
                        <SearchIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                          onClick={() => setSearchOpen(!searchOpen)}
                        />
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <Link href={`/${item.href}`} replace key={item.name}>
                      <Disclosure.Button
                        as="a"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default DashboardHeader;
