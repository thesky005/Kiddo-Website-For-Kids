import React , {useEffect , useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import db from '../firebase'
import userSlice from "../features/user/userSlice";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import Detail from "./Detail";


const WatchList = () => {

  const user =  firebase.auth().currentUser;
  console.log("User UID get : ",user.uid)

  const { id } = useParams();
  

  const [movies , setmovies] = useState([]);

  

  useEffect(() => {
    // Check if a user is authenticated
    if (user) {
      const db = firebase.firestore();

      // Reference to the user's watchlist collection
      const watchlistRef = db.collection('watchlist').doc(user.uid).collection('userwatchlist');

      // Set up a listener to get watchlist data
      const unsubscribe = watchlistRef.onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setmovies(data);
      });

      return () => {
        // Unsubscribe from the listener when the component unmounts
        unsubscribe();
      };
    }
  }, [user]);

  return (
    <Container>
      <h2>Watchlist</h2>
      <Content>
        {/* {movies && movies.map((movie) => (
          <Wrap key={movie.id}>
              {movie.id}
              {console.log(movie.id)}
              <Link to={`/detail/` + movie.id}>
              <img src={movie.CardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))} */}
        {movies && movies.map((movie) => (
          <Wrap key={movie.id}>
              {movie.id}
              <Link to={`/detail/${movie.id}`}>
              <img src={movie.CardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
  margin: 100px;
  h2{
    margin-top:80px ;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

`;

const Wrap = styled.div`
  padding-top: 56.25%;
 
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    //padding-left: 50px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default WatchList;
