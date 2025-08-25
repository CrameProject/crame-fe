import React, { useState } from "react";
import { useAuthStatus } from "@/hooks/login/query/useAuthStatus";
import PortfolioHeader from "@/pages/portfoliio/components/PortfolioHeader";

const AccountPage = () => {
  const { data: auth } = useAuthStatus();
  const userName = auth?.user?.name || "크레임";
  const userEmail = auth?.user?.email || "crame25@gmail.com";
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#FBF8F2]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-10">
        <PortfolioHeader />

        {/* Profile info card */}
        <div className="mt-8 rounded-xl border border-[#E9E2D3] bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#4A3F2F]">내 정보</h2>
            <button className="text-sm text-[#C9A24E] hover:underline">수정하기</button>
          </div>
          <div className="rounded-lg border border-[#3BA0FF] p-6">
            <dl className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-[#4A3F2F]">
              <div>
                <dt className="text-[#8D7C64] mb-1">이름</dt>
                <dd>{userName}</dd>
              </div>
              <div>
                <dt className="text-[#8D7C64] mb-1">생년월일</dt>
                <dd>0000.00.00</dd>
              </div>
              <div>
                <dt className="text-[#8D7C64] mb-1">아이디</dt>
                <dd>crame25</dd>
              </div>
              <div>
                <dt className="text-[#8D7C64] mb-1">이메일</dt>
                <dd>{userEmail}</dd>
              </div>
              <div>
                <dt className="text-[#8D7C64] mb-1">전화번호</dt>
                <dd>000-0000-0000</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Account settings */}
        <div className="mt-8 rounded-xl border border-[#E9E2D3] bg-white">
          {/* 알림 설정 */}
          <div className="flex items-center justify-between p-6 border-b border-[#EFE8DA]">
            <div>
              <div className="text-base font-semibold text-[#4A3F2F]">알림 설정</div>
              <div className="text-sm text-[#8D7C64]">거래 및 시장 알림을 받습니다</div>
            </div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#C9A24E]"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(v => !v)}
              />
            </label>
          </div>

          {/* 소셜 연동 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/google.svg" alt="Google" className="h-6 w-6" />
                <div>
                  <div className="text-sm text-[#8D7C64]">ID : {userEmail}</div>
                  <div className="text-sm text-[#8D7C64]">연결일자 : 2000.00.00</div>
                </div>
              </div>
              <button className="rounded-md border border-[#E0D7C8] px-4 py-2 text-sm text-[#4A3F2F] hover:bg-[#FAF6F0]">
                연결끊기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;