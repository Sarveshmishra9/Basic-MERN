
// frontend/components/enquiry/EnquiryList.jsx
import React from 'react';
import { Table } from "flowbite-react";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function EnquiryList({ data, getAllenquiry, Swal, setFormData, setEditId }) {

  let deleteRow = (delid) => {
    Swal.fire({
      title: "Do you want to delete this enquiry?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8020/api/website/enquiry/delete/${delid}`)
          .then(() => {
            toast.success('Enquiry deleted successfully');
            getAllenquiry();
          })
          .catch(() => toast.error('Error deleting enquiry'));
      }
    });
  };

  let editRow = (item) => {
    setFormData({ name: item.name, email: item.email, phone: item.phone, message: item.message });
    setEditId(item._id);
  };

  return (
    <div className='bg-gray-200 p-6'>
      <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Sr No</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Message</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
              data.length >= 1 ?
                data.map((item, index) => (
                  <Table.Row key={index} className="bg-white">
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.phone}</Table.Cell>
                    <Table.Cell>{item.message}</Table.Cell>
                    <Table.Cell>
                      <button onClick={() => deleteRow(item._id)} className="bg-red-500 text-white px-4 py-1 rounded-md">
                        Delete
                      </button>
                    </Table.Cell>
                    <Table.Cell>
                      <button onClick={() => editRow(item)} className="bg-blue-500 text-white px-4 py-1 rounded-md">
                        Edit
                      </button>
                    </Table.Cell>
                  </Table.Row>
                )) :
                <Table.Row className="bg-white">
                  <Table.Cell colSpan={7} className="text-center text-gray-500">No data available</Table.Cell>
                </Table.Row>
            }
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}



// // enquiry/EnquiryList.jsx
// import React from 'react';
// import { Table } from "flowbite-react";
// import axios from 'axios';
// import { ToastContainer } from 'react-toastify';

// export default function EnquiryList({ data , getAllenquiry,Swal}) {
//   let deleteRow=(delid)=>{

//     Swal.fire({
//         title: "Do you want to save the changes?",
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: "Save",
//       }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//       if (result.isConfirmed) {
//         axios.delete(`http://localhost:8020/api/website/enquiry/delete/${delid}`)
//     .then((res)=>{
//       toast.success('Enquiry delete successfully')
//       getAllenquiry()
//        })

//         Swal.fire("Saved!", "", "success");
//       } else if (result.isDenied) {
//         Swal.fire("Changes are not saved", "", "info");
//     }
// });
    
//   }
//   return (
//     <div className='bg-gray-200 p-6'>
  
//       <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>
//       <div className="overflow-x-auto">
//         <Table>
//           <Table.Head>
//             <Table.HeadCell>Sr No</Table.HeadCell>
//             <Table.HeadCell>Name</Table.HeadCell>
//             <Table.HeadCell>Email</Table.HeadCell>
//             <Table.HeadCell>Phone</Table.HeadCell>
//             <Table.HeadCell>Message</Table.HeadCell>
//             <Table.HeadCell>Delete</Table.HeadCell>
//             <Table.HeadCell>Edit</Table.HeadCell>
//           </Table.Head>

//           <Table.Body className="divide-y">
//             {
//               data.length >= 1 ?
//                 data.map((item, index) => (
//                   <Table.Row
//                     key={index}
//                     className="bg-white dark:border-gray-700 dark:bg-gray-800"
//                   >
//                     <Table.Cell >
//                       {index + 1}
//                     </Table.Cell>
//                     <Table.Cell>{item.name}</Table.Cell>
//                     <Table.Cell>{item.email}</Table.Cell>
//                     <Table.Cell>{item.phone}</Table.Cell>
//                     <Table.Cell>{item.message}</Table.Cell>
//                     <Table.Cell>
//                       <button onClick={()=>deleteRow(item._id)} className="bg-red-500 text-white px-4 py-1 rounded-md">
//                         Delete
//                       </button>
//                     </Table.Cell>
//                     <Table.Cell>
//                       <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
//                         Edit
//                       </button>
//                     </Table.Cell>
//                   </Table.Row>
//                 )) :
//                 <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                   <Table.Cell colSpan={7} className="text-center text-gray-500">
//                     No data available
//                   </Table.Cell>
//                 </Table.Row>
//             }
//           </Table.Body>
//         </Table>
//       </div>
//     </div>
//   );
// }










// // // enquiry/EnquiryList.jsx
// // import React from 'react';
// // import { Table } from "flowbite-react";

// // export default function EnquiryList({data}) {
// //   return (
// //     <div className='bg-gray-200 p-6'>
// //       <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>
// //       <div className="overflow-x-auto">
// //         <Table>
// //           <Table.Head>
// //             <Table.HeadCell>Sr No</Table.HeadCell>
// //             <Table.HeadCell>Name</Table.HeadCell>
// //             <Table.HeadCell>Email</Table.HeadCell>
// //             <Table.HeadCell>Phone</Table.HeadCell>
// //             <Table.HeadCell>Message</Table.HeadCell>
// //             <Table.HeadCell>Delete</Table.HeadCell>
// //             <Table.HeadCell>Edit</Table.HeadCell>
// //           </Table.Head>
           
// //           <Table.Body className="divide-y">
// //             <Table.Row className="bg-white">
// //               <Table.Cell className="font-medium text-gray-900">1</Table.Cell>
// //               <Table.Cell>Ws</Table.Cell>
// //               <Table.Cell>ws@gmail.com</Table.Cell>
// //               <Table.Cell>23423423</Table.Cell>
// //               <Table.Cell>hello</Table.Cell>
// //               <Table.Cell>
// //                 <span className="text-blue-600 hover:underline cursor-pointer">Delete</span>
// //               </Table.Cell>
// //               <Table.Cell>
// //                 <span className="text-blue-600 hover:underline cursor-pointer">Edit</span>
// //               </Table.Cell>
// //             </Table.Row>
// //           </Table.Body>
// //         </Table>
// //       </div>
// //     </div>
// //   );
// // }



