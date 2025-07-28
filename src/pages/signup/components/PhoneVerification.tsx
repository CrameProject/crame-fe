import React from "react";

interface PhoneVerificationProps {
  phoneNumber: string;
  onPhoneChange: (value: string) => void;
}

const PhoneVerification: React.FC<PhoneVerificationProps> = ({
  phoneNumber,
  onPhoneChange
}) => {
  return (
    <div>
      <label className="block text-B2-M text-text-default mb-2">
        휴대폰번호
      </label>
      <input
        type="tel"
        placeholder="-없이 숫자만 입력"
        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-300"
        value={phoneNumber}
        onChange={(e) => onPhoneChange(e.target.value.replace(/[^0-9]/g, ""))}
      />
    </div>
  );
};

export default PhoneVerification; 