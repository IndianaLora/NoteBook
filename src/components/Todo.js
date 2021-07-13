import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [edit, setEdit] = useState("");
  const [show, setShow] = useState(false);

  //Create
  const handleSubmit = (event, input) => {
    event.preventDefault();
    if (input !== "") {
      const idx = Math.floor(Math.random() * 100000);
      setInput("");
      setItem([...item, { id: idx, item: input }]);
    }
  };
  //Update
  const editItem = (itemId, newItem) => {
    setShow(!show);
    var editedList = item.filter(function (itemToEdit) {
      return itemToEdit.id === itemId;
    });
    if (edit !== "" || null) {
      editedList[0].item = newItem;
      setEdit("");
      setShow(false);
    }
  };
  //Delete
  const removeItem = (itemId) => {
    var removeList = item.filter(function (itemToDelete) {
      return itemToDelete.id !== itemId;
    });
    setItem(removeList);
  };
  //Check
  const checkItem = (itemToCheck, event) => {
    var checkItem = itemToCheck;
    if (event === true) {
      checkItem.classList = "check";
    } else {
      checkItem.classList.remove("check");
    }
  };

  return (
    <div className='container'>
      <h1>Write your productivity list! ☺</h1>
      
      <form
        onSubmit={(event) => {
          handleSubmit(event, input);
        }}
      >
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          value={input}
          placeholder="Write your todo!"

        />
        <button type="submit" value="submit">
          Add item
        </button>
      </form>
      <div className='todo-container'>
 
      {show ? (
        <input
          type="text"
          onChange={(event) => setEdit(event.target.value)}
          value={edit}
          placeholder="Edit your todo!"
        />
      ) : null}
            <div className='todo'>
      {item.map((items) => {
        return (
         
          <div className='todo-element'>
            <h5 key={items.id}>
              {items.item}
              <input
                type="checkBox"
                onClick={(event) => {
                  checkItem(event.target.parentElement, event.target.checked);
                }}
              />
              
          
            </h5>
            <div className='button-container'>
            <button
              onClick={() => {
                editItem(items.id, edit);
              }}
            >
              <i className="fas fa-edit"></i>
            </button>
            <button
              onClick={() => {
                removeItem(items.id);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            </div>
            </div>
        
        );
      })}
      <div/>
      </div>
      </div>
    </div>
  );
}

export default Todo;
