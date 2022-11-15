import Card from "./UI/Card";
import "./MainContent.css";

export default function MainContent(props) {
  const closeMainContent = () => {
    props.onShowMainContent();
  };

  return (
    <Card className="project-info max-w-md mx-auto">
      <div className="project-info__close" onClick={closeMainContent}></div>
      <div className="flex flex-col space-y-5">
        <h1>Why am I building this project?</h1>
        <ul>
          <li>
            This is a hands-on learning experience which means that I learn
            react with a project-based approach.
          </li>
        </ul>
      </div>
    </Card>
  );
}
