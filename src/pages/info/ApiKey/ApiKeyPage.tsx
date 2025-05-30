import { useState } from "react";
import ApiKeyHeader from "./components/ApiKeyHeader.tsx";
import ApiKeyTable from "./components/ApiKeyTable.tsx";
import ApiKeyForm from "./components/ApiKeyForm.tsx";
import TradeButton from "./components/TradeButton.tsx";
import { ApiKeyData } from "./types.ts";

const ApiKeyPage = () => {
  const [apiKeys, setApiKeys] = useState<ApiKeyData[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddNewKey = () => {
    setShowAddForm(true);
  };

  const handleCancelAddKey = () => {
    setShowAddForm(false);
  };

  const handleSubmitKey = (publicKey: string, secretKey: string) => {
    const newKey: ApiKeyData = {
      id: Date.now(),
      publicKey,
      secretKey,
      createdAt: new Date().toLocaleDateString(),
    };

    setApiKeys([...apiKeys, newKey]);
    setShowAddForm(false);
  };

  const handleStartTrading = () => {
    console.log("투자 시작");
  };

  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <ApiKeyHeader />
      <ApiKeyTable apiKeys={apiKeys} onAddNewKey={handleAddNewKey} />
      {showAddForm && <ApiKeyForm onCancel={handleCancelAddKey} onSubmit={handleSubmitKey} />}
      <TradeButton onClick={handleStartTrading} />
    </div>
  );
};

export default ApiKeyPage;
