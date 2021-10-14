import React from "react";
import Popup from "reactjs-popup";
import Data from "./namedata";

function Row(props) {
  return (
    <tr className="text-center">
      <th scope="row">{props.index + 1}</th>
      <td>{Data[props.index].name}</td>
      <td>{Data[props.index].id}</td>
      <td>{Data[props.index].email}</td>
      <td>{props.balance}</td>
      <td>
        <Popup
          trigger={<button className="btn btn-primary">Transfer To</button>}
          modal
        >
          {(close) => (
            <div className="bg-light content p-2">
              <div style={{ float: "right" }}>
                <button
                  className="close btn btn-danger rounded fw-bold"
                  onClick={close}
                >
                  &times;
                </button>
              </div>

              <div className="m-5 p-2">
                <div className="form-group fw-bold">
                  <label for="exampleInputEmail1">Amount</label>
                  <input
                    type="number"
                    className="form-control me-5 mb-2 border-dark  "
                    id="inputAmount"
                    aria-describedby="emailHelp"
                    placeholder="Enter Amount to be Send"
                  />
                </div>
                <div className="form-group fw-bold">
                  <label>Select the user</label>
                  <select
                    className=" border-dark form-select"
                    aria-label="Default select example"
                    id="reciever"
                  >
                    <option selected>Open this select menu</option>
                    <option value="0">James</option>
                    <option value="1">Robert</option>
                    <option value="2">John</option>
                    <option value="3">Michael</option>
                    <option value="4">William</option>
                    <option value="5">David</option>
                    <option value="6">Richard</option>
                    <option value="7">Joseph</option>
                    <option value="8">Thomas</option>
                    <option value="9">Charles</option>
                  </select>
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-primary my-3"
                    onClick={() => {
                      props.setTransfer(props.index);
                      var doc = document.getElementById("successAlert");
                      doc.style.display = "block";
                      setTimeout(() => {
                        doc.style.display = "none";
                      }, 1000);
                      close();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </td>
    </tr>
  );
}

export default Row;
