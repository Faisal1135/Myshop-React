import React, { useState } from "react";
import useAction from "../hooks/useAction";
import useTypedSelector from "../hooks/useTypedSelector";

const Repository: React.FC = () => {
  const [term, setterm] = useState("");
  const { searchRepositorie } = useAction();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repository
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositorie(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setterm(e.target.value)}
          className="form-control py-3"
        />
        <button className="btn btn-danger" type="submit">
          Search
        </button>
      </form>
      {loading && "Loading ..."}
      {error && error}
      {!error && !loading && data.map((it) => <div key={it}>{it}</div>)}
    </div>
  );
};

export default Repository;
