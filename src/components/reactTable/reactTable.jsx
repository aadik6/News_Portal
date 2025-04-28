import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faCaretLeft,
  faCaretRight,
  faForward,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./reactTable.css";

export function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data: useMemo(() => data, [data]),
    rows: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      <div className="tablaa">
        <div className="oktable">
          <input
            className="search-in"
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder="🔍  Search "
          />
        </div>
        <div className="got t-bg">
          <table
            border={1}
            // className={ok ? `${ok} data-table` : "data-table"}

            className="data-table `${ok}`"
          >
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={header.column.className}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {(() => {
                            const sortingEmoji = {
                              asc: "    ⬆️",
                              desc: "    ⬇️",
                              default: "    ",
                            };

                            return sortingEmoji[
                              header.column.getIsSorted() || "default"
                            ];
                          })()}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pageController">
        <div className="searching">
          {/* <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder="🔍  Search "
            className="search-in"
          /> */}
        </div>
        <div className="data-table-btn">
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
          >
            <FontAwesomeIcon icon={faBackward} />
          </button>
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>

          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            <FontAwesomeIcon icon={faForward} />
          </button>

          <span>
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
        </div>

        {/* <span>
          Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={handlePageChange}
            max={table.getPageCount()}
          />
          {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
        </span> */}

        {/* <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
      </div>
    </>
  );
}