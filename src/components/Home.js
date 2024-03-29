import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect ,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies} from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
//import Movies from "./Movies";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const [watchlist, setWatchlist] = useState([]);
  let recommends = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("Movies").onSnapshot((snapshot) => {
        console.log("Data",snapshot)
        snapshot.docs.map((doc) => {
        console.log("Movies Data" ,doc.data().type);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          original: originals,
          trending: trending,
        }), 
      );
    });
  }, [userName]);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      {/* <Movies/> */}
      <Recommends />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;


export default Home;


