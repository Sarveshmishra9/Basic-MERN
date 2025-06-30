// frontend/components/Enquiry.jsx
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import EnquiryList from './enquiry/EnquiryList';

export default function Enquiry() {
  let [enquiryList, setEnquiryList] = useState([]);
  let [editId, setEditId] = useState(null);

  let [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const saveEnquiry = (e) => {
    e.preventDefault();

    if (editId) {
      axios.put(`http://localhost:8020/api/website/enquiry/update/${editId}`, formData)
        .then(() => {
          toast.success('Enquiry updated successfully');
          resetForm();
          getAllenquiry();
        }).catch(() => toast.error('Error updating enquiry'));
    } else {
      axios.post(`http://localhost:8020/api/website/enquiry/insert`, formData)
        .then(() => {
          toast.success('Enquiry saved successfully');
          resetForm();
          getAllenquiry();
        }).catch(() => toast.error('Error saving enquiry'));
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setEditId(null);
  };

  let getAllenquiry = () => {
    axios.get(`http://localhost:8020/api/website/enquiry/view`)
      .then((res) => res.data)
      .then((finalData) => {
        if (finalData.status) {
          setEnquiryList(finalData.enquiryList);
        }
      }).catch(() => toast.error('Error fetching enquiries'));
  };

  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setFormData(prev => ({ ...prev, [inputName]: inputValue }));
  };

  useEffect(() => {
    getAllenquiry();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <ToastContainer />
      <h1 className='text-[40px] text-center py-6 font-bold'>User Enquiry</h1>

      <div className='grid grid-cols-[30%_auto] gap-10'>
        <div className='bg-gray-200 p-6 '>
          <h2 className='text-[20px] font-bold mb-4'>Enquiry Form</h2>
          <form onSubmit={saveEnquiry}>
            <div className='py-2'>
              <Label htmlFor="name" value="Your Name" />
              <TextInput type="text" value={formData.name} onChange={getValue} name="name" placeholder="Enter Your Name" required />
            </div>
            <div className='py-2'>
              <Label htmlFor="email" value="Your Email" />
              <TextInput type="email" value={formData.email} onChange={getValue} name="email" placeholder="Enter Your Email" required />
            </div>
            <div className='py-2'>
              <Label htmlFor="phone" value="Your Phone" />
              <TextInput type="text" value={formData.phone} onChange={getValue} name="phone" placeholder="Enter Your Phone" required />
            </div>
            <div className='py-2'>
              <Label htmlFor="message" value="Your Message" />
              <Textarea name="message" value={formData.message} onChange={getValue} placeholder="Message..." required rows={4} />
            </div>
            <div className='pt-4'>
              <Button type="submit" className='w-full'>{editId ? 'Update' : 'Save'}</Button>
            </div>
          </form>
        </div>

        <EnquiryList data={enquiryList} getAllenquiry={getAllenquiry} Swal={Swal} setFormData={setFormData} setEditId={setEditId} />
      </div>
    </div>
  );
}


