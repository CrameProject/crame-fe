const ApiKeyHeader = () => {
  return (
    <div className="mb-6">
      <h2 className="mb-4 text-xl font-semibold">API Key 설정 안내</h2>
      <p className="mb-3 text-gray-700">
        거래소 API를 등록하셔야 지표에 기초한 이용하실 수 있습니다.
      </p>
      <p className="text-gray-700">
        API Key는 암호화되어 안전하게 저장됩니다.
      </p>
    </div>
  );
};

export default ApiKeyHeader; 