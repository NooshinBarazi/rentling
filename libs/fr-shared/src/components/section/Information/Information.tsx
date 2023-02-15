import MemoCellphoneIcon from "../../elements/Icons/CellphoneIcon";
import MemoInstagramIcon from "../../elements/Icons/InstagramIcon";
import MemoMailIcon from "../../elements/Icons/MailIcon";
import MemoProfileIcon from "../../elements/Icons/ProfileIcon";
import { TextIcon } from "../../elements/TextIcon/TextIcon";
import style from './information.module.scss';

const Information = () => {
  return (
    <section className={style.Information}>
        <h4>How can we help you?</h4>
        <div className={style.textInfo}>
            <span><TextIcon Icon={<MemoCellphoneIcon />} text={"An easy online renting experience for you to spend time on what really is important"} /></span>
            <TextIcon Icon={<MemoProfileIcon />} text={"We put all our hearts in solving problems for you not to worry"} />
            <TextIcon Icon={<MemoInstagramIcon />} text={"Honest photographs, videos and descriptions for you to make safe decisions"} />
            <TextIcon Icon={<MemoMailIcon />} text={"We verify the properties, you spot them online"} />
        </div>
    </section>
  );
};

export default Information;