import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation/>
      {/**
       * 2022년 현재 Router v6를 사용하므로
       * 다음과 같이 <Routes/> 컴포넌트로 감싸서 사용하도록 변경하였다.
       */}
      <Routes>
        <Route path="/" element={<AllMeetupsPage/>} exact={true}/>
        <Route path="/new-meetup" element={<NewMeetupPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
