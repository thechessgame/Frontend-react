import classes from './StartingPageContent.module.css';
import image_title from '../../assets/chessgame2.png';
import image_pic from '../../assets/blackknightright.png';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <img className={classes.img_title} src={image_title} alt="" />
      <img className={classes.img_pic} src={image_pic} alt="" />
    </section>
  );
};

export default StartingPageContent;
