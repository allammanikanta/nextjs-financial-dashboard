"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../redux/store";
import { initializeCount } from "../redux/dashboardSlice";

export default function StoreProvider({ count, children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
