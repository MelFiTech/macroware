"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  [key: string]: any;
}

export default function Marquee({
  children,
  className,
  reverse,
  pauseOnHover,
  ...props
}: MarqueeProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && contentRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth);
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, [children]);

  return (
    <div
      ref={scrollRef}
      className={cn(
        "flex w-full overflow-hidden [--duration:40s] [--gap:1rem] text-black dark:text-white",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [--play-state:running] [animation:scroll_var(--duration)_linear_infinite]",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "hover:[--play-state:paused]"
        )}
        ref={contentRef}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [--play-state:running] [animation:scroll_var(--duration)_linear_infinite]",
          reverse && "[animation-direction:reverse]", 
          pauseOnHover && "hover:[--play-state:paused]"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}