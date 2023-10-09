import {HIGHLIGHTS, TRANSCRIPT} from "@/components/data";
import {useState} from "react";
import {TranscriptComponent} from "@/components/components";

export default function IndexPage() {
  const [highlights, setHighlights] = useState(HIGHLIGHTS);

  function mergeHighlights() {
    // TODO
  }

  return (
    <>
      <button
        className={[
          "h-11 px-2 py-2.5 bg-white rounded-md shadow border border-gray-300",
          "justify-center items-center gap-2 inline-flex cursor-pointer",
        ].join(" ")}
        onClick={mergeHighlights}
      >
        Merge Segments
      </button>
      <TranscriptComponent transcript={TRANSCRIPT} highlights={highlights} />
    </>
  );
}