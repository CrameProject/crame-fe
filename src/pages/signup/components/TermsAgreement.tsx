import React, { useState } from "react";

interface TermsAgreementProps {
  onAgreementChange?: (agreements: AgreementState) => void;
}

interface AgreementState {
  all: boolean;
  phoneVerification: boolean;
  personalInfo: boolean;
  mobileInfo: boolean;
  promotion: boolean;
}

const TermsAgreement: React.FC<TermsAgreementProps> = ({ onAgreementChange }) => {
  const [agreements, setAgreements] = useState<AgreementState>({
    all: false,
    phoneVerification: false,
    personalInfo: false,
    mobileInfo: false,
    promotion: false,
  });

  const handleAgreementChange = (key: keyof AgreementState, value: boolean) => {
    const newAgreements = { ...agreements, [key]: value };
    
    // 전체 동의 체크박스 처리
    if (key === "all") {
      newAgreements.phoneVerification = value;
      newAgreements.personalInfo = value;
      newAgreements.mobileInfo = value;
      newAgreements.promotion = value;
    } else {
      // 개별 체크박스가 모두 체크되면 전체 동의도 체크
      const requiredAgreements = newAgreements.phoneVerification && 
                               newAgreements.personalInfo && 
                               newAgreements.mobileInfo;
      const optionalAgreements = newAgreements.promotion;
      newAgreements.all = requiredAgreements && optionalAgreements;
    }
    
    setAgreements(newAgreements);
    onAgreementChange?.(newAgreements);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-B2-B text-text-default">약관동의</h3>
      
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="all-agreement"
          checked={agreements.all}
          onChange={(e) => handleAgreementChange("all", e.target.checked)}
          className="w-4 h-4 text-gold-300 border-neutral-300 rounded focus:ring-gold-300"
        />
        <label htmlFor="all-agreement" className="text-B2-M text-text-default">
          전체동의 합니다
        </label>
      </div>

      <div className="space-y-3 pl-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="phone-verification"
              checked={agreements.phoneVerification}
              onChange={(e) => handleAgreementChange("phoneVerification", e.target.checked)}
              className="w-4 h-4 text-gold-300 border-neutral-300 rounded focus:ring-gold-300"
            />
            <label htmlFor="phone-verification" className="text-B2-M text-text-default">
              <span className="text-gold-300">[필수]</span> 휴대폰 본인 확인 서비스 약관 동의
            </label>
          </div>
          <button type="button" className="text-neutral-400 hover:text-neutral-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="personal-info"
              checked={agreements.personalInfo}
              onChange={(e) => handleAgreementChange("personalInfo", e.target.checked)}
              className="w-4 h-4 text-gold-300 border-neutral-300 rounded focus:ring-gold-300"
            />
            <label htmlFor="personal-info" className="text-B2-M text-text-default">
              <span className="text-gold-300">[필수]</span> 개인(신용)정보 수집 및 이용 동의
            </label>
          </div>
          <button type="button" className="text-neutral-400 hover:text-neutral-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="mobile-info"
              checked={agreements.mobileInfo}
              onChange={(e) => handleAgreementChange("mobileInfo", e.target.checked)}
              className="w-4 h-4 text-gold-300 border-neutral-300 rounded focus:ring-gold-300"
            />
            <label htmlFor="mobile-info" className="text-B2-M text-text-default">
              <span className="text-gold-300">[필수]</span> 개인(휴대폰)정보 수집 및 이용 동의
            </label>
          </div>
          <button type="button" className="text-neutral-400 hover:text-neutral-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="promotion"
              checked={agreements.promotion}
              onChange={(e) => handleAgreementChange("promotion", e.target.checked)}
              className="w-4 h-4 text-gold-300 border-neutral-300 rounded focus:ring-gold-300"
            />
            <label htmlFor="promotion" className="text-B2-M text-text-default">
              [선택] 프로모션 정보 수신 동의
            </label>
          </div>
          <button type="button" className="text-neutral-400 hover:text-neutral-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAgreement; 