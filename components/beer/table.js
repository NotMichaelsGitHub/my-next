// import React from 'react';
// import { useTable, useSortBy } from 'react-table';

// // function Table({ columns, data }) {
// //     const {
// //       getTableProps,
// //       getTableBodyProps,
// //       headerGroups,
// //       rows,
// //       prepareRow,
// //     } = useTable(
// //       {
// //         columns,
// //         data,
// //       },
// //       useSortBy
// //     )
  
// //     // We don't want to render all 2000 rows for this example, so cap
// //     // it at 20 for this use case
// //     const firstPageRows = rows.slice(0, 20)
  
// //     return (
// //       <>
// //         <table {...getTableProps()}>
// //           <thead>
// //             {headerGroups.map(headerGroup => (
// //               <tr {...headerGroup.getHeaderGroupProps()}>
// //                 {headerGroup.headers.map(column => (
// //                   // Add the sorting props to control sorting. For this example
// //                   // we can add them into the header props
// //                   <th {...column.getHeaderProps(column.getSortByToggleProps())}>
// //                     {column.render('Header')}
// //                     {/* Add a sort direction indicator */}
// //                     <span>
// //                       {column.isSorted
// //                         ? column.isSortedDesc
// //                           ? ' 🔽'
// //                           : ' 🔼'
// //                         : ''}
// //                     </span>
// //                   </th>
// //                 ))}
// //               </tr>
// //             ))}
// //           </thead>
// //           <tbody {...getTableBodyProps()}>
// //             {firstPageRows.map(
// //               (row, i) => {
// //                 prepareRow(row);
// //                 return (
// //                   <tr {...row.getRowProps()}>
// //                     {row.cells.map(cell => {
// //                       return (
// //                         <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
// //                       )
// //                     })}
// //                   </tr>
// //                 )}
// //             )}
// //           </tbody>
// //         </table>
// //       </>
// //     )
// // }

// const Tbl = (beer) => {
//   const columns = React.useMemo(
//     () => [
//         {
//             Header: 'Beer',
//             columns: [
//               {
//                 Header: 'Name',
//                 accessor: 'firstName',
//               },
//               {
//                 Header: 'Type',
//                 accessor: 'lastName',
//               },
//             ],
//         },
//       ],
//     []
//   )

//   console.log(beer.allbeer);
    
//       const data = beer.allbeer;
    
//       return (
//         // <Table columns={columns} data={data} />
//         <p>able</p>
//       )
// }

// export default (Tbl);