import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import BaseHoc from '../layouts/BaseHoc';

const FunctionalComponent = (props) => {

    const [count, setCount] = useState(0);

    const [changeName, setChangeName] = useState("");

    const prevRef = useRef();

    const substractCount = () => {
        setCount(count - 1);
    };

    const { name, age, college, setName } = props;

    useEffect(() => {
        console.log("component did Mount");
    }, []);

    useEffect(() => {
        console.log("component did update");
    });

    useEffect(() => {
        console.log("only on changing name");
    }, [changeName]);

    useEffect(() => {
        console.log("only on changing props");
    }, [props]);

    useEffect(() => {
        return console.log("component did UnMount");
    }, []);

    useEffect(() => {
        console.log(prevRef.current);
    });

    return (
        <div>
            <p>This is Functional Component.</p>
            <button onClick={() => setCount(count + 1)}>Click me to add 1</button>
            <br />
            <br />
            <button onClick={substractCount}>Click me to Subtract 1</button>
            <br />
            <h1 ref={prevRef}>{count}</h1>
            <h1>My name is {name} I am {age} I study in {college}</h1>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => setName(changeName)}>Click to Change name</button>
        </div>
    );
};

export default BaseHoc(FunctionalComponent);