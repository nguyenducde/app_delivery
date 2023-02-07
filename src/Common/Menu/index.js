import { memo } from "react";
import "./Menu.css"

const Menu = ({ }) => {
  return (
    <div>
      <ul className="d-flex my-2">
        <li>New</li>
        <li>Prepared</li>
        <li>Ready for shipping</li>
        <li>In Transit</li>
        <li>Delivered</li>
        <li>Failed</li>
      </ul>
    </div>
  );
};
export default memo(Menu)

