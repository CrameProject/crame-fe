type ApiKeyData = {
  id: number;
  publicKey: string;
  secretKey: string;
  createdAt: string;
};

interface ApiKeyTableProps {
  apiKeys: ApiKeyData[];
  onAddNewKey: () => void;
}

const ApiKeyTable = ({ apiKeys, onAddNewKey }: ApiKeyTableProps) => {
  return (
    <div className="mb-6">
      <div className="mb-4 flex items-center">
        <h3 className="text-lg font-medium">API Key 관리</h3>
        <button
          className="flex items-center text-sm text-[#f2b94c] hover:underline"
          onClick={onAddNewKey}
        >
          <span className="ml-6 mr-1">+</span> 새로운 API Key 추가
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left font-medium text-gray-700">Public Key</th>
              <th className="py-3 text-left font-medium text-gray-700">Secret Key</th>
              <th className="py-3 text-left font-medium text-gray-700">생성일</th>
              <th className="py-3 text-left font-medium text-gray-700">관리</th>
            </tr>
          </thead>
          <tbody>
            {apiKeys.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 text-center text-gray-500">
                  등록된 API Key가 없습니다. 새로운 API Key를 추가해주세요.
                </td>
              </tr>
            ) : (
              apiKeys.map((key) => (
                <tr key={key.id} className="border-b">
                  <td className="py-3">{key.publicKey}</td>
                  <td className="py-3">••••••••••••••••</td>
                  <td className="py-3">{key.createdAt}</td>
                  <td className="py-3">
                    <button className="text-red-500 hover:underline">삭제</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApiKeyTable;
