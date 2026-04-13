import React, { useState, useEffect } from "react";

const ErrorElement = () => {
  const [copied, setCopied] = useState(false);
  const [errId] = useState(
    () => "ERR-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const handleRetry = () => window.location.reload();
  const handleGoHome = () => (window.location.href = "/");
  const handleCopy = () => {
    navigator.clipboard?.writeText(
      "Unhandled runtime exception at /dashboard/overview",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div
        className="text-center max-w-md w-full transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <div className="relative inline-flex items-center justify-center mb-6">
          <div
            className="absolute rounded-full border border-red-300"
            style={{
              width: 96,
              height: 96,
              animation: "pulse-ring 2.5s ease-in-out infinite",
            }}
          />
          <div
            className="relative rounded-full bg-red-50 border border-red-200 flex items-center justify-center overflow-hidden"
            style={{ width: 72, height: 72 }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: 1,
                background: "#ef4444",
                opacity: 0.6,
                animation: "scan 2.4s ease-in-out infinite",
              }}
            />
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 9v4M12 17h.01" />
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            </svg>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 rounded-full px-3 py-1 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
          <p className="text-xs font-medium tracking-widest text-red-800 uppercase">
            Runtime Error
          </p>
        </div>

        <h1 className="text-2xl font-medium text-gray-900 mb-3">
          Something went wrong
        </h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          An unexpected error occurred while loading this page. This has been
          logged and we're working on a fix.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3 text-left">
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-100 border border-red-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-100 border border-gray-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-100 border border-gray-200" />
            </div>
            <button
              onClick={handleCopy}
              className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-0.5 hover:bg-gray-50 transition-colors"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <p className="text-xs font-medium text-gray-400 mb-1">
            Error details
          </p>
          <p className="text-xs font-mono text-gray-500 break-all">
            Unhandled runtime exception at /dashboard/overview
          </p>
        </div>

        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2 mb-6">
          <div className="flex items-center gap-2 text-gray-400">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 6v6l4 2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xs text-gray-400">Incident logged</span>
          </div>
          <span className="font-mono text-xs text-gray-400">
            {errId} · just now
          </span>
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={handleRetry}
            className="px-5 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg transition-colors"
            style={{ transition: "background 0.15s" }}
            onMouseEnter={(e) => (e.target.style.background = "#ef4444")}
            onMouseLeave={(e) => (e.target.style.background = "#111827")}
          >
            Try again
          </button>
          <button
            onClick={handleGoHome}
            className="px-5 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Go home
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { transform: scale(0.95); opacity: 0.4; }
          50% { transform: scale(1.05); opacity: 0.15; }
        }
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ErrorElement;
