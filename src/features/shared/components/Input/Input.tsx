import React, { Dispatch, SetStateAction } from "react";
import { InputStyled } from "./Input.styles";

const Input: React.FC<{
  isDisabled: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
}> = ({ isDisabled, setSearch }) => {
  return (
    <InputStyled.Content
      $isDisabled={isDisabled}
      $maxWidth="10rem"
      onChange={e => setSearch(e.target.value)}
    />
  );
};

export default Input;
