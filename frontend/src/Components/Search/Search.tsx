import React, { ChangeEvent, useState, SyntheticEvent } from "react";

interface ISearchProps {}

export const Search: React.FC<ISearchProps> = (props): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = (e: SyntheticEvent) => {};

  return (
    <div>
      <input type="text" value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onClick(e)} />
    </div>
  );
};
