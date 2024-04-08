import React, { useState } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import MovieDetail from './MovieDetail';
import API from '../utils/API';

function OmdbContainer() {
  const [searchData, setSearchData] = useState({
    search: '',
    results: [],
  });

  const searchMovies = (query) => {
    API.search(query)
      .then((res) => setSearchData({ ...searchData, results: res.data }))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  // When the form is submitted, search the OMDB API for the value of `searchData.search`
  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchMovies(searchData.search);
  };

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card
            heading={searchData.results.Title || 'Search for a Movie to Begin'}
          >
            {searchData.results.Title ? (
              <MovieDetail
                title={searchData.results.Title}
                src={searchData.results.Poster}
                director={searchData.results.Director}
                genre={searchData.results.Genre}
                released={searchData.results.Released}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={searchData.search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OmdbContainer;
