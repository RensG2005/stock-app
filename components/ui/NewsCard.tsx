import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowDimensions';
import clsx from '../../lib/clsx';
import shortenText from '../../lib/shortenText/shortenText';
import Button from './Button/Button';
import Title from './Title';

export default function NewsCard({
  news: {
    title, description, url, urlToImage, source, publishedAt,
  },
  kind,
}) {
  title = title.split('-')[0];
  const [isOpen, setIsOpen] = useState(false);

  const { width, height } = useWindowSize();

  return (
    <div
      className={clsx(
        kind === 'list' && 'flex',
        'p-4 hover:scale-105 cursor-pointer',
      )}
      onClick={() => setIsOpen(true)}
    >
      <img
        src={urlToImage}
        alt="News article Image"
        className={clsx('object-cover max-h-40', kind === 'cards' && 'mx-auto')}
      />
      <div className={kind === 'list' ? 'flex flex-col' : ''}>
        <Title type="h5" extraclass="text-gray-500">
          {source.name}
          {' '}
          <span className={kind === 'cards' ? 'float-right' : ''}>
            {publishedAt.split('T')[0]}
          </span>
        </Title>
        <Title type="h3">{shortenText(title, 75)}</Title>
        <p>{kind === 'cards' ? shortenText(description, 150) : description}</p>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="bg-white relative rounded max-w-100 mx-auto p-10 flex flex-col justify-center">
            <iframe
              title="news article"
              className="my-5"
              src={url}
              width={(width / 100) * 80}
              height={(height / 100) * 80}
            />
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
