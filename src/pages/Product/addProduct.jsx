import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Editor } from "primereact/editor";

const AddProduct = () => {

    // Product Variation State
    const [variations, setVariations] = useState([
        { colorName: "", sizes: [{ sizeName: "", sizePrice: "" ,sizeQty:'' }] },
      ]);
      //End Of Product Variation State



  const [selectedCities, setSelectedCities] = useState(null);
  const [text, setText] = useState("");

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];


  // Product Variation Methods


  const handleColorNameChange = (index, e) => {
    const updatedVariations = [...variations];
    updatedVariations[index].colorName = e.target.value;
    setVariations(updatedVariations);
  };

  const handleSizeChange = (variationIndex, sizeIndex, e) => {
    const {name , value} = e.target;
    const updatedVariations = [...variations];
    if(name === 'sizeName'){
    updatedVariations[variationIndex].sizes[sizeIndex].sizeName = value;
    }
    else if(name === 'sizePrice'){
      updatedVariations[variationIndex].sizes[sizeIndex].sizePrice =value;
    }
    else if(name === 'sizeQty'){
      updatedVariations[variationIndex].sizes[sizeIndex].sizeQty =value;
    }
    setVariations(updatedVariations);
  };

  
  const handleAddSize = (variationIndex) => {
    const updatedVariations = [...variations];
    updatedVariations[variationIndex].sizes.push({
      sizeName: "",
      sizePrice: "",
      sizeQty:"",
    });
    setVariations(updatedVariations);
  };

  const handleAddVariation = () => {
    setVariations([
      ...variations,
      { colorName: "", sizes: [{ sizeName: "",sizeQty:"" ,  sizePrice: "" }] },
    ]);
  };

  const handleRemoveVariation = (index) => {
    const updatedVariations = [...variations];
    updatedVariations.splice(index, 1);
    setVariations(updatedVariations);
  };

  const handleRemoveSize = (variationIndex, sizeIndex) => {
    const updatedVariations = [...variations];
    updatedVariations[variationIndex].sizes.splice(sizeIndex, 1);
    setVariations(updatedVariations);
  };

  // end Product Variation Methods

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(variations);
    // You can perform further actions with the variations data, such as sending it to an API or processing it.
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-card body-bg border-1 border-round-lg border-clr p-2">
        <div className="grid">
          <div className="col-12 mb-2 secondary-text fs-20 fw-500 ">
            Add New Product
          </div>
          <div className="col-6">
            <div className="my-2">
              <label htmlFor="prodName" className="light-text fs-12 fw-400">
                Product Name*
              </label>
              <input
                type="text"
                placeholder="Product Name"
                name="productName"
                id="prodName"
                autoComplete="off"
                className="p-inputtext p-component w-full mt-1"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="my-2">
              <label htmlFor="prodSlug" className="light-text fs-12 fw-400">
                Product Slug*
              </label>
              <input
                type="text"
                placeholder="Product Slug"
                name="productSlug"
                id="prodSlug"
                autoComplete="off"
                className="p-inputtext p-component w-full mt-1"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="my-2">
              <label htmlFor="price" className="light-text fs-12 fw-400">
                Regular Price*
              </label>
              <input
                type="text"
                placeholder="Regular Price"
                name="regularPrice"
                id="price"
                autoComplete="off"
                className="p-inputtext p-component w-full mt-1"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="my-2">
              <label htmlFor="salePrice" className="light-text fs-12 fw-400">
                Sale Price
              </label>
              <input
                type="text"
                placeholder="Sale Price"
                name="salePrice"
                id="salePrice"
                autoComplete="off"
                className="p-inputtext p-component w-full mt-1"
              />
            </div>
          </div>

          <div className="col-6">
            <div className="my-2">
              <label
                htmlFor="parantCategory"
                className="light-text fs-12 fw-400"
              >
                SubCategory Of
              </label>

              <MultiSelect
                value={selectedCities}
                onChange={(e) => setSelectedCities(e.value)}
                options={cities}
                optionLabel="name"
                display="chip"
                placeholder="Select Cities"
                maxSelectedLabels={3}
                className="w-full mt-1"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="my-2">
              <label htmlFor="prodWeight" className="light-text fs-12 fw-400">
                Product Weight
              </label>
              <input
                type="text"
                placeholder="Product Weight"
                name="prodWeight"
                id="prodWeight"
                autoComplete="off"
                className="p-inputtext p-component w-full mt-1"
              />
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="desc" className="light-text fs-12 fw-400">
              Description
            </label>
            <Editor
              id="desc"
              value={text}
              onTextChange={(e) => setText(e.htmlValue)}
              style={{ height: "320px" }}
              className="mt-1"
            />
          </div>

          <div className="col-12">
            <label htmlFor="shortDesc" className="light-text fs-12 fw-400">
              Short Description
            </label>
            <textarea
              id="shortDesc"
              name="shortDesc"
              rows="2"
              className="w-full textareaLg mt-1"
            />
          </div>

          <div className="col-12 my-3 secondary-text fs-20 fw-500 ">
            Additional Information
          </div>

          <div className="col-6">
            <div className="my-2">
              <label
                htmlFor="parantCategory"
                className="light-text fs-12 fw-400"
              >
                Select Attributes
              </label>

              <MultiSelect
                value={selectedCities}
                onChange={(e) => setSelectedCities(e.value)}
                options={cities}
                optionLabel="name"
                display="chip"
                placeholder="Select Cities"
                maxSelectedLabels={3}
                className="w-full mt-1"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="my-2">
              <label
                htmlFor="parantCategory"
                className="light-text fs-12 fw-400"
              >
                Select Tags
              </label>

              <MultiSelect
                value={selectedCities}
                onChange={(e) => setSelectedCities(e.value)}
                options={cities}
                optionLabel="name"
                display="chip"
                placeholder="Select Cities"
                maxSelectedLabels={3}
                className="w-full mt-1"
              />
            </div>
          </div>

          <div className="col-12 my-3 secondary-text fs-20 fw-500 ">
            Product Variations
          </div>

          {variations.map((variation, variationIndex) => (
          <div className="w-full" key={variationIndex}>
            <div className="col-12">
              <div className="my-2">
                <label htmlFor="clrName" className="light-text fs-12 fw-400">
                  Color Name
                </label>
                <input
                  type="text"
                  placeholder="Color Name"
                  name="colorName"
                  id="clrName"
                  value={variation.colorName}
                  onChange={(e) => handleColorNameChange(variationIndex, e)}
                  autoComplete="off"
                  className="p-inputtext p-component w-full mt-1"
                />
              </div>
            </div>

            {variation.sizes.map((size, sizeIndex) => (
              <div className="grid" key={sizeIndex}>
                <div className="col-4">
                  <div className="my-2">
                    <label
                      htmlFor="sizeName"
                      className="light-text fs-12 fw-400"
                    >
                      Size Name
                    </label>
                    <input
                      type="text"
                      placeholder="Size Name"
                      name="sizeName"
                      id="sizeName"
                      value={size.sizeName}
                      onChange={(e) =>
                        handleSizeChange(variationIndex, sizeIndex, e)
                      }
                      autoComplete="off"
                      className="p-inputtext p-component w-full mt-1"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="my-2">
                    <label
                      htmlFor="sizeQty"
                      className="light-text fs-12 fw-400"
                    >
                      Size Qty
                    </label>
                    <input
                      type="text"
                      placeholder="Size Qty"
                      name="sizeQty"
                      id="sizeQty"
                      onChange={(e) =>
                        handleSizeChange(variationIndex, sizeIndex, e)
                      }
                      autoComplete="off"
                      className="p-inputtext p-component w-full mt-1"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="my-2">
                    <label
                      htmlFor="sizePrice"
                      className="light-text fs-12 fw-400"
                    >
                      Size Price
                    </label>
                    <input
                      type="text"
                      placeholder="Size Price"
                      name="sizePrice"
                      id="sizePrice"
                      value={size.sizePrice}
                      onChange={(e) =>
                        handleSizeChange(variationIndex, sizeIndex, e)
                      }
                      autoComplete="off"
                      className="p-inputtext p-component w-full mt-1"
                    />
                  </div>
                </div>
                <div className="flex justify-content-end w-full">
                <button
                  type="button"
                  className="btn danger-btn text-white px-3 border-round-lg"
                  onClick={() => handleRemoveSize(variationIndex, sizeIndex)}
                >
                  Remove Size
                </button>
                </div>
              
              </div>
            ))}
            <div>
            <div className="flex justify-content-end">
            <button  className="btn info-btn  text-white my-2  border-round-lg" style={{padding:"6px 30px"}} type="button" onClick={() => handleAddSize(variationIndex)}>
              Add Size
            </button>
            </div>
            </div>
            

            {variationIndex > 0 && (
              <button
                type="button"
                className="btn danger-btn text-white border-round-lg px-3 "
                onClick={() => handleRemoveVariation(variationIndex)}
              >
                Remove Variation
              </button>
            )}
           
          
          </div>
        ))}
        <div className="flex flex-column w-full">
          <div className="flex justify-content-end w-full">
          <button type="button" className="btn warning-btn border-round-lg text-white px-3" onClick={handleAddVariation}>
          Add Variation
        </button>
          </div>
       

        <div className="mt-4">
        <button type="button" className="btn primary-btn text-white border-round-lg px-3 py-2 fs-16  fs-500" onClick={handleSubmit }>
          Add Product 
        </button>

        <button type="button" className="btn dark-btn text-white border-round-lg px-4 ml-3 py-2 fs-16  fs-500" onClick={handleSubmit }>
          Reset
        </button>

        
        </div>
       
        </div>
        

      
       
        
      
        </div>
      </form>

    </>
  );
};

export default AddProduct;
