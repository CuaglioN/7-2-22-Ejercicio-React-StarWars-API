import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const SelectList = ({ initialValue = null, onChange }) => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://swapi.dev/api/people/").then((response) => {
      setInfo(response.data.results);
      setLoading(false);
    });
  }, []);

  const options = info.map((character, index) => {
    return {
      label: character.name,
      value: index
    };
  });

  const getDefaultValue = () => {
    return options.length === 1 ? options[0] : initialValue;
  };

  return (
    <section>
      {loading ? (
        "loading..."
      ) : (
        <Select
          onChange={(option) => onChange(option)}
          options={options}
          isDisabled={options.length <= 1}
          defaultValue={getDefaultValue()}
        />
      )}
    </section>
  );
};

export default SelectList;
