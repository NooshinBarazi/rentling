import { Button } from '@rentling/fr-shared';
import { Input } from '@rentling/fr-shared';
import style from './houseDetails.module.scss';

export const HouseDetails = () => {
  return (
    <section id={style.section_houseDetails}>
      <div className={style.main_container}>
        <div className={style.container_text}>
          <p>REnt this house</p>
          <div className={style.button_container}>
            <Button
              Icon={undefined}
              text="Daily"
              onClick={() => {}}
              newStyle=""
            />
            <Button
              Icon={undefined}
              text="Daily"
              newStyle={style.button_style}
              onClick={() => {}}
            />
          </div>
          <div className={style.text_price}>
            <p>4,100</p>
            <span>$/mo</span>
          </div>
        </div>
        <div className={style.input_container}>
          <input type="Date" placeholder="Starts date" />
          <input type="Date" placeholder="Ends date" />
        </div>
        <div>
          <Button
            Icon={undefined}
            text="RESERVE"
            newStyle=""
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};
