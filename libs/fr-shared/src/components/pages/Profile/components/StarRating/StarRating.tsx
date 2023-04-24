import { useState } from "react";
import React from "react";
import { FullStarIcon, EmptyStarIcon } from "@rentling/fr-shared";


interface RatingProps {
  className?: string;
  count: number;
  value: number;
  onChange?: (value: number) => void;
  emptyIcon?: React.ReactElement;
  fullIcon?: React.ReactElement;
}


export const Rating: React.FC<RatingProps> = ({
  className,
  count,
  value,
  onChange,
  emptyIcon = <EmptyStarIcon />,
  fullIcon = <FullStarIcon />
}) => {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const handleMouseMove = (index: number) => {
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleClick = (index: number) => {
    if (onChange) {
      onChange(index + 1);
    }
  };

  const stars = [];

  for (let i = 0; i < count; i++) {
    let star: React.ReactElement;
    if (i < value) {
      star = fullIcon;
    } else {
      star = emptyIcon;
    }

    if (hoverValue !== undefined) {
      if (i <= hoverValue) {
        star = fullIcon;
      }
    }

    stars.push(
      <div
        key={i}
        style={{ cursor: "pointer" , display: 'inline-block' , marginLeft: '0.5rem'}}
        onMouseMove={() => handleMouseMove(i)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(i)}
      >
        {React.cloneElement(star)}
      </div>
    );
  }

  return <div className={`rating ${className}`}>{stars}</div>;
};

