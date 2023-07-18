import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import {useForm} from 'react-hook-form' ;
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  categoryName: yup.string().required("Category Name is requird"),
  description: yup.string().required("Add Some Description Of Category"),
}).required();

const AddCategory = () => {

  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false); // drag and drop state
  const {register , handleSubmit , formState:{errors}} = useForm({ resolver: yupResolver(schema)});



  
  //--------------------------------------------------------
  // Drag And Drop All Methods
  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

 
  // End of Drag And Drop All Methods    
  //--------------------------------------------------------


  const onSubmit = (data) =>{

    const formData = new FormData();

    formData.append('categoryName', data.categoryName);
    formData.append('parentCategory' , selectedCat);
    formData.append('description' , data.description)
    formData.append('image' , selectedFile)
     console.log(data , selectedCat , selectedFile);
  }
  const cities = [
    { name: "New York"},
    { name: "Rome" },
    { name: "London"},
    { name: "Istanbul"},
    { name: "Paris"},
  ];
  return (
    <>
      <form className="body-bg p-card border-1 border-clr border-round-lg p-3" onSubmit={handleSubmit(onSubmit)}>

       
        <div className="grid">
        <div className="col-12 mb-2 secondary-text fs-20 fw-500 ">
            Add New Category
        </div>
          <div className="col-6">
            <div className="my-2">
                <label htmlFor="categoryName" className="light-text fs-12 fw-400">Category Name*</label>
              <input
                type="text"
                placeholder="Category Name"
                name="categoryName"
                {...register("categoryName")}
                id="categoryName"
                autoComplete="off"
                className={`p-inputtext p-component w-full mt-1 `}
              />
               <small className="danger-text ">{errors.categoryName?.message}</small>
            </div>
          </div>
          <div className="col-6">
            <div className="my-2">
            <label htmlFor="parantCategory"className="light-text fs-12 fw-400" >SubCategory Of</label>
              <Dropdown
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.value.name)}
                options={cities}
                optionLabel="name"
                id="parantCategory"
                placeholder="Select a City"
                className="w-full mt-1"
              />
            </div>
          </div>

          <div className="col-6 h-full">
          <label htmlFor="description"className="light-text fs-12 fw-400" >Description</label>
            <textarea
              id="description"
              {...register("description")}
              name="description"
              rows="7"
              className="w-full textareaLg mt-1"
            />
             <small className="danger-text">{errors.description?.message}</small>
          </div>

          <div className="col-6 h-full">
          <label htmlFor="file-uploader"className="light-text fs-12 fw-400" >Upload Image</label>
            <div
            id="file-uploader"
              className={`file-uploader mt-1 text-center border-round-lg border-dashed border-1  border-clr  h-full${dragging ? "dragging" : ""}`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver} 
              onDrop={handleDrop}
            >
              {selectedFile ? (
                <div className="selected-file flex justify-content-between lightInfo-bg py-3 px-3 border-round-lg align-items-center my-5 mx-1">
                  <span className="file-name fs-18 fw-500 info-text">{selectedFile.name}</span>
                  <span className="remove-file danger-text pointer" onClick={handleFileRemove}>
                    &#x2715;
                  </span>
                </div>
              ) : (
                <>
                  <label htmlFor="file-upload-input" className="flex flex-column pointer justify-content-center">
                  <div className="drag-text fs-20 fw-500 secondary-text mt-2"> Drag And Drop Here</div>
                  <div className="my-2 fs-14 fw-400 py-1 secondary-text">OR</div>
                    <div className="upload-button primary-btn">Choose File</div>
                  
                  </label>
                  <input
                    type="file"
                    id="file-upload-input"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </>
              )}
            </div>

            {/* <FileUpload  name="file" customUpload={true} uploadHandler={onFileUpload} auto /> */}
          </div>

          <div className="col-12 flex  mt-4 mb-3">
            <button className="btn primary-btn px-5 mr-3 light-text fs-16 border-round-lg p-ripple" type="submit">Submit </button>
            <button className="btn dark-btn px-5 light-text fs-16 border-round-lg p-ripple" type="reset">Reset </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCategory;
