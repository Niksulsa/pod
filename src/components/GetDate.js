import React from "react";



const GetDate = props => (
    <form onSubmit={props.updateDate}>
      Enter a date (YYYY-MM-DD) : 
      <input />
      <input type="submit" />
    </form>
  );
  
export default GetDate;
