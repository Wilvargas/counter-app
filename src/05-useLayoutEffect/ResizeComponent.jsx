// ResizeComponent.jsx
import React, { useLayoutEffect, useRef, useState } from 'react';

export const ResizeComponent = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(window.innerWidth / 2);
      }
    };

    handleResize(); // Ajusta el ancho inicial

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
    <>
      <div
        ref={containerRef}
        style={{ width: width, backgroundColor: 'lightblue', padding: '20px' }}
      >
        <p>The width of this container is {width}px.</p>
      </div>
    </>
  );
};



