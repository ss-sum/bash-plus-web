export type Interest = {
  id: string;
  label: string;
  description: string;
};

export const interests: Interest[] = [
  {
    id: "frontend",
    label: "프론트엔드",
    description:
      "React.js, Vue.js 등 모던 자바스크립트 기반 라이브러리/프레임워크를 이용해 웹 애플리케이션을 개발합니다.",
  },
  {
    id: "backend",
    label: "백엔드",
    description:
      "Spring, Node.js, Django 등 백엔드 프레임워크를 이용해 서버를 구축하고 API를 개발합니다.",
  },
  {
    id: "devops",
    label: "DevOps",
    description:
      "개발과 운영을 통합하는 DevOps 문화를 이해하고, CI/CD, 쿠버네티스 등을 활용해 인프라를 운영합니다.",
  },
  {
    id: "qa",
    label: "QA",
    description:
      "테스트 케이스 작성, 테스트 자동화 등을 통해 소프트웨어 품질을 관리하고 개선합니다.",
  },
  {
    id: "design",
    label: "디자인",
    description: "UI/UX 디자인, 퍼블리싱 등 디자인과 관련된 업무를 수행합니다.",
  },
  {
    id: "planning",
    label: "기획",
    description:
      "서비스 기획, 시장 조사, 사용자 분석 등 기획과 관련된 업무를 수행합니다.",
  },
  {
    id: "data-analysis",
    label: "데이터 분석",
    description:
      "데이터 분석, 데이터 시각화, 머신러닝 등 데이터와 관련된 업무를 수행합니다.",
  },
  {
    id: "ai-ml",
    label: "AI/머신러닝",
    description:
      "머신러닝, 딥러닝, 자연어 처리 등 인공지능과 관련된 업무를 수행합니다.",
  },
];
