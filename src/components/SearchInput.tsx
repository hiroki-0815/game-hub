import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  useEffect(() => {
    ref.current?.focus(), [];
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          type="text"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
