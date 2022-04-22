import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowDimensions';
import shortenText from '../../lib/shortenText/shortenText';
import Button from './Button/Button';
import Title from './Title';

export default function NewsCard({
  news: {
    title, description, url, urlToImage, source, publishedAt,
  },
}) {
  title = title.split('-')[0];
  const [isOpen, setIsOpen] = useState(false);

  const { width, height } = useWindowSize();

  return (
    <div
      className="p-4 hover:scale-105 cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <img
        src={urlToImage}
        alt="News article Image"
        className="object-cover mx-auto max-h-40"
      />
      <Title type="h5" extraclass="text-gray-500">
        {source.name}
        {' '}
        <span className="float-right">{publishedAt.split('T')[0]}</span>
      </Title>
      <Title type="h3">{shortenText(title, 75)}</Title>
      <p>{shortenText(description, 150)}</p>

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
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
