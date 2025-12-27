"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Custom hook to track navigation status and link clicks
 * Shows loading state when navigating between pages
 */
export function useLinkStatus() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    // Check if pathname actually changed
    if (previousPath !== pathname) {
      setPreviousPath(pathname);
      setIsNavigating(true);
      setLoading(true);

      // Hide loading after a short delay
      const timer = setTimeout(() => {
        setLoading(false);
        setIsNavigating(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [pathname, previousPath]);

  return { 
    isNavigating, 
    loading, 
    pathname,
    isLoading: loading || isNavigating
  };
}

