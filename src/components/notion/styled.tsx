import { NotionAPI } from "notion-client";
import { NRenderer } from "./renderer";
import "react-notion-x/src/styles.css";
import "./notion.scss";
export async function StyledNotion({
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
