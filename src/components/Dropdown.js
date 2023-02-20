import {useState,useRef,useEffect} from 'react';
import {GoTriangleLeft} from 'react-icons/go';
import Panel from './Panel';
function Dropdown ({options,handleSelect}){

        const [selectedOption,setSelectedOption] = useState('Select');
        const [droppedDown,setDroppedDown] = useState(0);
        const divEl = useRef();
        useEffect(()=>{
           
            const handler = (event)=>{
                if(!divEl.current){
                    return;
                }
    
               if (!divEl.current.contains(event.target)){
                setDroppedDown(0);
               }
            };
            document.addEventListener('click',handler,true);
            return () => {
                document.removeEventListener('click',handler);
            }
        })

        const handleClick = (item,index) => {
            setSelectedOption(item.label);
            handleSelect(item)
            setDroppedDown((currentVal)=>+!currentVal)
        }
    const collapsed = droppedDown !== 0
    const rendered_options = options.map((item,index) => {
 
        
        const renderIfCollapsed = <div className="hover:bg-sky-100 rounded cursor-pointer p-1"> 
            {collapsed ? <div onClick={()=>{handleClick(item,index)}}> {item.label}</div> :null}
            </div> 

        return (
            <div index={index}>
                {renderIfCollapsed}
            </div>
        )


    })

    // console.log(rendered_options,"****")
    
    return (<div ref={divEl} className="w-48 relative">
                <Panel 
                className="flex justify-between items-center cursor-pointer " onClick={()=>{setDroppedDown(+!droppedDown)}}>{selectedOption} <GoTriangleLeft className={droppedDown ? "-rotate-90":null}/>
                </Panel>
                
                { collapsed && (<Panel className="absolute top-full ">{rendered_options}</Panel>)}
            </div>
            )
}

export default Dropdown;