import { useRef, useMemo } from "react";
import { motion as Motion, useInView } from "framer-motion";
import clsx from "clsx";

export default function SplitText({
  text,
  as = "h1",
  className = "",
  stagger = 0.05,
  duration = 1,
  y = 50,
  ease = [0.25, 0.1, 0.25, 1],
}) {
  const Tag = as;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const words = useMemo(() => {
    return text.split(" ").map((word, i) => ({
      word,
      key: `${word}-${i}`,
    }));
  }, [text]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const child = {
    hidden: { y, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration, ease },
    },
  };

  return (
    <>
      <Tag ref={ref} aria-hidden className={clsx(className)}>
        <Motion.span
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ display: "inline-block" }}
        >
          {words.map(({ word, key }) => (
            <Motion.span
              key={key}
              variants={child}
              style={{
                display: "inline-block",
                marginRight: "0.25em",
              }}
            >
              {word}
            </Motion.span>
          ))}
        </Motion.span>
      </Tag>

      <Tag className="sr-only">{text}</Tag>
    </>
  );
}