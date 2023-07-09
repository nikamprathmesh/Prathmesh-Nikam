import logo from './logo.svg';
import './App.css';
import ShareImage from './Components/ShareImage';

function App() {
  const imageUrl = "https://picsum.photos/400/300";
  return (
    <div className="App">
      {/* <ImageShare/> */}
      {/* <SharePreview/> */}
    
      <ShareImage imageUrl={imageUrl} />
    </div>
  );
}

export default App;
