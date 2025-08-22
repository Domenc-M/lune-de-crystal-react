import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollWrapper({ children }) {
  const { pathname, key } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, key]);

  return <>{children}</>;
}