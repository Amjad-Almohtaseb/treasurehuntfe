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
      <div
        style={{ border: "double 7px black", padding: "10px", width: "30%" }}
      >
        <ul>{garbagesList}</ul>
      </div>
    </center>
  );
};

export default GarbageList;
