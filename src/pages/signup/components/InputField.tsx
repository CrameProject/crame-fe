import React from "react";

interface InputFieldProps {
  label?: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error
}) => {
  return (
    <div>
      {label && (
        <label className="block text-B2-M text-text-default mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <p className="mt-1 text-C1-M text-system-error">{error}</p>
      )}
    </div>
  );
};

export default InputField; 