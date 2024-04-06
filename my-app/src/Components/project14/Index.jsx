import React, { useState } from "react";
import { Table, Pagination, Form, Row, Col } from "react-bootstrap";

const ReusableTable = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleSort = (columnName) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === columnName &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key: columnName, direction });
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const handleColumnToggle = (columnName) => {
    setHiddenColumns((prevHiddenColumns) =>
      prevHiddenColumns.includes(columnName)
        ? prevHiddenColumns.filter((col) => col !== columnName)
        : [...prevHiddenColumns, columnName]
    );
  };

  return (
    <div>
      <Form>
        <Row></Row>
      </Form>
      <Table striped bordered hover responsive size="lg" border="success">
        <thead>
          <tr>
            {columns.map((col) =>
              !hiddenColumns.includes(col.name) ? (
                <th key={col.name} onClick={() => handleSort(col.name)}>
                  {col.label}
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              {columns.map(
                (col) =>
                  !hiddenColumns.includes(col.name) && (
                    <td key={col.name}>{item[col.name]}</td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
          (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
      <Form>
        <Row>
          {columns.map((col) => (
            <Col key={col.name}>
              <Form.Check
                type="checkbox"
                label={col.label}
                checked={!hiddenColumns.includes(col.name)}
                onChange={() => handleColumnToggle(col.name)}
              />
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  );
};

export default ReusableTable;
