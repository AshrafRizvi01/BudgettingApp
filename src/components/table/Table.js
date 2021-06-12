import React,{useMemo} from 'react'
import {useTable} from 'react-table'
import { TableData } from './TableData';
import { Columns } from './Columns';
import './Table.css'

export const BudgetTable = () => {

  const cols = useMemo(() => Columns, []);
  const tableData = useMemo(() => TableData, [])

  const tableInstance = useTable({
    columns: cols,
    data: tableData
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance
    return (
      <table {...getTableProps()}>
        <thead> 
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
          </tr>
          )
        )}
        </thead>

        <tbody {...getTableBodyProps}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })
            }
            </tr>
          );
        } )}
        </tbody>
      </table>
    );
}

function expand() {
  const columns = React.useMemo(() => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? '👇' : '👉'}
            </span>
          ) : null,
      })}]