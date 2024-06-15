import Image from 'next/image';
import { Fragment } from 'react';

const DevProcessTimeline = async () => {
  const PROCESS_TIME_LINE = [
    {
      title: '이미지 크롭 기능',
      images: {
        src: 'https://storage.googleapis.com/leehyeonjun.com/connection-health/%EC%84%B1%EB%B6%84%EB%B6%84%EC%84%9D.gif',
        placeholder:
          'data:image/png;base64,R0lGODlhFAAsAIcAAExpceHn57u7u+Po6Nvb2+Pj48PDw7+/wcHBwunp6sXFxubm56mpqezs7a+vsOrq69nZ2ujp6rGxseTk5Le3tu7q6+fr60XPxN/l5d7e3ufm59DQ0NHY19vm5ufp6e3t7unr7Nzc3d/f4A7GuVbRyPLu79Pl5Ofo6eXm5+Do6ePk5c3NzUHOw9HR0eDn6Ozp69rl5MrKyiHJvc7Oz+3p6+fn6M/NzgrGucrLzEbNwW3Vzejm58PExdzn5vLt7qLc1+vr7cbj4MvKy+To6QjFuPDq7EbPxOjl5evs7dzc3FrSyN/o6Njl5N/f30fPxJiYmMfIyOnp6cLCw+jo6lzSyc/Pz17Syezs7NLS0+Xl59jk4+jo6cPDxeLo6BrHuuXo6UvQxuDg4Nvn5+vp6tvl5Obo6c/P0OXl5lPRx93d3tDP0F3SyeHo6ODh4dbW193n5k7Qxtra28fIydPT1MbFxtrl5dDQ0d7n5/Ht7uno6UjPxMvk4trm5ePj5FDPxN7e3ba3t+7u7zbKvuvq662trtbW1vPw8evr7Nvm5d/n50nPxPPu79vc3NXV1kLOxF/SyWrVzNPT09vl5cTFxcDBwevp60bPxebj5AnFuK2trVvSydjY2VzRyerp6l3TyuLi4uvm597e397f4BvIuw3Gubi4uF/Uy9LS0kfPxdvb3O/r7Nzm5tTU1OLn5/Tw8mDSyd3n56/f2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAAsAAAI/wAXLNghsKDBgwUjjOlRplOChxAjSozQ6U7Dh1sSRJHIMcGYiA8OiTz0oOPDCBAPhapyasOKUIcymkywpQErBBuytJgRSKbJmo0aRRJQaFMDnx1rzlnBwEEkAodmYjwEgYKEFgYUXJnyswbNiGcWfEVK89CHBA3Mpm3QAAjbqBC3HIozo0YqRnPcpEkVYm8IERG3ILFDSdSBSYQAyeEiBcokHjhAoHxYoQIoVYtKuDKEp0SJRaB9VHA4hg0kTaY8cVrz6pHrNWuoWFGi480LGmJGYSI14saoHIL85PByY8QIIjJMVBjjAo0jSxcuoFKkBw4YJ9GNsCDR4UUCDzDI1OKRBAsRnzpamHRYxX5Vhy8OLXCwYaZRCDpqsAiJwapkgk4DdNFJJ2VgoEFBKpyBwgJhQQSggJ180cogED1QkoURPTjgFwE4JNV/AW7Y4YcgQsihh1JpGOGIH6p4IokusphiiCuiOFOMNpqEI4w0vthijzLeCGSOHe34o4lB6jgkiQks+WElXyBJJEdDvDGAiFPGVUQsP0x2wiqJhClmCimIuUQAewRxAkQTFOCmm5/EkQScGRRwyRF5YNRGGHzymUEpmTQxQQxPZBBGGz61+SacaRQwwR8buNkHWRz598BZEQUEADs=',
        width: 850,
        height: 1850,
      },
      explanation: (
        <ul>
          <li>
            사용자가 이미지를 업로드하고, 해당 이미지에서 원재료 정보를 포함하는
            부분만을 선택하여 크롭하는 기능을 제공했습니다. 이 과정에서 이미지를
            자유롭게 회전시키거나 원하는 영역을 정확히 지정하여 크롭할 수
            있습니다.{' '}
            <strong>
              이미지를 조정하는 과정에서 사용자의 연속적인 입력(예: 회전 조절)에
              대응하여 성능 저하 없이 빠르게 반응할 수 있도록 디바운스(debounce)
              기법을 사용
            </strong>
            해 불필요한 처리를 줄이고 성능을 향상시켰습니다.
          </li>
          <li>
            이 기능은 사용자가 제품 구매 후 원재료 명을 수동으로 입력하는 대신
            이미지를 통해 원재료의 이름을 쉽게 추출할 수 있게 해줍니다. 주요
            목적은{' '}
            <strong>
              사용자 편의성을 최대화해서 제품 관련 원재료 정보를 신속하고
              정확하게 수집
            </strong>
            하는 데 있습니다.
          </li>
        </ul>
      ),
    },
    {
      title: '원재료 명 추출 및 OCR 기능',
      images: {
        src: 'https://storage.googleapis.com/leehyeonjun.com/connection-health/%EC%9B%90%EC%9E%AC%EB%A3%8C%EC%B6%94%EC%B6%9C.gif',
        placeholder:
          'data:image/png;base64,R0lGODlhFAArAIcAAExpcefn55+Vg+vr69DBpeDg4Nvl5ZaKdbm/q+rq6qygiOnq6pKFcOXl5dDDqOTk5KyfiN3n59ra1enq6dbW0e3q6q6ijOXl3tbKruzs7NfW0ujq6qSYgefm39Ph27GljMrPuOLj47+0nrKljNrNsLKmj6ediqmdhtbKrZyQesDHsc7OzbGiiNjZ2KGUfe7u7q+kkOHh4pGFccPDwrCmkeHh4LSnjM3NzKufhr29vN3d3enp5t/f2eTk3bSnj97f38y+oOrr6tLGq97e2LSnjurp4tvb1MHCwcK2m+jp6K2gh9TUz8G2oN7n5t7n6Obk3aebhZ+Se+fk3pKJd7WpkOrq4s3TvN7o6ce4mtzc17+ymd/p6bWpkaSYgqOXgaWZgsCzmYt+aZ+TfOvq4riumq+iiK6ii5WJcrapkY+Ebtzd16ibhLqqkKGVf7qulenp6bOnj+jo6L2tlOLi4pSJcubm5rqwm+bl5d3c162hipWJc+Xk3r+ymqKWf7enjKqeh7Wpj5iLdLKmjqChn8S0meTl5MvQuurq5r3Er9/f37yxnejp6aufiN3d2Mq4mcHCwNvb1u3r68e3neHi4bGnk9XV0MHJs9XW0a20oMi/qq6ji+no4K+jjJ6SfLWokJSJdNbJrcbLtKWag7Cki9XIrezq6rmrkN7o6MvRuuXk3bSokN7e3sGxlqygidzm5uLi4brBq8DAvp6RedXi3bOnjdrm5MTKtKuhjraqkujn4KKXgH5yXqSVfpmNeH90YKKWgJeIb+Pj44x+aKCUfsLIserp6rWlidjY17apj9/g37KmjYZ7ZrOmjOHh4aichO/v75CFcJmQfuzq6+Dn5pOIc6ibg6KTenxyYMnRvQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAArAAAI/wATJFi0YYHBgwgPCkywQFqtJBVKSZwosUKkUhWkLVzQ5FSECE5ObblyqqQrAx+nTRC4wAMmWLaIWVIRCoQhK6gQIcA2a4PAAVKMARNmjZcfFnIkEWLFxhGBJwN+XqDl65ouZbhUIdHCp0QJQKAuBPmZipksZ9WQ+YBABYqgE56UkMi1cMAFG4GgpRj2IY8FL2hatRKDosqCn3vKBDrQp8uoX6L+mHHDJQWpMYcTDEi1JoyMXp0UcMDxhxGnPCOEbKqb6ssyap/a9CHSF4wmOEAwdBBYbECPKLvOpGHggo4eUyNODMPiYDfiW1OiCTBBAwYlMkwU2RGRqUjmBDuGLLyplEUCBR5G8EBSo+FSo0MrFzb4MWlOgVUhdIRoNicZ/4UCPfDAHXc0UEcDczxQR4F1HFhIfG80U8CEBTRzzCNHrELhhM28IdAbwcwhoogxNGPiiCIG4yGALLbo4oswxijjjDTWaOONOOao44489ujjjivimEGOAQRz4xvPrDAIjgM80EKOA7ygY5AvBmDllQFohuWVC73xiolgJhJLDmCCOceKb8xRZjM13DDDmvwFGcecdMYxQAZ10ilQQAA7',
        width: 851,
        height: 1847,
      },
      explanation: (
        <ul>
          <li>
            사용자가 업로드한 이미지에서 텍스트를 추출하는 과정은{' '}
            <strong>Naver OCR API를 통해 진행</strong>했습니다. 이 API의
            활용으로, 업로드된 이미지 내에 포함된 텍스트가 세밀하게 식별되며,
            이에 따라 추출된 텍스트 결과가 사용자에게 제공됩니다. 이러한 과정
            동안 사용자가 대기하는 시간이 지루하지 않도록, 이미지가 스캔되는
            것처럼 느껴지게 하는{' '}
            <strong>시각적 애니메이션을 구현하여 사용자 경험을 향상</strong>
            시켰습니다. 이는 사용자가 과정의 완료를 기다리는 동안 긍정적인
            경험을 할 수 있도록 함으로써,{' '}
            <strong>사용자의 이탈률을 감소시키는 데 중점</strong>을 두었습니다.
          </li>
          <li>
            출력된 텍스트에 오류가 발생할 가능성을 고려해,{' '}
            <strong>
              사용자가 추출된 원재료명을 직접 수정할 수 있는 기능을 추가
            </strong>
            함으로써, 사용자에게 더욱 정확한 정보를 제공합니다. 사용자가 입력을
            통해 결과를 조정할 수 있는 이러한 유연성은 사용자 만족도를
            증진시키는 중요한 요소이기에{' '}
            <strong>
              사용자 인터페이스를 통해 직관적이고 간편하게 이루어질 수 있도록
              설계
            </strong>
            했습니다.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section>
      <h2 className="mb-4 text-4xl font-semibold">개발 과정</h2>
      <div className="mb-10 border-l border-solid border-dark-disabled pl-2">
        {PROCESS_TIME_LINE.map(({ title, images, explanation }) => (
          <Fragment key={title}>
            <h3 className="mb-2 pb-2 text-xl sm:text-3xl ">{title}</h3>
            <figure className="mb-4 grid border-t border-solid pt-4 sm:grid-cols-[auto_1fr] dark:border-dark-menu-hover">
              <Image
                src={images.src}
                className="mx-auto aspect-[9/16] h-[28rem] w-auto border border-solid border-black sm:mx-0 sm:h-[37.5rem]"
                alt={`${title}-mobile-동작-gif`}
                width={images.width}
                height={images.height}
                placeholder="blur"
                blurDataURL={images.placeholder}
                unoptimized
              />
              <figcaption className="[&>ul]:flex [&>ul]:list-disc [&>ul]:flex-col [&>ul]:gap-4 [&>ul]:py-4 [&>ul]:pl-5 [&>ul]:sm:px-10 [&>ul]:sm:py-4">
                {explanation}
              </figcaption>
            </figure>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default DevProcessTimeline;
