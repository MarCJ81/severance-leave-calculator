/* ============================================================
   OneTap i18n · KO/EN runtime translation (v1)
   - ?lang=en|ko  >  localStorage 'onetap_lang'  >  navigator.language
   - DOM text and attributes are translated in place and restored on switch.
   - Elements added later by app.js are translated by a MutationObserver.
   - Missing keys are reported to console as "I18N_MISS: <korean>".
   ============================================================ */
(function (root, doc) {
  'use strict';

  var LANG_KEY = 'onetap_lang';
  var COMMON = /*__COMMON__*/ {"닫기":"Close","취소":"Cancel","저장":"Save","저장됨":"Saved","삭제":"Delete","복사":"Copy","복사됨":"Copied","다운로드":"Download","내려받기":"Download","공유":"Share","인쇄":"Print","초기화":"Reset","다시 시도":"Try again","불러오기":"Load","내보내기":"Export","적용":"Apply","추가":"Add","편집":"Edit","수정":"Edit","보기":"View","미리보기":"Preview","설정":"Settings","도움말":"Help","사용법":"Guide","예시":"Example","샘플":"Sample","무료":"Free","유료":"Paid","개인정보":"Privacy","개인정보 처리방침":"Privacy policy","개인정보 처리 안내":"Privacy notice","이용약관":"Terms","홈":"Home","뒤로":"Back","다음":"Next","이전":"Previous","확인":"OK","검색":"Search","필터":"Filter","전체":"All","없음":"None","준비 중":"Coming soon","준비 중입니다":"Coming soon","로딩 중":"Loading","불러오는 중":"Loading","처리 중":"Working","빈칸":"Blank","필수":"Required","선택":"Optional","이름":"Name","제목":"Title","날짜":"Date","시간":"Time","메모":"Note","상태":"Status","결과":"Result","요약":"Summary","상세":"Details","언어":"Language","한국어":"Korean","영어":"English","복사하기":"Copy","링크 복사":"Copy link","전체 복사":"Copy all","다크 모드로 전환":"Switch to dark mode","라이트 모드로 전환":"Switch to light mode","테마 전환":"Toggle theme","라이트/다크":"Light / dark","다크/라이트":"Dark / light","새 탭에서 보기":"Open in new tab","새 창":"New window","본문으로 건너뛰기":"Skip to content","본문으로 바로가기":"Skip to content","맨 위로":"Back to top","더 보기":"Show more","접기":"Collapse","펼치기":"Expand","자주 묻는 질문":"Frequently asked questions","이 브라우저에만 저장됩니다":"Saved only in this browser","이 브라우저에만 저장됩니다 · 서버 전송 0":"Saved only in this browser · zero uploads","서버 전송 없음":"No upload","서버 업로드 없음":"No server upload","100% 브라우저 처리":"100% in-browser","브라우저에서 처리":"Processed in your browser","파일은 서버로 전송되지 않습니다":"Files never leave your device","파일이 서버로 전송되지 않습니다":"Files never leave your device","붙여넣은 코드는 서버로 전송되지 않습니다":"Pasted code never leaves your device"};
  var APP = /*__DICT__*/ {"퇴직금·연차 계산기 — 2026 퇴직소득세·세후 실수령액":"Severance & Leave Calculator — 2026 Korea Severance Tax & Net Payout","2026년 기준 퇴직금과 미사용 연차수당을 계산합니다. 퇴직소득세(근속연수공제·환산급여)와 지방소득세까지 반영한 세후 실수령액, 입사일·회계연도 정산 비교, A4 PDF 저장. 입력값은 서버로 전송되지 않습니다.":"Calculate severance pay and unused annual leave allowance under 2026 Korean rules. See the net payout after severance income tax (service-year and converted-pay deductions) and local income tax, compare hire-date and fiscal-year settlements, and save an A4 PDF. Inputs never leave your browser.","퇴직금 계산기, 연차수당 계산기, 퇴직소득세, 세후 퇴직금, 근속연수공제, 환산급여, 2026 퇴직금, 미사용 연차수당":"severance pay calculator, unused leave allowance, Korea severance income tax, net severance pay, service-year deduction, converted pay, 2026 severance","퇴직금과 남은 연차수당을 한 화면에서. 2026 퇴직소득세와 지방소득세까지 뺀 실수령액, A4 PDF 저장.":"Severance pay and unused leave allowance on one screen. Net payout after 2026 severance and local income tax, saved as an A4 PDF.","퇴직금·연차 계산기":"Severance & Leave Calculator","2026년 퇴직소득세 반영 세후 실수령액과 미사용 연차수당을 한 화면에서 계산합니다.":"Severance pay and unused leave allowance in one screen, with the 2026 severance income tax deducted.","퇴직금·연차 계산기 홈":"Severance & Leave Calculator home","2026년 기준 요약":"2026 key figures","계산기 선택":"Choose a calculator","연차 산정 기준":"Leave accrual basis","계산 목적":"Calculation purpose","1일 통상임금 입력 방식":"How to enter the daily ordinary wage","월 통상임금":"Monthly ordinary wage","1일 통상임금":"Daily ordinary wage","퇴직금·연차 계산기 — 2026 퇴직소득세·세후 실수령액 홈":"Severance & Leave Calculator home","본문으로 바로가기":"Skip to content","근로기준법·근로자퇴직급여 보장법 · 2026 퇴직소득세 기준":"Labor Standards Act · Employee Retirement Benefit Security Act · 2026 severance tax","출력일":"Printed","퇴":"S","2026 근로기준법 · 퇴직소득세 반영":"2026 Labor Standards Act · severance tax applied","서버 전송 0건":"Nothing sent to a server","전송 0건":"No upload","개인정보 처리방침":"Privacy policy","근로기준법 제60조 · 퇴직급여법 제8조":"Labor Standards Act §60 · Retirement Benefits Act §8","입력값은 브라우저에만":"Inputs stay in your browser","가입·설치 없음":"No sign-up or install","A4 PDF 저장":"A4 PDF export","퇴직금 지급 요건":"Severance threshold","1년":"1 year","365일":"365 days","계속근로 1년 이상":"1+ year of continuous work","연차 발생 상한":"Annual leave cap","일":" days","가산 포함 최대":"maximum, bonus days included","퇴직소득세율":"Severance tax rate","환산급여에 기본세율":"basic rate on converted pay","연차 계산":"Leave","퇴직금 계산":"Severance","입력하면 결과가 바로 바뀝니다":"Results update as you type","근무 기간":"Employment period","입사일":"Hire date","기준일":"As-of date","퇴사일":"Exit date","근속기간":"Service period","계산 조건":"Calculation settings","산정 기준":"Accrual basis","입사일 기준":"Hire-date basis","회계연도 기준":"Fiscal-year basis","회사 규정에 따라 다릅니다. 두 기준을 함께 비교합니다.":"This depends on company policy; both bases are compared.","재직 중 잔여 연차":"Remaining leave, still employed","퇴사 정산":"Exit settlement","퇴사 정산은 마지막 근무일까지의 근무 비율로 정산합니다.":"An exit settlement is prorated up to the last working day.","사용한 연차":"Leave used","해당 연도(부여일 이후)에 사용한 일수":"Days used in the current leave year (after the grant date)","월급으로 계산":"From monthly salary","직접 입력":"Enter directly","원":" KRW","월 통상임금 ÷ 209 × 8 =":"Monthly ordinary wage ÷ 209 × 8 =","연차 1일분 통상임금(8시간 기준)":"Ordinary wage for one leave day (8 hours)","연차 계산하기":"Calculate leave","퇴직금 계산하기":"Calculate severance","퇴사일은":"The exit date is the","마지막으로 근무한 날":"last day worked","기준입니다(초일 산입).":" (counted inclusive).","재직일수":"Days employed","3개월 기간":"3-month window","임금 · 수당":"Wages & allowances","세전 기준":"gross","월급 (세전)":"Monthly salary (gross)","입력하면 3개월 임금총액·1일 통상임금이 자동으로 채워집니다.":"Fills in the 3-month gross pay and daily ordinary wage for you.","최근 3개월 임금 총액":"Gross pay, last 3 months","연간 상여금":"Annual bonus","× 3/12 가산":"× 3/12 added","전년도 연차수당":"Last year's leave allowance","윗줄 월급 ÷ 209 × 8 =":"Salary above ÷ 209 × 8 =","평균임금과 비교해 큰 금액이 적용됩니다.":"Whichever is larger, this or the average wage, is applied.","법정 기준 참고용":"Reference only","2026년 근로기준법·근로자퇴직급여 보장법·소득세법 기준":"Based on the 2026 Labor Standards Act, Employee Retirement Benefit Security Act and Income Tax Act","입력값 서버 전송 0건":"No input ever sent to a server","계산하려면 브라우저에서 JavaScript를 켜 주세요.":"Please enable JavaScript in your browser to calculate.","계산기로 →":"To the calculator →","최종 갱신 2026-11-22":"Last updated 2026-11-22","요약:":"Summary:","회원가입·로그인·결제가 없고, 입력한 입사일·퇴사일·임금·연차 정보를":"There is no sign-up, login or payment, and the hire date, exit date, wage and leave details you enter are","서버로 보내지 않습니다.":"never sent to a server.","화면에서 계산만 하고, 값을 저장하지도 않습니다.":"Everything is calculated on screen only, and nothing is stored.","수집하는 개인정보":"Personal data we collect","없습니다. 이름·연락처·주민등록번호를 입력받는 칸이 없으며, 급여·근무 정보도 운영자에게 전달되지 않습니다.":"None. There is no field for your name, contact details or national ID, and wage and employment details never reach the operator.","입력값이 머무는 곳":"Where your inputs live","입력값은 현재 화면의 메모리에만 있고, 새로고침하거나 창을 닫으면 사라집니다.":"Inputs exist only in this page's memory and disappear when you reload or close the window.","계산 결과와 근거는 화면에만 표시되며 브라우저 저장소에 기록되지 않습니다.":"Results and their workings are shown on screen only and are never written to browser storage.","결과를 보관하려면 화면 캡처나 인쇄(A4 PDF 저장)로 이용자가 직접 남겨야 합니다.":"To keep a result, save it yourself with a screenshot or print it (A4 PDF).","외부 전송":"External requests","페이지가 불러오는 것은 이 페이지 자체의 파일(HTML·CSS·로컬 글꼴)뿐이며, CDN·분석 도구·광고 스크립트가 없습니다. 계산 과정에서 외부로 나가는 요청은 0건입니다.":"The page loads only its own files (HTML, CSS, local fonts). There are no CDNs, analytics or ad scripts, and calculating sends nothing out.","쿠키와 추적":"Cookies and tracking","이 계산기는 쿠키를 쓰지 않고 방문 기록을 수집하지 않습니다. 사이트에 광고(예: Google AdSense)가 붙는 경우 광고 사업자의 쿠키가 쓰일 수 있고, 이는 브라우저 설정이나 해당 사업자의 광고 설정에서 거부할 수 있습니다.":"This calculator sets no cookies and collects no visit history. If ads (for example Google AdSense) appear on the site, the ad provider may set its own cookies, which you can refuse in your browser settings or in that provider's ad settings.","제3자 제공·위탁":"Sharing with third parties","제3자에게 제공하거나 처리를 위탁하는 데이터가 없습니다. 운영자가 데이터를 받지 않으므로 제공·위탁이 발생하지 않습니다.":"No data is shared with or processed by third parties. The operator receives nothing, so nothing can be shared.","계산 결과의 성격":"What the result is","근로기준법·근로자퇴직급여 보장법·소득세법 조문을 규칙으로 옮긴":"It is a","참고용 계산":"reference calculation","입니다. 회사 내규, 비과세 수당, 중간정산, 퇴직연금 수령 방식에 따라 실제 금액이 달라지므로 지급 전 노무사·세무사 확인이 필요합니다. 퇴직소득세는 2026년 근속연수공제·환산급여공제·기본세율로 계산하며, 연금계좌 과세이연과 세액공제는 반영하지 않습니다. 이 계산기는 법률·노무·세무 자문을 대신하지 않습니다.":" that turns the Labor Standards Act, the Employee Retirement Benefit Security Act and the Income Tax Act into rules. Actual amounts vary with company policy, tax-exempt allowances, interim settlements and the pension payout option, so confirm with a labor attorney or tax accountant before paying. Severance income tax uses the 2026 service-year deduction, converted-pay deduction and basic rates; pension-account deferral and tax credits are not applied. This calculator is not legal, labor or tax advice.","문의":"Contact","처리 방식이 바뀌면 이 페이지에 먼저 고지합니다. 오류 제보나 문의는 배포 저장소의 이슈로 남겨 주세요.":"Any change in how data is handled will be announced on this page first. Report errors or ask questions through an issue in the deployment repository.","← 계산기로 돌아가기":"← Back to the calculator","퇴직금·연차 계산기는 입력한 근무 정보를 서버로 보내지 않습니다. 저장하지 않는 값과 브라우저에서만 처리되는 방식을 안내합니다.":"The Severance & Leave Calculator never sends your employment details to a server. This page explains what is not stored and how everything stays in your browser.","개인정보 처리방침 — 퇴직금·연차 계산기":"Privacy policy — Severance & Leave Calculator","A4 PDF로 저장":"Save as A4 PDF","A4 PDF":"A4 PDF","연차":"Leave","퇴직금":"Severance","계산 입력값":"Calculation inputs","1개월 개근 시 1일 (최대 11일)":"1 day per full month attended (up to 11 days)","입사 첫해 · 1개월 개근 시 1일 (최대 11일)":"First year · 1 day per full month (max 11 days)","1개월 미만":"Under 1 month","1년 미만":"Under 1 year","1년 이상":"1 year or more","연차 계산 결과":"Leave calculation","퇴사 시 정산 연차":"Leave settled on exit","남은 연차와 연차수당":"Remaining leave and leave allowance","재직 중":"While employed","잔여 연차":"Remaining leave","퇴사 시 연차수당":"Leave allowance on exit","예상 미사용 연차수당":"Estimated unused-leave allowance","정산 대상 연차":"Leave in the settlement","당해 발생 연차":"Accrued this leave year","발생 근거":"Accrual basis","재직 중 총 발생":"Total accrued while employed","총 발생은 참고값입니다. 연차휴가는 1년간 사용하지 않으면 소멸하며(회사 취업규칙에 따라 다름), 미사용 수당 청구권의 소멸시효는 3년입니다.":"The total accrued is for reference. Leave expires if unused for one year (depending on company rules), and the right to claim unused-leave pay lapses after three years.","사용 연차":"Leave used","연차수당":"Leave allowance","입사일 vs 회계연도":"Hire date vs fiscal year","퇴사 정산 비교":"Exit settlement comparison","을 뺀 정산일수와 수당을 비교합니다.":" used days, along with the allowance.","회계연도 기준은 1월 1일 부여분 × (1월 1일~기준일 ÷ 365)로 계산하고 소수점 이하는 버렸습니다. 회사 규정에 따라 1일 정도 차이가 날 수 있습니다.":"The fiscal-year basis grants on 1 January and prorates by (1 Jan – as-of date ÷ 365), rounded down. Company rules can shift this by about a day.","정산 계산 과정":"Settlement calculation","연차를 계산해 보세요":"Calculate your leave","입사일과 기준일을 입력하면 연차가 계산됩니다.":"Enter a hire date and an as-of date to see your leave.","퇴직금을 계산해 보세요":"Calculate your severance pay","입사일과 퇴사일을 입력하면 퇴직금과 세후 실수령액이 계산됩니다.":"Enter hire and exit dates to see severance pay and the net payout.","기준일이 입사일보다 빠릅니다. 날짜를 확인해 주세요.":"The as-of date is before the hire date. Please check the dates.","퇴사일이 입사일보다 빠릅니다. 날짜를 확인해 주세요.":"The exit date is before the hire date. Please check the dates.","두 기준의 정산일수가 같습니다.":"Both bases settle the same number of days.","퇴직금 계산 결과":"Severance calculation","예상 세전 퇴직금":"Estimated gross severance","통상임금 적용":"Ordinary wage applied","평균임금 적용":"Average wage applied","1일 통상임금이 1일 평균임금보다 커서 통상임금을 적용했습니다. (근로기준법 제2조 제2항)":"The daily ordinary wage is higher than the daily average wage, so the ordinary wage was applied (Labor Standards Act Art. 2(2)).","1일 평균임금이 1일 통상임금보다 커서 평균임금을 적용했습니다.":"The daily average wage is higher than the daily ordinary wage, so the average wage was applied.","2026 퇴직소득세 반영":"With the 2026 severance income tax","퇴직소득세 0원":"Severance tax ₩0","세후 실수령액":"Net payout","퇴직소득세":"Severance tax","지방소득세":"Local income tax","세전":"Gross ","세후":"Net ","퇴직금 산식":"Severance formula","적용 1일 임금":"Daily wage applied","적용 임금":"Wage applied","세전 퇴직금":"Gross severance","2026 퇴직소득세":"2026 severance income tax","(통상임금 적용)":"(ordinary wage applied)","(평균임금 적용)":"(average wage applied)","· 본 계산기는 법정 기준 참고용이며, 회사 내규·세금(퇴직소득세)·비과세 수당 포함 여부에 따라 실수령액은 달라질 수 있습니다. 퇴직금은 1일 평균임금과 1일 통상임금 중 큰 금액으로 계산했습니다. 퇴직소득세는 퇴직급여 전액을 과세대상으로 보고 계산했습니다. 지급 전 노무사·세무사 확인을 권합니다.":"· This calculator is for reference against the statutory rules; the net amount varies with company policy, tax treatment and tax-exempt allowances. Severance pay uses the larger of the daily average wage and the daily ordinary wage. Severance income tax is calculated on the full severance amount as taxable. Confirm with a labour attorney or tax accountant before paying.","1일 평균임금":"Daily average wage","3개월 임금총액":"Gross pay, 3 months","3개월 총일수":"Days in the 3 months","세금 계산 내역":"Tax breakdown","근속연수":"Years of service","(1년 미만 올림)":"(rounded up)","근속연수공제":"Service-year deduction","환산급여":"Converted pay","환산급여공제":"Converted-pay deduction","과세표준":"Tax base","적용 세율":"Rate applied","산출세액":"Tax computed","퇴직금 계산 과정":"Severance calculation","퇴직소득세 계산 과정":"Severance tax calculation","환산급여: (":"Converted pay: (","2026년 소득세법 제48조(근속연수공제·환산급여공제)·제55조(기본세율) 기준입니다. 비과세 소득·중간정산·퇴직연금 수령분·연금계좌 과세이연은 반영하지 않습니다.":"Based on the 2026 Income Tax Act Art. 48 (service-year and converted-pay deductions) and Art. 55 (basic rates). Tax-exempt income, interim settlements, pension payouts and pension-account deferral are not applied.","참고용 안내":"Please note","년":" years","· 계산 입력값":" · calculation inputs","년차 · 15일 + 가산":"-year · 15 days + bonus ","회계연도":"Fiscal year ","년차":"-year ","전년도 재직":"Prior-year service ","일 비례":" days, prorated ","정산 발생":"Settled accrued ","발생":"Accrued ","− 사용":" − used ","기준일에 퇴사한다고 가정하고, 사용":"Assumes you leave on the as-of date and compares settled days net of ","입사일 기준:":"Hire-date basis: ","에":" → ","발생 → 사용":" accrued → used ","차감 =":" deducted = ","회계연도 기준: 당해 부여":"Fiscal-year basis: granted this year ","× 재직일수 비례 →":" × days employed, prorated → ","→ 사용":" → used ","수당 =":"Allowance = ","정산 연차":"settled leave ","잔여":"remaining ","× 1일 통상임금":" × daily ordinary wage ","회계연도 기준이":"The fiscal-year basis gives ","더 많습니다. 회사가 회계연도 기준으로 운영한다면 이 기준으로 정산받을 수 있습니다.":" more. If your company runs on a fiscal-year basis, you can settle on this basis.","입사일 기준이":"The hire-date basis gives ","더 많습니다. 입사일 기준 정산이 유리합니다.":" more. Settling on the hire-date basis is better for you.","− 퇴직소득세":" − severance tax ","− 지방소득세":" − local income tax ","실효세율":"Effective rate ","근속":"Service ","년 기준 퇴직소득세":" years · severance tax ","+ 지방소득세":" + local income tax ","× 30일 × (":" × 30 days × (","부여 ·":" granted · ","누진공제":"progressive deduction ","재직일수:":"Days employed: ","(초일 산입) =":" (first day counted) = ","평균임금 산정기간:":"Average-wage window: ","3개월 임금총액: 임금":"3-month gross pay: wages ","+ 상여금 3/12":" + bonus × 3/12 ","+ 연차수당 3/12":" + leave allowance × 3/12 ","1일 평균임금:":"Daily average wage: ","일 =":" days = ","1일 통상임금:":"Daily ordinary wage: ","적용 임금: 둘 중 큰 금액":"Wage applied, the larger of the two: ","퇴직금:":"Severance: ","(원 미만 절사)":" (truncated below 1 won)","근속연수:":"Years of service: ",", 1년 미만 올림 =":", rounded up = ","근속연수공제:":"Service-year deduction: ","환산급여공제:":"Converted-pay deduction: ","→ 과세표준":" → tax base ","기본세율":"Basic rate ","− 누진공제":" − progressive deduction ","→ 환산산출세액":" → converted tax ","산출세액:":"Tax computed: ","지방소득세 10%:":"Local income tax 10%: ","→ 총 세금":" → total tax ",", 세후":", net "};
  var PATTERNS = /*__PATTERNS__*/ [[new RegExp("^(\\d[\\d.,]*)\\s*일$", ""), "$1 days"],[new RegExp("^(\\d[\\d.,]*)\\s*년$", ""), "$1 years"],[new RegExp("^(\\d[\\d.,]*)\\s*개월$", ""), "$1 months"],[new RegExp("^(\\d[\\d.,]*)\\s*시간$", ""), "$1 hours"],[new RegExp("^(\\d[\\d.,]*)\\s*분$", ""), "$1 min"],[new RegExp("^(\\d[\\d.,]*)\\s*명$", ""), "$1 people"],[new RegExp("^(\\d[\\d.,]*)\\s*개$", ""), "$1"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*(\\d[\\d.,]*)\\s*개월$", ""), "$1 yr $2 mo"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*(\\d[\\d.,]*)\\s*개월\\s*(\\d[\\d.,]*)\\s*일$", ""), "$1 yr $2 mo $3 d"],[new RegExp("^(\\d[\\d.,]*)\\s*개월\\s*(\\d[\\d.,]*)\\s*일$", ""), "$1 mo $2 d"],[new RegExp("^(\\d[\\d.,]*)\\s*일\\s*전$", ""), "$1 days ago"],[new RegExp("^(\\d[\\d.,]*)\\s*개월\\s*전$", ""), "$1 months ago"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*전$", ""), "$1 years ago"],[new RegExp("^([\\d.,]+)일$", ""), "$1 days"],[new RegExp("^([\\d.,]+)년$", ""), "$1 years"],[new RegExp("^([\\d.,]+)개월$", ""), "$1 months"],[new RegExp("^([\\d.,]+)년 ?([\\d.,]+)개월$", ""), "$1 yr $2 mo"],[new RegExp("^연차$", ""), "Leave"],[new RegExp("^퇴직금$", ""), "Severance"],[new RegExp("^퇴직소득세 (\\{0\\})$", ""), "Severance tax $1"],[new RegExp("^계속근로기간이 1년\\(365일\\) 미만이라 퇴직금이 발생하지 않습니다\\. \\(현재 ([\\d.,]+)일 · ([\\d.,]+)일 부족\\)$", ""), "Continuous service is under 1 year (365 days), so no severance pay accrues. ($1 days now · $2 days short)"],[new RegExp("^계속근로기간이 1년\\(365일\\) 미만이라 퇴직금이 발생하지 않습니다\\. \\(현재 ([\\d.,]+)일 · ([\\d.,]+)일 부족\\)", ""), "Continuous service is under 1 year (365 days), so no severance pay accrues. ($1 days now · $2 days short)"],[new RegExp("^발생 ([\\d.,]+)일 − 사용 ([\\d.,]+)일$", ""), "Accrued $1 days − used $2 days"],[new RegExp("^1일 통상임금 (\\{0\\}) × ([\\d.,]+)일$", ""), "Daily ordinary wage $1 × $2 days"],[new RegExp("^\\(([\\d.,]+)일\\)$", ""), "($1 days)"],[new RegExp("^(\\d{4}\\.\\d{2}\\.\\d{2}) 부여 · ([\\d.,]+)년차 · ([\\d.,]+)일 \\+ 가산 ([\\d.,]+)일$", ""), "Granted $1 · year $2 · $3 days + $4 bonus days"],[new RegExp("^기준일에 퇴사한다고 가정하고, 사용 ([\\d.,]+)일을 뺀 정산일수와 수당을 비교합니다\\.$", ""), "Assumes you leave on the as-of date; compares settled days and allowance net of $1 days used."],[new RegExp("^입사일 기준: (\\d{4}\\.\\d{2}\\.\\d{2})에$", ""), "Hire-date basis: granted on $1"],[new RegExp("^회계연도 기준: 당해 부여 ([\\d.,]+)일 × 재직일수 비례 →$", ""), "Fiscal-year basis: granted this year $1 days × prorated to days employed →"],[new RegExp("^발생 → 사용 ([\\d.,]+)일 차감 =$", ""), "accrued → $1 days used deducted ="],[new RegExp("^수당 = 잔여 ([\\d.,]+)일 × 1일 통상임금 (\\{0\\}) =$", ""), "Allowance = remaining $1 days × daily ordinary wage $2 ="],[new RegExp("^세전 (\\{0\\}) − 퇴직소득세 (\\{1\\}) − 지방소득세 (\\{2\\})$", ""), "Gross $1 − severance tax $2 − local income tax $3"],[new RegExp("^실효세율 (.+) · 근속 ([\\d.,]+)년 기준 퇴직소득세 (\\{0\\}) \\+ 지방소득세 (\\{1\\})$", ""), "Effective rate $1 · $2 years of service: severance tax $3 + local income tax $4"],[new RegExp("^(\\{0\\}) × 30일 × \\((.+)\\)$", ""), "$1 × 30 days × ($2)"],[new RegExp("^(\\{0\\}) \\(통상임금 적용\\)$", ""), "$1 (ordinary wage applied)"],[new RegExp("^(\\{0\\}) \\(평균임금 적용\\)$", ""), "$1 (average wage applied)"],[new RegExp("^근속 ([\\d.,]+)년$", ""), "Service $1 years"],[new RegExp("^재직일수: (.+) ~ (.+) \\(초일 산입\\) =$", ""), "Days employed: $1 ~ $2 (first day counted) ="],[new RegExp("^평균임금 산정기간: (.+) =$", ""), "Average-wage window: $1 ="],[new RegExp("^3개월 임금총액: 임금 (\\{0\\}) \\+ 상여금 3/12 (\\{1\\}) =$", ""), "3-month gross pay: wages $1 + bonus × 3/12 $2 ="],[new RegExp("^3개월 임금총액: 임금 (\\{0\\}) \\+ 상여금 3/12 (\\{1\\}) \\+ 연차수당 3/12 (\\{2\\}) =$", ""), "3-month gross pay: wages $1 + bonus × 3/12 $2 + leave allowance × 3/12 $3 ="],[new RegExp("^1일 평균임금: (\\{0\\}) ÷ ([\\d.,]+)일 =$", ""), "Daily average wage: $1 ÷ $2 days ="],[new RegExp("^1일 통상임금: (\\{0\\}) ÷ 209 × 8 =$", ""), "Daily ordinary wage: $1 ÷ 209 × 8 ="],[new RegExp("^퇴직금: (\\{0\\}) × 30 × \\(([\\d.,]+) ÷ 365\\) =$", ""), "Severance: $1 × 30 × ($2 ÷ 365) ="],[new RegExp("^근속연수: (.+) ~ (.+), 1년 미만 올림 =$", ""), "Years of service: $1 ~ $2, rounded up ="],[new RegExp("^환산급여: \\((\\{0\\}) − (\\{1\\})\\) ÷ ([\\d.,]+) × 12 =$", ""), "Converted pay: ($1 − $2) ÷ $3 × 12 ="],[new RegExp("^기본세율 (.+) → 환산산출세액$", ""), "Basic rate $1 → converted tax"],[new RegExp("^산출세액: (\\{0\\}) ÷ ([\\d.,]+) × ([\\d.,]+) =$", ""), "Tax computed: $1 ÷ $2 × $3 ="],[new RegExp("^부여 · ([\\d.,]+)년차 · ([\\d.,]+)일 \\+ 가산 ([\\d.,]+)일$", ""), "granted · year $1 · $2 days + $3 bonus days"],[new RegExp("^→ 사용 ([\\d.,]+)일 차감 =$", ""), "→ $1 days used deducted ="]];
  var BLOCKS = /*__BLOCKS__*/ {"hero-h1":"Start with the<br><em>after-tax number</em>.","hero-lead":"Calculate severance pay and unused leave allowance on one screen. The 2026 severance income tax — service-year and converted-pay deductions — and local income tax are taken out to show the <b>net payout</b>, and everything can be saved as an A4 PDF.","dates-hint":"Use <b>today</b> for leave accrued so far, or the <b>last working day</b> for an exit settlement.","page-note":"<b>Reference only.</b> Actual amounts vary with company policy, tax-exempt allowances, interim settlements and the pension payout option. Confirm with a labor attorney or tax accountant before paying."};

  var DICT = {};
  var k;
  for (k in COMMON) if (Object.prototype.hasOwnProperty.call(COMMON, k)) DICT[k] = COMMON[k];
  for (k in APP) if (Object.prototype.hasOwnProperty.call(APP, k)) DICT[k] = APP[k];

  var HANGUL = /[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7A3]/;
  var SKIP_TAG = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, CODE: 1, SVG: 1 };
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var state = { lang: 'ko' };
  var records = [];
  var missing = {};
  var missingList = [];
  var observer = null;

  /* ---------- language ---------- */
  function detect() {
    try {
      var q = new URLSearchParams(root.location.search).get('lang');
      if (q === 'ko' || q === 'en') return q;
    } catch (e) { /* very old browser */ }
    try {
      var saved = root.localStorage.getItem(LANG_KEY);
      if (saved === 'ko' || saved === 'en') return saved;
    } catch (e) { /* private mode */ }
    var nav = root.navigator.language || root.navigator.userLanguage || 'ko';
    return /^ko/i.test(nav) ? 'ko' : 'en';
  }

  /* ---------- lookup ---------- */
  function report(text) {
    if (missing[text]) return;
    missing[text] = 1;
    missingList.push(text);
    if (root.console && console.warn) console.warn('I18N_MISS: ' + text);
  }

  /* Pattern with capture translation: captures that still hold Korean are looked up too. */
  function applyPattern(core, p) {
    if (!p[0].test(core)) return null;
    var m = p[0].exec(core);
    var caps = [], i, ok = true;
    for (i = 1; i < m.length; i++) {
      var c = m[i];
      if (c == null) { caps[i] = ''; continue; }
      if (HANGUL.test(c)) {
        var t = lookupSmall(c.trim());
        if (t == null) { ok = false; caps[i] = c; } else { caps[i] = t; }
      } else { caps[i] = c; }
    }
    var out = p[1].replace(/\$(\d+)/g, function (all, n) { return caps[+n] != null ? caps[+n] : all; });
    if (!ok || HANGUL.test(out)) return null;
    return out;
  }

  function tr(raw) {
    if (typeof raw !== 'string' || !HANGUL.test(raw)) return raw;
    raw = raw.replace(/\u00a0/g, ' ');
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(raw);
    var lead = m[1], core = m[2], tail = m[3];
    if (!core) return raw;
    var hit = DICT[core];
    if (hit == null && /\s{2,}|\n/.test(core)) hit = DICT[core.replace(/\s+/g, ' ').trim()];
    if (hit != null) return lead + hit + tail;

    /* Korean date: 2026년 11월 27일 -> November 27, 2026 */
    var dt = /^(\d{4})\s*년\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일$/.exec(core);
    if (dt) {
      var MO = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var mm = parseInt(dt[2], 10);
      if (mm >= 1 && mm <= 12) return lead + MO[mm - 1] + ' ' + parseInt(dt[3], 10) + ', ' + dt[1] + tail;
    }

    /* money in Korean format: 81만 원 / 2,980,750원  ->  {0} template */
    var money = takeMoney(core);
    if (money.map.length) {
      var tpl = money.text;
      var th = DICT[tpl];
      if (th == null && /\s{2,}|\n/.test(tpl)) th = DICT[tpl.replace(/\s+/g, ' ').trim()];
      if (th == null && /^\{0\}$/.test(tpl.trim())) th = '{0}';
      if (th != null) return lead + putMoney(th, money.map) + tail;
      for (var mi = 0; mi < PATTERNS.length; mi++) {
        var mo = applyPattern(tpl, PATTERNS[mi]);
        if (mo != null) return lead + putMoney(mo, money.map) + tail;
      }
      var mseg = trSegments(tpl);
      if (mseg != null) return lead + putMoney(mseg, money.map) + tail;
    }
    for (var i = 0; i < PATTERNS.length; i++) {
      var pout = applyPattern(core, PATTERNS[i]);
      if (pout != null) return lead + pout + tail;
    }
    var seg = trSegments(core);
    if (seg != null) return lead + seg + tail;
    report(core);
    return raw;
  }


  /* Korean money -> token template; values are formatted as ₩1,234,567 */
  function won(n) { return (n < 0 ? '−₩' : '₩') + Math.abs(n).toLocaleString('en-US'); }
  function takeMoney(core) {
    var map = [];
    var out = core.replace(/([\d,]+)\s*억(?:\s*([\d,]+)\s*만)?(?:\s*([\d,]+))?\s*원/g, function (all, a, b, c) {
      var n = parseInt(a.replace(/,/g, ''), 10) * 100000000 +
        (b ? parseInt(b.replace(/,/g, ''), 10) * 10000 : 0) +
        (c ? parseInt(c.replace(/,/g, ''), 10) : 0);
      map.push(won(n));
      return '{' + (map.length - 1) + '}';
    });
    out = out.replace(/([\d,]+)\s*만(?:\s*([\d,]+))?\s*원/g, function (all, a, b) {
      var n = parseInt(a.replace(/,/g, ''), 10) * 10000 + (b ? parseInt(b.replace(/,/g, ''), 10) : 0);
      map.push(won(n));
      return '{' + (map.length - 1) + '}';
    });
    out = out.replace(/([+\-\u2212]?[\d,]+)\s*원/g, function (all, a) {
      var raw = a.replace(/\u2212/g, '-').replace(/,/g, '');
      var num = parseInt(raw, 10);
      map.push(isFinite(num) ? won(num) : a);
      return '{' + (map.length - 1) + '}';
    });
    return { text: out, map: map };
  }
  function putMoney(s, map) {
    return s.replace(/\{(\d+)\}/g, function (all, i) { return map[+i] != null ? map[+i] : all; });
  }

  /* A small unit: dictionary hit or pattern hit, no whitespace trimming. */
  function lookupSmall(unit) {
    var hit = DICT[unit];
    if (hit != null) return hit;
    for (var i = 0; i < PATTERNS.length; i++) {
      var pout = applyPattern(unit, PATTERNS[i]);
      if (pout != null) return pout;
    }
    return null;
  }

  function trPipe(line) {
    var parts = line.split(/\s*\|\s*/);
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var t = lookupSmall(parts[i].trim());
      if (t == null) return null;
      out.push(t);
    }
    return out.join(' | ');
  }

  /* piece lookup: dictionary, patterns, money token, or bare number/unit */
  function piece(unit) {
    var u = unit.trim();
    if (!u) return '';
    if (!HANGUL.test(u)) return u;
    if (/^\{\d+\}$/.test(u)) return u;
    var t = lookupSmall(u);
    if (t != null) return t;
    return null;
  }

  var SEG_SPLIT = /\s*(\s·\s|\s→\s|\s:\s|\s\/\s)/;
  function trSplit(line) {
    var parts = line.split(SEG_SPLIT);
    if (parts.length < 3) return null;
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      if (i % 2) { out.push(parts[i]); continue; }
      var t = piece(parts[i]);
      if (t == null) return null;
      out.push(t);
    }
    return out.join('');
  }

  function trSegments(core) {
    if (core.indexOf('\n') > -1) {
      var lines = core.split('\n');
      var out = [];
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (!line.trim()) { out.push(line); continue; }
        var t = line.indexOf('|') > -1 ? trPipe(line) : piece(line);
        if (t == null) t = trSplit(line);
        if (t == null) { if (root.__I18N_DEBUG) (root.__I18N_SEGFAIL = root.__I18N_SEGFAIL || []).push(line); return null; }
        out.push(t);
      }
      return out.join('\n');
    }
    if (core.indexOf('|') > -1) return trPipe(core);
    if (/[·:→]/.test(core) && /\s/.test(core)) return trSplit(core);
    return null;
  }

  /* ---------- DOM walking ---------- */
  function skipped(el) {
    while (el) {
      if (el.nodeType === 1) {
        if (SKIP_TAG[el.tagName]) return true;
        if (el.getAttribute && (el.hasAttribute('data-i18n-skip') || el.getAttribute('contenteditable') === 'true')) return true;
        if (el.classList && el.classList.contains('onetap-lang')) return true;
      }
      el = el.parentNode;
    }
    return false;
  }

  function trText(node) {
    var v = node.nodeValue;
    if (!v || !HANGUL.test(v)) return;
    var out = tr(v);
    if (out !== v) {
      records.push({ n: node, v: v });
      node.nodeValue = out;
    }
  }

  function trAttrs(el) {
    var i, at, v, out;
    for (i = 0; i < ATTRS.length; i++) {
      at = ATTRS[i];
      if (!el.hasAttribute(at)) continue;
      v = el.getAttribute(at);
      if (!v || !HANGUL.test(v)) continue;
      out = tr(v);
      if (out !== v) {
        records.push({ e: el, a: at, v: v });
        el.setAttribute(at, out);
      }
    }
    if (el.tagName === 'INPUT' && el.hasAttribute('value') && el.type !== 'checkbox' && el.type !== 'radio' && el.type !== 'hidden') {
      v = el.getAttribute('value');
      if (v && HANGUL.test(v)) {
        out = tr(v);
        if (out !== v) {
          records.push({ e: el, a: 'value', v: v });
          el.setAttribute('value', out);
          if (el.value === v) el.value = out;
        }
      }
    }
    if (el.tagName === 'INPUT') {
      var ty = (el.type || '').toLowerCase();
      if (ty === 'button' || ty === 'submit' || ty === 'reset') {
        v = el.value;
        if (v && HANGUL.test(v)) {
          out = tr(v);
          if (out !== v) { records.push({ e: el, a: 'value', v: v }); el.value = out; }
        }
      }
    }
  }

  function walk(node) {
    if (node.nodeType === 3) { trText(node); return; }
    if (node.nodeType !== 1) return;
    if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && node.tagName !== 'SVG' &&
        !(node.classList && node.classList.contains('onetap-lang'))) trAttrs(node);
    if (skipped(node)) return;
    if (node.tagName === 'META') return;
    for (var c = node.firstChild; c; c = c.nextSibling) walk(c);
  }

  function trMeta() {
    var list = doc.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i], v = el.getAttribute('content');
      if (v && HANGUL.test(v)) {
        var out = tr(v);
        if (out !== v) { records.push({ e: el, a: 'content', v: v }); el.setAttribute('content', out); }
      }
    }
  }

  function trJsonLd() {
    var list = doc.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      try {
        var data = JSON.parse(el.textContent);
        var changed = fixJson(data);
        if (changed) el.textContent = JSON.stringify(data);
      } catch (e) { /* leave as is */ }
    }
  }

  function fixJson(o) {
    var changed = false, i;
    if (Array.isArray(o)) {
      for (i = 0; i < o.length; i++) if (fixJson(o[i])) changed = true;
      return changed;
    }
    if (!o || typeof o !== 'object') return false;
    for (var key in o) {
      if (!Object.prototype.hasOwnProperty.call(o, key)) continue;
      var v = o[key];
      if (typeof v === 'string' && HANGUL.test(v)) {
        var out = DICT[v.trim()];
        if (out != null) { o[key] = out; changed = true; }
      } else if (v && typeof v === 'object') {
        if (fixJson(v)) changed = true;
      }
    }
    return changed;
  }

  /* ---------- apply / restore ---------- */
  function applyBlocks() {
    var list = doc.querySelectorAll('[data-i18n-block]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i], id = el.getAttribute('data-i18n-block');
      if (!BLOCKS[id] || el.__i18nOrig != null) continue;
      el.__i18nOrig = el.innerHTML;
      el.innerHTML = BLOCKS[id];
    }
  }
  function restoreBlocks() {
    var list = doc.querySelectorAll('[data-i18n-block]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.__i18nOrig != null) { el.innerHTML = el.__i18nOrig; el.__i18nOrig = null; }
    }
  }

  function applyEn() {
    var title = root.__onetapTitle || (root.__onetapTitle = doc.title);
    applyBlocks();
    walk(doc.body);
    trMeta();
    trJsonLd();
    doc.documentElement.lang = 'en';
    var t = DICT[title] || DICT[title.trim()];
    doc.title = t || title;
  }

  function restoreKo() {
    for (var i = records.length - 1; i >= 0; i--) {
      var r = records[i];
      if (r.n) { if (r.n.nodeValue !== r.v) r.n.nodeValue = r.v; }
      else if (r.e) {
        if (r.a === 'value') { if (r.e.value !== r.v) r.e.value = r.v; }
        else if (r.e.getAttribute(r.a) !== r.v) r.e.setAttribute(r.a, r.v);
      }
    }
    records.length = 0;
    restoreBlocks();
    var title = root.__onetapTitle;
    if (title) doc.title = title;
    doc.documentElement.lang = 'ko';
  }

  /* ---------- language switch UI ---------- */
  function buildSwitch() {
    var wrap = doc.createElement('div');
    wrap.className = 'onetap-lang';
    wrap.setAttribute('role', 'group');
    wrap.innerHTML = '<button type="button" data-onetap-lang="ko" aria-pressed="true">KO</button>' +
      '<button type="button" data-onetap-lang="en" aria-pressed="false">EN</button>';
    var box = doc.querySelector('.top-actions') || doc.querySelector('.topbar__inner') ||
      doc.querySelector('.topbar-inner') || doc.querySelector('.topbar-in') ||
      doc.querySelector('.top-badges') || doc.querySelector('.top-in') ||
      doc.querySelector('.topbar') || doc.querySelector('header');
    if (box) {
      if (box.classList.contains('top-badges')) box.insertBefore(wrap, box.firstChild);
      else if (box.classList.contains('top-actions')) box.insertBefore(wrap, box.firstChild);
      else {
        var act = box.querySelector('.top-actions');
        if (act) box.insertBefore(wrap, act); else box.appendChild(wrap);
      }
    } else {
      wrap.style.cssText = 'position:fixed;top:10px;right:10px;z-index:99999;background:rgba(255,255,255,.9);color:#111';
      doc.body.appendChild(wrap);
    }
    wrap.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-onetap-lang]');
      if (!b) return;
      setLang(b.getAttribute('data-onetap-lang'));
    });
    return wrap;
  }

  var CSS = '.onetap-lang{display:inline-flex;flex:none;align-items:center;padding:2px;border:1px solid currentColor;border-radius:999px;opacity:.72;transition:opacity .15s;vertical-align:middle;align-self:center}' +
    '.onetap-lang:hover,.onetap-lang:focus-within{opacity:1}' +
    '.onetap-lang button{appearance:none;-webkit-appearance:none;border:0;background:transparent;color:inherit;font:inherit;font-size:10.5px;font-weight:700;letter-spacing:.04em;line-height:1;padding:5px 6px;border-radius:999px;cursor:pointer;min-width:26px;text-align:center}' +
    '.onetap-lang button[aria-pressed="true"]{background:rgba(128,128,128,.3)}' +
    '@media (max-width:520px){.onetap-lang button{padding:4px 4px;font-size:10px;min-width:22px}.onetap-lang{margin-left:2px}}' +
    'html[lang="en"] .unit,html[lang="en"] .won{margin-left:4px}';

  function injectCss() {
    var s = doc.createElement('style');
    s.id = 'onetap-lang-css';
    s.textContent = CSS;
    (doc.head || doc.documentElement).appendChild(s);
  }

  function paintSwitch() {
    var bs = doc.querySelectorAll('[data-onetap-lang]');
    for (var i = 0; i < bs.length; i++) {
      bs[i].setAttribute('aria-pressed', bs[i].getAttribute('data-onetap-lang') === state.lang ? 'true' : 'false');
    }
    var wrap = doc.querySelector('.onetap-lang');
    if (wrap) wrap.setAttribute('aria-label', state.lang === 'ko' ? '언어' : 'Language');
  }

  /* ---------- observe ---------- */
  function startObserver() {
    if (observer || !root.MutationObserver) return;
    observer = new MutationObserver(function (muts) {
      if (state.lang !== 'en') return;
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === 'characterData') { trText(m.target); continue; }
        if (m.type === 'attributes') { if (m.target.nodeType === 1 && !skipped(m.target)) trAttrs(m.target); continue; }
        for (var j = 0; j < m.addedNodes.length; j++) {
          if (m.addedNodes[j].nodeType === 1 && m.addedNodes[j].hasAttribute && m.addedNodes[j].hasAttribute('data-i18n-block')) applyBlocks();
          walk(m.addedNodes[j]);
        }
      }
    });
    observer.observe(doc.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'aria-label', 'title', 'alt'] });
  }

  function setLang(lang) {
    state.lang = lang === 'en' ? 'en' : 'ko';
    try { root.localStorage.setItem(LANG_KEY, state.lang); } catch (e) { /* private mode */ }
    if (state.lang === 'en') {
      applyEn();
      startObserver();
    } else {
      if (observer) { observer.disconnect(); observer = null; }
      restoreKo();
    }
    paintSwitch();
    try { doc.dispatchEvent(new CustomEvent('onetap:lang', { detail: { lang: state.lang } })); } catch (e) { /* old */ }
  }

  function boot() {
    injectCss();
    buildSwitch();
    state.lang = detect();
    if (state.lang === 'en') {
      applyEn();
      startObserver();
    } else {
      doc.documentElement.lang = 'ko';
    }
    paintSwitch();
    root.ONETAP_I18N = {
      lang: function () { return state.lang; },
      setLang: setLang,
      t: tr,
      missing: function () { return missingList.slice(); },
      dict: DICT
    };
    try { doc.dispatchEvent(new CustomEvent('onetap:lang', { detail: { lang: state.lang } })); } catch (e) { /* old */ }
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window, document);
