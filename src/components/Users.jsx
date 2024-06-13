import users from "../data/db.json";
import { useState, useTransition, useDeferredValue } from "react";
export default function Users() {
  let [keyword, setKeyword] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleSearch = (e) => {
    // startTransition(() => {
    //   setKeyword(e.target.value);
    // });
    setKeyword(e.target.value);
  };

  keyword = useDeferredValue(keyword);

  return (
    <div>
      <input
        type="search"
        name="keyword"
        placeholder="Search..."
        onChange={handleSearch}
      />
      {users.map(({ id, fullName }, index) => {
        const pos = fullName.toLowerCase().indexOf(keyword.toLowerCase());
        if (keyword && pos !== -1) {
          return (
            <h3 key={index}>
              {fullName.slice(0, pos)}
              <span style={{ background: "yellow" }}>
                {fullName.slice(pos, pos + keyword.length)}
              </span>
              {fullName.slice(pos + keyword.length)}
            </h3>
          );
        }
        return <h3 key={index}>{fullName}</h3>;
      })}
    </div>
  );
}
