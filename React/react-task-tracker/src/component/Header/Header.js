// import PropTypes from 'prop-types';
// import "./Header.css";
// const Header = (props) => {
//     return (
//         <header>
//             <h1 >{props.title}</h1>
//             <button className='btn'>Add</button>
//             {/* <h2 className="h2Head">H2 Heading</h2>
//             <h3 id="h3Head">H3 Heading</h3> */}
//         </header>
//     );
// }
// Header.defaultProps = {
//     title: 'Task Tracker',
// }
// Header.propTypes={
//     //<Header title={1}/> In app.js will show the warning in console.
//     title:PropTypes.string.isRequired,
// }
// export default Header;



import React from "react";
import PropTypes from 'prop-types';
import { Button } from "./Button";
import "./Header.css";
const Header = ({title}) => {
    return (
        <header>
            <h1 style={headingStyle}>{title}</h1>
            <button className="btn">Add</button>
        </header>
    );
};
const headingStyle = {
    color: 'darkcyan',
    backgroundColor: 'lightblue',
    textAlign: 'center'
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header;
