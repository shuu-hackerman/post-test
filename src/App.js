import './App.css';
import {useState, useEffect} from "react";
import axios from "axios"
import Pandas from pandas
import Posts_list from './components/Post_list';
import Error_page from './components/Error_page';


function App() {

  const[posts, setPosts] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      setPosts(result.data);
    })
  }, []);

  return (
    <div className="w-50 p-3 position-absolute top-0 start-50 translate-middle">
    {posts ? <Posts_list posts={posts}/>:<Error_page/>}
    </div>
);
}

export default App;
