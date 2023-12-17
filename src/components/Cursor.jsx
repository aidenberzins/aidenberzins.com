import React from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({x: null, y: null});

  React.useEffect(() => {
    const updateMousePosition = (ev) => setMousePosition({x: ev.clientX, y: ev.clientY});
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const Cursor = () => {
  const {x, y} = useMousePosition();

  return (
    <div
      className={[
        'hidden dark:block fixed h-64 w-64',
        'top-1/2 left-1/2 pointer-events-none transition-transform ease-in-out',
        'mix-blend-soft-light blur-3xl bg-white opacity-20 rounded-full',
      ].join(' ')}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Cursor;
