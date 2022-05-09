import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-gray-800 dark:text-white transition-all duration-1000">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
