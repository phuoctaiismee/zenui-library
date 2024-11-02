import React, {useState, useMemo, useEffect, useRef} from "react";

// react helmet
import {Helmet} from "react-helmet";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import {HiOutlineArrowsUpDown} from "react-icons/hi2";
import {BsChevronLeft, BsChevronRight, BsThreeDotsVertical} from "react-icons/bs";
import {MdDeleteOutline, MdOutlineEdit} from "react-icons/md";
import {IoEyeOutline} from "react-icons/io5";
import {IoIosArrowDown} from "react-icons/io";
import {BiSolidTrash} from "react-icons/bi";
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";

const Table = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    const toggleCardView = useToggleCardView()

    // actions
    const [table1Preview, setTable1Preview] = useState(true);
    const [table1Code, setTable1Code] = useState(false);

    const [table2Preview, setTable2Preview] = useState(true);
    const [table2Code, setTable2Code] = useState(false);

    const [table3Preview, setTable3Preview] = useState(true);
    const [table3Code, setTable3Code] = useState(false);

    // searchable table
    const initialData = [
        {id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active"},
        {id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive"},
        {id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Active"},
        {id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active"},
        {id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Admin", status: "Inactive"},
    ];

    const [data, setData] = useState(initialData);
    const [search, setSearch] = useState("");
    const [sortConfig, setSortConfig] = useState({key: null, direction: 'asc'});
    const [openActionMenuId, setOpenActionMenuId] = useState(null);


    const toggleActionMenu = (id) => {
        setOpenActionMenuId(openActionMenuId === id ? null : id);
    };

    // Handle search
    const filteredData = useMemo(() => {
        return data.filter(item =>
            Object.values(item).some(
                value => value.toString().toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [data, search]);

    // Handle sort
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({key, direction});
    };

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;

        return [...filteredData].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [filteredData, sortConfig]);

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.zenui-table') && !event.target.closest('.action-btn')) {
            setOpenActionMenuId(null)
        }
    })


    // pagination table
    const initialData2 = Array.from({length: 35}, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
        role: index % 3 === 0 ? "Admin" : index % 2 === 0 ? "Editor" : "User",
        status: index % 2 === 0 ? "Active" : "Inactive"
    }));

    const [data2, setData2] = useState(initialData2);
    const [search2, setSearch2] = useState("");
    const [sortConfig2, setSortConfig2] = useState({key: null, direction: 'asc'});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    // Handle search
    const filteredData2 = useMemo(() => {
        return data2.filter(item =>
            Object.values(item).some(
                value => value.toString().toLowerCase().includes(search2.toLowerCase())
            )
        );
    }, [data2, search2]);

    // Handle sort
    const handleSort2 = (key) => {
        let direction = 'asc';
        if (sortConfig2.key === key && sortConfig2.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig2({key, direction});
    };

    const sortedData2 = useMemo(() => {
        if (!sortConfig2.key) return filteredData2;

        return [...filteredData2].sort((a, b) => {
            if (a[sortConfig2.key] < b[sortConfig2.key]) {
                return sortConfig2.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig2.key] > b[sortConfig2.key]) {
                return sortConfig2.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [filteredData2, sortConfig2]);

    // Pagination calculations
    const totalPages = Math.ceil(sortedData2.length / pageSize);

    const paginatedData = sortedData2.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (page) => {
        setCurrentPage(Math.min(Math.max(1, page), totalPages));
    };

    const handleOptionClick = (value) => {
        setPageSize(Number(value));
        setCurrentPage(1);
        setIsOpen(false);
    };

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleOutsideClick = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', ()=> {
            handleOutsideClick3()
        });
    }, []);


    // checkbox table
    const initialData3 = Array.from({length: 35}, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
        role: index % 3 === 0 ? "Admin" : index % 2 === 0 ? "Editor" : "User",
        status: index % 2 === 0 ? "Active" : "Inactive"
    }));

    const [data3, setData3] = useState(initialData3);
    const [search3, setSearch3] = useState("");
    const [sortConfig3, setSortConfig3] = useState({key: null, direction: 'asc'});
    const [currentPage3, setCurrentPage3] = useState(1);
    const [pageSize3, setPageSize3] = useState(10);
    const [selectedRows, setSelectedRows] = useState(new Set());

    // Handle search
    const filteredData3 = useMemo(() => {
        return data3.filter(item =>
            Object.values(item).some(
                value => value.toString().toLowerCase().includes(search3.toLowerCase())
            )
        );
    }, [data3, search3]);

    // Handle sort
    const handleSort3 = (key) => {
        let direction = 'asc';
        if (sortConfig3.key === key && sortConfig3.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig3({key, direction});
    };

    const sortedData3 = useMemo(() => {
        if (!sortConfig3.key) return filteredData3;

        return [...filteredData3].sort((a, b) => {
            if (a[sortConfig3.key] < b[sortConfig3.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig3.key] > b[sortConfig3.key]) {
                return sortConfig3.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [filteredData3, sortConfig3]);

    // Pagination calculations
    const totalPages3 = Math.ceil(sortedData3.length / pageSize3);
    const paginatedData3 = sortedData3.slice(
        (currentPage - 1) * pageSize3,
        currentPage * pageSize3
    );

    const handlePageChange3 = (page) => {
        setCurrentPage3(Math.min(Math.max(1, page), totalPages3));
    };

    // Selection handlers
    const toggleAllInPage = (event) => {
        const newSelected = new Set(selectedRows);
        paginatedData3.forEach(item => {
            if (event.target.checked) {
                newSelected.add(item.id);
            } else {
                newSelected.delete(item.id);
            }
        });
        setSelectedRows(newSelected);
    };

    const toggleRow = (id) => {
        const newSelected = new Set(selectedRows);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedRows(newSelected);
    };

    const isAllInPageSelected = paginatedData.every(item => selectedRows.has(item.id));

    const handleBulkDelete = () => {
        console.log('Deleting selected rows:', Array.from(selectedRows));
    };

    const [isOpen3, setIsOpen3] = useState(false);
    const selectRef3 = useRef(null);

    const handleOptionClick3 = (value) => {
        setPageSize3(Number(value));
        setCurrentPage3(1);
        setIsOpen3(false);
    };

    const handleToggle3 = () => setIsOpen3((prev) => !prev);

    const handleOutsideClick3 = (event) => {
        if (selectRef3.current && !selectRef3.current.contains(event.target)) {
            setIsOpen3(false);
        }
    };

    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader text={"searchable table"} id={"searchable_table"}/>

                    <p className="w-[90vw] 425px:w-[80%] text-text text-[1rem]">
                        A searchable table lets users quickly filter rows by typing into a search box, instantly narrowing displayed data to match keywords or phrases.
                    </p>

                    <div className="w-[90vw] 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${table1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    table1Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setTable1Preview, setTable1Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    table1Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setTable1Preview, setTable1Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {table1Preview && (
                            <div className="customTable overflow-y-auto p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="w-max mx-auto p-4">
                                    <div className="mb-4">
                                        <input
                                            placeholder="Search..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="max-w-sm py-2.5 px-4 border border-gray-200 rounded-md outline-none focus:border-blue-300"
                                        />
                                    </div>

                                    <div className="customTable w-full rounded-md border border-gray-200">
                                        <table className="w-max text-sm">
                                            <thead className="bg-gray-100">
                                            <tr>
                                                {Object.keys(initialData[0]).map(key => (
                                                    key !== 'id' && (
                                                        <th
                                                            key={key}
                                                            className="p-3 text-left font-medium text-gray-700 cursor-pointer"
                                                            onClick={() => handleSort(key)}
                                                        >
                                                            <div className="flex items-center gap-[5px]">
                                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                                                <HiOutlineArrowsUpDown
                                                                    className="hover:bg-gray-200 p-[5px] rounded-md text-[1.6rem]"/>
                                                            </div>
                                                        </th>
                                                    )
                                                ))}
                                                <th className="p-3 text-left font-medium text-gray-700">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {sortedData.map((item) => (
                                                <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                                                    {Object.entries(item).map(([key, value]) => (
                                                        key !== 'id' && (
                                                            <td key={key} className="p-3">
                                                                {value}
                                                            </td>
                                                        )
                                                    ))}
                                                    <td className="p-3 relative">
                                                        <BsThreeDotsVertical onClick={() => toggleActionMenu(item
                                                            .id)} className='action-btn text-gray-600 cursor-pointer'/>

                                                        <div
                                                            className={`${openActionMenuId === item.id ? 'opacity-100 scale-[1] z-30' : 'opacity-0 scale-[0.8] z-[-1]'} zenui-table absolute top-[90%] right-[80%] p-1.5 rounded-md bg-white shadow-md min-w-[160px] transition-all duration-100`}>
                                                            <p className='flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200'>
                                                                <MdOutlineEdit/>
                                                                Edit
                                                            </p>
                                                            <p className='flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200'>
                                                                <MdDeleteOutline/>
                                                                Delete
                                                            </p>
                                                            <p className='flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200'>
                                                                <IoEyeOutline/>
                                                                View Details
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>

                                        {
                                            !sortedData?.length && (
                                                <p className='text-[0.9rem] text-gray-500 py-6 text-center w-full'>No data
                                                    found!
                                                </p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )}

                        {table1Code && (
                            <Showcode
                                code='
import React, {useMemo, useState} from "react";

// react icons
import {HiOutlineArrowsUpDown} from "react-icons/hi2";
import {BsThreeDotsVertical} from "react-icons/bs";
import {MdDeleteOutline, MdOutlineEdit} from "react-icons/md";
import {IoEyeOutline} from "react-icons/io5";

const Table = () => {

    const initialData = [
        {id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active"},
        {id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive"},
        {id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Active"},
        {id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active"},
        {id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Admin", status: "Inactive"},
    ];

    const [data, setData] = useState(initialData);
    const [search, setSearch] = useState("");
    const [sortConfig, setSortConfig] = useState({key: null, direction: "asc"});
    const [openActionMenuId, setOpenActionMenuId] = useState(null);


    const toggleActionMenu = (id) => {
        setOpenActionMenuId(openActionMenuId === id ? null : id);
    };

    // Handle search
    const filteredData = useMemo(() => {
        return data.filter(item =>
            Object.values(item).some(
                value => value.toString().toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [data, search]);

    // Handle sort
    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({key, direction});
    };

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;

        return [...filteredData].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? 1 : -1;
            }
            return 0;
        });
    }, [filteredData, sortConfig]);

    // outside click close the action dropdown
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".zenui-table") && !event.target.closest(".action-btn")) {
            setOpenActionMenuId(null)
        }
    })

    return (
        <div className="w-max mx-auto p-4">
            <div className="mb-4">
                <input
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-sm py-2.5 px-4 border border-gray-200 rounded-md outline-none focus:border-blue-300"
                />
            </div>

            <div className="customTable w-full rounded-md border border-gray-200">
                <table className="w-max text-sm">
                    <thead className="bg-gray-100">
                    <tr>
                        {Object.keys(initialData[0]).map(key => (
                            key !== "id" && (
                                <th
                                    key={key}
                                    className="p-3 text-left font-medium text-gray-700 cursor-pointer"
                                    onClick={() => handleSort(key)}
                                >
                                    <div className="flex items-center gap-[5px]">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                        <HiOutlineArrowsUpDown
                                            className="hover:bg-gray-200 p-[5px] rounded-md text-[1.6rem]"/>
                                    </div>
                                </th>
                            )
                        ))}
                        <th className="p-3 text-left font-medium text-gray-700">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedData.map((item) => (
                        <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                            {Object.entries(item).map(([key, value]) => (
                                key !== "id" && (
                                    <td key={key} className="p-3">
                                        {value}
                                    </td>
                                )
                            ))}
                            <td className="p-3 relative">
                                <BsThreeDotsVertical onClick={() => toggleActionMenu(item
                                    .id)} className="action-btn text-gray-600 cursor-pointer"/>

                                <div
                                    className={`${openActionMenuId === item.id ? "opacity-100 scale-[1] z-30" : "opacity-0 scale-[0.8] z-[-1]"} zenui-table absolute top-[90%] right-[80%] p-1.5 rounded-md bg-white shadow-md min-w-[160px] transition-all duration-100`}>
                                    <p className="flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                                        <MdOutlineEdit/>
                                        Edit
                                    </p>
                                    <p className="flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                                        <MdDeleteOutline/>
                                        Delete
                                    </p>
                                    <p className="flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                                        <IoEyeOutline/>
                                        View Details
                                    </p>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {
                    !sortedData?.length && (
                        <p className="text-[0.9rem] text-gray-500 py-6 text-center w-full">No data
                            found!
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Table;
          '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={"pagination table"} id={"pagination_table"}/>
                    </div>

                    <p className="w-[90vw] 425px:w-[80%] text-text text-[1rem]">
                        A pagination table displays data in pages, showing a limited number of rows per page with controls to navigate between pages, improving data readability.
                    </p>

                    <div className="w-[90vw] 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${table2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    table2Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setTable2Preview, setTable2Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    table2Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setTable2Preview, setTable2Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {table2Preview && (
                            <div
                                className="customTable overflow-y-auto p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="w-max mx-auto p-4">
                                    <div className="mb-4 flex items-center justify-between">
                                        <input
                                            placeholder="Search..."
                                            value={search2}
                                            onChange={(e) => setSearch2(e.target.value)}
                                            className="max-w-sm py-2.5 px-4 border border-gray-200 rounded-md outline-none focus:border-blue-300"
                                        />
                                    </div>

                                    <div className="rounded-md border border-gray-200 w-full">
                                        <table className="w-full text-sm">
                                            <thead className="bg-gray-100">
                                            <tr>
                                                {Object.keys(initialData2[0]).map(key => (
                                                    key !== 'id' && (
                                                        <th
                                                            key={key}
                                                            className="p-3 text-left font-medium text-gray-700 cursor-pointer"
                                                            onClick={() => handleSort2(key)}
                                                        >
                                                            <div className="flex items-center gap-[5px]">
                                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                                                <HiOutlineArrowsUpDown
                                                                    className="hover:bg-gray-200 p-[5px] rounded-md text-[1.6rem]"/>
                                                            </div>
                                                        </th>
                                                    )
                                                ))}
                                                <th className="p-3 text-left font-medium text-gray-700">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {paginatedData.map((item) => (
                                                <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                                                    {Object.entries(item).map(([key, value]) => (
                                                        key !== 'id' && (
                                                            <td key={key} className="p-3">
                                                                {value}
                                                            </td>
                                                        )
                                                    ))}
                                                    <td className="p-3 relative">
                                                        <BsThreeDotsVertical onClick={() => toggleActionMenu(item
                                                            .id)}
                                                                             className='action-btn action-btn text-gray-600 cursor-pointer'/>

                                                        <div
                                                            className={`${openActionMenuId === item.id ? 'opacity-100 scale-[1] z-30' : 'opacity-0 scale-[0.8] z-[-1]'} zenui-table absolute top-[90%] right-[80%] p-1.5 rounded-md bg-white shadow-md min-w-[160px] transition-all duration-100`}>
                                                            <p className='flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200'>
                                                                <MdOutlineEdit/>
                                                                Edit
                                                            </p>
                                                            <p className='flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200'>
                                                                <MdDeleteOutline/>
                                                                Delete
                                                            </p>
                                                            <p className='flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200'>
                                                                <IoEyeOutline/>
                                                                View Details
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>

                                        {
                                            !paginatedData?.length && (
                                                <p className='text-[0.9rem] text-gray-500 py-6 text-center w-full'>No data
                                                    found!
                                                </p>
                                            )
                                        }
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <div className='flex items-center gap-[5px]'>
                                            <div className="text-sm text-gray-500">
                                                Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedData2.length)} of {sortedData2.length} results
                                            </div>

                                            <div ref={selectRef} className="relative w-44">
                                                <button
                                                    onClick={handleToggle}
                                                    className="w-max px-2 py-0.5 text-left bg-white border border-gray-300 rounded shadow-sm flex items-center justify-between gap-[10px] hover:border-gray-400 focus:outline-none"
                                                >
                                                    {pageSize}

                                                    <IoIosArrowDown
                                                        className={`${isOpen ? 'rotate-[180deg]' : 'rotate-0'} transition-all duration-200`}/>
                                                </button>
                                                {isOpen && (
                                                    <div
                                                        className="absolute w-max mt-1 bg-white border border-gray-300 rounded shadow-lg">
                                                        <div
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                            onClick={() => handleOptionClick(5)}
                                                        >
                                                            5
                                                        </div>
                                                        <div
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                            onClick={() => handleOptionClick(10)}
                                                        >
                                                            10
                                                        </div>
                                                        <div
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                            onClick={() => handleOptionClick(20)}
                                                        >
                                                            20
                                                        </div>
                                                        <div
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                            onClick={() => handleOptionClick(50)}
                                                        >
                                                            50
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="border border-gray-200 hover:bg-gray-50 cursor-pointer px-[10px] text-[0.9rem] py-[5px] rounded-md"
                                            >
                                                <BsChevronLeft/>
                                            </button>

                                            {/* Page Numbers */}
                                            <div className="flex items-center gap-1">
                                                {Array.from({length: Math.min(5, totalPages)}, (_, i) => {
                                                    let pageNum;
                                                    if (totalPages <= 5) {
                                                        pageNum = i + 1;
                                                    } else if (currentPage <= 3) {
                                                        pageNum = i + 1;
                                                    } else if (currentPage >= totalPages - 2) {
                                                        pageNum = totalPages - 4 + i;
                                                    } else {
                                                        pageNum = currentPage - 2 + i;
                                                    }

                                                    return (
                                                        <button
                                                            key={pageNum}
                                                            onClick={() => handlePageChange(pageNum)}
                                                            className={`${pageNum === currentPage && 'bg-black text-white'} border border-gray-200 px-[10px] text-[0.9rem] py-[1px] rounded-md`}
                                                        >
                                                            {pageNum}
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            <button
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="border border-gray-200 px-[10px] cursor-pointer hover:bg-gray-50 text-[0.9rem] py-[5px] rounded-md"
                                            >
                                                <BsChevronRight/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {table2Code && (
                            <Showcode
                                code='
import React, {useEffect, useMemo, useRef, useState} from "react";

// react icons
import {HiOutlineArrowsUpDown} from "react-icons/hi2";
import {BsChevronLeft, BsChevronRight, BsThreeDotsVertical} from "react-icons/bs";
import {MdDeleteOutline, MdOutlineEdit} from "react-icons/md";
import {IoEyeOutline} from "react-icons/io5";
import {IoIosArrowDown} from "react-icons/io";

const Table = () => {

    const initialData = Array.from({length: 35}, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
        role: index % 3 === 0 ? "Admin" : index % 2 === 0 ? "Editor" : "User",
        status: index % 2 === 0 ? "Active" : "Inactive"
    }));

    const [data, setData] = useState(initialData);
    const [search, setSearch] = useState("");
    const [sortConfig, setSortConfig] = useState({key: null, direction: "asc"});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [openActionMenuId, setOpenActionMenuId] = useState(null);

    // Handle search
    const filteredData = useMemo(() => {
        return data.filter(item =>
            Object.values(item).some(
                value => value.toString().toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [data, search]);

    // Handle sort
    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({key, direction});
    };

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;

        return [...filteredData].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? 1 : -1;
            }
            return 0;
        });
    }, [filteredData, sortConfig]);

    // Pagination calculations
    const totalPages = Math.ceil(sortedData.length / pageSize);

    const paginatedData = sortedData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (page) => {
        setCurrentPage(Math.min(Math.max(1, page), totalPages));
    };

    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    // handle how many row show in one col
    const handleOptionClick = (value) => {
        setPageSize(Number(value));
        setCurrentPage(1);
        setIsOpen(false);
    };

    const toggleActionMenu = (id) => {
        setOpenActionMenuId(openActionMenuId === id ? null : id);
    };

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleOutsideClick = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", ()=> {
            handleOutsideClick()
        });
    }, []);

    return (
        <div className="w-max mx-auto p-4">
            <div className="mb-4 flex items-center justify-between">
                <input
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-sm py-2.5 px-4 border border-gray-200 rounded-md outline-none focus:border-blue-300"
                />
            </div>

            <div className="rounded-md border border-gray-200 w-full">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                    <tr>
                        {Object.keys(initialData[0]).map(key => (
                            key !== "id" && (
                                <th
                                    key={key}
                                    className="p-3 text-left font-medium text-gray-700 cursor-pointer"
                                    onClick={() => handleSort(key)}
                                >
                                    <div className="flex items-center gap-[5px]">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                        <HiOutlineArrowsUpDown
                                            className="hover:bg-gray-200 p-[5px] rounded-md text-[1.6rem]"/>
                                    </div>
                                </th>
                            )
                        ))}
                        <th className="p-3 text-left font-medium text-gray-700">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedData.map((item) => (
                        <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                            {Object.entries(item).map(([key, value]) => (
                                key !== "id" && (
                                    <td key={key} className="p-3">
                                        {value}
                                    </td>
                                )
                            ))}
                            <td className="p-3 relative">
                                <BsThreeDotsVertical onClick={() => toggleActionMenu(item
                                    .id)}
                                                     className="action-btn action-btn text-gray-600 cursor-pointer"/>

                                <div
                                    className={`${openActionMenuId === item.id ? "opacity-100 scale-[1] z-30" : "opacity-0 scale-[0.8] z-[-1]"} zenui-table absolute top-[90%] right-[80%] p-1.5 rounded-md bg-white shadow-md min-w-[160px] transition-all duration-100`}>
                                    <p className="flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                                        <MdOutlineEdit/>
                                        Edit
                                    </p>
                                    <p className="flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                                        <MdDeleteOutline/>
                                        Delete
                                    </p>
                                    <p className="flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                                        <IoEyeOutline/>
                                        View Details
                                    </p>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {
                    !paginatedData?.length && (
                        <p className="text-[0.9rem] text-gray-500 py-6 text-center w-full">No data
                            found!
                        </p>
                    )
                }
            </div>

            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-[5px]">
                    <div className="text-sm text-gray-500">
                        Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} results
                    </div>

                    <div ref={selectRef} className="relative w-44">
                        <button
                            onClick={handleToggle}
                            className="w-max px-2 py-0.5 text-left bg-white border border-gray-300 rounded shadow-sm flex items-center justify-between gap-[10px] hover:border-gray-400 focus:outline-none"
                        >
                            {pageSize}

                            <IoIosArrowDown
                                className={`${isOpen ? "rotate-[180deg]" : "rotate-0"} transition-all duration-200`}/>
                        </button>
                        {isOpen && (
                            <div
                                className="absolute w-max mt-1 bg-white border border-gray-300 rounded shadow-lg">
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleOptionClick(5)}
                                >
                                    5
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleOptionClick(10)}
                                >
                                    10
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleOptionClick(20)}
                                >
                                    20
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleOptionClick(50)}
                                >
                                    50
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border border-gray-200 hover:bg-gray-50 cursor-pointer px-[10px] text-[0.9rem] py-[5px] rounded-md"
                    >
                        <BsChevronLeft/>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                        {Array.from({length: Math.min(5, totalPages)}, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                                pageNum = i + 1;
                            } else if (currentPage <= 3) {
                                pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }

                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => handlePageChange(pageNum)}
                                    className={`${pageNum === currentPage && "bg-black text-white"} border border-gray-200 px-[10px] text-[0.9rem] py-[1px] rounded-md`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="border border-gray-200 px-[10px] cursor-pointer hover:bg-gray-50 text-[0.9rem] py-[5px] rounded-md"
                    >
                        <BsChevronRight/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
          '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={"checkbox table"} id={"checkbox_table"}/>
                    </div>

                    <p className="w-[90vw] 425px:w-[80%] text-text text-[1rem]">
                        A checkbox table lets users select rows using checkboxes, enabling bulk actions like delete or export on multiple entries.
                    </p>

                    <div className="w-[90vw] 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${table3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    table3Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setTable3Preview, setTable3Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    table3Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setTable3Preview, setTable3Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {table3Preview && (
                            <div
                                className="customTable overflow-y-auto p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="w-max mx-auto p-4">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4 flex-1">
                                            <input
                                                placeholder="Search..."
                                                value={search3}
                                                onChange={(e) => setSearch3(e.target.value)}
                                                className="max-w-sm py-2.5 px-4 border border-gray-200 rounded-md outline-none focus:border-blue-300"
                                            />
                                            {selectedRows.size > 0 && (
                                                <button
                                                    onClick={handleBulkDelete}
                                                    className="flex items-center gap-2 text-red-500"
                                                >
                                                    <BiSolidTrash className="h-4 w-4"/>
                                                    Delete Selected ({selectedRows.size})
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="rounded-md border border-gray-200 w-full">
                                        <table className="w-full text-sm">
                                            <thead className="bg-gray-100">
                                            <tr>
                                                <th className="p-3 w-14">
                                                    <label className="flex items-center gap-[10px] cursor-pointer">
                                                        <input type="checkbox" checked={isAllInPageSelected} className="hidden"
                                                               onChange={toggleAllInPage}/>
                                                        <div className="relative">
                                                            <span
                                                                className={`${isAllInPageSelected ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200 absolute top-0 left-0`}>
                                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Group 335">
                                                                <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                                                                      height="20" rx="4" className="fill-[#3B9DF8]"
                                                                      stroke="#3B9DF8"></rect>
                                                                <path id="Vector"
                                                                      d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                                                      fill="white"></path>
                                                            </g>
                                                        </svg>
                                                    </span>

                                                                        <span
                                                                            className={`${!isAllInPageSelected ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200`}>
                                                    <svg width="18" height="18" viewBox="0 0 21 21" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Group 335">
                                                                <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                                                                      height="20" rx="4" className="fill-transparent"
                                                                      stroke="#ccc"></rect>
                                                            </g>
                                                        </svg>
                                                </span>
                                                                    </div>
                                                    </label>
                                                </th>
                                                {Object.keys(initialData3[0]).map(key => (
                                                    key !== 'id' && (
                                                        <th
                                                            key={key}
                                                            className="p-3 text-left font-medium text-gray-700 cursor-pointer"
                                                            onClick={() => handleSort3(key)}
                                                        >
                                                            <div className="flex items-center gap-[5px]">
                                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                                                <HiOutlineArrowsUpDown
                                                                    className="hover:bg-gray-200 p-[5px] rounded-md text-[1.6rem]"/>
                                                            </div>
                                                        </th>
                                                    )
                                                ))}
                                                <th className="p-3 text-left font-medium text-gray-700">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {paginatedData3.map((item) => (
                                                <tr
                                                    key={item.id}
                                                    className={`border-t border-gray-200 cursor-pointer ${
                                                        selectedRows.has(item.id) ? 'bg-blue-50 hover:bg-blue-50' : 'hover:bg-gray-50'
                                                    }`}
                                                >
                                                    <td className="p-3">
                                                        <label className="flex items-center gap-[10px] cursor-pointer">
                                                            <input type="checkbox" className="hidden"
                                                                   onChange={()=> toggleRow(item.id)}/>
                                                            <div className="relative">
                                                            <span
                                                                className={`${selectedRows.has(item.id) ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200 absolute top-0 left-0`}>
                                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Group 335">
                                                                <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05"
                                                                      width="20"
                                                                      height="20" rx="4" className="fill-[#3B9DF8]"
                                                                      stroke="#3B9DF8"></rect>
                                                                <path id="Vector"
                                                                      d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                                                      fill="white"></path>
                                                            </g>
                                                        </svg>
                                                    </span>

                                                                <span
                                                                    className={`${!selectedRows.has(item.id) ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200`}>
                                                    <svg width="18" height="18" viewBox="0 0 21 21" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Group 335">
                                                                <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05"
                                                                      width="20"
                                                                      height="20" rx="4" className="fill-transparent"
                                                                      stroke="#ccc"></rect>
                                                            </g>
                                                        </svg>
                                                </span>
                                                            </div>
                                                        </label>
                                                    </td>
                                                    {Object.entries(item).map(([key, value]) => (
                                                        key !== 'id' && (
                                                            <td key={key} className="p-3">
                                                                {value}
                                                            </td>
                                                        )
                                                    ))}
                                                    <td className="p-3 relative">
                                                        <BsThreeDotsVertical onClick={() => toggleActionMenu(item
                                                            .id)} className='action-btn action-btn text-gray-600 cursor-pointer'/>

                                                        <div
                                                            className={`${openActionMenuId === item.id ? 'opacity-100 scale-[1] z-30' : 'opacity-0 scale-[0.8] z-[-1]'} zenui-table absolute top-[90%] right-[80%] p-1.5 rounded-md bg-white shadow-md min-w-[160px] transition-all duration-100`}>
                                                            <p className='flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200'>
                                                                <MdOutlineEdit/>
                                                                Edit
                                                            </p>
                                                            <p className='flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200'>
                                                                <MdDeleteOutline/>
                                                                Delete
                                                            </p>
                                                            <p className='flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200'>
                                                                <IoEyeOutline/>
                                                                View Details
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>

                                        {
                                            !paginatedData3?.length && (
                                                <p className='text-[0.9rem] text-gray-500 py-6 text-center w-full'>No data
                                                    found!
                                                </p>
                                            )
                                        }
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <div className='flex items-center gap-[5px]'>
                                            <div className="text-sm text-gray-500">
                                                Showing {((currentPage3 - 1) * pageSize3) + 1} to {Math.min(currentPage3 * pageSize3, sortedData3.length)} of {sortedData3.length} results
                                            </div>

                                            <div ref={selectRef3} className="relative w-44">
                                            <button
                                                    onClick={handleToggle3}
                                                    className="w-max px-2 py-0.5 text-left bg-white border border-gray-300 rounded shadow-sm flex items-center justify-between gap-[10px] hover:border-gray-400 focus:outline-none"
                                                >
                                                    {pageSize3}

                                                    <IoIosArrowDown
                                                        className={`${isOpen3 ? 'rotate-[180deg]' : 'rotate-0'} transition-all duration-200`}/>
                                                </button>
                                                {isOpen3 && (
                                                    <div
                                                        className="absolute w-max mt-1 bg-white border border-gray-300 rounded shadow-lg">
                                                        <div
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                            onClick={() => handleOptionClick3(5)}
                                                        >
                                                            5
                                                        </div>
                                                        <div
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                            onClick={() => handleOptionClick3(10)}
                                                        >
                                                            10
                                                        </div>
                                                        <div
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                            onClick={() => handleOptionClick3(20)}
                                                        >
                                                            20
                                                        </div>
                                                        <div
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                            onClick={() => handleOptionClick3(50)}
                                                        >
                                                            50
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handlePageChange3(currentPage3 - 1)}
                                                disabled={currentPage3 === 1}
                                                className="border border-gray-200 hover:bg-gray-50 cursor-pointer px-[10px] text-[0.9rem] py-[5px] rounded-md"
                                            >
                                                <BsChevronLeft/>
                                            </button>

                                            {/* Page Numbers */}
                                            <div className="flex items-center gap-1">
                                                {Array.from({length: Math.min(5, totalPages3)}, (_, i) => {
                                                    let pageNum;
                                                    if (totalPages3 <= 5) {
                                                        pageNum = i + 1;
                                                    } else if (currentPage3 <= 3) {
                                                        pageNum = i + 1;
                                                    } else if (currentPage3 >= totalPages3 - 2) {
                                                        pageNum = totalPages3 - 4 + i;
                                                    } else {
                                                        pageNum = currentPage3 - 2 + i;
                                                    }

                                                    return (
                                                        <button
                                                            key={pageNum}
                                                            onClick={() => handlePageChange3(pageNum)}
                                                            className={`${pageNum === currentPage3 && 'bg-black text-white'} border border-gray-200 px-[10px] text-[0.9rem] py-[1px] rounded-md`}
                                                        >
                                                            {pageNum}
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            <button
                                                onClick={() => handlePageChange3(currentPage3 + 1)}
                                                disabled={currentPage3 === totalPages3}
                                                className="border border-gray-200 px-[10px] cursor-pointer hover:bg-gray-50 text-[0.9rem] py-[5px] rounded-md"
                                            >
                                                <BsChevronRight/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {table3Code && (
                            <Showcode
                                code='
import React, {useEffect, useMemo, useRef, useState} from "react";

// react icons
import {HiOutlineArrowsUpDown} from "react-icons/hi2";
import {BsChevronLeft, BsChevronRight, BsThreeDotsVertical} from "react-icons/bs";
import {MdDeleteOutline, MdOutlineEdit} from "react-icons/md";
import {IoEyeOutline} from "react-icons/io5";
import {IoIosArrowDown} from "react-icons/io";
import {BiSolidTrash} from "react-icons/bi";

const Table = () => {

    const initialData = Array.from({length: 35}, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
        role: index % 3 === 0 ? "Admin" : index % 2 === 0 ? "Editor" : "User",
        status: index % 2 === 0 ? "Active" : "Inactive"
    }));

    const [data, setData] = useState(initialData);
    const [search, setSearch] = useState("");
    const [sortConfig, setSortConfig] = useState({key: null, direction: "asc"});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);
    const [openActionMenuId, setOpenActionMenuId] = useState(null);

    // Handle search
    const filteredData = useMemo(() => {
        return data.filter(item =>
            Object.values(item).some(
                value => value.toString().toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [data, search]);

    // Handle sort
    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({key, direction});
    };

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;

        return [...filteredData].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? 1 : -1;
            }
            return 0;
        });
    }, [filteredData, sortConfig]);

    // Pagination calculations
    const totalPages = Math.ceil(sortedData.length / pageSize);

    const paginatedData = sortedData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const toggleActionMenu = (id) => {
        setOpenActionMenuId(openActionMenuId === id ? null : id);
    };

    const handlePageChange = (page) => {
        setCurrentPage(Math.min(Math.max(1, page), totalPages));
    };

    // Selection handlers
    const toggleAllInPage = (event) => {
        const newSelected = new Set(selectedRows);
        paginatedData.forEach(item => {
            if (event.target.checked) {
                newSelected.add(item.id);
            } else {
                newSelected.delete(item.id);
            }
        });
        setSelectedRows(newSelected);
    };

    const toggleRow = (id) => {
        const newSelected = new Set(selectedRows);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedRows(newSelected);
    };

    const isAllInPageSelected = paginatedData.every(item => selectedRows.has(item.id));

    const handleBulkDelete = () => {
        console.log("Deleting selected rows:", Array.from(selectedRows));
    };

    const handleOptionClick = (value) => {
        setPageSize(Number(value));
        setCurrentPage(1);
        setIsOpen(false);
    };

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleOutsideClick = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", ()=> {
            handleOutsideClick()
        });
    }, []);

    return (
        <div className="w-max mx-auto p-4">
            <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                    <input
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="max-w-sm py-2.5 px-4 border border-gray-200 rounded-md outline-none focus:border-blue-300"
                    />
                    {selectedRows.size > 0 && (
                        <button
                            onClick={handleBulkDelete}
                            className="flex items-center gap-2 text-red-500"
                        >
                            <BiSolidTrash className="h-4 w-4"/>
                            Delete Selected ({selectedRows.size})
                        </button>
                    )}
                </div>
            </div>

            <div className="rounded-md border border-gray-200 w-full">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 w-14">
                            <label className="flex items-center gap-[10px] cursor-pointer">
                                <input type="checkbox" checked={isAllInPageSelected} className="hidden"
                                       onChange={toggleAllInPage}/>
                                <div className="relative">
                                                            <span
                                                                className={`${isAllInPageSelected ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200 absolute top-0 left-0`}>
                                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Group 335">
                                                                <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05"
                                                                      width="20"
                                                                      height="20" rx="4" className="fill-[#3B9DF8]"
                                                                      stroke="#3B9DF8"></rect>
                                                                <path id="Vector"
                                                                      d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                                                      fill="white"></path>
                                                            </g>
                                                        </svg>
                                                    </span>

                                    <span
                                        className={`${!isAllInPageSelected ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200`}>
                                                    <svg width="18" height="18" viewBox="0 0 21 21" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Group 335">
                                                                <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05"
                                                                      width="20"
                                                                      height="20" rx="4" className="fill-transparent"
                                                                      stroke="#ccc"></rect>
                                                            </g>
                                                        </svg>
                                                </span>
                                </div>
                            </label>
                        </th>
                        {Object.keys(initialData[0]).map(key => (
                            key !== "id" && (
                                <th
                                    key={key}
                                    className="p-3 text-left font-medium text-gray-700 cursor-pointer"
                                    onClick={() => handleSort(key)}
                                >
                                    <div className="flex items-center gap-[5px]">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                        <HiOutlineArrowsUpDown
                                            className="hover:bg-gray-200 p-[5px] rounded-md text-[1.6rem]"/>
                                    </div>
                                </th>
                            )
                        ))}
                        <th className="p-3 text-left font-medium text-gray-700">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedData.map((item) => (
                        <tr
                            key={item.id}
                            className={`border-t border-gray-200 cursor-pointer ${
                                selectedRows.has(item.id) ? "bg-blue-50 hover:bg-blue-50" : "hover:bg-gray-50"
                            }`}
                        >
                            <td className="p-3">
                                <label className="flex items-center gap-[10px] cursor-pointer">
                                    <input type="checkbox" className="hidden"
                                           onChange={() => toggleRow(item.id)}/>
                                    <div className="relative">
                                                            <span
                                                                className={`${selectedRows.has(item.id) ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200 absolute top-0 left-0`}>
                                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Group 335">
                                                                <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05"
                                                                      width="20"
                                                                      height="20" rx="4" className="fill-[#3B9DF8]"
                                                                      stroke="#3B9DF8"></rect>
                                                                <path id="Vector"
                                                                      d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                                                      fill="white"></path>
                                                            </g>
                                                        </svg>
                                                    </span>

                                        <span
                                            className={`${!selectedRows.has(item.id) ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200`}>
                                                    <svg width="18" height="18" viewBox="0 0 21 21" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Group 335">
                                                                <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05"
                                                                      width="20"
                                                                      height="20" rx="4" className="fill-transparent"
                                                                      stroke="#ccc"></rect>
                                                            </g>
                                                        </svg>
                                                </span>
                                    </div>
                                </label>
                            </td>
                            {Object.entries(item).map(([key, value]) => (
                                key !== "id" && (
                                    <td key={key} className="p-3">
                                        {value}
                                    </td>
                                )
                            ))}
                            <td className="p-3 relative">
                                <BsThreeDotsVertical onClick={() => toggleActionMenu(item
                                    .id)} className="action-btn action-btn text-gray-600 cursor-pointer"/>

                                <div
                                    className={`${openActionMenuId === item.id ? "opacity-100 scale-[1] z-30" : "opacity-0 scale-[0.8] z-[-1]"} zenui-table absolute top-[90%] right-[80%] p-1.5 rounded-md bg-white shadow-md min-w-[160px] transition-all duration-100`}>
                                    <p className="flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                                        <MdOutlineEdit/>
                                        Edit
                                    </p>
                                    <p className="flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                                        <MdDeleteOutline/>
                                        Delete
                                    </p>
                                    <p className="flex items-center gap-[8px] text-[0.9rem] py-1.5 px-2 w-full rounded-md text-gray-700 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                                        <IoEyeOutline/>
                                        View Details
                                    </p>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {
                    !paginatedData?.length && (
                        <p className="text-[0.9rem] text-gray-500 py-6 text-center w-full">No data
                            found!
                        </p>
                    )
                }
            </div>

            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-[5px]">
                    <div className="text-sm text-gray-500">
                        Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} results
                    </div>

                    <div ref={selectRef} className="relative w-44">
                        <button
                            onClick={handleToggle}
                            className="w-max px-2 py-0.5 text-left bg-white border border-gray-300 rounded shadow-sm flex items-center justify-between gap-[10px] hover:border-gray-400 focus:outline-none"
                        >
                            {pageSize}

                            <IoIosArrowDown
                                className={`${isOpen ? "rotate-[180deg]" : "rotate-0"} transition-all duration-200`}/>
                        </button>
                        {isOpen && (
                            <div
                                className="absolute w-max mt-1 bg-white border border-gray-300 rounded shadow-lg">
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleOptionClick(5)}
                                >
                                    5
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleOptionClick(10)}
                                >
                                    10
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleOptionClick(20)}
                                >
                                    20
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleOptionClick(50)}
                                >
                                    50
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border border-gray-200 hover:bg-gray-50 cursor-pointer px-[10px] text-[0.9rem] py-[5px] rounded-md"
                    >
                        <BsChevronLeft/>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                        {Array.from({length: Math.min(5, totalPages)}, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                                pageNum = i + 1;
                            } else if (currentPage <= 3) {
                                pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }

                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => handlePageChange(pageNum)}
                                    className={`${pageNum === currentPage && "bg-black text-white"} border border-gray-200 px-[10px] text-[0.9rem] py-[1px] rounded-md`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="border border-gray-200 px-[10px] cursor-pointer hover:bg-gray-50 text-[0.9rem] py-[5px] rounded-md"
                    >
                        <BsChevronRight/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
          '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/badge' backName='badge' forwardName='tooltip'
                                    forwardUrl='/components/tooltip'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[48%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#searchable_table"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Searchable Table
                    </a>
                    <a
                        href="#pagination_table"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Pagination Table
                    </a>
                    <a
                        href="#checkbox_table"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        Checkbox Table
                    </a>
                </div>
            </aside>
            <Helmet>
                <title>Data Display - Table</title>
            </Helmet>
        </>
    );
};

export default Table;
