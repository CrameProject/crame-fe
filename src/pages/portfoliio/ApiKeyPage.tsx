import React, { useMemo, useState } from "react";
import PortfolioHeader from "@/pages/portfoliio/components/PortfolioHeader";

type ApiKeyItem = {
  id: string;
  name: string;
  publicKey: string;
  secretKey: string;
  createdAt: string;
  manager: string;
};

const initialRows: ApiKeyItem[] = [
  { id: "1", name: "Key1", publicKey: "Public Key1", secretKey: "Secret Key1", createdAt: "생성일1", manager: "관리1" },
  { id: "2", name: "Key2", publicKey: "Public Key2", secretKey: "Secret Key2", createdAt: "생성일2", manager: "관리2" },
  { id: "3", name: "Key3", publicKey: "Public Key3", secretKey: "Secret Key3", createdAt: "생성일3", manager: "관리3" },
  { id: "4", name: "Key4", publicKey: "Public Key4", secretKey: "Secret Key4", createdAt: "생성일4", manager: "관리4" },
];

const ApiKeyPage = () => {
  const [rows, setRows] = useState<ApiKeyItem[]>(initialRows);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", publicKey: "", secretKey: "" });

  const isValid = useMemo(() => form.name && form.publicKey && form.secretKey, [form]);

  const onConfirm = () => {
    if (!isValid) return;
    const now = new Date();
    const createdAt = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")}`;
    setRows(prev => [
      ...prev,
      {
        id: String(prev.length + 1),
        name: form.name,
        publicKey: form.publicKey,
        secretKey: form.secretKey,
        createdAt,
        manager: `관리${prev.length + 1}`,
      },
    ]);
    setForm({ name: "", publicKey: "", secretKey: "" });
    setOpen(false);
  };

  const onDelete = (id: string) => {
    const ok = window.confirm("해당 API Key를 삭제하시겠습니까?");
    if (!ok) return;
    setRows(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FBF8F2]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-10">
        <PortfolioHeader />

        {/* 안내 */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-[#4A3F2F]">API Key 설정 안내</h2>
          <p className="mt-2 text-sm text-[#8D7C64]">거래소 API를 등록하시면 자동매매 기능을 이용하실 수 있습니다. API Key는 안전하게 암호화되어 저장됩니다.</p>
        </div>

        {/* 표 */}
        <div className="mt-6 rounded-xl border border-[#E9E2D3] bg-white p-0 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="text-base font-semibold text-[#4A3F2F]">API Key 관리</div>
            <button onClick={() => setOpen(true)} className="text-sm text-[#C9A24E] hover:underline">+ 새로운 API Key 추가</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#FAF6F0] text-[#8D7C64]">
                <tr>
                  <th className="px-6 py-3">Public Key</th>
                  <th className="px-6 py-3">Secret Key</th>
                  <th className="px-6 py-3">생성일</th>
                  <th className="px-6 py-3">관리</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-[#EFE8DA] text-[#4A3F2F]">
                    <td className="px-6 py-3">{r.publicKey}</td>
                    <td className="px-6 py-3">{r.secretKey}</td>
                    <td className="px-6 py-3">{r.createdAt}</td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <span>{r.manager}</span>
                        <button
                          onClick={() => onDelete(r.id)}
                          className="rounded-md border border-[#E0D7C8] px-3 py-1 text-xs text-[#A35C5C] hover:bg-[#FFF4F4]"
                        >
                          삭제
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-[720px] rounded-2xl bg-white p-8 shadow-xl">
            <h3 className="text-xl font-bold text-[#4A3F2F] mb-6">API key 입력</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-[#8D7C64]">Key 이름</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Key 이름을 입력해주세요"
                  className="w-full rounded-md border border-[#E0D7C8] px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4B224]"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-[#8D7C64]">Public Key</label>
                <input
                  value={form.publicKey}
                  onChange={(e) => setForm({ ...form, publicKey: e.target.value })}
                  placeholder="Public Key를 입력해주세요"
                  className="w-full rounded-md border border-[#E0D7C8] px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4B224]"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-[#8D7C64]">Secret Key</label>
                <input
                  value={form.secretKey}
                  onChange={(e) => setForm({ ...form, secretKey: e.target.value })}
                  placeholder="Secret Key를 입력해주세요"
                  className="w-full rounded-md border border-[#E0D7C8] px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4B224]"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end gap-3">
              <button onClick={() => setOpen(false)} className="rounded-md border border-[#E0D7C8] px-5 py-2 text-sm text-[#4A3F2F] hover:bg-[#FAF6F0]">취소</button>
              <button disabled={!isValid} onClick={onConfirm} className={`rounded-md px-5 py-2 text-sm text-white ${isValid ? "bg-[#F4B224] hover:bg-[#d9991b]" : "bg-[#E0D7C8]"}`}>확인</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiKeyPage;
