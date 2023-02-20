import Dropdown from '../components/Dropdown';
import {useState} from 'react';
function DropdownPage() {
  const options = [
    {label:'Red',value:'red'},
    {label:'Blue',value:'blue'},
    {label:'Green',value:'green'},
    ];

    const [selection , setSelection] = useState('Select');

    const handleSelect = (item) => {
        setSelection(item.label);
        console.log(selection,"In App js")
    };
  return (
    <div className="flex">
  <Dropdown options ={options} handleSelect={handleSelect}/>
    
    </div>
    )
}

export default DropdownPage;