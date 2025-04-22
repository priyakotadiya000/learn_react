import { useParams } from "react-router-dom";
const Details = () => {

    const {name}= useParams();

    return (
      <div>
        <h1>Details</h1>
        <p>This is Details page</p>
        <p>{name}</p>
      </div>
    );
  };
  
  export default Details;
  