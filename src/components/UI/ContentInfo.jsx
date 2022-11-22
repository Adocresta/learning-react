import React from "react";
import Card from "./Card";

const ContentInfo = (props) => {
  const closeMainContent = () => {
    props.onShowMainContent();
  };

  return (
    <Card className="relative box-border bg-[#85144b] text-white p-4 mt-8 border-8 border-[#2a2a2a] border-dashed max-w-md mx-auto">
      <div
        className="absolute hover:cursor-pointer after:content-['\00d7'] after:h-20 after:w-20 text-4xl -top-3 -right-0.5"
        onClick={closeMainContent}
      />
      <div className="flex flex-col space-y-5">
        <h1>Why am I building this project?</h1>
        <ul className="list-none">
          <li>
            This is a hands-on learning experience which means that I learn
            react with a project-based approach.
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default ContentInfo;
