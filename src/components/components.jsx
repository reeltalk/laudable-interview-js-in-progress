export const TranscriptComponent = ({ transcript, highlights }) => {
  return (
    <div className="flex flex-col gap-2">
      {transcript.monologues.map((monologue, idx) => (
        <MonologueComponent
          key={`monologue-${idx}`}
          monologue={monologue}
          monologueIdx={idx}
          highlights={highlights}
        />
      ))}
    </div>
  );
};

export const MonologueComponent = ({ monologue, monologueIdx, highlights }) => {
  function isHighlighted(monologueIdx, wordIdx, highlights) {
    return false;
  }

  return (
    <div className="flex flex-col">
      <div className="font-bold">{monologue.speaker}</div>
      <div className="">
        {monologue.words.map((word, idx) => (
          <span
            key={`monologue-${monologueIdx}-word-${idx}`}
            className={
              isHighlighted(monologueIdx, idx, highlights) ? "bg-yellow-200" : ""
            }
          >
            {idx !== 0 && ` `}
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
