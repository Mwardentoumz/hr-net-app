import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectEmployee } from '../utils/selector'
import { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import Head from 'next/head'

export default function Table() {


    const router = useRouter()
    const employee = useSelector(selectEmployee)
    console.log(employee)

    // using react-table to generate a table
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'LastName',
                accessor: 'lastName',
            },
            {
                Header: 'E-mail',
                accessor: 'email',
            },
            {
                Header: 'Birth Date',
                accessor: 'birthDate',
            },
            {
                Header: 'Start Date',
                accessor: 'startDate',
            },
            {
                Header: 'Street',
                accessor: 'street',
            }, {
                Header: 'City',
                accessor: 'city',
            },
            {
                Header: 'Zip Code',
                accessor: 'zipCode',
            },
            {
                Header: 'State',
                accessor: 'state',
            },
            {
                Header: 'Department',
                accessor: 'department',
            },
        ],
        []
    )

    const tableInstance = useTable({ columns, data: employee }, useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = tableInstance

    const handleClick = () => {
        router.back()
    }



    return (
        <>
            <Head>
                <title>Table | Hr.App</title>
                <meta name="descritpion" content="generated with nextjs"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main className="h-screen items-center flex flex-col justify-center">

                <div

                    className="bg-white flex rounded-lg w-auto font-latoRegular"
                >
                    <div className="flex-1 text-gray-700 p-5 text-center">
                        <h1 className="text-3xl pb-2 font-latoBold text-red-400">Employee table</h1>
                        <p className="text-lg text-gray-500">Below you can see the full Employee database, sort it by ascending or descending value by clicking on the columns headers.</p>
                        <button
                            type="button"
                            onClick={handleClick}
                            className="bg-red-400 text-white px-4 py-2 rounded-md font-latoBold w-full mt-5"
                        >Navigate back to the Home Page</button>
                    </div>

                </div>

                <div className="bg-white rounded-xl w-auto m-3 font-latoRegular">
                    <table {...getTableProps()} className='table-auto divide-y divide-gray-200 text-xs'>
                        <thead className='bg-gray-50' >
                            {// Loop over the header rows
                                headerGroups.map(headerGroup => (
                                    // Apply the header row props
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {// Loop over the headers in each row
                                            headerGroup.headers.map(column => (
                                                // Apply the header cell props
                                                <th
                                                    scope='col'
                                                    className='group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hover:bg-red-200 transition-all duration-300'
                                                    {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                    {// Render the header
                                                        column.render('Header')}
                                                    <span>
                                                        {column.isSorted
                                                            ? column.isSortedDesc
                                                                ? ' ▼'
                                                                : ' ▲'
                                                            : ''}
                                                    </span>
                                                </th>
                                            ))}
                                    </tr>
                                ))}
                        </thead>
                        {/* Apply the table body props */}
                        <tbody {...getTableBodyProps()} className='bg-white divide-y divide-gray-200'>
                            {// Loop over the table rows
                                rows.map(row => {
                                    // Prepare the row for display
                                    prepareRow(row)
                                    return (
                                        // Apply the row props
                                        <tr {...row.getRowProps()}>
                                            {// Loop over the rows cells
                                                row.cells.map(cell => {
                                                    // Apply the cell props
                                                    return (
                                                        <td {...cell.getCellProps()} className="px-2 py-2">
                                                            {// Render the cell contents
                                                                cell.render('Cell')}
                                                        </td>
                                                    )
                                                })}
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}