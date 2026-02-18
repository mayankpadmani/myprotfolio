"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "@/styles/nprogress.css";

export default function RouteLoader() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();

    // Simulate async navigation load
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 800); // Adjust delay if needed

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
