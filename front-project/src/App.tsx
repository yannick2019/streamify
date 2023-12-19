import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar'
import Login from './Pages/login';
import Signup from './Pages/signup';
import Jumbotron from './component/jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css'
import Presentation from './Pages/streamify';
import Footer from './component/footer'
import Privacy from './Pages/privacy';
import Home from './Pages/home';
import Profile from './Pages/profile';
import './App.css';
import ForgotPassword from './Pages/forgotPassword';
import ResetPassword from './Pages/resetPassword';
import Movies from './Pages/movies';
import SingleMovie from './Pages/movie';
import Slider from './component/slider';
import Series from './Pages/series';
import SingleSerie from './Pages/serie';
import SeriesSlider from './component/series_component';
import TopRatedSeries from './component/top_rated';
import TrailerPage from './Pages/trailer';
import TopRatedMovies from './component/top_rated_movies';
import Upcoming from './Pages/upcoming';
import AccessData from './Pages/change_access_data';
import Subscribe from './Pages/subscribe';
import PrivateRoute from './component/PrivateRoute';


/*
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/streamify/update-data/:username" element={<AccessData/>} />
          <Route path="/streamify/top_rated_movies" element={<TopRatedMovies/>} />
          <Route path="/streamify/top_rated" element={<TopRatedSeries/>} />
          <Route path="/streamify/profile" element={<Profile/>} />
          <Route path="/streamify/home" element={<Home />} />
          <Route path="/streamify/serie_slider" element={<SeriesSlider />} />
          <Route path="/streamify/slider" element={<Slider />} />
          <Route path="/streamify/" element={<Presentation />} />
          <Route path="/streamify/privacy" element={<Privacy />} />
          <Route path="/streamify/footer" element={<Footer />} />
          <Route path='/streamify/movies' element={<Movies /> } />
          <Route path='/streamify/series' element={<Series /> } />
          <Route path="/streamify/login" element={<Login />} />
          <Route path="/streamify/signup" element={<Signup />} />
          <Route path="/streamify/forgot-password" element={<ForgotPassword />} />
          <Route path="/streamify/reset-password" element={<ResetPassword />} />
          <Route path="/streamify/movie/:id" element={ <SingleMovie /> } />
          <Route path="/streamify/serie/:id" element={ <SingleSerie /> } />
          <Route path="/streamify/movie/trailer/:id" element={ <TrailerPage /> } />
          <Route path="/streamify/upcoming" element={<Upcoming /> } />
          <Route path="/streamify/subscribe" element={<Subscribe /> } />
          <Route path="/streamify/other" element={
              <>
              <Navbar />
              <Jumbotron />
            </>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App;
*/


/*  Private routes  */

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path="/streamify/home" element={<Home />} />
            <Route path="/streamify/profile" element={<Profile/>} />
            <Route path="/streamify/privacy" element={<Privacy />} />
            <Route path="/streamify/footer" element={<Footer />} />
            <Route path='/streamify/movies' element={<Movies /> } />
            <Route path="/streamify/movie/:id" element={ <SingleMovie /> } />
            <Route path="/streamify/upcoming" element={<Upcoming /> } />
            <Route path='/streamify/series' element={<Series /> } />
            <Route path="/streamify/serie/:id" element={ <SingleSerie /> } />   
            <Route path="/streamify/serie/trailer/:id" element={ <TrailerPage /> } />
            <Route path="/streamify/top_rated" element={<TopRatedSeries/>} />
            <Route path="/streamify/top_rated_movies" element={<TopRatedMovies/>} />
            <Route path="/streamify/update-data/:username" element={<AccessData/>} />
            <Route path="/streamify/subscribe" element={<Subscribe /> } />
            <Route path="/streamify/slider" element={<Slider />} />
            <Route path="/streamify/serie_slider" element={<SeriesSlider />} />
            <Route path="/streamify/movie/trailer/:id" element={ <TrailerPage /> } />
            <Route path="/streamify/other" element={
              <>
                <Navbar />
                <Jumbotron />
              </>
            } />
          </Route>

          <Route path="/streamify/" element={<Presentation />} />
          <Route path="/streamify/login" element={<Login />} />
          <Route path="/streamify/signup" element={<Signup />} />
          <Route path="/streamify/forgot-password" element={<ForgotPassword />} />
          <Route path="/streamify/reset-password" element={<ResetPassword />} />         
        </Routes>
      </Router>
    </>
  )
}

export default App;

