import React, { useEffect, useState } from "react";
// import { airtableBase } from "./Airtable.jsx";

const Recommended = () => {
  const [records, setRecords] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await airtableBase("table").select().all();
  //       setRecords(response);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div className="recTitle">Recommended for you:</div>
      <div className="recCardsContainer">
        {records.map((record) => (
          <div className="recCard" key={record.id}>
            <img
              className="recImage"
              src={record.fields.image[0].url}
              alt={record.fields.title}
            />

            <div className="recHeader">{record.fields.title}</div>
            <br />
            <dic className="recTime">
              <p>{record.fields.time}</p>
            </dic>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommended;
