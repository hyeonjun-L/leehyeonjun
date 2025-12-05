import GifContainer from './GifContainer';

const DevProcessTimeline = async () => {
  const PROCESS_TIME_LINE = [
    {
      title: '관리자 로그인 - JWT 인증 및 세션 관리',
      gif: {
        pc: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/login_pc.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAALAIcAAExpcVhYWOhvdPvu7kVv0/CusYqKiv66wf7z9O3u7kdHSPPw9Kenp4yQmHNzcx8nN+jo5yIwYFRaaf5catjY2AAoiwAphj9AQgAng0NBQgInhYeHh+bm5gAAAN8ADSkrMv36+wICAsvU4uDg3yuM2PT09BkbGOXv/vv7+8HCwhcrZAQFCF1dXri4uGZ5p/X19I8zOd7JyZCQkB44fd/f5JCYqJeXlzMyM+3BvGVlZePs/fn4+jxVn+Tc2P7r7N7e3s3x/iyK10N5vaGw1N7Uy6ysrAUpf/Hz89L9/+zs7LOzs34bHQAjePb+/fPz805WZ3eKxgIrkIGBgTcpK+Xs9/r6+lteY/zBwRYWFug6Rfby7cfIyICa2qSkpFZWVgAABh0dHXZmXwAEEjRIetn0/uTj5MDL6v7Ex52dnXaKwHWMxldXVoybvvn5+fr8+mtra/7f48UqNuXq9v4+S+Ps/DaG0uIUJv/6//39+vLy8uTl5AMrhJWdsFlTV5GRkW5vcVmU68nS4vz8/A4ODo6Ojl2D5Q8lYfT8//38//78/09RVGNjY2NlaSyL1dX9/zpbtb4IEiNSs/rw8f/+9OPj4/ny9wAojtbW1VCOywoocuTr++vq6tP+/xQdL/f4+A4tfiqK1W6Gyf///w01lhsbG/L38uDt+83NzeX7/pSUlPn7/pSYoEtorDg3N6cNGN7j6NTU1AApiGJiYiopKR00dMnN2ISu/tvb23d2dwADEPf8/nx9fiAqRYGGkurp6SIkIiBAh7LA4JWr4YWFhWyDwuf+/uvw+/r+/rG3wvDx8M7VzgApjSYnKPr7/DAuL1paWp/L/tPT0xQYH/77/aGns77m/iyL1OHh4Tg6QoODhP6Nl9zj8u/v7/b29r29vWyU7P39/QAfY/Lw7wknexkZGcDt/+Lr+Vo6PL8IGxYmTvTs7v78993h5nWLxtLS0k9OTmBgYObm5zw7POHq+GxISi4uLh89heTl64KPrc/R0dHR0QAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAALAAAIUwDBCRw4UJAggggTDhSlsOHAKvGSVHGYUFCbTZvaUEToqVuVZlUmbhRYBQ9DUQY3ChJ1b4jLIXJQUlzZ8uU9mSNF6WQ4sifCbiWCCh0a9MVBcAEBADs=',
        },
        mobile: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/login_mobile.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAAsAIcAAExpcf6Smt3p/vz8/OLr+RYbGeXr94ODgwoKCpmgqyyL03qKuC4uLmyMyEpWef37/MrKygAAAmqCxhYlU66uruXs/tDW49Td8GSq4kEsLfj9/Pv9/AMpgzk4ObO6zMXM2zteuLq6u3N0dPr6+xopU+1FTlteZBYWF2IjJUpwtoXV/vrr66zV/oWFhZ2dnmmQ75mAh5CQkJ6nvPn8+1SP6aqvuGVlZQgpdAopdKByc34ZKN3e3t7e3qWlpTQzMxovagAoimN4rFeC5qysrBsbHQ4maJ6fnmXE/mZoa3ah/npoaywvMrOzsytcuxI2mPPz84SDhwADEsA4PyA9gxxEpsjIyHWLxisqK/3c3ZaWlmddXeOlqp2dnV9fX2RkZDk6P/6ut6u41bcJE0A/QMjFx+Tk5IWz3wApj0ZGR+Lq9uPs/AAohl+G5vv8/5mr0nl5eSuK1gAhZprC/tf2/ufGx3Nzcj1BeLbh/6Cho/n5+YWFgQ4uf4eHhwYng25ubtXV1R4+hby8vP4wPyUkJf38/MHAwXeLxdzc3Nj9/6Ojo0lNU/L9/5SereUpM36Ci+/5/urq6v7N097f4pKarPnv6/Hx8QMniAIpjlNTVP7m6eTs+5Cq3Pr6/vr6+f///w03nP5ZZgkndxsbG7bC4dPNzf3a20R61wIDBSyL1Zubm2JiYgABCrXi/vX09ampqaOwzB01dL69vgAABIKv/t8DENvc25CVn+r9/v7w8Le3t+Hr+g0OEs7P2PP8/lRed8SSk/3+/n6X1wApjRwaGiQwUUBQf8zMzPj49/5xe73l/t7m8zg1Np4RGP76/gACD+Tt+trg7DAvL/zu7yAlOD9cri6L1Nq1tulYXzc2Nr28vTpWp4aDhHZ2duZxddzQ0qOmrcPDxImKi/PDxH19fQAogePs/+vr7h4fINHR0v39/cMKFoq0/sXExAAAAAAojBkZGdjY2e318BI6m57E/j1ozP35/JmZmeDy/mxzgGBkbJ+goODl7ODg4DmIx9zj8QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAAsAAAI/wDTCRxIsKDBgwgTKlzIsKHDhxAjOhxAUWBFhcAyAkuXkWPCAZ7+xHCVKlYuJhBcofM0wCBIHiHgGauFjgy8QvxYFhwArFKZSpDMCfUJqYy5jQWBtaq0tNKTVk0rHXPJ05PGq8CsGty4gaLXll6THquUx5NZs+nOqvUk0JM5cIegtnqa58lTuVDzpE2zT6gBc8/MSfJr7q8Bvmb31eIHqXFRV407qR2wL7HQy5w4tcncpnPnVpXTjahE+ok5KI7wuHCBp7VqMizdGvtTyZOxQdF8DGIwbNeuE+38eNLbqdWxshAGXYmm/Nw7Ued2Ce+UboC5SuZGGGMQLdqYDtiwRbojgmC6aKdPbJ8bxL79oHPlPVHPytY2gzFoxnwfc458neGefJDCgCkUs557gzx3AjGjmGVIKJasYUkcDGDTgX7ffcHbNIaYFYY2IGoDyDnrkWiicySEwRZ9aRkT3gnvxBgjfP/p5VVZt7F3IonSyTcQMCAl18GQPviQ2zvtIDFcOnlgZ04rtdThhx9SSkklEq7oNEAeeRxzXFZggmnWACP8qJFonaSpZpojlCnRm3DGKeecEq1p5512BgQAOw==',
        },
      },
      explanation: (
        <ul>
          <li>관리자가 시스템에 로그인할 수 있는 인증 페이지입니다.</li>
          <li>
            <strong>JWT 기반 2단계 인증 시스템</strong>을 구현하여 액세스 토큰과
            리프레시 토큰을 쿠키에 저장하고, 프론트엔드와 백엔드 양쪽에서
            검증하도록 설계했습니다.
          </li>
          <li>
            <strong>Next.js Middleware에서 jose 라이브러리</strong>로 1차 토큰
            검증을 수행하여 빠르게 유효하지 않은 요청을 필터링하고, 보호된
            관리자 라우트에 대한 접근을 제어했습니다.
          </li>
          <li>
            <strong>백엔드 NestJS에서 PostgreSQL 세션 테이블</strong>로 리프레시
            토큰을 관리하여 2차 검증을 수행하고, 서버 측에서 토큰을 강제로
            무효화할 수 있도록 구현했습니다.
          </li>
          <li>
            토큰 만료 시 <strong>자동 갱신 플로우</strong>를 구축하여
            /admin/refresh 라우트를 통해 백엔드 API를 호출하고, 데이터베이스
            세션 검증 후 새로운 토큰을 발급받아 사용자 경험을 끊김 없이
            유지했습니다.
          </li>
        </ul>
      ),
    },

    {
      title: '관리자 - 제품 목록 페이지',
      gif: {
        pc: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/admin_product_list_pc.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAALAIcAAExpcSYmJvz8/AD/APr7++fn5iwtMYeHh/76/tPS0oGNqOvr6wApjXaX5WmAwMHL8KrS/ow1OQ01moubvtjb5xgsZOny/te4jujo6Dc4P5mYmf737UNgsAcqfZuhplRWYqFrYz9YoPH8/1UUFeDk6XQ1OZ/B/rW2uGxtbl2G587P0Rwzch03ewAqj0ZJUXyKnqWmpwcGB29xcvv7/j9oy/X19XmKv60xLaYSEaOz2lhea46bqNTa/r/AwZmlt/Dw8XR1dj8+QZIPEAUqiP76+ev7/nUlKKqtrkBUkfLy8hEQEKI5PYx1cSQnLLXC3OTk5MTM1xUWGvb9/R0mRyA7gBERFra9woyNjj9CS0lKVDY1Ntr9/t7o8gAAAGcYGaeYj4uf21dUVI2Vo2dmZtnZ2sLIz2JiYgcskAkneXuBixYlUd/g5U9TW5ubm8TFx0NCRMrO045WS8HK3mNreHx9fWR2qoKq/iE+hsxCPCpInzQiIqi2xCg+de3t7eHe1fT09FY9QUIQEf779yoqLwAnitHV8GuL4EhKTvz6+4mXoCEhKB07kJudn/79/V9fXyM0ZJCUpImLjYCJkpEqLJWWl87T1jMwMv///zk6QP76/ElJSvj4946Toz1GU2NmbnF9ixAtcClPsCgnKWpzf66zt8vLzDIzON7e3vz8+bm5ufj5+8nY/lhZW1xkbxs7hez5/ogvMLG4vaaorNOUcfP3+uDg4DlVq0RFTU1QVuvu8sbJywAojhMmYWJMTgMDA4WFhdXV1svW7Akoc7/Ex6KiowImgbi7vdj5/js5OuLi4k5PWzE1P4qSn2p0ihkXGAoLDEBCRv78+lBVY5GUl/v9/GlkW+79/ujw+i8uMCsrK8Ls/h8/h0xNUFhcZB84fgApiVRTVBwbICQkJCglJjw9Q6+92jMzM+nq6vr6+r29vYODgxwbHP/+/bGxsvn5+dDS/u/v7yAgIcpSTJCQkR0/h5SYns8pIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAALAAAIoQAFXCrQh4A7d+g21aBVo0ajRjU2Ebh0aiKGNQTQaTxIa9OfhA3RUXwoIJeqGn9UqfpTQ5XHH5skjnzo7tK5Apca/dnU6BIXKDwnnnrYqCYGnARquBP406FQojWf1LqUdBNTKE5nFr30JNklARGv1iAwkQzUSxieUA3rE2ujsmfTrrXaNqvZhyLlQnTX82fQS3cF7OzqrsaPJEpJQIFZk0xAADs=',
        },
        mobile: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/admin_product_list_mobile.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAAsAIcAAExpcRovaWZnZ8HFyefm56yurldZXfz8/CorLS5YvSUkJtvl/jIyOoODg4CIj3AdHzk5O5GRke3u7v77/D08PNDS/vb29XuOw7XC4lhYWOnr7d/e383SzyE6ffz9/PHy9BwsVAonetjY2Gl2i5+fn0VJT6ayv8vP1oEoLO3s7WRwhOvy+HIvM36AhMbHyQApiwUoeoGBgrPAzTs7O93u/j49QR5Ep26IzBgYHYYwM/T09ERGTgQskTU7RouVoqahn9re5C1KnbrF2XuU1O/w8+Lj5QD/AGxwd8rw/m1tbU9QWwcIDgAnikxRWowREDw5OklKVFU7QN7e3lF730tPVX+MmrS7wNna3Q8OD5yhpAEBAdng7+zs7KWlprOzs6m75//++1BQVRYVFqSoqyImMPPz8/r6+jRAV56t09vCtp4PD2NjZGNncEBCRgAoj9bW1lNWYbq+wMIiHmtra4GPpfPz+Kurq8DN3w0nbSQNDjU1NZKTlZGVmys3WlFTXYCAgM/X6ebs83V6gXh+hzE0Olt2t8zNzuD7/wsqc3J5hExNWZylr4eHh2NOUVthbpvD/qKioz4/RTAwMaq5z0RERvD4/nV3eOD9/xEueQUFBmQfIjJVrgIriWWL58nN0y5FiSAgIlJMTXaAkIuMjbvBxWRte5CZpv///5qam5Z8cx0dIfn5+BQnW7u7vPv7/lpfZ9TU1GJiYvH8/pWXmoiKjLW2t1homzg7Q+z9/vX9/kBCSsHI0ayZj/b7/snO40hjsMtAROrq6YWFhVYTE0M0NmxgYQApjSknKCgtOlRZZff498UyMEhsyNzXytPT04NfW4Y3PL/m/uHh4R8+hgYngTpUoayxtUUeIBsnSVgeIFx2uSFCnScnLeLm7UVGSpyeoJoyNT05PC0sLv39/Yqh3r7O/sHI0JxbVLS5vBoZGWd+wIyCidLS0gAAAM3U2Iu1/mFgYDY2O5afq+bp8F5mcqCgoElKUFJTVvn6/BERF8DBw2NiYHt7fBgYGHJydAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAAsAAAI/wDHCRR4YNyBggQHCjRz8KDChxBPjTODatGHMhIylrGgQ0cKCwPNuCByypCUAxfLlNGhzIIFIspCGioDsebDUwfMKFNmBueqVcqABv1J1AyRgRZESDAocSCYgQdO0SSwCpY/fsHMFCEQjMu8atUu2KnXiqYEZRIKoCqjLJgEIm8vXEDjotVMqKea3pSYV6rAU0RcFDGo8ICyOmZ0HqApzcKbJM80HNiwgeu8INsKQdrjhWaZVR9a2dFxQMJGHXXQkMPAzoUImgaj4jRDMGfecX0//CVgxxBthWYCdSOiQ4IFmkXMGJoDz8UpKVekFZm3jUchVKPs0LSweEC9Iqd0HP9ni2GSLylvisBmePv3wtu5mRZBNSDmRGWn8AHytSVYEdOnNGZIEo04V0QrXnhV3XXZ6TCOMoax40UwpyijA1tm+MIfAUVwAdtB7QEHX166rXLKBgWUdUpiqxgmBAa+SHMFAYwp48IfGRShTHRSbNDNNpmREEEBNNGmjBQitJhYTmZsscU8EgSj0kKy5eSQbXzltd0pV9RjB0kt8aQMGmgIIYJJujXGzijFSHOACFJII81lmW1WgH0GBUOAewStEMgHx4FUW1SEISQbbhIVVMYpzsyCylIrbfSBXJMYog87AukIyx5zEGCBFEXI2U01QajTBSpePKQSQsDhcxBDUJmh8UFMtDnUU5aEkcRBBHtQmIJpZXygTiFo6OOFCwIRoIwIqPBDwAHSEUCABL/8ckEBkLQCVaGsMoXrQIC9QQBheH07DoVdzGHJFadwFUwKRFR7gRddaHuuGW9808AG43Al7QfaFDIEgvqEhGhOIuKKULsuuNltTq5amew4kAjwzBvtSssFEWCJVU8t46xCgA5XoPLHFQdIy5UEw6KBoAurBAQAOw==',
        },
      },
      explanation: (
        <ul>
          <li>
            관리자가 등록된 모든 제품을 조회하고 관리할 수 있는 페이지입니다.
          </li>
          <li>
            <strong>React Table</strong>을 활용하여 제품 데이터를 테이블
            형식으로 표시하고, 정렬, 페이지네이션 기능을 구현했습니다.
          </li>
          <li>
            카테고리, 제품명 등으로 검색 및 필터링할 수 있는 기능을 제공하여
            원하는 제품을 빠르게 찾을 수 있도록 했습니다.
          </li>
          <li>
            각 제품의 수정, 삭제 기능을 제공하며, 삭제 시 확인 모달을 통해
            실수로 삭제하는 것을 방지했습니다.
          </li>
        </ul>
      ),
    },

    {
      title: '관리자 - 제품 등록 페이지 - 동적 폼 검증 및 파일 업로드',
      gif: {
        pc: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/admin_product_upload_pc.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAALAIcAAExpcS+2M/z8/FCk2mmJ2B4gIB6D0Nr9/53WkwCxC93h6T/FSGNjY+vs6/Won2NlZcXFyfv7/nN1fNPT05ucoR85eru7vmFlbS0vMMvLzAEojQ0rbOzs7DM4R0ZJRfb9/I6Ql7e/z2pfY/z9+iyL1f75+PHx8erq6tj+/1XF+vX19YeIiPLTzuhbTIfH/n1+gE5QUJ+fn+/v7uzn4efo5/r8+oqKjPWooQoICPb38J2fowJNxbCsp4SEhOBDNVZXV9/f366urk9OTgAoiXd5eh0iIR0dHfPz80ZHRxsfHv65rU1OT2VlZUVISHNzc/Lx446VktXV1C0sLaCunFpaW9LS0gAojMLCwug7MdrVzd49MxoaGlTI/aysrODg4kNER/H4/jqy7RAmYuLi4j0+Pj9ERx4iJZudo9ra2qbP77a2tePs/GRha/7Dvfn5+JKVk0ZKSGFhYVLH/Xx8fEZGR5CXk+Tk5Pz7/lFRUeHp9jEyMJOTk1LG+/n5+khITP77/f/+/h8dHcbM1RERElxxXBktZ6M3PLBgT15vpLqhgzCI2hKsGmxxgrqmlDY3OMDCyf2WIQtVu57dl4mIiP54b9bW1l5eXiUkJQQngaSMlIq2/gk0nZz+nEhJSfO1p/r9/A+A4TKCzXmAiOtDPb/CuTI/WykzFieo/qKjpR89hJCQkJGCe1NTVEpLTNLW18jIyM4xOgMqkKOHfDZSZfSsUdvPvB8xZwp9v/q3CKurqm5eVHl5edfg7wRPy3KIu9u1lhseJuzs6kNEQ+Hf5VbG/dt8d8NLPPb29pWWlGxtbebm5t7e3kO58s7c7KamqLm5uoloV+NCM/6Vk+/9/Sae27fi/t7n9e3t7Xuwft/w/h4gHJCo0s/Q0ReN0f7u6QUrg0dKTUy/9vOmnbGxs/5PUgICAicpK/21OPSuoP7a0////+T+/Nr+2v39/TpZpwAAAIuz7mZnaIjR/vr6+zA0M5aXmpCdqiio7eTr+QAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAALAAAIewAFqBtDo4YbN/PcHFt4pF27eUfmOZwH6NqJeRhr9DmoUICAecfmeRyZByFGjB5PovToUACNY4AcOjzmRmZLm+0QjvR47MixnQJsQgQatB1RmwIiEl2KU0WfpUdt6oS6EylFQFjVfVSHFStSQBCPiD1ixwsQZWPF1mwXEAA7',
        },
      },
      explanation: (
        <ul>
          <li>
            관리자가 새로운 제품을 등록할 수 있는 페이지로, 제품 카테고리에 따라
            다른 입력 필드가 표시되는 동적 폼입니다.
          </li>
          <li>
            <strong>카테고리별로 Zod 스키마를 동적으로 생성</strong>하여
            런타임에 적절한 검증 규칙을 적용했습니다. 예를 들어, 카메라는
            해상도와 프레임레이트 필드가 필요하지만, 렌즈는 초점 거리와 마운트
            타입이 필요합니다.
          </li>
          <li>
            <strong>다중 파일 업로드</strong> 기능을 구현하여 제품 이미지(여러
            장), 스펙 이미지, 데이터시트, 도면, 매뉴얼, 카탈로그 등을 업로드할
            수 있도록 했습니다.
          </li>
          <li>
            파일 업로드 시{' '}
            <strong>프론트엔드에서 파일 크기와 형식을 사전 검증</strong>하고,
            백엔드로 전송 후 <strong>AWS S3에 저장</strong>되도록 구현했습니다.
          </li>
          <li>
            업로드 진행 상태를 표시하여 사용자가 업로드 상황을 파악할 수 있도록
            했으며,
            <strong>React Query의 mutation</strong>을 활용하여 성공/실패 상태를
            관리했습니다.
          </li>
        </ul>
      ),
    },

    {
      title: '관리자 - 제품 수정 페이지 - 기존 데이터 로드 및 파일 교체',
      gif: {
        pc: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/admin_product_update_pc.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAALAIcAAExpcfz8/AGwCxw1eIl1Zf705SS6N6GipyyL1TuNy////0hKR/o/QCFAh7u8v7WYjFtbXJucn/j38bq5vS2L03JzcmtSVv74/pycnf39/VdWWXv+gCZTaqKjooSEhP75+rS0tEFBQnR1dr/AxYuMjQAnjOjq7RgZGeDg4FBRUvT09NLS0ujo56eKa5WWmictPGpqas7P0DU0N7e3ty80Ltzd3db+/+bm5gesDh0dIaTM/i4uL6+vrfv8+z64N0RIRS4vMiIjJGFhYQApicDEwLCxuAOwD/7v1f66Vv/+/NHj8uvs7KGenQ8ODyZIdysrLG5tbhOYE3x9fVai/tLS1J+gpRodHTMyMlNUV+bi2Wdkaev4/pSVmjbfPyCkJ5yYmcPEyfX19oaIiPr6+UpMQgQDBAkocmNjZElKSaanrPr6+zIxMuzt7ZydoczMzJiYmi81MPj39HBwcYSFi/r7/iA7f/Hx8jQyM+rq6oOCgnNzdJKTmJ+ent/f3wApjcnJyP78/ePk48PEwyEcG9z+/s3O1iuK1Vh4xB4/hu/++2JVYRqR5Glrddv2/j9eVvjo05SYnfv9+qLamtSti66vst/f5MPr/tbX2OXl5HzZd93n7w5r0Yez/gAAALa4wPP7/k1NUOsvNZCQkuPj4+7u7jxhuZzblbS1u6ifmyo0S8TFxICBhomJi3WRuj27NgaxDnlyaPLz83h3eBISFRdSrOvr7hclUlNSUvckL/X19UZgm2JmZv5kYfj49/qsFgBNyCQnGzo5Ovj06DAyNXFydqqOiHt+lD09QGZiYxItcrja8r+oi2uV5+Hh4gw0lCcmJ/n5+DUvK5OUkwEoj/z7/m9fZERGSti1oUs+OJman5hIRmBOTFpXWggJCsbK1b2wpaGDVIqfvv73776+vvR6SOPn7dj+2lh9XkdMSNfSxLf+sndiZKWmpZ+eoV5eYQInhPjOt42VnMGciaysrBkrYB4lH+jXwOvr7MLDwv759gAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAALAAAIogADKMBUrkcvaGN65YoVJlaGDGNU9HjYQ8ESEwF6aOwxBhq0XhwT9ghAkmS5g73UqAkTZmUvFb1SknyYAdrAGgrUxAwAyE6hWDNp1lTQ7JKCjCST1PJmRyhNm5f+KDDYK0ASO0yPOoUqaGqYqleZZgiwVcElVV7BYm1KVijXtFbXjnVasYbUDAczKMAaS4HTAHYCuJmRQQUpO7l6lQODJ2+GgAA7',
        },
      },
      explanation: (
        <ul>
          <li>
            기존 제품 정보를 수정할 수 있는 페이지로, 제품 등록 페이지와 유사한
            구조이지만 기존 데이터를 로드하고 수정하는 기능이 추가되었습니다.
          </li>
          <li>
            <strong>
              제품 ID를 기반으로 백엔드에서 기존 데이터를 가져와 폼에 자동으로
              채워지도록
            </strong>{' '}
            구현했습니다.
          </li>
          <li>
            기존 업로드된 파일(이미지, PDF 등)을 표시하고,
            <strong>새 파일로 교체하거나 삭제</strong>할 수 있는 기능을
            제공했습니다.
          </li>
          <li>
            파일 교체 시{' '}
            <strong>기존 S3 파일을 소프트 삭제(Soft Delete)</strong>하고 새
            파일을 업로드하도록 백엔드 로직을 구현했습니다.
          </li>
          <li>
            <strong>낙관적 업데이트(Optimistic Update)</strong>를 적용하여 수정
            완료 후 제품 목록 페이지의 캐시를 즉시 갱신하여 사용자 경험을
            개선했습니다.
          </li>
        </ul>
      ),
    },
    {
      title: '홈페이지 - 제품 카테고리 소개',
      gif: {
        pc: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/main_pc.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAALAIcAAExpcQACD/nXLdguRFRMUxIXIpa442+ZysxvfAIxbQAAAWBufZKguj6lcBYpSUFrlU54pNTNsQgwUuvs7UthfVuRpLmFLebl5YN7OBRAZyBltfz13B4qO+fo6F5lcsDEysXT5wIwi+SvMhUfL/76cjdIYFFZZnCIpPjrug8LD4KYtWWQvy9IZ/39/ilYdoiq46ufmXJ0eB1hrW1rbPT09N36/qe/4gDASVp8pjEqMFdhcvvsphpKlt/IiIGNnJSLgjU7RfLk1zE1Qye92tra20kzPIgjL0NZdJ6psOnj3fb08vpyuTZEVAQMFQQ9llhwjCA0S52bmkBOZFuQwM/Kwfvsqz+WxNDc7R8kLgs+hV+Htggva8fdtKewux4/Ui9AVjlPajp5wfXx7T+DbgEOHTRiiwZETxIgPODi27a0rPL7/nCUvG54iQMcOVpbXw0taYOCgwIDDlt0fEhOVD1YeEBASWFwf9PPyh5CVUxmgPmRbZGNizcwNPXo3IGhyAEPI1R3miBCgZuOiBZn0VFIUh84UKq4zeTj4gIWMCV54gUnUVuAqPjZD/Pz80FrnQApjDMzNADAR/bz77XK493n8QcsU6CroGKHqzc2Q1SEtWB5l9/e3j8zO6VDT3SDkwAGFAw8diIuO0ZnjPj490xHUYuqzyUlJUhETmFiZMPBvAEAB1dVVlpqfOrq69rW0gIYOQUpVSRFZCkuOD9hf/X26pCXoPX19BdbovTn0k57q4mcuAEeRRceKgEMGgU2gW6OshQVF+7t7U5bcu3p5omMkS08UVBwlfHx8Pn7/i9DXHqfyjdASyo1SUtPYEMyOwO8TFBSU3qVtwITJxxmVPLs5wxImiozQAIqYhwuSU1ynkJIUfLx9TdXdxEPFRsdI/nopEFkiioqLPv7+xolOeTk5FBqimGEqEYxNr36zPDi1hYXHU9JUh48UmJYUdnY2CAoMygiKF6NvfTy7jszPfb08AMjSu/h1P/4xgEBC2KQwBkxZPhSfAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAALAAAIwgDjxGnyqeCnAAQFNlnYi4y0PyPwxfkkEGGvP70+NWRIpkABU/gkNiTzh4zJJmS6qfOoDlgKdapUBTgz4oyDMwVG8PIGzJu6FCkIFlCgQJXHcSZMLKsDBEgdSJ8kxlHVLaaqOLxGcOAwrkA3Xli6hcQXsxtHRPV27WqDCGPDgwLxAUPUph4sUIF4ZNlybW2bv9JIdny161oCX06qZfGVIC2iV/Ve9QrwCZEdO08yP9HEuXNnOx48sGLVorTp06hPEwkIADs=',
        },
        mobile: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/main_mobile.gif',
          placeholder:
            'data:image/png;base64,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',
        },
      },
      explanation: (
        <ul>
          <li>
            머신 비전 하드웨어 전문 기업의 메인 페이지로, 회사 소개와 주요 제품
            카테고리(카메라, 렌즈, 조명, 프레임그래버, 소프트웨어)를 소개하는
            페이지입니다.
          </li>
          <li>
            <strong>Embla Carousel</strong>을 활용하여 제품 이미지 슬라이드를
            구현했으며, 자동 재생과 페이드 효과를 적용했습니다.
          </li>
          <li>
            각 제품 카테고리로 빠르게 이동할 수 있도록 네비게이션을 구성하고,
            <strong>Next.js의 Link prefetch 기능</strong>을 활용하여 페이지 전환
            속도를 최적화했습니다.
          </li>
        </ul>
      ),
    },

    {
      title: '제품 카탈로그 페이지 - 카테고리별 제품 목록 및 SEO 최적화',
      gif: {
        pc: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/product_list_pc.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAALAIcAAExpcfz8/DVHupOTlOLq/kURFQD/AN4eOkFJcTc2N8fP32JiYv///4GDh9CNo3V9q87W5aer1b2r78Xr/tDS/qemp3XP/WyZrN49YYHB7iMjQV9hZ2JfXQApjqSSh0hdcXZqaOzs7Lm7zSI9gB8eHt41TU9p4C4tLFKKjOX9/vhjrkFnr/Zggefn6Mlhf2VGR+Hh4o+jrg4rdpnc86I+VZCs/q2vscJ//V1zeSMiI3aSpMbG/lySqDA2PpeXlvPx+n6j+AslnDmCfIWd1F+SpkhITECl0oaHiPf9/tCKiBYrUJMwNM/Q0Pf6/liVrLzIzSE7nLDB0Z2eoF5lbzlJ1QwMD4SgrqXH2zk5Ohk2dv7i5Xp8evb29ohyeQ4QOrieo7ve6f5Icf77/EZOm1JTU1eHonF52766vS0vNamsr1yMk36PjrzByIsVIZersbR89HOL0tLS0jZTVN/f32Zna+8cTxASJBUWGjRteT9CR/5/rVlWVZOWnk5PUMnR4Rw0ucrJycrK0/0jagQngOTk5MzU3/n5+TEyNMXI0nXL+jtXqmye/jM0NAAAAGVdVJiZnnV2efPz83bK/bO0tnJxbf/+/VqPocTS2hkhJ/lRftjX1f5eoPDw8GgWG+/2+fb3+7K42KOhpDw9PV5eXomVpCgjJPz7/sDByeXq8IuLihQWHoq55OXm5VyLntLW4sPBvb68xxUjS/r6+snt9QMDBAoGBsd99trc5EVDQ0hTV+T4/mtucRAkcv75+zIxLpegplyMoLfCy12CpnaNpQAmibKamMjQ3Xd3d0hNUo2QkzlASCcpMn6AgREQEQYpet3g6nXL/b29wfT09BMTEyJqWWWVqe/w9v39+pqamdvb3J+fohkdIGVcU1Fye/oiZikqKnJzdXjI+v76++nq7ZzU/qKkph48gmReWff8+1tfaSclJhsbG/39/eHk7qerrutRahYWFx8gJS1v2V134WNaU7q6uyUkJcTDx/j4+MPI0GRkY9fd6AAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAALAAAIugAZcBrHIEAldgxMmWJXKYCsAAzZIbxXb9KraNFe3dvIhIkNQBpfibw3quSCXXRG7RmlrwGzDVvI7IJUsiZLcOAW1KRzDNyWUYxa4VgJqOjGe0WN1rsXJ1q9S/mKMphKlUGlhJ8MyUJYlYEsWSE4BeDCBR8XWfjQfl37lV0ATlo5wSWLLxIXadLIRpIoMVKASICksTNUFp8hQ2YN82UHFzCXSrK0PvwqebEsTiGYcJImNxKnSJ4/G5IYEAA7',
        },
        mobile: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/product_list_mobile.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAArAIcAAExpccHH0vD1+6WmrHKZmYqZy6WlpRIREXaMyL2jf6mopyQqLgAgbpGXtJeYmHiNllZqnw0PFomJigQllvv7/MvKyj1LgmdoZ+X4/qaksf39/P/9/IkeLbeL/ntQS5/D2eLt/kxczv5WeYZcbwQeXKampubm5q2trT9KT1R1yJukq1eEpbS0tL3AxC02RRY3mfT09AwOJm5n0A8QED1ViZaWlwD/AKWSlqqxsxckq5yozbPW/uORodDQ0NLW4tfX13Nyc3eJu5KRkAAAAczO1aK9/k1NT42j2/6zxAICAlRSUGRjamh6sqGio+zs7G+BucnT4f5jrbu6ujIKDrdCUqKemOjq8RokUR8eI/r6+pWVll9aV+Li5AAoi6+tt0RKWdXPz6SlqmV1tgAhbB9uW8eg0ISFh/tWfXSTsWJiadnZ3BY2gRkcIvHx95SmtR0RGt7e3d43T7O2vmV0nw0gVcTIzb1+9YCAgKHi9Pn5+Tc+RS8vMdTU1UpmbxcWGEVERqqqrQ4rcN7h6+x3i8TDw/Py8/P4/ioqKjNIlUdLTbCyt3d5fgcFBhUUGE9rvv56qwAmiO3y9/Vkt0lUWqqssJCSlOrq6nd4eB8iKP78+WNcVvHx8c7W4KSz2YGBhWuR7Q0NDTo5OLfA0ODg4v///1GM2zM1N/v7/hISGRkSGVtbW2lsdUNbno22/mJiYrslOcDf59VzfLOFiyU4b+z9/j5AREBUWb27wwMpgpyfoff39w0OEjNC0AQlfK7K/uKGlmdcVWBgYQApjVBVWdjd5hoyti8sKXR6iO3t7wEECiEhIcfl/kFPUhoaG1ZWWTdYvqF/bT08PRtcT/77/e7u75aYn/Py+7i5wi+AbcTM4mBiYU9YaridoFtmbeNSdE+EeYODhEpKS1lbZf78/QEgaauos+Hm7XGKzrvByau1zIGIkPn9/f39/QAAAHia/iQmJw0ldf75/C4/uI+PjtLS0mxtbtPY5LTB0r28wsjP4sDBw8fa5JeWjcvW4yY/hQAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAArAAAI/wDZkSLFrqDBgwgJ6qpAJI+GLBQiSox4EEYWUrm86HLCxZITaoU2ObG0iR0FkyxMsIOhi0IWiBNdwoyoK8/Amzhz6qzAk2cPemro/TChRgohS/Qq9FiqqmnTYBeA1JMQ5hKqd7nqOVPlzJmrr66CqVqkdR4lcRGGVVV14VKlr8GAmDEjpMadXHI8eaozQKuRYcPA1rsERKqrRZ4u3QES7JIDVWnede2qxFlly0oyd5Vg5t07JYBCiw594gTp0viu5bpkQOfAiDfzmMgZ0yUpEywAqSGli1rElyfZbdhwUAOcHoVIBQ9eUJeVSNCjWys40eRJUpHaCMpnr1+/SFZgwP8Z9WOUGj6WDOqCbqX98zZZdMmf35L6zJjWa1NnmUdXIRj9WRRfHjQt51FvJliiCwwmyLeJRRTAcNJEEJl0X3XU1aYhfgh16CFCzIGowYcCUaBLhwqFaJADq6SjHHWkVLAKGtS8WBAphShhiovLkaIFJg/o8mKEQpo3jnowkLJJD0kGB0N5cFiiIHXmRelEIQfp0hEXJoxyoklScskFNdYVlIclJjihXBZ5ZMEONWi6SQGBJ4kHBxe/tZQFF6PAAYNJusxk0IRlUqcBoRmS8tBBFJGSx4e5tGgjBTGuUk2NzOFoxB5yTEpKJVgEOaR8pATF3IKkUFMBps39wAUXTnw6WRAXanQkYZYd3elEmSaYwOWUJpkp5a4RtfmmEyY8OidFdnJBXUsU8AnHl9C+ZFAe2LLpZkFsttlmQAA7',
        },
      },
      explanation: (
        <ul>
          <li>
            카메라, 렌즈, 프레임그래버, 조명, 소프트웨어 등 카테고리별로 제품을
            탐색할 수 있는 페이지입니다.
          </li>
          <li>
            <strong>서버 컴포넌트</strong>를 활용하여 초기 데이터를 서버에서
            렌더링하고,
            <strong>React Query</strong>로 클라이언트 측 상태를 관리하여 빠른
            초기 로딩과 원활한 사용자 경험을 제공했습니다.
          </li>
          <li>
            <strong>동적 sitemap 생성 시스템</strong>을 구축하여 백엔드 API에서
            실제 제품 데이터를 가져와 모든 제품 페이지 URL을 자동으로 sitemap에
            추가했습니다. 이를 통해 검색 엔진이 모든 제품 페이지를 효과적으로
            크롤링할 수 있도록 했습니다.
          </li>
          <li>
            제품 카테고리마다 <strong>서브 카테고리 필터링</strong> 기능을
            제공하여 사용자가 원하는 제품을 빠르게 찾을 수 있도록 했습니다.
          </li>
        </ul>
      ),
    },

    {
      title: '제품 상세 페이지 - 동적 메타데이터 생성',
      gif: {
        pc: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/product_detail_pc.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAALAIcAAExpcSUiI1yPoh83eEJYZPr7/K2ooMbs/vr8/L69wisrLRZYl4eIivz8/A0OEP719fn9/NjY2J0xNPX19SQkJqusray0uv77/DEuK9nY2HNzdGmXruPj45ual9/f3+Dh5f/+/MbY48C6u8qpoU5GQ6uvs/76+wQCAu3t7e7v8/Lx+f78+mVdU2VbVURGTo6isL29wYJ1dM/P0Pv7+1cdHt7j5XWPmxcXF52dnrOrofn3+gD/ACUpMf729MbMzwAAAbm/wU5LSf39+1A+OzMzMyQkH/Ly8x4+iH+AgeLi5RAobuzs7GUbHbu7v7zCx+/v58fHyHNBQQYoeYCUoUdKTos2Obmuofr6+pW//i0yOLrFzainpUJCQbOztPn59HSQx2pqa4csMV1dXSQkJGhwfXt8etbW1iQXFlJUWzk4OVpVUN3d3Xl4eR88gsTDwZWZnHEgI2aUpp2go/P09UB8kMC/wNUoO/39+kBCRsDIzWBhY932/ri5ueXl5AkJCo+OjqOioOTk5mGWrvXy7oSEg0dHSCIyNxs6Tx8fIv7O2XaduGtscB5XcfTy9RgZGz5elFxnev33+FlXVevq6t/f4tLS1PHx8Y2Kh3+o8vj4+IdjXfL6/iwsKuj2/tzc1sDBxXSMmE5PU/////n7/vz7/uLf3CIiIlthbdPW2m5gXJ2uu8bJzCBDiCgoJ4+hrWWJl87OzT09PkRrsuTk6Ht/hDU1MRMzbmVjYjk5PWZoY2ebsdLg5/r7+Mk+RGRVTpGSk+nq6ZGUmefs7x5ctLTE0N3+/vf8+HaNnWRcVW5+iTIyMFUTE9rVzkdMWKHl/m9qY52prmVdVSYmIufn6M7LxmhoaI6nszAvL+7u75xZVIjM4vX19gIrjd0+Q9vb2nZ2dnx2dhEREsnQ0mVaVFBPTF5kcry9vU51z6Slp/T9/f39/Rw+gDQzNQAAAAAojKHM3J1udN3n7Y+itxwcHDg4Nq3G1dLS0hkmTDIyL/749i0uLlZbZH2MliAfHws6cwAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAALAAAIigBFAfswI1OmbUIy6bgyY86ETFeuGFQnygg2IVcaiBJ1pUCDggYZzpihrqQ6jcC6eAMxzYgokzBLNpgpygyDLlc4ULIUs2fJCd4oZeLQB1imBj5NirK05kOmPjyRJvU5x+C2qSdnjpypbutMqVhRAMMa8+gMIxOmSt02YQ4KS0uWGLFEd86cbVIDAgA7',
        },
        mobile: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/product_detail_mobile.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAArAIcAAExpcR85fM7My4qKiuDf4Ck+Xt7d3vz8/FhXWOfn57W1tYOChOzt7l5XWElPVoqJimyFlK60ugMDA1mModPe5a3DzsjKyj1UlVlcYtjg5fb9/Pr9/HRzcr/AwcPGyTM1Ora5u+bl5l5ja9rW0paOhdfa3qjg8LKztN7h5UxQVnq90pOPj+Xj65equjQ0NMG7sPr6+5CmsQoCAu7t7ZSXnWNteH17e6y4wFyQoRctX/T09B0fJPv7+zhgdZaWl8LCwq296HOPm3Fxc5ydnvn3+kVJVAD/AIWGh8vw/kFBQmdveFpxftfX1zk5OWBmdqGenkVITqSlpVyfuhMudWxsbFFWXBsbHUhHSPn39KKhpG93fwEBAWpoa6SnrKLY/nx6end8gPPz87u6uoyhryopK3ySm/76+jAwMomIiDtxg+Li5HSOmnuWzgkJCtzc3Xd3eZensCImKmVkZDA8Rerq6z8/QEBBRvDx8vHx8s/W4dz1/hpAeKurq6jP5VKDlMLS4Nvj5h8eHyJJfDFRqvLx9Pn8+/z9+sfGx+b2/oGAgGFlb/n17ayusSgmJ/n5+SMiI0NDRmJgXUBFTEpKTc3f6H6Hkvr6+VuLnluNpF9cXEZCQGCSpUJGTGKWrO74/uXd0T5ARV1haHmPmf35/hQTFD1BRTtDS4yMjfTz91JTVPX6/vr6/riwq2tyel+DskRRWf///zozMTg1N2BhYpCepzs8PpeUlPz7/jExNrW1t9TU1Ly8vjs/RLvBxXSgwyE/hzc3N+z9/uTy9mGVqo2Df392caWmqP/+/myWqvj492hnaG9ubwMqjTg3ONTLxmeZsGiI2RcXGdHW2Tk4POrq7rGvrxs8i1qNou/v73ydqyQlJ3iOl+Hk5359fWqQneXk58vKy/b29qmvui0sLrfBybWytWibsNLR0v39/SJTY7/GyvPy9bS5vAAAAKSsrig7TZKSkuvq6LnCye/t8XmNnO3z9drZ2RUrNw4PEcXf68zO0QgodVBPUSUlJmGUqAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAArAAAI/wDRwYKFrqBBdAcQHkR3DF0yN3lQEWzYkOGxigiTHYA1hBaheAkS0FGjg8EMOiEcCdSRCxssPHhg8ThAc2ZNHgWPWUrgKKHChUALEkTHwybNo0iR4iRatCkPS1AtOW0aVODAgVWD6qDjhgkejFkFvpnUbcCJMLB8VtWZ6I2FAal2gc1KRciuWbWioFUb9FgiKozqYMhlKWxOQvo88GHEIK3hhFdtGoYh8EDPgXOBosqVRRqqcCAUuFkbDs+qFRw4oMImhNEuWGF0DDV4wBKqc11OEHJ0CEQJnUsLHpiJLpwjGKtQBQ9u8NhVWBcZIuRrEFYIcOfOudHFpHBYWOd+/M04xATcoXCZF4bBEyYMNh3Yks0OCgubPQNqCNhTo8uAJerV0XEOAUzoYs859hAQU1WwMMCdGm7Yw4QbImHDIB32hIBHODPoAN+GDDLARH4QJnNRdPTRIUCE4MSTFoALJdNhGDNYQpFhPCQTTjIwqGRJOMYlQ9xBx4TDxH0ssABLOG64EQIgyQR1FFGFHQWDVFIiNV1CXCZV0FRghmnYmEANVxSZzWGGJkNMHKLLD2seY8+KTMDYl3PQVXUAHgyEY4kjjsSXzKCAFgroAQEBADs=',
        },
      },
      explanation: (
        <ul>
          <li>
            개별 제품의 상세 정보, 이미지, 스펙, 다운로드 가능한
            파일(데이터시트, 도면, 매뉴얼 등)을 제공하는 페이지입니다.
          </li>
          <li>
            <strong>generateMetadata 함수</strong>를 활용하여 각 제품마다{' '}
            <strong>
              고유한 메타데이터, Open Graph 이미지, Canonical URL을 동적으로
              생성
            </strong>
            했습니다. 이를 통해 검색 결과에서 제품 이미지와 설명이 풍부하게
            표시되도록 했습니다.
          </li>
          <li>
            제품 이미지는 <strong>Next.js Image 컴포넌트</strong>를 사용하여
            자동으로 최적화하고, 이미지 갤러리 기능을 구현하여 여러 이미지를
            탐색할 수 있도록 했습니다.
          </li>
          <li>
            제품별 파일 다운로드 링크를 제공하여 고객이 필요한 기술 문서를 바로
            다운로드할 수 있도록 구성했습니다.
          </li>
        </ul>
      ),
    },

    {
      title: '문의 페이지 - 이메일 알림 및 Rate Limiting',
      gif: {
        pc: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/email_pc.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAALAIcAAExpcW5rZQ8lZNnl99LS0nV1dSwuMhEREd/XzcjM1gYngG5ubyA3c1dXWBQcLxgXGNDS/qG87tvk9+7u7qKlrNv9/ACnMdrg6/T1+O39/B48Gru1r3+q/iSvXr+Wdp+fn9ze6gEBAt/f3xEWKOXm5jc4QEFJWr+rp6n+qN89NnR0dKSkpL/BwoHK/gEnkNTV1yygLxgYHW5wc/T09P709IeXxBMhRoKCgh4dHoSEiO/w87W1tKOrvfb3+naMx/n8+yhPqd1CMTMyM/Pz+Wp3kAIVQ+vr7NDX7AVk2vv6+/z9+xGpGkFAQfn5+ePMl+Xl5QGvEHNzc/n5+tve6R48gyIiJAgICPPz81jUguz27uhcUtzd4wW8UHdvaB8/iZSdrgCvCv77+mpqa15dXY2KfePl6tXW1v61s2RkZGr+hRw4fN3d3d/f45emwGlpZb3Bu/78+t3+5PLz+BO3VMrmzqbWqcvMzuPs/KLQ/pOTlevv99LT1fLy8o2Njm5ubmBhbkRFSevs8/z8/LS0tAAni3l5ekiD5QCuCRUsaGDJXfHx9x8tXampqqysrjI+W+np6rr1y7GwsWhoZCwvKyJfwUTFQMT+2OPj43Fxcd35/vH5/mdmaUtMTfL0+MO0rMbEteTk439/fwMrlBFaujw5OP76/v///5mam0WdXvr7/vz7/oiJjGBjc/5nZzpsPdPXz+jq78Pi/mVqemlpaQsylZrakq5LQRgaIFxpkOfn4x3AIgC9TiU+gcfHxr6+vv/+/mBgYfHz9pZqWAApjQ7BSWiN4CknKFNTUyopLtrZ2j/2gdfj+I33kmmFasDO+Tc1Nufn6BobGmuSjTmY/l9oaGhoaJiwmS1Jjtvm/qioqH5+g1BUXgcqfAK8Tf78/be2tvb29r29vYSEhHNmXODg5vT9/fr9/f39/STOZ/Hy9f7j4UJiukdfowAAAOLr+eXr+Tk6PP75/N/f4HFxdz67NpF7cebm52xsbNnZ2fL28GdnZwIrjOzt7ri4u9fX2AAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAALAAAIlABNTTBi6pzBggbPzZjRREoSDD3ORWjThodFHhEwYgzWUJAgKT/OrfPhYyRJkyQDNVnIcgacl+d+/TJlaiZNKQ6TNOHDU4cOnj0uARLTowdEnEivKFW6EByffr2SSE3i0aOUpUwZgqs5tWuSq1ivNBHUBFyShGjPJQl75eyvtGh/rQ17Fm5CQV/D8mnJdyGfCT+VBgQAOw==',
        },
        mobile: {
          src: 'https://storage.googleapis.com/leehyeonjun.com/humming-vision/email_mobile.gif',
          placeholder:
            'data:image/png;base64,R0lGODlhFAAsAIcAAExpcfHy9enq7Wf+cRcYHgazEEz2VX5+fmqM4O/v8sjjxPr7/P////L9/gCwC0Rdquvr7NfX17j3tYODgxsbG7O0tf39/YyLjF97xjRCavHx8V+hWr3+uvf499T+0/b29ZGRkfDx9HJzeMLDw/H1+hEREWaR9ufq8S0tLenp6gKvC9P9//5XW1Fqt5vF/+Hp/vr6+QAojx4nR5Cev8fL1AcnfystMe7+/5zWlRQaKPr6+zfnQoeIiezs7h8+hrm6ud3d3dnZ2ff4+46Oju3t8SFHsPTy8QgJCf6sr2Jkaurr7v/+/oWFhVtsmycuOlBXZp+goNTa5YmRoVxfaf72+Ofp7lFUWSBAi4WDiAwoch4dHgYqgmFhYf7j5T8+P7a5wEhKUtTU1Obr7uzy+ELAPKawxuDr+TJQpqSlpQwfUUxlsuLq+Pv+/QApjkBIVP78/XNzc+/x+Ozv95WWmBgYGF9kdZKRkrCwsDVcvRYaIvT7/v78+tLS0iFMsP76/KWtuwApifz8/Pn5+dr+62aIYs/T+x8zbOPs/DMyMr3N/puhr8nJyffKx9ra2bfB0goyl8XN3hQpZDg3Op6w4fPz8x86f802PRfAH3+Ci7CzvOLw/n6X2EdHRwAAACUkJpmZmt7i7IRRUcpzcuP7/gAni4eLkvb3+jzGO/77/mZmaCsqK73h/l/kYTzsRpzclFFRUbK60j67NqXQ/4fbgTpXqIuy/uHDwl1dXam+95Scqo6f0UBpyi2mLoWDhkBOfN7f4SkySM/T4+70/CrQMpSUlOzt8Pc8QL29vdnW2o3+h2Vrel/JW97k8fT19Yquhd/24TxBSx+kKSpEjBgfLc/Q0Ont8h2lIdPW9ws8CkBJWt3m9uXr9kidQYDReHd4erjE4oubynZ+jqrkpfL2/vhnXKXQofb8/qb+oCUsOeRFRqqqqxcoVNDS/vv7/iRPs+7v77Ozs3m4c+Xl5WxsbHmNwfPy9uf+5eTs+QusEev3/AAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAAACwAAAAAFAAsAAAI/wAtBApkoaBBggURJhRogYGFJQWXSDQI0aBDGD9ygdrTrNmHZh1gfOjg8WGHX4IYjEAjBAIEeT1SvGvWQwOEFA17VKC0REdKiUAnPqwYSFAgHUiFIF26dKBCiAyiSp0a1aBVC+CyaqXHlV5WOQwUFiRFlmyNM2ponalBChSDBVcfyZ2L9sGZR2c2juzAtwOov4CjCI7yVwOlw4g1fFjMuG+HxZQ0SJ5suKPlyx0Zawa5ZODVQBWvLhHUAapViUavPiTNIEQwSlEDNSo2Qh4DGEthwODbOgqRAAFC/KpSpRkDNlGRM9BRuqHAgZ0ZhPGGBo2662gWdWDwQbLBDhoYwPaho0WSpxIlOt3aLo8Pn54WIPwSAoeCJxSetJznUpo56b7GHaCFKp4QqEUJ/EEk1EM6MOBNfgVSkN56DLxDTSN7SCQfDBF8Uh0UH46wHSW/ANHXO/K80xBVyzXHQE9IDbWbY4LMuAR4Ony3mFgRsSaPdhAFIo88vzR3GmlL7LaXY5rxBcNozYU2VFAO9bidBkB8oKAGKWjwjkw95Ljadu9EoCVoKPZwE5elgYakcxQFtUSVY3YmlmdOPfWmanxaKWWfRxoJqGh7Dhron4ZCieigihpKaJt5RiqpojM6ZilfHzz5ppycAlWQIJTAIMiopJZqao3NBAQAOw==',
        },
      },
      explanation: (
        <ul>
          <li>고객이 제품 문의를 작성할 수 있는 문의 폼 페이지입니다.</li>
          <li>
            <strong>React Hook Form과 Zod</strong>를 활용하여 타입 안전한 폼
            검증을 구현하고, 이메일, 전화번호 등의 필드를 검증했습니다.
          </li>
          <li>
            문의 접수 시{' '}
            <strong>Nodemailer를 통해 관리자에게 실시간 이메일 알림</strong>을
            발송하여 빠른 대응이 가능하도록 구현했습니다.
          </li>
          <li>
            스팸 방지를 위해 <strong>IP 기반 Rate Limiting</strong>을 적용하여
            하루 5회로 문의 횟수를 제한했습니다.
          </li>
          <li>
            고객이 작성한 문의 내역을 조회하고 관리할 수 있는 페이지는 문의
            날짜, 상태(대기/처리중/완료), 고객명 등으로 필터링 및 검색할 수 있는
            기능을 제공했습니다.
          </li>
          <li>
            각 문의의 상세 내용을 확인하고,
            <strong>문의 상태를 변경</strong>하여 처리 진행 상황을 관리할 수
            있도록 했습니다.
          </li>
          <li>
            <strong>React Query의 무한 스크롤</strong>을 활용하여 대량의 문의
            데이터를 효율적으로 로드하고 표시했습니다.
          </li>
        </ul>
      ),
    },

    {
      title: 'Turborepo 모노레포 - OpenAPI 타입 자동 생성 시스템',
      explanation: (
        <ul>
          <li>
            <strong>Next.js 프론트엔드, NestJS 백엔드, 공유 패키지</strong>를
            하나의 Turborepo 모노레포에서 관리하여 코드 재사용성을
            극대화했습니다.
          </li>
          <li>
            백엔드에서{' '}
            <strong>NestJS Swagger 데코레이터로 API 엔드포인트를 문서화</strong>
            하면 자동으로 OpenAPI 스펙(openapi.json)이 생성됩니다.
          </li>
          <li>
            <strong>openapi-typescript 도구</strong>를 사용하여 OpenAPI 스펙을
            TypeScript 타입 정의 파일로 자동 변환하고, 이를{' '}
            <strong>@humming-vision/shared 패키지</strong>에 배포했습니다.
          </li>
          <li>
            프론트엔드에서는 이 shared 패키지를 import하여{' '}
            <strong>API 응답 타입을 자동으로 사용</strong>할 수 있게 되어,
            백엔드 API 변경 시 프론트엔드 타입도 자동으로 동기화됩니다.
          </li>
          <li>
            이를 통해 <strong>타입 불일치 오류를 사전에 방지</strong>하고,
            수동으로 타입을 작성하는 시간을 크게 단축했습니다.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section>
      <h2 className="mb-4 text-4xl font-semibold">개발 과정</h2>
      {PROCESS_TIME_LINE.map(({ title, gif, explanation }) => (
        <div
          key={title}
          className="mb-10 border-l border-solid border-dark-disabled pl-2"
        >
          <h3 className="mb-2 pb-2 text-xl sm:text-3xl ">{title}</h3>
          <div className="relative mb-4 border-t border-solid pt-4 dark:border-dark-menu-hover [&>ul]:flex [&>ul]:list-disc [&>ul]:flex-col [&>ul]:gap-4 [&>ul]:py-4 [&>ul]:pl-5 [&>ul]:sm:px-10 [&>ul]:sm:py-4">
            {gif ? (
              <GifContainer pc={gif.pc} mobile={gif.mobile} title={title}>
                {explanation}
              </GifContainer>
            ) : (
              explanation
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DevProcessTimeline;
