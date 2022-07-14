import { UpCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import './styles.scss';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    }
  }, [])
  
  return (
    <button className="buttonScroll hidden lg:block">
      <div
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none', color: 'red' }}
      >
        <UpCircleOutlined style={{ backgroundColor: 'white', borderRadius:'50%' }} />
      </div>
    </button>
  );
};

export default ScrollButton;
