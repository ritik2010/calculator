import React from "react";
import Button from "../../Common/Button";
import './CalWrapper.css'

const CalWrapper = (props) => {

  const { allBtArr,operationArr} =props;
  const allButton =allBtArr?allBtArr.map((btObj) => {
    return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />; //PROPS TO THE BUTTON CMP
  }):[];

  const allOperationBtn =operationArr?operationArr.map((btObj) => {
    return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />; 
  }):[];

  // console.log("allButton", allButton);
  return <div className="main-cal">
    <div className="bt-name">
    {allButton}
    </div>

    <div className="op-name">
    {allOperationBtn}
    </div>
    </div>;
};

export default CalWrapper;
