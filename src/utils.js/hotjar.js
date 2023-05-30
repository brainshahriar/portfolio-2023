import { useEffect } from 'react';

const Hotjar = () => {
  useEffect(() => {
    if (typeof window.hj !== 'undefined') {
      window.hj('trigger', 'my_button_click');
    }
  }, []);

  return null;
};

export default Hotjar;