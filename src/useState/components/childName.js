import React, { useEffect, useState } from 'react';
function ChildName(props) {
  console.log('child render...', props)
  // const {data} = props;
  const [name, setName] = useState(props.data)
  useEffect(()=>{
    setName(props.data)
  },[props.data])
  return (
    <div>
        <div>child</div>
        <div>{name}</div>
    </div>
  );
}

export default ChildName;
