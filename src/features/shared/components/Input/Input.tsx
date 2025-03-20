import React, { Dispatch, SetStateAction } from "react";
import { InputStyled } from "./Input.styles";

const Input: React.FC<{
  isDisabled: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
  icon?: string;
}> = ({ isDisabled, setSearch, icon }) => {
  return (
    <InputStyled.Content $isDisabled={isDisabled} $maxWidth="10rem">
      {icon && <img src={icon} />}
      <InputStyled.Input
        placeholder=""
        onChange={e => setSearch(e.target.value)}
      />
      <InputStyled.Placeholder className="placeholder">
        dawdawd
      </InputStyled.Placeholder>
    </InputStyled.Content>
  );
};

export default Input;
