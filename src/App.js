import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import MainFilterBox from "./components/MainFilterBox";

function App() {
  const [filters, setFilters] = useState([]);

  const updateItem = (e) => {
    let items = [...filters, e];
    let newItems = items.filter((item, index) => {
      return items.indexOf(item) === index;
    });
    setFilters(newItems);
  };

  const deleteItem = (e) => {
    let items = filters.filter((item) => {
      return item !== e;
    });
    setFilters(items);
  };
  return (
    <div className="bg-[#effafa] h-[100%] w-[100vw]">
      <Header />
      {filters.length === 0 ? (
        <Main updateItem={(e) => updateItem(e)} />
      ) : (
        <MainFilterBox
          filters={filters}
          updateItem={(e) => updateItem(e)}
          deleteItem={(e) => deleteItem(e)}
          clearItem={() => setFilters([])}
        />
      )}
    </div>
  );
}

export default App;
