// Components
import { useSelector } from "react-redux";

const GarbageList = () => {
  const garbages = useSelector((state) => state.thing.garbages);

  const garbagesList = garbages.map((garbage) => (
    <li style={{ listStyle: "none", fontSize: "30px", fontFamily: "cursive" }}>
      {garbage.name}
    </li>
  ));

  return (
    <center>
      {" "}
      <ul>{garbagesList}</ul>
    </center>
  );
};

export default GarbageList;
