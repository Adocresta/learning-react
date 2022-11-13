import Card from "./UI/Card";
import "./MainContent.css";

export default function MainContent(props) {
  const closeMainContent = () => {
    props.onShowMainContent();
  };

  return (
    <Card className="project-info">
      <div className="project-info__close" onClick={closeMainContent}></div>
      <h1>Why I am building this project?</h1>
      <ul>
        <li>
          This is a hands-on learning experience which means that I learn react
          with a project-based approach.
        </li>
      </ul>
    </Card>
  );
}
