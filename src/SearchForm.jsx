import { useState } from "react";

/**
 * SearchForm
 *
 * Props: handleSearch
 *
 * State: search term
 *
 * Effects:
 *
 * App -> RoutesList -> CompanyList/JobList -> SearchForm
 */

function SearchForm({ handleSearch }) {
  console.log("SearchForm");
  const [term, setTerm] = useState("");

  /** Handle submission of search form, passes a term with no trailing spaces */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("SearchForm: handleSubmit", {term})

    handleSearch(term.trim());
  }

  /** Handle change for form inputs */
  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <label htmlFor="SearchForm"></label>
      <input
        id="SearchForm-value"
        value={term}
        onChange={handleChange}
        placeholder="Enter Search Term..."
      />
      <button>Search!</button>
    </form>
  );
}

export default SearchForm;
