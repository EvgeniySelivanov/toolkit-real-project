import React, { useState } from 'react';
import data from './data.json';
import PriceContent from './PriceContent';
const colors = [
  { name: 'bronze', value: '#e0b48c' },
  { name: 'gold', value: '#e8b954' },
  { name: 'platinum', value: '#555555' },
  { name: 'managed', value: '#28d2d0' },
]
const initialState = data.map((elem, i) => (
  {
    id: elem.id, isOpen: i === 0 ? true : false,
  }
  )
  );


const PriceSection = () => {

  const [elemOpen, setElemOpen] = useState(initialState);

  const handlerIsOpen = (id) => {
    setElemOpen(elemOpen.map((item) => ({
      ...item, isOpen: item.id === id ? true : false,
    })));
  }

  const mapPriceContent=(elem, i) => (
    <PriceContent
      handleClick={handlerIsOpen}
      key={elem.id} priceContent={elem}
      color={colors[i]}
      isOpen={elemOpen[i]}
    />

  );
  return (
    <section>
      <ul>
        {data.map(mapPriceContent)}
      </ul>
    </section>
  );
}

export default PriceSection;
