import React from 'react';
// import AddIcon from '@mui/icons-material/Add';
import data from './data.json';
import Accordion from './Accordion/Accordion';


const FAQ = () => {
  return(
    <section>
      <h1>Frequently Asked Questions</h1>
      {data.articles.map(({title,body},i)=>(<Accordion title={title} body={body} key={i}/>))}
    </section>
    )

}


export default FAQ;
