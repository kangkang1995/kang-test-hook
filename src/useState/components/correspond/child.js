import React, { useEffect, useState,useImperativeHandle,forwardRef } from 'react';
function  Child(props,ref) {
  const {data,handlerClick,count} = props;
  console.log(data,count,handlerClick,'子页面数据')
  
  const [age,setAge] = useState(10);
  const [newCount,setNewCount] = useState(count);
  useEffect(()=>{
    console.log(data,'子页面数据useEffect')
    setNewCount(count)
  },[count])

  useImperativeHandle(ref,()=>{
    return {
      _childFn(){
        console.log('父组件调用子组件方法成功')
        setAge(age+1)
      },
    }
  })

  return (
    <div>
      <div>
        我是父页面的props名字<span style={{color:'red'}}>{data}</span>，
        <br/>
        我是子页面自己的newcount,依赖父页面的count<span style={{color:'red'}}>{newCount}</span>,
        子页面年龄<span style={{color:'red'}}>{age}</span>
      </div>
      <div>
        <p>子页面调用父页面</p>
        <button onClick={handlerClick}>点击我</button>
      </div>

    </div>
  );
}

// forwardRef 配合useImperativeHandle和useRef 父组件调用子组件方法使用
export default React.memo(forwardRef(Child));
