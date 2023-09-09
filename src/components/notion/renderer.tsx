"use client";
import { type ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

export function NRenderer({
  recordMap,
  className,
}: {
  recordMap: ExtendedRecordMap;
  className?: string;
}) {
  return (
    <div className={className}>
      <NotionRenderer darkMode fullPage={false} recordMap={recordMap} />
    </div>
  );
}
