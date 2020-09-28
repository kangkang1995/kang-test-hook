import React, { useState,useEffect,useRef  } from 'react';
import ChildName from "./components/childName";
import TestUseRef from "./components/testUseRef";
import TestUseReducer from "./components/testUseReducer";
import TestUseContext from "./components/testUseContext";
import UseTestHook from "./components/useTestHook";
import Father from './components/correspond/father';
import Child from './components/correspond/child';
function TestUseState() {
  //声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // const [age,setAge] = useState(18);
  const [name,setName] = useState('kangkang');

  // useEffect(()=>{
  //   document.title =  `You clicked ${count} times`;
  // },[count])

  // useEffect(()=>{
  //   console.log(name,'useEffect')
  // },[name])

  // useEffect(() => {
  //   console.log('use effect...',count)
  //   const timer = setInterval(() => {
  //       console.log('timer...count:', count)
  //       setCount(count + 1)
  //   }, 1000)
  //   return ()=> clearInterval(timer)
  // },[])



  return (
    <div>
      <p>你点击了{count}</p>
      <button onClick={()=>{setCount(count + 1)}}>
        点击我
      </button>
      <p>姓名{name}{count}</p>
      <button onClick={()=>{setName('kangkang2')}}>
        更新姓名
      </button>
      <ChildName data={name}/>
      <hr/>
      <p>TestUseRef事例</p>
      <TestUseRef/>
      <hr/>
      <p>TestUseReducer事例</p>
      <TestUseReducer/>
      <hr/>
      <p>TestUseContext事例</p>
      <TestUseContext/>
      <hr/>
      <h3>自定义hook事例</h3>
      <UseTestHook/>
      <hr/>
      <h3>父子组件通信事例</h3>
      <Father/>
    </div>
  );
}

export default TestUseState;
