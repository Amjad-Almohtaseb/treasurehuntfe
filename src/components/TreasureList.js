// Components
import { useDispatch, useSelector } from "react-redux";
import { fetchTreasures } from "../store/actions/thingActions";

//it will trigger fetchTreasures one time only...
import { useEffect } from "react";
import { Redirect } from "react-router";
const TreasureList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const treasures = useSelector((state) => state.thing.treasures);
  useEffect(() => {
    dispatch(fetchTreasures());
  });

  const treasuresList = treasures.map((treasure) => (
    <li style={{ listStyle: "none", fontSize: "30px", fontFamily: "cursive" }}>
      {treasure.name}
    </li>
  ));
  if (!user) return <Redirect to="/" />;
  return (
    <center>
      <div
        style={{ border: "double 7px black", padding: "10px", width: "30%" }}
      >
        {" "}
        <ul>{treasuresList}</ul>
      </div>
    </center>
  );
};

export default TreasureList;
