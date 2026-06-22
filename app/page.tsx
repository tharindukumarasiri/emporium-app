"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

const OTP_MAILBOX_URL =
  "https://temp-mail.org/en/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZTNhODE0YThiZmYyNDBmMmE2MmQ3NzNlNDMxOGJlOWYiLCJtYWlsYm94IjoieGViYXhleTcwOEBwcmVwYXJteS5jb20iLCJpYXQiOjE3ODIxMDQxMDl9.hbQQDcH3F1bgUtHrqG-eyfkY-68DUKgW4FaDcSF1zVo&utm_source=qrcode&utm_medium=website&utm_campaign=website";

const CLAUDE_LOGIN = "https://claude.ai/login";

export default function ClaudePage() {
  const email = "700shadow@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleViewOtp = () => {
    window.open(OTP_MAILBOX_URL, "_blank", "noopener,noreferrer");
  };

  const handleClaudeWeb = () => {
    window.open(CLAUDE_LOGIN, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans px-4 py-8">
      <div className="card w-full sm:w-2/3 py-8 sm:py-12 md:py-16 bg-base-100 shadow-sm">
        <div className="card-body max-w-2xl mx-auto">
          <div className="text-base sm:text-lg font-bold text-green-600">
            Step: 1
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Use this email to login with{" "}
            <span
              className="text-amber-400 hover:cursor-pointer"
              onClick={handleClaudeWeb}
            >
              claude
            </span>
          </h2>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="text-xl sm:text-2xl md:text-2xl text-center cursor-pointer flex flex-row mx-auto items-center gap-2 hover:bg-accent p-2 px-2 sm:px-4 rounded-3xl break-all"
          >
            {email} <Copy className="size-5 mt-1" />
          </button>
          <div className="mt-6 text-base sm:text-lg font-bold text-green-600">
            Step: 2
          </div>

          <div className="mt-3 text-center">Get your OTP</div>
          <div className="mx-auto">
            <button
              type="button"
              onClick={handleViewOtp}
              className="btn btn-primary w-full sm:w-2xs"
            >
              View OTP
            </button>
          </div>
          <div className="text-red-600 text-center mt-5">
            *Please wait for the OTP email to arrive in the inbox. If it is not
            received after a few minutes, please try again.
          </div>
          <div className="text-warning text-center">
            There may be multiple emails in the inbox. Please look for the email
            from <span className="font-bold">{`"Anthropic"`}</span> open it, and
            use the OTP provided inside.
          </div>
          <div className="text-center">
            If you experience any difficulties logging in, please don&apos;t
            hesitate to contact us through G2G website.
          </div>
        </div>
      </div>
      {copied && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Copied!</span>
          </div>
        </div>
      )}
    </div>
  );
}
