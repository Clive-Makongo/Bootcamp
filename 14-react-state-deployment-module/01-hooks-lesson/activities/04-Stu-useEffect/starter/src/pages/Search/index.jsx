/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import API from '../../utils/API';
import Container from '../../components/Container';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';
import Alert from '../../components/Alert';

function Search() {
  const [search, setSearch] = useState('Wikipedia');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  // TODO: Fix the useEffect hook running after every state change.
  useEffect(() => {
    if (!search) {
      return;
    }

    API.searchTerms(search)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error('No results found.');
        }
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        // TODO: Use the response data to set the title and url.
      })
      .catch((err) => setError(err));
  });

  // TODO: Fix the handleInputChange function to display the Wikipedia URL
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Container style={{ minHeight: '100vh' }}>
        <h1 className="text-center pt-5">Search For Anything on Wikipedia</h1>
        <Alert
          type="danger"
          style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
        >
          {error}
        </Alert>
        <SearchForm handleInputChange={handleInputChange} results={search} />
        <SearchResults title={title} url={url} />
      </Container>
    </div>
  );
}

export default Search;
