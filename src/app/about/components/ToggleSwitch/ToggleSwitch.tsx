
'use client';

import { useState, useEffect, ChangeEvent } from 'react';

export function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty('--background', '#0a0a0a');
      document.documentElement.style.setProperty('--foreground', '#ededed');
    } else {
      document.documentElement.style.setProperty('--background', '#ffffff');
      document.documentElement.style.setProperty('--foreground', '#171717');
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <label
          htmlFor="toggle"
          className={`block w-14 h-8 rounded-full cursor-pointer transition-colors ${isDarkMode ? 'bg-white' : 'bg-gray-300'}`}
        ></label>
        <div
          className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform ${isDarkMode ? 'bg-black transform translate-x-6' : 'bg-white'}`}
        ></div>
      </div>
    </div>
  );
}
