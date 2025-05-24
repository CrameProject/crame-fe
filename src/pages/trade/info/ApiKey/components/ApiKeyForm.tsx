import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ApiKeyFormProps {
  onCancel: () => void;
  onSubmit: (publicKey: string, secretKey: string) => void;
}

const ApiKeyForm = ({ onCancel, onSubmit }: ApiKeyFormProps) => {
  const [publicKey, setPublicKey] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(publicKey, secretKey);
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h3 className="mb-4 text-lg font-medium">새 API Key 추가</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="publicKey" className="mb-2 block text-sm font-medium text-gray-700">
            Public Key
          </label>
          <input
            id="publicKey"
            type="text"
            value={publicKey}
            onChange={(e) => setPublicKey(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-[#f2b94c] focus:outline-none focus:ring-1 focus:ring-[#f2b94c]"
            placeholder="거래소에서 발급받은 Public Key를 입력하세요"
            required
          />
        </div>

        <div>
          <label htmlFor="secretKey" className="mb-2 block text-sm font-medium text-gray-700">
            Secret Key
          </label>
          <input
            id="secretKey"
            type="password"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-[#f2b94c] focus:outline-none focus:ring-1 focus:ring-[#f2b94c]"
            placeholder="거래소에서 발급받은 Secret Key를 입력하세요"
            required
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button 
            type="button"
            variant="outline"
            className="border-gray-300 text-gray-700"
            onClick={onCancel}
          >
            취소
          </Button>
          <Button 
            type="submit"
            className="bg-[#f2b94c] text-white hover:bg-[#e0a93a]"
          >
            저장
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApiKeyForm; 