import React from "react";

const SettingsContainer = ({ children, activeState }) => {
  return (
    <aside
      style={{ height: "calc(100vh - 128px)" }}
      className={`${
        activeState ? "block" : "hidden"
      } absolute right-0 xl:static flex max-w-xs w-full bg-gray-50 border-l border-gray-200 overflow-y-hidden`}
    >
      {children}
    </aside>
  );
};

export default SettingsContainer;
