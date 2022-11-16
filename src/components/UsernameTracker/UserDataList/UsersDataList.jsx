import React from "react";
import Card from "../../UI/Card";

const UserDataItem = (props) => {
  const { usersData } = props;
  const listOfLi = usersData.map((user) => {
    return (
      <li key={user.id}>
        Username: {user.username} Age:{user.age}
      </li>
    );
  });
  return <>{listOfLi}</>;
};

const UsersDataList = (props) => {
  const { usersData } = props;
  return (
    <Card className="container mx-auto max-w-xl py-4 mt-10 bg-slate-800">
      <h3 className="text-xl text-slate-400 text-center mb-4 pb-2 mx-10 border-b-2 border-slate-700">
        List of Users
      </h3>
      <ul className="flex flex-col space-y-2 list-disc items-center text-slate-300">
        <UserDataItem usersData={usersData} />
      </ul>
    </Card>
  );
};

export default UsersDataList;
