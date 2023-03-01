import React from 'react';

const PriceContentDownParagraph = (props) => {
  const{optionsMap,options,width,isOpen}=props


  
  return (
    <ul >
    {width > 760 ? options.map(optionsMap) : isOpen && options.map(optionsMap)}
  </ul>
  );
}

export default PriceContentDownParagraph;
