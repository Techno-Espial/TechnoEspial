// import { useState } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaCheck } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import Swal from "sweetalert2";

// const AllStudents = () => {
//     const [isChecked, setIsChecked] = useState(true); // Shows FaCheck initially
//     const [isOptionsVisible, setIsOptionsVisible] = useState(false); // Controls BsThreeDotsVertical visibility
//     const [isBanned, setIsBanned] = useState(false); // Controls ImCross visibility

//     const handleCheckClick = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You want to give access to this student!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 setIsChecked(false);
//                 setIsOptionsVisible(true);
//                 Swal.fire({
//                     title: "Granted!",
//                     text: "The student has been granted.",
//                     icon: "success"
//                 });
//             }
//         });
//     };

//     const handleBanClick = () => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You want to ban this student!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#d33",
//             cancelButtonColor: "#3085d6",
//             confirmButtonText: "Yes!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 setIsOptionsVisible(false);
//                 setIsBanned(true);
//                 Swal.fire({
//                     title: "Banned!",
//                     text: "The student has been banned.",
//                     icon: "success"
//                 });
//             }
//         });
//     };

//     const handleCrossClick = () => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You want to give access again to this student!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 setIsBanned(false);
//                 setIsChecked(true);
//                 Swal.fire({
//                     title: "Granted!",
//                     text: "The student has been granted again.",
//                     icon: "success"
//                 });
//             }
//         });
//     };

//     return (
//         <div>
//             <div className="container mx-auto">
//                 <p className="text-4xl font-bold text-center py-8 text-white">All Courses</p>
//                 <div>
//                     <table className="w-[1000px] text-center previewTable mx-auto border mb-20 text-white">
//                         <thead>
//                             <tr>
//                                 <th className="text-2xl py-4">Name</th>
//                                 <th className="text-2xl py-4">Email</th>
//                                 <th className="text-2xl py-4">TrxID</th>
//                                 <th className="text-2xl py-4">Options</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr className="border">
//                                 <td className="text-xl p-4">John Tison</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">
//                                     <div className="dropdown text-3xl">
//                                         {/* FaCheck Icon */}
//                                         {isChecked && (
//                                             <FaCheck
//                                                 className="text-green-500 cursor-pointer"
//                                                 onClick={handleCheckClick}
//                                             />
//                                         )}

//                                         {/* BsThreeDotsVertical Icon */}
//                                         {isOptionsVisible && (
//                                             <BsThreeDotsVertical
//                                                 tabIndex={0}
//                                                 role="button"
//                                                 className="m-1 cursor-pointer"
//                                             />
//                                         )}

//                                         {/* ImCross Icon */}
//                                         {isBanned && (
//                                             <ImCross
//                                                 className="text-red-500 cursor-pointer"
//                                                 onClick={handleCrossClick}
//                                             />
//                                         )}

//                                         {/* Dropdown Menu */}
//                                         {isOptionsVisible && (
//                                             <ul
//                                                 tabIndex={0}
//                                                 className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg"
//                                             >
//                                                 <li><a>View Profile</a></li>
//                                                 <li><a>Send Notification</a></li>
//                                                 <li><a onClick={handleBanClick}>Ban From Course</a></li>
//                                             </ul>
//                                         )}
//                                     </div>
//                                 </td>
//                             </tr>
//                             <tr className="border">
//                                 <td className="text-xl p-4">John Tison</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">
//                                     <div className="dropdown text-3xl">
//                                         {/* FaCheck Icon */}
//                                         {isChecked && (
//                                             <FaCheck
//                                                 className="text-green-500 cursor-pointer"
//                                                 onClick={handleCheckClick}
//                                             />
//                                         )}

//                                         {/* BsThreeDotsVertical Icon */}
//                                         {isOptionsVisible && (
//                                             <BsThreeDotsVertical
//                                                 tabIndex={0}
//                                                 role="button"
//                                                 className="m-1 cursor-pointer"
//                                             />
//                                         )}

//                                         {/* ImCross Icon */}
//                                         {isBanned && (
//                                             <ImCross
//                                                 className="text-red-500 cursor-pointer"
//                                                 onClick={handleCrossClick}
//                                             />
//                                         )}

//                                         {/* Dropdown Menu */}
//                                         {isOptionsVisible && (
//                                             <ul
//                                                 tabIndex={0}
//                                                 className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg"
//                                             >
//                                                 <li><a>View Profile</a></li>
//                                                 <li><a>Send Notification</a></li>
//                                                 <li><a onClick={handleBanClick}>Ban From Course</a></li>
//                                             </ul>
//                                         )}
//                                     </div>
//                                 </td>
//                             </tr>
//                             <tr className="border">
//                                 <td className="text-xl p-4">John Tison</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">
//                                     <div className="dropdown text-3xl">
//                                         {/* FaCheck Icon */}
//                                         {isChecked && (
//                                             <FaCheck
//                                                 className="text-green-500 cursor-pointer"
//                                                 onClick={handleCheckClick}
//                                             />
//                                         )}

//                                         {/* BsThreeDotsVertical Icon */}
//                                         {isOptionsVisible && (
//                                             <BsThreeDotsVertical
//                                                 tabIndex={0}
//                                                 role="button"
//                                                 className="m-1 cursor-pointer"
//                                             />
//                                         )}

//                                         {/* ImCross Icon */}
//                                         {isBanned && (
//                                             <ImCross
//                                                 className="text-red-500 cursor-pointer"
//                                                 onClick={handleCrossClick}
//                                             />
//                                         )}

//                                         {/* Dropdown Menu */}
//                                         {isOptionsVisible && (
//                                             <ul
//                                                 tabIndex={0}
//                                                 className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg"
//                                             >
//                                                 <li><a>View Profile</a></li>
//                                                 <li><a>Send Notification</a></li>
//                                                 <li><a onClick={handleBanClick}>Ban From Course</a></li>
//                                             </ul>
//                                         )}
//                                     </div>
//                                 </td>
//                             </tr>
//                             <tr className="border">
//                                 <td className="text-xl p-4">John Tison</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">
//                                     <div className="dropdown text-3xl">
//                                         {/* FaCheck Icon */}
//                                         {isChecked && (
//                                             <FaCheck
//                                                 className="text-green-500 cursor-pointer"
//                                                 onClick={handleCheckClick}
//                                             />
//                                         )}

//                                         {/* BsThreeDotsVertical Icon */}
//                                         {isOptionsVisible && (
//                                             <BsThreeDotsVertical
//                                                 tabIndex={0}
//                                                 role="button"
//                                                 className="m-1 cursor-pointer"
//                                             />
//                                         )}

//                                         {/* ImCross Icon */}
//                                         {isBanned && (
//                                             <ImCross
//                                                 className="text-red-500 cursor-pointer"
//                                                 onClick={handleCrossClick}
//                                             />
//                                         )}

//                                         {/* Dropdown Menu */}
//                                         {isOptionsVisible && (
//                                             <ul
//                                                 tabIndex={0}
//                                                 className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg"
//                                             >
//                                                 <li><a>View Profile</a></li>
//                                                 <li><a>Send Notification</a></li>
//                                                 <li><a onClick={handleBanClick}>Ban From Course</a></li>
//                                             </ul>
//                                         )}
//                                     </div>
//                                 </td>
//                             </tr>
//                             <tr className="border">
//                                 <td className="text-xl p-4">John Tison</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">Course title</td>
//                                 <td className="text-xl p-4">
//                                     <div className="dropdown text-3xl">
//                                         {/* FaCheck Icon */}
//                                         {isChecked && (
//                                             <FaCheck
//                                                 className="text-green-500 cursor-pointer"
//                                                 onClick={handleCheckClick}
//                                             />
//                                         )}

//                                         {/* BsThreeDotsVertical Icon */}
//                                         {isOptionsVisible && (
//                                             <BsThreeDotsVertical
//                                                 tabIndex={0}
//                                                 role="button"
//                                                 className="m-1 cursor-pointer"
//                                             />
//                                         )}

//                                         {/* ImCross Icon */}
//                                         {isBanned && (
//                                             <ImCross
//                                                 className="text-red-500 cursor-pointer"
//                                                 onClick={handleCrossClick}
//                                             />
//                                         )}

//                                         {/* Dropdown Menu */}
//                                         {isOptionsVisible && (
//                                             <ul
//                                                 tabIndex={0}
//                                                 className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg"
//                                             >
//                                                 <li><a>View Profile</a></li>
//                                                 <li><a>Send Notification</a></li>
//                                                 <li><a onClick={handleBanClick}>Ban From Course</a></li>
//                                             </ul>
//                                         )}
//                                     </div>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllStudents;

import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";

const AllStudents = () => {
    // Example data for students
    const initialStudents = [
        { id: 1, name: 'John Tison', email: 'john@example.com', trxId: '12345', isChecked: true, isOptionsVisible: false, isBanned: false },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', trxId: '67890', isChecked: true, isOptionsVisible: false, isBanned: false },
        { id: 3, name: 'Michael Smith', email: 'michael@example.com', trxId: '111213', isChecked: true, isOptionsVisible: false, isBanned: false },
    ];

    const [students, setStudents] = useState(initialStudents);

    const handleCheckClick = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to give access to this student!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                setStudents(students.map(student => 
                    student.id === id 
                        ? { ...student, isChecked: false, isOptionsVisible: true }
                        : student
                ));
                Swal.fire({
                    title: "Granted!",
                    text: "The student has been granted.",
                    icon: "success"
                });
            }
        });
    };

    const handleBanClick = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to ban this student!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                setStudents(students.map(student => 
                    student.id === id 
                        ? { ...student, isOptionsVisible: false, isBanned: true }
                        : student
                ));
                Swal.fire({
                    title: "Banned!",
                    text: "The student has been banned.",
                    icon: "success"
                });
            }
        });
    };

    const handleCrossClick = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to give access again to this student!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                setStudents(students.map(student => 
                    student.id === id 
                        ? { ...student, isBanned: false, isChecked: true }
                        : student
                ));
                Swal.fire({
                    title: "Granted!",
                    text: "The student has been granted again.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div>
            <div className="container mx-auto">
                <p className="text-4xl font-bold text-center py-8 text-white">All Courses</p>
                <div>
                    <table className="w-[1000px] text-center previewTable mx-auto border mb-20 text-white">
                        <thead>
                            <tr>
                                <th className="text-2xl py-4">Name</th>
                                <th className="text-2xl py-4">Email</th>
                                <th className="text-2xl py-4">TrxID</th>
                                <th className="text-2xl py-4">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="border">
                                    <td className="text-xl p-4">{student.name}</td>
                                    <td className="text-xl p-4">{student.email}</td>
                                    <td className="text-xl p-4">{student.trxId}</td>
                                    <td className="text-xl p-4">
                                        <div className="dropdown text-3xl">
                                            {/* FaCheck Icon */}
                                            {student.isChecked && (
                                                <FaCheck
                                                    className="text-green-500 cursor-pointer"
                                                    onClick={() => handleCheckClick(student.id)}
                                                />
                                            )}

                                            {/* BsThreeDotsVertical Icon */}
                                            {student.isOptionsVisible && (
                                                <BsThreeDotsVertical
                                                    tabIndex={0}
                                                    role="button"
                                                    className="m-1 cursor-pointer"
                                                />
                                            )}

                                            {/* ImCross Icon */}
                                            {student.isBanned && (
                                                <ImCross
                                                    className="text-red-500 cursor-pointer"
                                                    onClick={() => handleCrossClick(student.id)}
                                                />
                                            )}

                                            {/* Dropdown Menu */}
                                            {student.isOptionsVisible && (
                                                <ul
                                                    tabIndex={0}
                                                    className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg"
                                                >
                                                    <li><a>View Profile</a></li>
                                                    <li><a>Send Notification</a></li>
                                                    <li><a onClick={() => handleBanClick(student.id)}>Ban From Course</a></li>
                                                </ul>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllStudents;