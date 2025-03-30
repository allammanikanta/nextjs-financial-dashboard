"use client";
import React, { useState } from "react";
import { settingsTabs } from "../../utils/constants";
import EditProfile from "../../components/EditProfile";
import { ComingSoon } from "../../components/ComingSoon";
import { useForm } from "react-hook-form";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState(settingsTabs[0]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full p-2 bg-gray-100">
      <div className="w-full rounded-[25px] shadow bg-white flex flex-col">
        <div className="flex space-x-6 p-6 pb-0 border-b border-[#F4F5F7]">
          {settingsTabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 w-25 font-medium ${
                activeTab === tab
                  ? "border-b-3 border-[#232323] text-[#232323] rounded-t-md"
                  : "text-[#718EBF] hover:text-[#232323]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Render components based on the active tab */}
        {activeTab === "Edit Profile" && (
          <EditProfile
            register={register}
            handleSubmit={handleSubmit}
            setValue={setValue}
            errors={errors}
          />
        )}
        {activeTab !== "Edit Profile" && <ComingSoon tabName={activeTab} />}
      </div>
    </div>
  );
};

export default SettingsPage;
