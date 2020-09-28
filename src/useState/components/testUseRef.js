import React, { useState, useEffect, useRef, useCallback } from "react";
function TestUseRef() {
  const countRef = useRef(0);
  const inputRef = useRef();
  const getInputValue = () => {
    // 访问ref
    console.log(
      countRef,
      inputRef.current,
      inputRef.current.value,
      "inputRefinputRefinputRef"
    );
  };

  const timers = useRef(null);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     ++countRef.current;
  //     console.log(countRef.current,'useEffect,countRef.current')
  //   }, 1000);
  //   timers.current = timer;
  //   return () => clearInterval(timer);
  // }, []);

  const getCountRef = useCallback(() => {
    console.log(countRef.current, "+countRef.current");
    clearInterval(timers.current);
  }, []);

  return (
    <div>
      <div>
        <button onClick={getCountRef}>useRef</button>
      </div>

      <div>
        <input ref={inputRef} type="text" />
        <button onClick={getInputValue}>获取input值</button>
      </div>
    </div>
  );
}

export default TestUseRef;
