import React from 'react';

const Education = () => {
  return (
    <section className="mt-14 flex flex-col gap-10">
      <h2 className="text-4xl font-semibold">학력</h2>
      <div className="grid grid-cols-[1.5fr_2fr]">
        <div>
          <div className="flex items-end gap-1">
            <h3 className="text-2xl">인덕대학교</h3>
            <p>(2017.03 ~ 2024.02)</p>
          </div>
          <p>정보통신공학 (학사졸업)</p>
          <p>학점: 4.3/4.5</p>
        </div>
        <ul className="flex list-disc flex-col gap-1 text-lg">
          <li>성적 우수상 2회 수상</li>
          <li>성적 우수 장학금 3회 획득</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
