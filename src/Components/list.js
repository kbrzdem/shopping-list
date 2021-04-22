
import React, { useState, useEffect } from "react";


const List = () => {
    const [liste, setListe] = useState([]);
    const [list, setList] = useState("");


    const saveData = (newliste) => {
        localStorage.setItem("liste", JSON.stringify(newliste));
    };

    useEffect(() => {
        if (localStorage.getItem("liste")) {
            setListe(JSON.parse(localStorage.getItem("liste")));
        }
    }, []);

    const onAddTodo = () => {
        if (list.trim()) {
            const newliste = [...liste, { todo: list.trim(), id: Date.now() }];
            setListe(newliste);
            setList("");
            saveData(newliste);
        }
    };
    const deleteTodo = (id) => {
        let newliste = liste.filter((todo) => todo.id !== id);
        setListe(newliste);
        saveData(newliste);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-12" >
                <div className="Slist">
             
                <h1>Add Shopping List</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <input type="text" value={list} onChange={(e) => setList(e.target.value)} />
                                </th>
                                <th>
                                    <button className="btn" onClick={onAddTodo}>
                                        {" "}
                                        Add
                                    </button>
                                </th>
                            </tr>
                        </thead>

                        <thead>
                            <tr >
                                <th className="mylist">My List </th>
                            </tr>
                        </thead>

                        <tbody id="table" className="list" >
                            {liste.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.todo}</td>
                                    <td>
                                        <button
                                            className="btn"
                                            onClick={() => deleteTodo(todo.id)}
                                        >
                                            {" "}
                                            Delete{" "}
                                        </button>{" "}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >
            </div>
        </div >
           
        </div>
    );

}

export default List;
