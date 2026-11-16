"use client";

import Script from "next/script";
import React from "react";

export function YetiQuoteForm({
  formId = "2f394cdb-fd28-4061-b29f-714ef526545a",
}: {
  formId?: string;
}) {
  return (
    <>
      <Script src="https://share.yetiform.com/embed.js" strategy="afterInteractive" />
      {React.createElement("yeti-form", {
        "form-id": formId,
        "loading-state": "spinner",
        style: { display: "block", width: "100%" },
      })}
    </>
  );
}
