import React, { useState } from "react";

export default function Search({ formSubmit }) {
  const [Search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    
  }
  function handleSubmit(e) {
    e.preventDefault();
    formSubmit(Search);
    setSearch('')
  }

  return (
    <div className='search-component'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={Search}
          onChange={handleChange}
          placeholder='Search...'
        />
      </form>
    </div>
  );
}
