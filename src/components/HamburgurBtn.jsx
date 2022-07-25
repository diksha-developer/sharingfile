import React from "react";
import "../pages/common/w3style.min.css";

const HamburgurBtn = () => {
  let buttonClasses = "w3-button w3-teal w3-xlarge openSideBar";
  const [openSidebar, setOpenSidebar] = React.useState(true);
  React.useEffect(() => {
    if (openSidebar) {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("contentSection").style.marginLeft = "200px";
    } else {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("contentSection").style.marginLeft = "0px";
    }
  }, [openSidebar]);
  return (
    <div>
      <button
        id="closebtn"
        className={buttonClasses}
        onClick={() => {
          setOpenSidebar(!openSidebar);
        }}
      >
        ☰
      </button>
    </div>
  );
};

export default HamburgurBtn;
