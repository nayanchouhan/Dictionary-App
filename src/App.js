import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import { withStyles,Switch } from "@material-ui/core";
import {grey} from "@material-ui/core/colors"
function App() {
  const [word,setWord] = useState("");
  const [meanings,setMeanings] = useState([]);
  const [category,setCategory] = useState("en");
  const dictApi = async() =>{
      try {
        const data = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );
        //console.log(data);
        setMeanings(data.data);
      } catch (error) {
        console.log(error);  
      }
  };

  // console.log(meanings);

  useEffect(()=>{
      dictApi();
  },[word,category]);

  return(<div 
  className="App"
  style={{ height:"100vh", backgroundColor:"#6573c3", color:"#e0e0e0", fontWeight:"bold"}}
  >
    <Container 
    maxWidth="md"
    style={{height:"100vh",display:"flex", flexDirection:"column"}}
    >
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
        {meanings && (
          <Definitions meanings={meanings} word={word} category={category} />
        )}
    </Container>
  </div>
  );
}

export default App;
