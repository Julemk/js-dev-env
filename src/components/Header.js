import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  // defining types of components in order to make code more robust --  if it has to be reuired, add: .isRequired
  title: PropTypes.string.isRequired,
};

// const headingStyle = {         //CSS IN JS - to use add in Header : <h1 style={headingStyle}> ... </h1>
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
