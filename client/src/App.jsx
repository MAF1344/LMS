import {Route, Routes} from 'react-router-dom';
import Home from './pages/students/Home';
import CoursesList from './pages/students/CoursesList';
import CourseDetails from './pages/students/CourseDetails';
import MyEnrollments from './pages/students/MyEnrollments';
import Player from './pages/students/Player';
import Loading from './components/students/Loading';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
      </Routes>
    </div>
  );
};

export default App;
