import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import {
  Pagination,
  PaginationItem,
  TextField,
  Stack,
  Link
} from "@mui/material";

const BASE_URL = "https://hn.algolia.com/api/v1/search?";

function App() {

  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page={page - 1}`)
    .then(({ data }) => {
      setPosts(data.hits);
      setPageQty(data.nbPages);
  }, [query, page]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
