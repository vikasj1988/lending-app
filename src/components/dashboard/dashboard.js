import Header from "../header/header";
import CentralComponent from "./central-panel/central";
import FilterComponent from "./filter-panel/filter";

const DashboardComponent = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const username = sessionStorage.getItem("username");

  return (
    <>
      <div>
        <Header />
        <div>
          {/* <FilterComponent /> */}
          <CentralComponent />
        </div>
      </div>
    </>
  );
};
export default DashboardComponent;
