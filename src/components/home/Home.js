import { Button, CircularProgress, Paper, Box } from '@mui/material';
import app from '../../firebase/FirebaseConfig';
import { signOut, getAuth } from "firebase/auth";
import logo from './../../logo.svg';
import Butter from 'buttercms';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const butter = Butter(process.env.REACT_APP_BUTTER_CMS_API_KEY);

  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);
  let navigate = useNavigate();
  
  
  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    await butter.page.retrieve('*', 'homepage')
    .then(function(resp) {
        setPageData(resp.data.data);
        setLoading(false);
    })
    .catch(function(resp) {
        window.alert(resp);
    });
  }

  const logout = async () => {
    await signOut(getAuth(app)).then(() => {
      window.localStorage.removeItem('token');
      return navigate("/login");
    }).catch((error) => {
      window.alert("Error: " + error);
    });
  }
  
    return (
      <>
      {loading ? (
        <Box component={Paper} p={3}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <div>Título de la página: {pageData.name}</div>
          <Button onClick={() => logout()}>Log out</Button>
        </div>
      )
      }


        {/*<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Button onClick={() => app.auth().signOut()}>Log out</Button>
          </header>
    </div>*/}
    </>
      );
}