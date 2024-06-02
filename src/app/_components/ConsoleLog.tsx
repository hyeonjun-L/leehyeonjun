'use client';

import { useEffect } from 'react';

const ConsoleLog = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`
      
    _                  _   _                               ___               
    | |                | | | |                             |_  |              
    | |      ___   ___ | |_| | _   _   ___   ___   _ __      | | _   _  _ __  
    | |     / _ \\ / _ \\|  _  || | | | / _ \\ / _ \\ | '_ \\     | || | | || '_ \\ 
    | |____|  __/|  __/| | | || |_| ||  __/| (_) || | | |/\\__/ /| |_| || | | |
    \\_____/ \\___| \\___|\\_| |_/ \\__, | \\___| \\___/ |_| |_|\\____/  \\__,_||_| |_|
                                __/ |                                         
                               |___/                                          
    
    안녕하세요. 자세히 봐주셔서 진심으로 감사합니다. 
      `);
  }, []);

  return null;
};

export default ConsoleLog;
