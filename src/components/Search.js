import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';

const Search = () => {
  const [movies , setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() =>{
    const unsubscribe = db.collection('Movies').limit(100).onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc =>({
        ...doc.data(),
        id:doc.id,
      }));
      console.log("Search data : ",data)
      setmovies(data);
    });
    return unsubscribe;
  }, []);

  const SearchMovie=(e)=>{
    e.preventDefault();
    
    setSearchResults(movies.filter((movies)=>
    movies.Title.toLowerCase().includes(searchTerm.toString().toLowerCase())||
    movies.Description.toLowerCase().includes(searchTerm.toString().toLowerCase())
    ));
};

  return (
    <SearchContainer> 
      <SearchForm onSubmit={(e) => {SearchMovie(e)}}>
        <SearchInput
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <SearchResult>
      <h2>Results..</h2>
      <Content>
        {searchResults && searchResults.map((movie) => (
          <Wrap key={movie.id}>
              {movie.id}
              <Link to={`/detail/${movie.id}`}>
              <img src={movie.CardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </SearchResult>
    </SearchContainer>
  );
};
    
export default Search;

const SearchContainer = styled.div`
  margin: 80px;
  //display: flex;
  align-items: center;
`;

const SearchForm = styled.form`
  display: flex;
  padding-right: 30px;
`;

const SearchInput = styled.input`
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  padding: 6px 10px;
  font-size: 14px;
  background-color: #003366;
  color: #fff;
  border: none;
  cursor: pointer;
`;


const SearchResult = styled.div`
  padding: 0 0 26px;
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
