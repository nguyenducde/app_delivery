import { memo } from "react"
import "./DashBoard.css"
import { MDBContainer } from "mdb-react-ui-kit";
import Menu from "../../Common/Menu";
import Card from "../../Common/Card";

const DashBoard = ({ }) => {
 
  return (
    <MDBContainer fluid>
      <div className="d-flex justify-content-between mt-1">
        <div className="d-flex">
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
          <input
            type="search"
            className="form-control rounded search_Item"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
        <div className="d-flex">
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <Menu />
      <Card/>
    </MDBContainer>
  );
}
export default memo(DashBoard)