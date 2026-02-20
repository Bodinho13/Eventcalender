import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { EwCalender } from './components/ewCalender';
import { EwEventForm } from './components/EwEventForm';
import { EwSummary } from './components/EwSummary';
import { EwMenu } from './components/EwMenu';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EwMenu />} >
          <Route path="calender" element={<EwCalender />} />
          <Route path="summary" element={<EwSummary />} />
          <Route path="event" element={<EwEventForm />} />
          <Route path="event/:eventId" element={<EwEventForm />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here (404)!</p>
            </main>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
