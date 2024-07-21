import './App.css';
import Album from './components/album_page/album';
import { Route, Routes } from 'react-router-dom';
import Title from './components/title_page/title';
import VoiceInput from './components/voice/voiceinput';
import TextInput from './components/textinput/textinput';
import TextFailure from   './components/textinput/textfailure';
import Success from './components/photo/success';
import Failure from './components/textinput/textfailure';
import Save from './components/save/save';
import NotSave from './components/save/notsave';
import NotFound from './components/notFound';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Title />} />
          <Route path='/album' element={<Album />} />
        
          <Route path="/voiceinput" element={<VoiceInput />} />
          <Route path="/textinput" element={<TextInput />} />
          <Route path="/textfailure" element={<TextFailure />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/save" element={<Save />} />
          <Route path="/notsave" element={<NotSave />} />

          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
    
  );
}

export default App;
