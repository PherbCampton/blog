import { useState, useEffect } from "react";

const WORDS_PER_MINUTE = 200;

export const useReadTime = (content: string) => {
  const [readTime, setReadTime] = useState<number>(0);

  useEffect(() => {
    if (content) {
      // Add a check to ensure content is not undefined
      const words = content.split(/\s+/).length;
      const time = Math.ceil(words / WORDS_PER_MINUTE);
      setReadTime(time);
    }
  }, [content]);

  return readTime;
};
