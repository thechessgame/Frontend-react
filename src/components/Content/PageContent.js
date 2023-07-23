import classes from './PageContent.module.css';

function PageContent({ title, children }) {
  console.log("title...", children, title)
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
