import React, { Fragment } from 'react';

const Career = () => {
  const CAREERS = [
    {
      companyName: '이엑스테크놀로지',
      period: '2021.06 ~ 2022.03',
      department: '기술부',
      position: '연구원',
      businessInformation: [
        '시스템 설계 및 구현: 고객의 요구 사항에 맞춰 적절한 머신비전 시스템을 설계하고, 이를 구현하는 업무진행',
        '교육 및 기술지원: 고객이나 사용자가 머신비전 시스템을 효과적으로 사용할 수 있도록 교육 및 기술적 문제가 발생했을 때 지원',
        '유지보수 및 업그레이드: 설치된 머신비전 시스템의 정기적인 유지보수를 수행하고, 검증되는 제품이 변경 될 경우 시스템 업그레이드',
      ],
    },
    {
      companyName: '화인스텍',
      period: '2022.03 ~ 2022.09',
      department: '기술연구소_시스템사업부',
      position: '사원',
      businessInformation: [
        '시스템 설계 및 구현: 시스템을 설계하고, 고객의 요구 사항에 맞춘 맞춤형 솔루션을 제공하는 업무 진행',
        '기술지원: 기술적 문제가 발생했을 때 지원, 고객의 운영 환경에 최적화된 솔루션을 제공하여 문제 해결',
      ],
    },
  ] as const;

  return (
    <section className="mt-14 flex flex-col gap-10 border-b border-solid border-dark-disabled pb-10">
      <h2 className="text-4xl font-semibold">경력</h2>
      <div className="grid gap-y-10 sm:grid-cols-[1fr_2fr]">
        {CAREERS.map(
          ({
            companyName,
            period,
            department,
            position,
            businessInformation,
          }) => (
            <Fragment key={companyName}>
              <div className="[&>p]:text-sm">
                <h3 className="mb-4 text-2xl">{companyName}</h3>
                <p>{period}</p>
                <p>부서명: {department}</p>
                <p>직책: {position}</p>
              </div>
              <ul className="ml-5 flex list-disc flex-col gap-4 sm:ml-0">
                {businessInformation.map((info, index) => (
                  <li key={`${companyName}${index}`}>{info}</li>
                ))}
              </ul>
            </Fragment>
          ),
        )}
      </div>
    </section>
  );
};

export default Career;
