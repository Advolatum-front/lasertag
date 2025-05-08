import { useEffect } from "react";

const SITE_NAME = "Федерация лазерного боя в Санкт-Петербурге";

export function useDocumentTitle(title = "") {
  useEffect(() => {
    if (typeof title !== "string") {
      console.error("document.title может быть только строкой");
      return;
    }

    const dt = SITE_NAME;
    const dash = title ? "—" : "";

    document.title = `${title} ${dash} ${dt}`.trim();
  }, [title]);
}
