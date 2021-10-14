import { React, useState } from "react";
import Data from "./namedata";
import Row from "./data";
import Popup from "reactjs-popup";
var history = [];

function List(props) {
  const [data, setData] = useState([
    4700229, 9455689, 4335919, 4453807, 3564276, 3564053, 2454407, 2335792,
    2151864, 2084043,
  ]);

  const handleTransfer = (index) => {
    var element1 = document.getElementById("inputAmount"),
      value = -1,
      element2 = document.getElementById("reciever"),
      reciever;
    if (element1 != null) value = parseInt(element1.value);
    if (element2 != null) reciever = parseInt(element2.value);
    var send = parseInt(index);
    var tmpData = [];
    for (let i = 0; i < 10; i++) {
      if (i === reciever) tmpData.push(data[i] + value);
      else if (i === send) tmpData.push(data[i] - value);
      else tmpData.push(data[i]);
    }

    console.log(send, reciever, tmpData);
    if (value !== -1) {
      setData(tmpData);

      history.push({
        index: index,
        sname: Data[send].name,
        rname: Data[reciever].name,
        amount: value,
      });
    }
  };
  return (
    <div
      className="container border shadow p-3 rounded mt-4 text-light"
      style={{
        background:
          "linear-gradient(to right, rgba(0,150,120), rgb(0, 120, 150)",
      }}
    >
      <h1 className="text-center text-warning mb-2">Custumers List</h1>

      <div
        class="alert alert-success"
        role="alert"
        id="successAlert"
        style={{ display: "none" }}
      >
        Amount Transfered Sucesessfully!
      </div>

      <table className="table table-dark table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">Email ID</th>
            <th scope="col">Balance</th>
            <th scope="col">Transfer Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => {
            return (
              <Row
                index={parseInt(i)}
                setTransfer={handleTransfer}
                balance={data[parseInt(i)]}
              />
            );
          })}
        </tbody>
      </table>

      <div className="text-center">
        <button
          className="btn btn-lg btn-primary mx-2"
          onClick={props.listClick}
        >
          Back to Home
        </button>
        <Popup
          trigger={
            <button className="btn btn-lg mx-2 btn-danger">
              All Transection
            </button>
          }
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
                <table className="table table-info table-bordered border-dark">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">S.No</th>
                      <th scope="col">Sender</th>
                      <th scope="col">reciever</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((obj, i) => {
                      return (
                        <tr className="text-center">
                          <td className="col">{i}</td>
                          <td>{obj.sname}</td>
                          <td>{obj.rname}</td>
                          <td>{obj.amount}</td>
                          <td>{Date()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="text-center">
                  <button
                    className="btn btn-primary my-3"
                    onClick={() => {
                      close();
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}
export default List;
