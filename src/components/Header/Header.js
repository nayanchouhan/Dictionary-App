import React from "react";
import "./Header.css";
import {
  TextField,
  createTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import categories from "../../data/category";
const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const handleChange = (language) =>{
      setCategory(language);
      setWord("");
    }
  return (
    <div className="header">
      <div>
        <span className="appName">{word ? word: "WORDITY"}</span>
      </div>
      <div className="entries">
        <ThemeProvider theme={darkTheme}>
          <TextField
            value={word}
            onChange={(e)=>setWord(e.target.value)}
            className="search"
            id="outlined-basic"
            label="Type the word"
            variant="outlined"
            
          />
          <div>
            <TextField
              id="filled-select-currency"
              select
              className="select"
              label="Language"
              value={category}
              onChange={(e) => handleChange(e.target.value)}
              variant="filled"
            >
              {categories.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
