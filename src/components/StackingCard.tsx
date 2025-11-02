import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface StackingCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const StackingCard = ({ children, index, className = "" }: StackingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardTop = rect.top;

      // Calculate scale based on scroll progress (cards shrink as they scroll up)
      if (cardTop < windowHeight * 0.3) {
        const shrinkProgress = Math.max(0, (windowHeight * 0.3 - cardTop) / (windowHeight * 0.3));
        setScale(1 - shrinkProgress * 0.05);
      } else {
        setScale(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`stack-card ${className}`}
      style={{
        top: `${80 + index * 20}px`,
        transform: `scale(${scale})`,
        zIndex: index,
      }}
    >
      {children}
    </div>
  );
};

export default StackingCard;
