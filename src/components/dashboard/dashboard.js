const DashboardComponent = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const username = sessionStorage.getItem("username");

  return <span>{username}</span>;
};
export default DashboardComponent;
