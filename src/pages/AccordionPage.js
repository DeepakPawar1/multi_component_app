import Accordion from '../components/Accordion';
function AccordionPage() {
    const items = [{
        id:"sada324",
        label:'Can I use react',
        content:'Yes you can'
    },
    {
        id:"4324lklg",
        label:'Can I use JavaScript',
        content:'Yes you can'
    },
    {
        id:"rwi2342",
        label:'Can I use CSS',
        content:'Yes you can'
    }]

  return (
  <Accordion items = {items}/>
    )
}

export default AccordionPage;