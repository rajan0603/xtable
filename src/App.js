import './App.css';
import React, {useState} from "react";

const data = [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



function App() {
  const [res, setRes] = useState(false);

  const handleDate = () => {
    data.sort((a,b) => {
      if(a.date > b.date){
        return -1
      }
      else{
        return 1
      }
    })
    setRes(!res);
  }
  const handleViews = () => {
    data.sort((a,b) => {
      if(a.views > b.views){
        return -1
      }
      else{
        return 1
      }
    })
    setRes(!res);

  }
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleDate}>Sort by Date</button>
      <button onClick={handleViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr>
              <td>{val.date}</td>
              <td>{val.views}</td>
              <td>{val.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
