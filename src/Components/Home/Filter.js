import React,{useEffect, useState} from 'react'
import FilterModal from './FilterModal';
import { useDispatch } from 'react-redux';
import { getAllProperties } from '../../Store/Property/property-action';
import { propertyAction } from '../../Store/Property/property-slice';

const Filter = () => {
  //state for controlling model visibility
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [selectedFilters,setSelectedFilters] = useState({});
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(propertyAction.updateSearchParams(selectedFilters));
    dispatch(getAllProperties());
  },[selectedFilters,dispatch]);
  //function to handle opening to model
  const handleOpenModal = ()=>{
    setIsModalOpen(true);//sets isModalOpen to true to open the modal
  }
  const handleCloseModal=()=>{
    setIsModalOpen(false);
  }
  //function to handle changes in filter
  const handleFilterChange =(filterName,value)=>{
    setSelectedFilters((prevFilters)=>({
      ...prevFilters,
      [filterName]:value,
    }));
  };
  return (
    <>
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>tune</span>
      {isModalOpen && (<FilterModal 
      selectedFilters={selectedFilters}
      onFilterChange={handleFilterChange}
      onClose={handleCloseModal}

      />
      )}
    </>
  );
};

export default Filter;