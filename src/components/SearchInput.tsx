import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus(), [];
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) onSearch(ref.current.value);
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
