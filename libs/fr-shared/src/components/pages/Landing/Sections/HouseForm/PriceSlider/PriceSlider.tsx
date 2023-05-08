import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import styles from './PriceSlider.module.scss';
import { motion } from 'framer-motion';
import { DateMonthIcon } from 'libs/fr-shared/src/components/elements/Icons/DateMonthIcon';
import { PriceRangeIcon } from 'libs/fr-shared/src/components/elements/Icons/PriceRangeIcon';
interface PriceSliderProps {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
  daily: boolean;
  monthly: boolean;
  handlePriceTime: any;
  step: any;
}

export const PriceSlider = ({
  min,
  max,
  onChange,
  daily,
  monthly,
  handlePriceTime,
  step,
}: PriceSliderProps) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const rangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rangeRef.current) {
      const minPercent = Math.round(((minVal - min) / (max - min)) * 100);
      const maxPercent = Math.round(((maxVal - min) / (max - min)) * 100);
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [min, max, minVal, maxVal]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const onMinInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value);
    if (isNaN(value)) {
      value = min;
    } else {
      value = Math.min(value, maxVal - 1);
    }
    if (value === 0 && event.target === document.activeElement) {
      event.target.value = '';
    }
    setMinVal(value);
    if (minValRef.current) {
      minValRef.current.value = value.toString();
    }
  };

  const onMaxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value);
    if (isNaN(value)) {
      value = min;
    } else {
      value = Math.max(Math.min(value, max), minVal + 1);
    }
    if (value === 0 && event.target === document.activeElement) {
      event.target.value = '';
    }
    setMaxVal(value);
    if (maxValRef.current) {
      maxValRef.current.value = value.toString();
    }
  };

  return (
    <div className={styles.price_date}>
      <div className={styles.daily_monthly}>
        <p>Price type</p>
        <label
          onClick={handlePriceTime}
          className={daily ? styles.time_type_selected : styles.time_type}
        >
          <p>Daily</p>
          <input
            type="checkbox"
            name="daily"
            checked={daily}
            onChange={handlePriceTime}
            style={{ display: 'none' }}
          />
        </label>

        <label
          className={monthly ? styles.time_type_selected : styles.time_type}
          onClick={handlePriceTime}
        >
          <div>
            <p>Monthly</p>
          </div>
          <input
            type="checkbox"
            name="monthly"
            checked={monthly}
            onChange={handlePriceTime}
            style={{ display: 'none' }}
          />
        </label>
      </div>
      <div className={styles.range_slider_box}>
        <PriceRangeIcon />
        <div className={styles.range_slider}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={minVal}
            ref={minValRef}
            onChange={onMinInputChange}
            className={`${styles.thumb} ${styles['thumb--zindex-3']} ${
              minVal > max - 100 ? styles['thumb--zindex-5'] : ''
            }`}
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            ref={maxValRef}
            onChange={onMaxInputChange}
            className={`${styles.thumb} ${styles['thumb--zindex-4']}`}
          />
          <div className={styles.slider}>
            <div className={styles.slider__track} />
            <div ref={rangeRef} className={styles.slider__range} />
          </div>
        </div>
      </div>
      <div className={styles.inputs}>
        <p className={styles.minimum}>From</p>
        <input
          type="number"
          value={minVal}
          min={min}
          max={maxVal}
          onChange={onMinInputChange}
          className={styles.slider__left_value}
        />
        <p className={styles.maximum}>To</p>

        <input
          type="number"
          value={maxVal}
          min={minVal + 1}
          max={max}
          onChange={onMaxInputChange}
          className={styles.slider__right_value}
        />
      </div>
    </div>
  );
};
