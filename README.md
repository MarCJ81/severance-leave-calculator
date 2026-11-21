# 퇴직금·연차 계산기 (정적 웹앱)

대한민국 근로기준법·근로자퇴직급여 보장법·소득세법(2026) 기준의 퇴직금·연차 계산기입니다.
빌드·서버·외부 CDN 없이 `index.html` + 로컬 글꼴만으로 동작합니다.

- 라이브: https://marcj81.github.io/severance-leave-calculator/
- 디자인: **A안 Crisp Bento SaaS** — 순백 `#FFFFFF` / 배경 `#FAFAFA`, 1px `#E7E8EA` 보더,
  16px 라운드, 잉크 `#0C0D0F`, 코발트 `#2F5BFF` 단일 액센트, 산세리프 800 헤드라인
- 미리보기: `preview-desktop.png`, `preview-desktop-full.png`, `preview-mobile-*.png`,
  `preview-360.png`, `preview-print-a4.pdf`

## 파일

| 파일 | 설명 |
| --- | --- |
| `index.html` | 계산기 본체 (CSS·JS 인라인, `/* ==CORE-START== */`~`CORE-END`가 계산 코어) |
| `privacy.html` | 개인정보 처리방침 |
| `assets/fonts/sub-*.woff2` | IBM Plex Sans KR 서브셋 (400/600/700-900, 페이지에 쓰인 글자만) |
| `favicon.svg`, `robots.txt`, `sitemap.xml`, `.nojekyll` | 배포 부속 |

### 글꼴 서브셋 다시 만들기

본문에 새 글자가 추가되면 서브셋을 재생성해야 합니다(없는 글자는 두부로 보입니다).

```bash
python3 - <<'EOF'
import pathlib
txt = pathlib.Path('index.html').read_text() + pathlib.Path('privacy.html').read_text()
chars = set(txt); chars.update('0123456789-–—.,:;/()[]{}<>·…%×÷+−=~!?@#$&*_|"\'‘’“” \n\t')
pathlib.Path('/tmp/chars.txt').write_text(''.join(sorted(chars)))
EOF
for w in Regular SemiBold Bold; do
  pyftsubset /path/to/plexkr-$w.woff2 --text-file=/tmp/chars.txt --flavor=woff2 \
    --layout-features='*' --no-hinting --desubroutinize --output-file=assets/fonts/sub-$w.woff2
done
```

## 계산 기준

### 연차 (근로기준법 제60조)
- 1년 미만: 1개월 개근 시 1일, 최대 11일
- 1년 이상: 15일, 3년 차부터 최초 1년 초과 매 2년마다 1일 가산, **총 25일 한도**
- 입사일(기념일) 기준과 회계연도(1월 1일) 기준을 모두 계산하고, 퇴사 정산일수를 나란히 비교
- 회계연도 기준: 매년 1월 1일 부여 / 입사 첫해는 월차 / 다음 해 1월 1일에는 전년도 재직일수 ÷ 365 × 15일(내림)
- 회계연도 기준 퇴사 정산: 당해 부여일수 × (1월 1일~퇴사일 재직일수 ÷ 365), 소수점 이하 버림
- 연차수당: 잔여일수 × 1일 통상임금, 1일 통상임금 = 월 통상임금 ÷ 209 × 8 (주 40시간·1일 8시간)

### 퇴직금 (근로자퇴직급여 보장법 제8조)
- 재직일수: 입사일~퇴사일 초일 산입(당일 포함), **365일 미만이면 미발생**
- 평균임금 산정기간: 퇴사일 포함 직전 3개월(3개월 전 같은 날의 다음 날부터, 월말·윤년 2/29 자동 보정)
- 3개월 임금총액 + 연간 상여금 × 3/12 + 전년도 미사용 연차수당 × 3/12
- 1일 평균임금 = 3개월 임금총액 ÷ 3개월 총일수
- 1일 통상임금 = 월 통상임금 ÷ 209 × 8 (또는 직접 입력)
- **1일 평균임금과 1일 통상임금 중 큰 금액 적용**(근로기준법 제2조 제2항), 적용 근거를 화면에 표시
- 퇴직금 = 적용 1일 임금 × 30 × (재직일수 ÷ 365), 원 미만 절사

### 퇴직소득세 (소득세법 제48조·제55조, 2026년 기준)
1. 근속연수: 1개월 미만은 1개월, 1년 미만 월수는 1년으로 **올림**
2. 근속연수공제: 5년 이하 100만×연수 / 10년 이하 500만+200만×(연수−5) /
   20년 이하 1,500만+250만×(연수−10) / 20년 초과 4,000만+300만×(연수−20)
   (퇴직급여가 공제액보다 작으면 퇴직급여까지)
3. 환산급여 = (퇴직급여 − 근속연수공제) ÷ 근속연수 × 12
4. 환산급여공제: 800만 이하 전액 / 7,000만 이하 800만+60% / 1억 이하 4,520만+55% /
   3억 이하 6,170만+45% / 3억 초과 1억5,170만+35%
5. 과세표준 × 기본세율(6~45%, 누진공제) = 환산산출세액
6. 산출세액 = 환산산출세액 ÷ 12 × 근속연수 (원 미만 절사)
7. 지방소득세 = 산출세액 × 10%, **세후 실수령액 = 퇴직금 − 소득세 − 지방소득세**

비과세 소득, 중간정산, 퇴직연금 수령분, 연금계좌 과세이연, 세액공제는 반영하지 않습니다.

## 검증

```bash
python3 runtest_browser.py   # test.js의 단언 100개를 Chromium에서 실행 (node 없는 환경용)
# node가 있으면: node test.js
python3 uitest.py            # 모바일 390·360, 데스크톱 1440, 인쇄(A4) 전수 66개
python3 a11y_contrast.py     # WCAG 2.2 대비 실측 (295건)
```

- `test.js`는 계산 코어를 `index.html`에서 그대로 추출해 검증합니다. 이 작업 환경에는 node 실행 파일이
  없어 `runtest_browser.py`가 같은 코드를 Chromium에서 돌립니다(단언·기대값 동일).
- UI 테스트는 로컬 HTTP 서버를 띄워 실제 Chrome(iPhone UA, DPR 3)으로 확인하고 종료합니다.

## 배포

```bash
# 저장소 루트(main, gh-pages)에 아래 파일만 올린다
index.html privacy.html favicon.svg robots.txt sitemap.xml .nojekyll assets/fonts/sub-*.woff2
```

GitHub Pages 주소는 `https://marcj81.github.io/severance-leave-calculator/` 하나로 유지합니다
(`canonical`, `og:url`, `sitemap.xml`, `robots.txt` 모두 동일).
