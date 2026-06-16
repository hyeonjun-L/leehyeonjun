const Career = () => {
  const CAREERS = [
    {
      companyName: '거림소프트',
      period: '2024.10 ~ 재직중',
      department: '개발부',
      position: '',
      businessInformation: [
        'GIS 레이어 그룹방식 도입으로 네트워크 요청 80% 감소 및 렌더링 성능 약 45% 향상',
        '소방청 전국 재난신고 대시보드: 트리쉐이킹 및 코드 스플리팅으로 번들 크기 약 40% 감소',
        '제주도 소방 풍수해 시스템: 조건부 요청(ETag) 도입으로 네트워크 트래픽 약 75% 감소',
        '레거시 GIS 시스템(C++ 기반)을 웹 서비스로 마이그레이션',
        'n8n 기반 GIS 레이어 헬스체크 자동화 시스템 구축',
        '울산 소방 통계 시스템: 지도 렌더링 방식 개선 및 쿼리 최적화로 API 응답속도 향상',
        '거림소프트 홈페이지 구축으로 외주 대비 연간 36만원 비용 절감',
      ],
    },
    {
      companyName: '화인스텍',
      period: '2022.03 ~ 2022.09',
      department: '기술연구소_시스템사업부',
      position: '사원',
      businessInformation: [
        '고객 요구사항 분석 및 맞춤형 머신비전 시스템 설계·구현',
        '현장 기술 지원 및 운영 환경 최적화된 솔루션 제공',
      ],
    },
    {
      companyName: '이엑스테크놀로지',
      period: '2021.06 ~ 2022.03',
      department: '기술부',
      position: '연구원',
      businessInformation: [
        '머신비전 광학 조건 계산 자동화 애플리케이션 자체 개발 및 사내 배포',
        '입사 1년만에 업무 능력 인정받아 우수사원 선정',
        '고객 맞춤형 머신비전 시스템 설계·구현 및 기술 교육',
        '시스템 유지보수 및 제품 변경에 따른 업그레이드 수행',
      ],
    },
  ] as const;

  return (
    <section className="mt-14 flex flex-col gap-10 border-b border-solid border-dark-disabled pb-7">
      <h2 className="text-4xl font-semibold">경력</h2>
      {CAREERS.map(
        (
          { companyName, period, department, position, businessInformation },
          index,
        ) => (
          <div
            className={`grid gap-y-10 sm:grid-cols-[1fr_2fr] ${index !== CAREERS.length - 1 ? 'border-b border-dark-disabled/20 pb-5' : ''}`}
            key={companyName}
          >
            <div className="[&>p]:text-sm">
              <h3 className="mb-4 text-2xl">{companyName}</h3>
              <p>{period}</p>
              <p>부서명: {department}</p>
              {position && <p>직책: {position}</p>}
            </div>
            <ul className="ml-5 flex list-disc flex-col gap-4 sm:ml-0">
              {businessInformation.map((info, index) => (
                <li key={`${companyName}${index}`}>{info}</li>
              ))}
            </ul>
          </div>
        ),
      )}
    </section>
  );
};

export default Career;
