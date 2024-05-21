import { useEffect, useState } from "react";
import { FiKey } from "react-icons/fi";

const SearchBar = ({ productList }) => {
  const [key, setKey] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/search/${key}`);
      const data = await response.json();
      console.log(data,"@@")
      // setSearchResult(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    handleSearch()
  },[key])

  return (
    <div>
      <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              value={key}
              aria-describedby="search-addon"
              onChange={(event) => setKey(event.target.value)}
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form>
      {productList.filter((item, id) => {
        if (key === "") {
          return null;
        } else if (item.name.toLowerCase().includes(key.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      }).map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default SearchBar;
