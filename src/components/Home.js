// Styling
import { Link } from "react-router-dom";
import { Title } from "../styles";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Title>Treasure Hunt</Title>

      <center>
        {user && (
          <Link className="btn btn-success" to="/treasures">
            TreasureList
          </Link>
        )}
        <Link className="btn btn-danger" to="/garbages">
          GarbageList
        </Link>
      </center>
    </>
  );
};

export default Home;
