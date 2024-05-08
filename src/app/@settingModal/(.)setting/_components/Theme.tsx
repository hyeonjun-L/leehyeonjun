import React from 'react';

const Theme = () => {
  const THEME_LIST = [
    {
      theme: 'Dark',
      bg: 'bg-white',
      activity: 'bg-dark-activity',
      body: 'bg-dark-body',
    },
  ];

  return (
    <section className="h-80 p-5">
      <ul className="grid size-full grid-cols-3 grid-rows-2 gap-3">
        {THEME_LIST.map(({ theme, bg, activity, body }) => (
          <li
            key={theme}
            className={`rounded-md border-solid px-4 pb-2 pt-1 ${theme === '' ? ` border-2 border-dark-disabled` : ''}`}
          >
            <button className="flex size-full flex-col">
              {theme}
              <div
                className={`flex size-full items-center justify-center rounded-md px-3 py-2 ${bg}`}
              >
                <div className="flex size-full">
                  <div className={`h-full w-1/4 ${activity}`} />
                  <div className={`size-full ${body}`} />
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Theme;
