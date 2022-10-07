import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import LineChart from './components/Chart/Chart';
import Navbar from './components/Navbar/Navbar';
import TableData from './components/Table/Table';
import { loadData, setCurrentPageData } from './helper/chartSlice';

function App() {
  const dispatch = useDispatch()

  const fetchData = async () => {
    const URL = `http://fetest.pangeatech.net/data`;
    await axios.get(URL)
      .then((response) => {
        dispatch(loadData(response.data));
        dispatch(setCurrentPageData(0));
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="main-container">
      <Navbar />
      <LineChart />
      <TableData />
    </div>
  );
}

export default App;
