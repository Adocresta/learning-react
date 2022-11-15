import "./UserDataList.css";

const UserDataItem = (props) => {
  const { userData } = props;
  const listOfLi = userData.map((data) => {
    return (
      <li key={data.id}>
        Username: {data.username} Age:{data.age}
      </li>
    );
  });
  return <>{listOfLi}</>;
};

const UserDataList = (props) => {
  const { userData } = props;
  return (
    <ul className="user-data-list">
      <UserDataItem userData={userData} />
    </ul>
  );
};

export default UserDataList;
