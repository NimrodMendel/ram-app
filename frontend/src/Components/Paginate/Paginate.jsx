import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const Paginate = ({
  charactersPerPage,
  charactersCount,
  paginate,
  active,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(charactersCount / charactersPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item
        active={i === active}
        onClick={() => paginate(i)}
        key={i}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Pagination>{pageNumbers}</Pagination>
    </>
  );
};
