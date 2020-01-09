import React from "react";
import { StyledInput } from "../StyledInput";

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <div className="characters">
        <form className="search">
          <StyledInput
            type="text"
            onChange={props.handleInputChange}
            value={props.query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search for classes"
            autoComplete="off"
          />
        </form>
      </div>
      <div>
      </div>
    </section>
  );
}