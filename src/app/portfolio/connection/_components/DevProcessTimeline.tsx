import { Fragment } from 'react';
import GifContainer from './GifContainer';

const DevProcessTimeline = async () => {
  const PROCESS_TIME_LINE = [
    {
      mainTitle: '검색',
      details: [
        {
          title: '검색 필터 및 검색 페이지',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/search_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIcAAExpcVZWVpuPh+/f6rHK7vHWyA0RD/fv9f/7/v///9bK0AEBAVBPT+/Ostyrl/j8/IqPh+jGo9TW1vLx8kRGRfb5+uHg6dCehg0QDu3k5gkJCf78+8jKy7SimdvV0WxrbLN5TyAgH4yRkSIhItTP0TIyMuTOyOLd4j4vN8/NyvL3+j8/PxYUFQIAAbWxqWJhYgcOCSsuLI1Id/L19+GodwABAP39/D8rOXNAYwMQCv7+/vn5+fb29lVTVN3M0E1NTa+mm3MmTBcXFxIVDt7Z4xISEuXa2g0QCvf4+AkJDAUFBQ0OC7CrpAANCFJQUejKrcbHybmai1+QshwTJ6GZuBgYGP7//hcWFba8wZZoxvfH4ScnJ8fV6lRUVM210tXT0h+Asci0rc3S0+WbwdLGufn39/n79wAAAGmewOnIte3Ntv/9/bfCyfj1/PTex/77+LZDcwECAvf49ObPwRkZFsHBtRESFQ8TEBVUgBYXF5zB2QgICPr598nDwP36+ToEHuF9qqigkv/7+svNyw8NEMjCv3262SQGFY2Njc3Ozff39xUVFUxKS83LzOvn6RoUGEVGRs2gh/Ly8vz9/P35+1dXV0VERfXp5jcbKbx7TgMHBRgZGlVVVP38++3s7EBDQeno6NLK2v37/Hd4efv8/Es6WwYKCBcXGFdWVhIUE3RIXbeqom1AVlhYWEpJSszHw4SEhPHu61BQUHmLcvz8/G0cQzYsMnF0YFFRUdbU0UpER09OTgECAZZ+bjUnMfrz91hWV0pISQYHB1hDbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAI9QATHADliRYpUQgSKFyYwAolR5IUwdIVzBUuWQx6BKgEDFUATq26OGEECZGlM6Y0CdOwZ8GZMwt4nSG0pcoZJWcqUcCkihWKGCVG3Lkhw5adLMOGjPohpNWnP0FqHTrTwqUvHI+SlJpyZkWIMy921cjRxACLIouu0IGBIdWRJafybIrzIVafQh6+cJAABQsbMSQUNEo0KMWrXBMSRAFBQ4AIJlLwgKECZwyEW7N6ZYqgMEwkB6uAkNGDxpAXQFpcBKrT4UKaBBtmqLCBhIcOPn4EyTEzaUenNxUelPm1Zs4TExZ8EDGixg0XAqFOZGhzqUGBAQEBADs=',
            },
            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/search_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
          troubleshooting: '뒤로가기 진행 시 보던 곳으로 이동 & 캐싱 문제',
        },
      ],
    },
    {
      mainTitle: '리뷰',
      details: [
        {
          title: '수강생 및 강사 리뷰 관리 페이지',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/review_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIYAAExpcfv7++3l+P3+/fT19Pn5+erg+P/+/vr6/P///+XY+f39/fHx8f7///T08/Ly8uTk5fPz8/f1+P3+/Pv4+fz7/Ovs7P39/Pr5+vXx+/Xw8/j4+Pv5/vz5+vb39vn3+/fy/ufl6vj5+Pz7+/v7/Pn4+fz7/fr7++/r8+jn6vTy8/7+//Hx8Pv6++jl5u7f5vf29/37/Ojm6vr09/Dv8f38/ujo6ff39/75+/z8/P37/vb29vPw8fr6+unn7P7+/fr4+f79/ufm5vr4+9/e4P3+/u7u7vv5+vT09Pn4+PLy8/bv8uXl5vf1+fb39/7+/vf49/j3+LOzs/X29dfW1vb19/X09Pz8/VZYV/3//tvV2PX19fjw9fj2+Pv8+/z8++Hg4+Xm5uTk5OPj4/Tw+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAHvoBPXGJhUE5AOFkDiz8/ixouFh4JWmNWOUhCPA1PnTWfXxQqWw4LWFIJTxFENCJPC1cZGU0oOwQJDwdUTEEJOz46ncIXGAoCEjUMTxtKCwk3NjcBXtQnSV0GIBwILAkRRk8JUzImFwvnCxUtEzkkCw9PNzvOUxDSAfgBUUcrnd5PW2CEu5GiBLpzIyp0KoKrx4Ye4baAqfIlh0V9HTiFK1AgQI6BIYZYHOmxU4MYMwqk6nTwA5kJCyw+6bXkRSAAOw==',
            },
            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/review_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '좋아요 및 차단',
      details: [
        {
          title: '강사 & 클래스',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/like_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIcAAExpcfz7+/fQnPv6/JCOmvv7/Ons8bertP2z2f///7hfMvj4+c+8tvj3+Pb3+vn6+97X1vPx8p9WMu7u7/XK3+7u7pmCevfx9u/z9vf19cJ+Ueze5tC4svv6+ta0pPbt8frare7t79eNWvz7/aRcOOzr7eGdcHt1ftyxlc/A2eSaZfDy8pNvYXV0ePn6/P7//928qvv7+/vOmfj8/fP3+v///vDdzPr//u3u8Pr6+967renp6sVrPeLZ4e/X1uvr6/v3+a+bkuLh4/n9//z6/PrW6fyw1ff4+/P29/v4+IpuY/Hl3/+22dXI3ahcPPj5+9qjevy33IealN/a3frx9oplWfLd3Pfh3/zx9/b3+P6r0sewrJd/dv273YfEwPX5+/D1+P2h0Yabkf/+/+vi3vn29v622fj19KWrqfX09qKZlfr7/XR0fvz5+6uhuf39/ZiYqfTz9IXCvP37+Pjf7Ofe5fbb6Kahq6Gio+Th48Gkl9rWztOPXYeGiIKDg/Py7n99hPz///zk7/v5+b6wuevTw9/RzfbX1dSHU+bU0LhySNaOW9ypfvS+g/Lx7+7Dnu6we/r7+41zaPz8/X1KN+/v8eLf4Pz7+sqDU/3+//zUna+grPfo1/P09I+IjfX29u3m5Pz7/PTy8omDicOEXpiOmuLNwOzz8PTfz/Dw8pybt/n5+4iHitbRzZ2anPPz9X18ifjg3Pjn2Pb295uVr/7+/rCcptGjh4ZuZPX19uru8nNzg92XZbmhpf79/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAI+gATHKBlS1UvTIy8yIHjhhAgPXygaHgUKIGrXaxgeZLERYoYP2zwoFGjxAKuIAlEmUIli5MjMDSAUMEiiI4dJBi+DJkxABQpXpogkcERIQERI1rMMKFwKoKvN6ssUVKEyMmUBKGSPOgSBkGUIjdGdAhQKY0hKz4S7WgQ6cynJYeuxPrzqkCZMhMSCCFQqkenEmlqHbm1SECjQrriTEpQIUGTUX32ZFowadCTKhJEKNiSIMalAKkmDRhTY06qXDnOzGIAQ4cHCFkelMmwZkyeO5vqrAixIIEDFCZAyLBh4EekNhcSpDjRolWCBQVquWBBQgUPDgkavPiwISAAOw==',
            },
            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/like_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
          troubleshooting: '좋아요 봤던 거 다시 들어가면 좋아요 안된거 처리',
        },
      ],
    },
    {
      mainTitle: '회원 관리',
      details: [
        {
          title: '클래스 수강 회원 관리',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/member_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIcAAExpcf////Lv9////vr6/P38/uXk5/Ps//Lq/f7+/vPt+/Pu+/Ht8fv6/vXx+vX19fHq/f39/fz8/fDw7/Xw+/b29vLx9fz9/PPz8vf39+7r8/z8/O3u7fn5+Pr6+/Hw8vX29fv7/fLr/Pj1/f7+//b0+fXz9/Pu/Onq6f38/Ovi4vv5/vXz8vn4+9bW2Pf39uXl5fn3+vX09vXx+/Lx8/38+/Lp5vLy8/X19PDs9OLg4tLi8PPz9f79/erb5f39/vTs6PXy+t/g3/z8/vrz/vr6+vfy+vv5/ff1+v3+/fXw/ejk7vPt9PTv+/Hu7vr6+erm8PT09NLS0vf49/Ly8vn4+e3r8Onl7+Dh4PX09fTw/NzZ2fz6/vf7/ejo5+zu+s3OzOjo6Ono7fv7+/Dw8Pn5+f/+/vr5+/39/Pz8++Hf5Pb19uvn8fv6/ffw8vn2/vn3/fT08+3e5PDp/PXz+fz7/vDo+/j49/Pu+vn4+vz4/fTu/PXz/Pj4+Ozk6unn8fTu/ff0/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAI5QCJ+HChgweND2eGDClQQGGdHwxUANFgxIYMhg4MfKjTpsWZECEISCCRYMWSQCzuBAggIMyUCxEqvLiQoAgKIVjEQBnhYU2CBEFubChCtEyCDkVgSAGjhs2bKBwSBMixJUqZPhXGJHnwoE8ANHCWjMgQJ8GALztqjMnwIEseHFTIVLlD50qgKkYT8OnSY4PWGDPSpEgRIYnJQGumJIhAQcGCBXsWNGny+DEeQFe0nFByYoEICAjmiB492s6BP1yYWEFSooQJCw1iH5lN+4gePwGceJnAGwSGJ086pBlAfICZAG7kBAQAOw==',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/member_mobile.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAAqAIcAAExpcfb29vf29/z8/NGSsf///vDx8fy+3tjL0v7+/rdgiv7//vb19v38/v/1+/v7++uty+vq6v71+vn5+f/r9/bz+Pju9PXy+Pby+O/v7/bi7v70+vv8/vf39/v9/uzZ5ezt7fj4+PXr8ezq7ubU3/Dw8fLz8vr6+vPy8v7q9v7q9/Hn7erh59bW1u/b6PPp7+vY4+Xl5fTq8P39/OHh4fDx8OXS3vj1+vn2/e7v8Pz9/O/v8P3z+fj4+f3p9ff49/T09P37/fv7/Pz8/vv6/Ozs67e2t9HQ0Pj2/PDw8Pbz+dHR0ebm5+Xm5fHx8evr68LCwvr4/PT09cO9zvb29cjIx/78++zt7vn2+v3+/+rp6v/9/vj49+bb4ff0+fz7/N3M1uvr6rW1tv////Ly8vn3/e7s8Pz6/fT08/z7/avZ+v39/u7u8Ofn5/Pz8+nn67KxsvXy+fft8+zj6Pz9/fHe6i2l+Pr4+9zc3vXz+P/9+/r4/fPx9f78/rHc+qKZs/rw9tjU2PTh7fv7+tva2+vp7T2u++nk6Njv/fr7+vLw9Pr6+354dfv6/W9wcvv5/fbw7f79/dzw/P3+/be3tv/+//7+//3+/vf4+O7v7/Tx9fX19OPi4+Ld43x3dfHs7m5ucPz8/eTk5P38/fr8+vv4/MC/wPf1+vfk8NjY2Pb09tfX1u/d6fn5+vbg7f39/fr7+/Du8vLz8/Xy9/v4/fnx9v3x9/3t9/79/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAAqAAAI/wBvsarzAZUgMD5SpKCggcQHFzAI2lBxwFWtF4DkzOGxYYMDC3NWiFgh4wWLDbZUkUpAJ8GkSQtiLhgzk+YrHQtgmSIERwwUIzTGvErwamjRBBNQjEkQww0ZJ0A6PEhAtWoCmUsHEC2K69WAL2DDfnlA9sEAJHGUzJqF4UKFChfczspT4dSpG3HulPliAkQJA1eSZMixI0ONEplmFCiQ5lGZBgUSVFpTdWmCMUuHLjjjuIHVz6A3dwZNmqrox6VJn16zoKrM11YXNHqE41GDBmkaNNrNu1HuIUH67KFFxAsfRZrMYCnFnHmUWG8KjRjxpgeXDKlapKKEZsykxTGbVM1Z0uLIqk1eE1zCzL7qoBOhWk2Y8ONBiBCOQE0Q1aaNlhOJdDLFJ08EsNRSE4TAiCeYcBJDG0x0MEAgfxxShIFVrVEAIpIUYEl7VGllWVVUsGGHIZDg0QFRVhU1FFWvCGGFGn7oIcWLVeFYlVYJLHZZalbxyIEHQH7GY5GgHYlkkEsm2eSTUEYp5ZRU4hJlJF9kEeUlW0jwZCSVyEIABE++MkYXCiAQ5SIMCHDlK5G4KOecdI7ySgB45qnnnnuG4WcYEfwpqJ+BAhpBBAEBADs=',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '내 정보',
      details: [
        {
          title: '내 정보 수정 페이지',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/myInfo_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIcAAExpcfbx/Pbz8vby/Pb3+PHq+/Pz9ff39vXu7////v7///////Py9/39/f39/Pf39+na5Onl7/fy+vLr/PDv8fDp++DRzvz8/fPy8vf0/OrEqO7u7v38/vLx8/j1/fj0/OLg4v7+/9fX2Orm7/Lp5fXz+PPz8/z7/v37/v3+/fX0+PX19fvy/fHr/Pv+/vfx/PXy+PPw+uXHuvfv8vTCju/f5uvq6vLw9f3v2+nm8PPy9fn5+fbz+vn4+fXx/O/u7/j4+Pj2+vr4+/r5+cl7Rfz8//n1/e3u8vPr/+/v7/Dw7/z7/fXy/P/+/uno5/Lu+NWsl/Tt/+zv8fj1/PLq9vf1+vf0/fj49+3p8+rn7/Hu8/Xy+ezo6PPs//Dz9vv7+/Ly9P38/fHx8vn5+Obm5fn3+/Xz9/X29e7u7ff4+fb39fHq/PTw+v7+/uzt7Pj0/e3r8/b0+fXx9fz6/fn6+e/o+/Ts6fDq+/Lu9/Lt+/z6/vfz/O3t7/f0++7k5Ono6+7t7Ovj6/Xw+v7+/fHp/PPt//Xx+/Lt+O/w7+/r9fb19gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAI5gBZQBABwkAHCj3CLDmxpOGSEHL82IEjgUQHDihUHClyoeGchkH+/OGjJ0sGAQ+aKECgAQeBHQ8WpGhQBoMSNQuyeEijyMECC0RoOEnyI8mKQVUy9OHxYcSHMUPahNABRYYUGxs2fEnQp06BCkgivLlxZkEDIS68iHkAxESSK1vWTCgQReyFBm3awNBipkSVOCUYxImxpsWdQhGmNEmQYAEYNHQGMW6cYIpcuiN8MLEyYMATPE+eGBo9Og+hNRW65DBCBYshNoIOJRoQoHbtAXtyvwi0gAsZN4AQXTkwuXiCJgtm1AgIADs=',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/myInfo_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '네이버 api',
      details: [
        {
          title: '네이버 지도 공통 컴포넌트 구현',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/map_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIYAAExpcf3+/fTy8fj4+P6jzv/+/+/t6/Pt+/3///////L29v39/fr9/PT09OXo7vb29vjd6vz8+/zx9u3t7fj8+u7j6Pr3+P39/vX39N3e3t7tz/7+/dzrzfL29PP47/z///P57vLi6uzq6vf19PHx7+3s7vr6+/f69ff2+P6p0e715vP47ezt8PT2+tnpy+rw5Pz7+vPu6+Xu4/v7+/Py7/7+/vT19Pf39/b58vDw8ODu0f79/vr4/f78/fD16f3//uvp7/39/Pb39vb29fn4+PLu6/j39v/l8ff3+P7//9rry/z8/N7t0Pr6+ubo7P3I4f7+//T49e/t8fDu7PL57P79/djpyPXX5vf29/38/fyZyOft4ufv3fTz9f7//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAHrYALgoImA0tIAwsHPBEzVVVZVTM1lDUJKF0JUAkJBQUJNRQMCAFLlQsJNltUOEIDREYwFhBHVyE/lQEJIFZKPkBSNCIKEgQpWk8fuQkeGkw6Mk4kBgJLSddJppS6Ky4cXCwOUzFFjlU9O9o1GwUnLyoYLUMjUR0LlTXqFwkPJVhLukA1uVcDVYOCBBdECIKvIaocNbyAosSpIT5UEwpUyDDgxoAHDQaJFJSlxo1AADs=',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/map_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
        {
          title: '네이버 소셜 로그인 구현',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/login_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIcAAExpcRgYGNyrl1JSUvfg6/r6+snFu5eXl+/y9////7J4Tfz8/N+mde/g6t3L0O/WyPn3+fn6/Pv+/+vLutvV0erJp5GSk//9/puQifT298fJys2bhBIWFP76+vDx8fHw8vv+/hgZGPH29OnRwrObigEAAcqdh8q8tK50cvDNtujh5zsEH/PG3jcnMpBKeSsuLFNTU0MtPHZ0dfH299TRzPbeyN2uwPf9/dWqkufa2hobG+zv8T4+PvD19NHU0hYcGEk5Wm8lSRYRE+zNseKEsR4eHxkPIm8+X9TIzj5APxcYGOGYuxEUED09PsmWoMjCwAsKDQYGB8/KyWobQRASDBsbGxMVFfPz8+ObwMm1rbeAVMuxru/08eTOyhsbHPO62dLOzLmtpAoUDmdnZ9HN0AAAAMzHxPrz97FCefLRtT0fLund2dqkcsvK0QoJCg0RD0xKS83Pz//8/rVzRTwuNRcXFigoKFFPUJtry8PU7BAOEgkJCVVVVfDs6BQTF9mswnt6fNHU1VM/Z7WUhBQXEa7I7ktLTPf493dIX8fAvn18faSppFFRUdLJ2Gtqa9PR0AABAVRTUzMrLwEBAQECAff5/FFSUNbU0gcIBzIyMvfv9crHyerq6svGwgYKCBoZGe7u7uHd53BBWP/k9U1MTdTM0UU/QtGkiwMIBUtLS0VDRSMiI/37/Oje4EZFRQAIBAYGBgMRDBUVFuTj7E1NTf7//05OTgYUDrWpnTo8OyEFE0ZGRv39/fv7+/vO4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAI8wATaOIEasECVnISKFyosFcBXgUUmVLlilQqOHdgRIo0YIAlPoxo2dp1gEcZT6gwudkzqUwZSJTK6LEToAysMmOSqEEkis6LTKvexHAhyQ8eQYQAGZI1JteKIFN0lSnRssURIVCAGCnTpEoZR6le3YrF4VOdACF+iLGihAoTHV6KRJHRJ9ETCo80BIqzqRQYMzR8kEEipdOlDwkGKWCAwcKiP0u+oNDCxgkaLCTmVFCY5ZSAMLgMEPA1aosJHDaIsDixYUKtDjsQSLjiYUGPGTcOQQDBRUSCDJUinLkwYkiXWQ5C5UhRI0+hRipatVmT5kGDgAA7',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/login_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '실시간 채팅 및 알림',
      details: [
        {
          title: '채팅',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/chat_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIcAAExpcf7+/pqYl/v5+lpYWPz8/NzLvdrb2u/q5f///1dXV/v6+urNr/39/YeIhfXx9f73++3u7hsdGevDqO32/Pv8/Nbc3vv7/cqqlfn3++De2/Pz98NFgerm8ayGcvb19GFoZtTu/vDb5Pz7/NZpn+mhZ+3c5f39/PTz9N7n7+Xl5PT09OPS0f3ls+Lj4sd9Tvvx91VRWtC9vP7//fry6/Tu6+vn6HV+iPbw8PHSttWLWuOeZ5i1uMfCn93c3tCGV9TS0OX2/7SztYeCcqVoRXtXSvP29NTr++7u7VNVXdvAzvn8/PDn5fT09ff19eO2l9nLz/n3+bCTe8qrms2xoF5wfOTAjlhabs27xsTGxx4UKO3p7M7Buejq69bY2ba8waGcqP79/vTy9GNgXcfCxOnk5s/IzPX3+bl1TIuJgvfz9P3+/+epx/j4+M7EvqGSk9+Zvu3VxoSHhP3+/tvZ1/j19Pr7+/Hx8d+yiPv5++fi4MKJa9LOx/DJp62kpadvV83P0P78+rivqe/t9O2uzI5SNqymr4J+fN+mherDpyAgHr3IwumawFtASuGlw9Lu//Hu7/v5/sOcr/Ly9MzCvfP8/yYbN5qRhYGEhnyChT06QoB/gIWLivf29ycTHf38/dHMzuzr7zQtPcaBZTYbLe7w8B8aHDNEWYaFhls/Qtrb2KuxpoSHhru2sCMcIbiHbd/g3+np6gAAAKKhooqCgExLTNLT0vv7+0MSKqpoTiwoKu6ran5+fYtybdvM07q2qAEAAd7e3C8tL/fy8dLS0rtdMNLT0/v7+aiIguTj5fT29y0uLj0SKCMkI/r5+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAI+QB92TJG7AAsVaAo0YFQpouyJc7yPOjURpewZc1cmRKlSZGCBFumPEmUo0+cNW2Y4QImi5QnS1ok1Eow6dWPHS12TUiwgBYvVqg4YZLjYNOsBE2KFHpRohiyBAMgSXLEAgMDA1+yxErQptefPaNyveEpggMJGUR0eEhzKViCW7dOdNiQoEGBTyhMwECih4kNDQiORRpU6k6GUBEqzLmAw4URO2LUOKFB4UyYKIECjKjzIcCMTz6EAPJiCIwfKTwsDKv0KNmKEClqBDkCRJAbLnzImMECRYWATFWSxDh1o9WqRVTQ4LGCCA4jQmyUgCAw5kqjVId+DekREAA7',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/chat_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
        {
          title: '알림',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/notifications_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIcAAExpcQoKCuWew+/d6tPNyvrw9xYaGImLijQlLwAAANTV1QEBAUQuPP34+dXSzf/+/z5AP/76+gEKBtDNxtDLx/bp4x8gIfz9/eza4vLy8qB0VfHm6U1LTOLa49fV0PH09ueUu/Ds6Q0XEuG2jb5ymvL2+N26ydjCvggVEM+qnc3JxfHx7x4fHyEhIQoXENPW1iEFE/f39wsLC+GcviotLO308RsaGt7b6M7S0ff7+r9Kgt7Y1hQWE+fZ2TcDG9DKzgoJDB0eHRIXEd2hutbK0vHY49bN0cSUcSAgIlNSUjs7O/z59hkQIrPO8RYRExwbGxwcHPb390Y2VdemjWw8XA8SEBUWF/n7+nVzdfLv8k5PTr+Rb5NLfNOxpW0kRtKTYWYZPtKkghMTFzEwMZpryxwgH1VAbPfgxhEPE////0JEQ/Lz9T8vN/j8/Xp6fPn5+ElISMailP/7/v7+/hkZGd6slBEVDrqxtVJSUt/e6ikpKfb59mhlaPr7+k9OT/3Z7E1OTbSso01NTfXeyExMTP/X6jYsMsnEwE5PT/f3+DwdK9XR00JCQs3O0HlJYZ1oTX18fezy7vfv9MGllEI8P9DP0UJBQunJwPz8/AECAe3t7fPfyAcICBsdHPv7+93Jz0lJSea+qwQIBpWYkkhISMDU7QcLCRobGunp6eury3JCWQEAAf37/NKUYkNBQtXPywYGBu/MsRcXF8rKy/7///DMs0hHR7K3ufPz84uOkF1dXff8+1xdXPz7//r098zHw1BPULuwpMCgkfn2+EtISkVERdHJ2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAI9gDTSEKlCZMnVnLSKFyYhtYwX2lwQaJkyRUoUnA4aAEGzA8iQHgE2SJW7ACjBKZEcQoQIFOCBAtcotFDJwGsBLzUKHKkig2NMS2qMOBiSAwZM3bcEJKlC4IPL2BgJFi1IAECKk6ASGGSQImNBHySSEDhwsCTIJ1OlRFhBYoQHkhYWJCBJcShV5UavZj1Y9EvAh5wEDGigoIDBVnmjDiSa9SdGamGPGoVhoQOExq+bLmV5kKoFIGC7fhTqIiwKV0EgMAwqU6cCQ8iZCixIkafGntyJFpyJdKuKB/etFlToMGmE3k+3ehRa1CpJsY6bOhVIdaZSwMCAgA7',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/notifications_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '클래스',
      details: [
        {
          title: '등록 페이지',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/class_register_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIUAAExpcfr6+vDp5/n5+f3+//Pz8/Xz9eTj5Pr5+v7+/vz9/Pv7+/Ly8vf39/Tz8/Dw8Ono6P7///v2+Pn4+P79/v7+//fr8Pfy7vr2+Pb29vLx8fz8/PT09P///+Df3+fn5/P08/79/fLu8Pj09P/+/vHx8fr49vX19fj4+Ofm5+7u7uTk5P39/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAGf0CKxXNonFSZTqLDYiVYCoPgQkhISoVFYLJofD6TwGmTQIxMlUSkQ+oEPotBoRDokpeRhL7ZQa0WeoFNeiGBgR0LEChKgk6GjxsnKAsMWQEBd4+OTQsbdRugjo+MS6SPjxgcdVoZok2vrx0iKQ+1DiUDuYCneiAaGcB1uQO7p0EAOw==',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/class_register_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
          troubleshooting: '각 섹션의 크기를 줄이기 위한 dynamic 처리?',
        },
      ],
    },
    {
      mainTitle: 'PWA 및 FCM 연결',
      details: [
        {
          title: 'PWA 연결 및 설치 방법 페이지',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/PWA_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIYAAExpcf39/eDO1/j4+PLz9fv7+//+/s/Q0f3+/v7+/vf5+vz8/MvMzP7///H08vf7/P79/uHh4ff1+Pf39/j29v36/OTk5fn4+E5OTvby9MPDxPT19nx9ff///oODg/78/ZiYmPb29nR0dPTq78vLy9/P1s/Pz+Xm6FNTU+Xl5ZCQkPDx8//8/vj6+6ytre/x8+np6fPz89rb2////8/P0Pj5+2RkZMPDw87Ozvfv88/EpPbz89TU1PX3+MTFxeLj4+vo5f/5/NPT0+vq6oyMjP/4/BscG/T09MrIyPr6+unq6vf49+fo5+Pj5MLDw/P19M7X1PP083FxcPTu8efo6vn5+f/+///z8+7x8PDs7Pby8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAHsIAfUydUKy8EEgotDw81NT0bOxkXUVYjKUNVVRAsMwZFQTMzHQFaORVRCQ0zCDMWLk40FAIlP00DM6ozAwkBAVUzKkZSRDIOT0dHAwG9M0sJ0AszN0czSkIwMUdRRwvQMxPQCdI+WVdMPAWaVeIJM+zRM0hQOkAHSTEhC8zi3vE3WGZEwJEEXrtx/WZoqBaBxIIjBQ4ihFZgBggMNlCYeMevnb9xMxiI4OAhRi6J4wIBADs=',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/PWA_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
        {
          title: 'FCM 연결 및 웹 푸쉬 알림 구현',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/FCM_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAAKAIcAAExpcfv7+//8//z8/J6Olvf3+OKHsvz7/J+KlP7+/v7///39/f/q9vv7/OO1y/7//vz7/f/+//77/fX4/v74+/z9//Dr7v79/fj5+fv9/v/j9PHx8OO/0P79/P/M5+TV2P/G5fn49+SLtdfg1f/L5vPZ0fT49vn7/uvw7vf39+O5zfz7+56KlPr9/P/H5fv9/Pj++/3z+fn4/ffq8P3//vv6+vzc7JyZmvT8//79/rLK0piJkfP19OKOtvz8/v/6/f39/v3h7ff09eb0+/n2+v7+//T19f////r9+vr6+sXAmvn7+vn39vr6+77KyvT2+fv8++zw8/z///vy7rizsvT2+/78+fT09LG2u/b29o+IdcfBxF9fYPz//PD3+P72+vn29aCTmcnCvPPi6u37//r5+VZTT/n5+fH9//L0+XqYrPf5/E5NTf38/GtnasLDwlt4kO718oiXpf33+kQxPP///kMsM/Tw9Ly6rvn4+FFTZO/y8PX19vn9+/3+/tTi/Hx+hPn4+YSCh+/2/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAAKAAAIywB/WEBhAsaSJRjmZLlyZECCNgsCJCmwIYcCDSA8kHDB4EieFEcSnCiSoGTJCHsMqBDBwUGPOCvOHKnzp8SID3X8XDiyZQcCFgTC3HgT4UzEKlOi3Ong8EGMLwIkUFjQ54XEBgVCrMnwoEGTBBBk0AACxQiPMTNalDlS5MiTNEf8lPRBxMqAQGCQ2AjSZW3JBQtMJhAihQyfA2i8MMExpEZIwSapYFEDSBAcOWKc6CiTALDnBXUScGFjRg8dO27waFGS4Ijr1xUGTQgIADs=',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/FCM_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '강사',
      details: [
        {
          title: '등록 페이지',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/instructor_register_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIcAAExpcQoKCvj08nRzdBdaivry9+PS1FNSVFZVV////3IlSwEBATcmMV9dXnA+YFJSUhsSJf35+R4dHv36+msbQvr6+1hDbvDx8kJERO/T0/b39/39/RRhjaKio8nKzKioqJBJefLy873Hy8rDuhEUEv34+3GqzqqtqxodG8/P0VJTUxgYGP/79tbIxUk5WczGx8vI29nNyRcSFc3Jyj4vNseZk//7/iIhIk1MTRMYFtzV3s/G0bevpTIxMvj5+g8TEfH1+PX3+vv69wgWEPf8+x0dHUJCQs64t96rkwEAAL5rjlFPUebSzwkJCdy+yCIGFMnFw5WXk+7VxObd4OmYv7i6vubh6UItO+nZ30NDQ8akmJiXmVWbxOzv8hMVFfrdw8dWjeTd4PX5++3Ou8vOzbS9xJOXme/u8NaYZfDg59XSz/v6+J/E4YODhL6ejOPc5wsWDwQFBcGWdl9fYc/MysG+wOrw7t/P0hobHPj6+nSszc7Nz51tTreqpjodKwEAAdPLzvfcwhEUEAAJBfPTuT1AP9TIz8/LzOaVubuwpAoKDO7OuyoqKh4cG0hISMe2uHVIXvDz9IB/gHt7e5tryqrK80dFR8/a6eno6fz//+3s7U9PT/fv9c/Ozv/+/+zo5UxMTMPBwwYKCLWmpAYHB7q5vUZAQ/Pv8gMHBefDxPv7/CouLPz6/PbTz/z8/AsPCEdFRvb3+E1NTvLz829BWNzN0FRUVRoaGzQrMAcTDlVTVR0dHA8NERwaGVJTUuC7tf7+//Hz81dXWFFRUcvNzwAAABMTFwECAVNTVDkDHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAI9wA9ccKkyZUqVjYSKFyYAJiGUyVmSTIFy5IsUDiWqLCl6wAyX8IcTUpQp42RYqJQkQrQZEGSYguOFePFKECWBB02YfADiRaNVT1u/LgCApcxShZebUnw4UGhZAooPCn2Z0ExBg5kKHIBoRiCUnMaDBuUa0iOW0Ua9UIBxwseQSQk7FoRZ8CnUHtezDhUpYwIMoYAQaGjxgOxFJ3ObDjRp8aRRwQ4cFECxgkfNHLMRBn1K0GFETFStTJgQg8bRFSwuEGihUeiFhkyRQgRLNKaWAJYCLFDRAyQNT66BMlzocCEWjumjPlyqRIMK0wISdERZlGgO2/SBAQAOw==',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/instructor_register_mobile.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAArAIcAAExpcfb19t/f3/v6+v36/Pfw9Pz3+fb4+Pf29/z8/Pjy9vv7+/r2+Pj4+Pn3+fn6+v39/PLy8vXz9f38/fn5+u3t7dbV1vT09P3s9P////nz9vHx8fX09ff09tva2vj399/e3uDg4Pzy9/Dv7/f09fb09vjy9f3x9/f09/fy9ff19u/v7v///vv5+vv6+/b19dnY2fn4+erp6fz6+/T09fb39/r09/jx9fbz9eTj4/T19vT08+np6vDw8Ovq69XV1uLh4fLx8dXU1Pjn7/v2+fDw79DQ0OLh4uLi4/v8+/f3+Pf2+N/f4Pzj7vj4+fX19vfx9P3n8d/e3/z8+93d3PPz9Ofp6fz5++3s7fz9/NrZ2fbx9OXl5vzs8/j5+vn09/37/Pb29vHy8v39/dzd3fn5+d3d3/f39/v1+OXl5erq6vr6+fny9fTz89vZ2vX19drb3f3//unp6fj5+d3b2+/v79jX1+Pi4vPy8fb19+rp6vHw8OHg4PLz8+Pj5PPy8tHQ0PDw8ejo5//+/uDh4vfv9P7+/f3t9Ojn5/zV5uDf3/b09e3t7Pfx9d7d3vr6+t3c3vr5+vj3+P7//93d3fPz8+bl5f3+/djY1+jn6Pz6+vn4+M7Oz/z7/Pr4+frz9t7g3vzp8fz4+vbw9NDSz/z7+/fS5Pfz9fi62P79/vfM4Ozs7Pf29v7j8Pfe6/zi7fmu0f7+/vm01eHh4vb2+Pz5+u7u7v3k7vfd6vb3+Pmu0v3Z6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAArAAAI/wBpHciTK9IMTwESKkyIIEYkBypwwZKlihQnN0oWlggQpg4IC7M4uNKFyhQoOEjOBHgRoMSTMGE2ZBKQRkINVqc6oCFiIwWJAHnOLBq1pdEXBho63BClqVaLFi5EdHnVJFGoLFdm1KplwAQbMGMmiL10AsOtKLsOxZkwZswlAgpwFCgA5cbcFKdQdFhyqtDcv6cirXk0x8mDw48oRIr0qLHjxg/uiKEihYkQHhliad7MOVWCMmU+NDgTpkGC06hTn16woVKdPVYujFlAu7btBQkeCarAJweZNG2DCx8eXPPs28gTnLHEyBElP3S8xCI+fMGeGG3ehIkwRrX3BAskffzY0ebCmwgDSqlfzz7BC0WrMEEilObOh+nUi4+JZUgzeOS2JdBACIjkkEYIszSAX35jPKLHDnhUsEIFjzAY3GmbXHBGJQuUMsCHIIY4QAJvACKHHWZooQMLCVjY3SO4tQVgcmVkEoEaXADx3XebhHABFj7I4OKF4JWxBgQz3pZAJUasAoMHVWTQoosL0HDaFFMOuZ+WXHbp5ZdghinmmGSKOeVq3nWyGm6nxXJaW20sEEsDI0xyQitxxDLCH4NkEMEP08VShi2PxBJGH5N8MsQkCwQSRBKxrHBEGZo10AOlDYQRyyM1xLJGBBs8EEsRFcyB36n4pdKWcfvhFxAAOw==',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
        {
          title: '상세 페이지',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/instructor_detail_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAAMAIcAAExpcfv7+53F4Pz9/bu4sPz8/Pv7/+3r5+Ln8v///57H4f38/QRop//9/jxMVvz7/YrOt/3+/v77/Pv6+5TTx/r6+xx/tK+vr57D2/79/o3Ru/L08is5Qvv59ABqtf///Wuvuh4eHgVxsjIzM/32/SMkJPv9/SoqKpS82Ku9uo3Qvf3+/G2j2yMkJZHUyLCnjau55Z2dnR2RzB0dHYugvzo7PQJwpZKSkkqCvaampQBKkLi3uA13u/Pz8wSDv/Ty8pC1y7O5saGlqNXu4o6vzPLu9DmAqM7o3BFwq9Dq3yZghOTx7Qtopc7o3aXB1fz7+zqIsefo7w5emO7x8pLA2IF3aY642v///hptnYfKszBIYmCssZa2z/z383C5p5ubmyV5q/7+/oKKkP/+/767r/z7/JaVlfz9/Nr2/6iop87w/9/e3/78+vz+/L3c1QkJCPr4+fbz+5LUyO35/26l2rGwr7rJ+fPx+P38+hMTE09JTvv6/Fk+RZ6enydCXC4sKvj8/6yxtY/SyPz491haZcjHx3p6eSo5RDk5OS4sKz09UyIjI25vdP39/Wh8if/+/nGq1KurrF9ueMnp/kIrMPv7/P38+PL09PTu7uTk6lpVUMLg1tzt9+Hk47nJ9pzD3bLC7KalpPz69/n4+Xq8sfn6+3u03bCwsLvP3ykrK8DE8EE+PfHv6vz8/fnx8q2urrTC6fn8/tDQz8Df3cDb1Wqfxubq/PPq7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAAMAAAI+wDHuDrASpQlPA0SKFyoMEyjBD1sqYIFypMdGDS4OCFCBYiQUH1ifLkhC1UtU5DosMChQ4oSJj5scEiUqsSiPDlokRIkxwUFEDzAaIEiw4KDVTVGnJixw40XFRogZNniAYkRLCIYHPrTIsSiN6eWbBqSpMmRWQIwWEGh4FOgOq8iXUizJgzDMQ2uJCAhgSHDVo3ODBjQJk6mKSYMROl0qVKpABUCBJiwoPKCRnsGsSkAp0uROys+WF5QJkyYDAl+PEHDCRMgNQhuzZkU61GEMA9MF0hQyIwjSXoI+RFDIEiKDQkahRllOkCCL4g0MVLEh5IhMlVedEgeplVAADs=',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/instructor_detail_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
          troubleshooting: '동적 메타 데이터 생성 2번 api 요청',
        },
        {
          title: '수정 페이지',
          image: {
            pc: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/instructor_edit_pc.gif',
              placeholder:
                'data:image/png;base64,R0lGODlhFAALAIYAAExpcfr6+tXS0/z8/Pj7+//+/vb396jS1c/j2/////38/f39/e/v8/f39/39+f/+/+Xo9f39++7v8P38+Pj6/P7//9be7Pn09v39/uPi45W6yu7v79vi/ufn56fUzPT09Ont/fn5+bfH6Pz//6Wjpe7w8ejp6vXw8pOzp/X19Zi04/z6+2aW4/z9/vn48/v7+5i03fDx8Wyqr/3+/nyo4urq6pXKu97n/5/dxO/x8Xmp4/Dx8p3hx/r4+ILMtvX294zMx/79/WaEd/Tz9aLG3PDw8G+ktPb29n3CvvXp75HBvPPz84nLxvf8/IvOuP7+/HSj5e3s7PX09P7+/u7u7/z9/H/Dw+Dm/f///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAFAALAAAHn4APSRkdRw0fAVMJCVONUzMnJU1RBRdFSwEBIQNTJhItjlM9PyM1UxWLjQkREy4TDhGOjAmmUwuOGCBXNzccEE+OCwkxoY0LMDQ6UCwqWDPGw8UFVUpITEBWBwnPttGhBQs2Tjg8Ph7b0MSOM1gUGkYyQigIQcEJO8UJBBYiRCQCKzhBy1HshRQFLx4kWDBAYDcqBYsMYWAghaFE0DYEAgA7',
            },

            mobile: {
              src: 'https://storage.googleapis.com/leehyeonjun.com/connection/instructor_edit_mobile.gif',
              placeholder:
                'data:image/png;base64,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',
            },
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
  ];

  return (
    <section>
      <h2 className="mb-4 text-4xl font-semibold">개발 과정</h2>
      {PROCESS_TIME_LINE.map(({ mainTitle, details }) => (
        <div
          key={mainTitle}
          className="mb-4 border-l border-solid border-dark-disabled pl-2"
        >
          <h3 className="mb-2 pb-2 text-2xl sm:text-3xl ">{mainTitle}</h3>
          {details.map(({ title, image, explanation }) => (
            <Fragment key={title}>
              <div className="relative mb-4 border-t border-solid pt-4 dark:border-dark-menu-hover">
                <h4 className="mb-2 text-xl sm:text-2xl">{title}</h4>
                <GifContainer pc={image.pc} mobile={image.mobile} title={title}>
                  {explanation}
                </GifContainer>
              </div>
              <h5>트러블 슈팅</h5>
            </Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default DevProcessTimeline;
