import React, { useEffect, useState } from 'react';
import wiki, { wikiSummary } from 'wikipedia';

interface Props {
  content: string;
  delay?: number;
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  children: any;
}

function Tooltip(props: Props) {
  let timeout;
  const [active, setActive] = useState(false);
  const [definition, setdefinition] = useState('loading...');

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 200);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  async function getSummary() {
    try {
      const summary: wikiSummary = await wiki.summary(props.content);
      setdefinition(summary.description);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (active) {
      getSummary();
    }
  }, [active]);

  return (
    <div
      className="inline-block relative"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div
          className={`-translate-x-1/2 absolute rounded-sm left-1/2 p-3 text-white bg-black text-md z-50 whitespace-nowrap before:content-[" "] before:left-1/2 before:border before:border-transparent before:h-0 before:w-0 before:absolute before:pointer-events-none before:border-6 before:ml-16 ${
            props.top && '-top-16 before:top-full before:border-black'
          } ${
            props.left
            && 'left-auto right-[105%] top-1/2 -translate-y-1/2 before:left-auto before:right-[105%] before:top-1/2 before:-translate-y-1/2'
          } ${
            props.right
            && 'top-1/2 -transform-y-50 left-[105%] before:-left-[60px] before:top-1/2 before:-transform-y-1/2'
          } ${
            props.bottom
            && 'bottom-[-60px] before:bottom-full before:border-black'
          }`}
        >
          {/* Content */}
          {definition}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
