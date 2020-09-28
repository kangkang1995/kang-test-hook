import React, { useEffect, useState,useRef, useCallback } from 'react';
import Child from './child';
function Father() {

  const [name, setName] = useState('kangkang')
  const [count,setCount] = useState(0);
  const fatherRef = useRef();

  function parantHandler() {
    // 子组件调用的父组件方法
    console.log('子组件调用的父组件方法成功')
    setCount(count+1)
  }

  // function parentDivClick() {
  //   // 父组件调用子组件方法
  //   fatherRef.current._childFn();
  // }

  const parentDivClick = useCallback(()=>{
    fatherRef.current._childFn();
  },[])

  return (
    <div>
        <hr/>
        <div>我是父页面</div>
        <div>
          父页面名字<span style={{color:'red'}}>{name}</span>，父页面count<span style={{color:'red'}}>{count}</span>

          <br/>
          <p>父页面调用子页面</p>
          <button onClick={parentDivClick}>点我</button>
        </div>
        
        <Child
          ref={fatherRef}
          data={name}
          count={count}
          handlerClick={parantHandler}
        />
    </div>
  );
}

export default React.memo(Father);
