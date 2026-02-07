import { useEffect, useState } from "react";

type TextDetails = {
  text: String;
  dwell: number;
};

export const DEFAULT_TEXTS: TextDetails[] = [
  { text: "tldr", dwell: 700 },
  { text: "tools for learning, design and research", dwell: 700 },
  { text: "tldr", dwell: 20000 },
];

const SHORT_TIME_MS = 100;

// render title character by character with delay of $SHORT_TIME_MS
// after the full text is rendered, wait for $dwell before rendering next text
export const TypewriterTitle = ({ texts }: { texts: TextDetails[] }) => {
  const [text, setText] = useState<string>("");

  const updateText = (target: TextDetails, idx: number) => {
    if (idx < target.text.length) {
      setText(target.text.slice(0, idx + 1));
      setTimeout(() => updateText(target, idx + 1), SHORT_TIME_MS);
    } else {
      const nextIdx = (texts.indexOf(target) + 1) % texts.length;
      const nextTarget = texts[nextIdx];

      setTimeout(() => {
        updateText(nextTarget, 0);
      }, target.dwell);
    }
  };

  useEffect(() => {
    if (texts.length == 0) {
      return;
    }
    updateText(texts[0], 0);
  }, [texts]);

  return (
    <div>
      <p>
        {text}
        <span className="cursor">|</span>
      </p>
    </div>
  );
};
