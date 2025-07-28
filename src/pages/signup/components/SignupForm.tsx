import React, { useState } from "react";
import InputField from "./InputField.tsx";
import PhoneVerification from "./PhoneVerification.tsx";
import PasswordField from "./PasswordField.tsx";
import TermsAgreement from "./TermsAgreement.tsx";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    birthLastDigits: "",
    phoneNumber: "",
    email: "",
    userId: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("회원가입 제출:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="이름"
        placeholder="이름 입력"
        value={formData.name}
        onChange={(value) => handleInputChange("name", value)}
      />

      <div>
        <label className="block text-B2-M text-text-default mb-2">
          생년월일
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="생년월일 6자리"
            maxLength={6}
            className="flex-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-300"
            value={formData.birthYear + formData.birthMonth + formData.birthDay}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 6) {
                handleInputChange("birthYear", value.slice(0, 2));
                handleInputChange("birthMonth", value.slice(2, 4));
                handleInputChange("birthDay", value.slice(4, 6));
              }
            }}
          />
          <span className="text-neutral-400">-</span>
          <input
            type="text"
            placeholder=""
            maxLength={1}
            className="w-12 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-300 text-center"
            value={formData.birthLastDigits.slice(0, 1)}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 1) {
                handleInputChange("birthLastDigits", value + "•••••");
              }
            }}
          />
          <div className="flex space-x-1">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-neutral-400 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      <PhoneVerification
        phoneNumber={formData.phoneNumber}
        onPhoneChange={(value) => handleInputChange("phoneNumber", value)}
      />

      <InputField
        label="이메일"
        placeholder="이메일 주소 입력"
        type="email"
        value={formData.email}
        onChange={(value) => handleInputChange("email", value)}
      />

      <div>
        <label className="block text-B2-M text-text-default mb-2">
          아이디
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="영어 소문자 및 숫자로만"
            className="flex-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-300"
            value={formData.userId}
            onChange={(e) => handleInputChange("userId", e.target.value)}
          />
          <button
            type="button"
            className="px-4 py-2 bg-neutral-200 text-text-default rounded-md hover:bg-neutral-300 transition-colors"
          >
            중복확인
          </button>
        </div>
      </div>

      <PasswordField
        label="비밀번호"
        placeholder="영어, 숫자, 특수문자가 포함된 8~16자 이내"
        value={formData.password}
        onChange={(value) => handleInputChange("password", value)}
      />

      <PasswordField
        label="비밀번호 확인"
        placeholder="위 비밀번호와 동일하게 입력"
        value={formData.confirmPassword}
        onChange={(value) => handleInputChange("confirmPassword", value)}
      />

      <TermsAgreement />

      <button
        type="submit"
        className="w-full py-3 bg-gold-300 text-white font-semibold rounded-md hover:bg-gold-400 transition-colors"
      >
        가입하기
      </button>

    
    </form>
  );
};

export default SignupForm; 