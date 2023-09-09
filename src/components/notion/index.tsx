import { NotionAPI } from "notion-client";
import { NRenderer } from "./renderer";
export const revalidate = 10;
export async function Notion({
  blockId,
  className,
}: {
  blockId: string;
  className?: string;
  id?: string;
}) {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage(blockId);
  return (
    <>
      <NRenderer className={className} recordMap={recordMap} />
    </>
  );
}
