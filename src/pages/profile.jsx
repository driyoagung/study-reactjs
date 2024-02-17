import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <div>
        <h1>Profile Pages</h1>
      </div>
      <p>Username {username}</p>
    </div>
  );
};

export default ProfilePage;
