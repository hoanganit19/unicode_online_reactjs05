import users from "../data/db.json";
import { useState, useTransition } from "react";
export default function Users() {
  const [keyword, setKeyword] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleSearch = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="search"
        name="keyword"
        placeholder="Search..."
        onChange={handleSearch}
      />
      {isPending && <h3>Loading...</h3>}
      {users.map(({ id, fullName }) => {
        const pos = fullName.toLowerCase().indexOf(keyword.toLowerCase());
        if (keyword && pos !== -1) {
          return (
            <h3 key={id}>
              {fullName.slice(0, pos)}
              <span style={{ background: "yellow" }}>
                {fullName.slice(pos, pos + keyword.length)}
              </span>
              {fullName.slice(pos + keyword.length)}
            </h3>
          );
        }
        return <h3 key={id}>{fullName}</h3>;
      })}
    </div>
  );
}
