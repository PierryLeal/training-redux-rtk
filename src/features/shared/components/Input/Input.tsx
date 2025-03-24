import React, { Dispatch, SetStateAction } from "react";
import { InputStyled } from "./Input.styles";

const Input: React.FC<{
  isDisabled: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
  placeholder: string;
  icon?: string;
}> = ({ isDisabled, setSearch, placeholder, icon }) => {
  return (
    <InputStyled.Content $isDisabled={isDisabled} $maxWidth="10rem">
      {icon && <img src={icon} />}
      <InputStyled.Input
        placeholder=""
        onChange={e => setSearch(e.target.value)}
      />
      <InputStyled.Placeholder className="placeholder">
        <span>{placeholder}</span>
      </InputStyled.Placeholder>
    </InputStyled.Content>
  );
};

export default Input;
