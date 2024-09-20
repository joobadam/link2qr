import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const marqueeContent = container.firstElementChild as HTMLElement;
    if (!marqueeContent) return;

    const marqueeContentClone = marqueeContent.cloneNode(true) as HTMLElement;
    container.appendChild(marqueeContentClone);

    const marqueeAnimation = container.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${marqueeContent.offsetWidth}px)` }
      ],
      {
        duration: 90000,
        iterations: Infinity,
        direction: reverse ? 'reverse' : 'normal',
      }
    );

    if (pauseOnHover) {
      container.addEventListener('mouseenter', () => marqueeAnimation.pause());
      container.addEventListener('mouseleave', () => marqueeAnimation.play());
    }

    return () => {
      marqueeAnimation.cancel();
    };
  }, [reverse, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group flex overflow-hidden",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      <div className="flex shrink-0 justify-around items-center">
        {children}
      </div>
    </div>
  );
}