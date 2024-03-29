import { createPortal } from "react-dom";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [글제목, set글제목] = useState(["다", "가", "나"]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, false, false]);
  let [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>ReactBlog</h4>
        {/* style에 넣을때는 object 형태로 넣어야한다. */}
      </div>
      {글제목.map((param, param2) => {
        return (
          <div className="list" key={param2}>
            <h4
              onClick={() => {
                let modalCopy = [...modal];
                modalCopy[param2] = !modalCopy[param2];
                setModal(modalCopy);
              }}
            >
              {param}
            </h4>
            <span
              onClick={() => {
                let copy = [...like];
                copy[param2] += 1;
                setLike(copy);
              }}
            >
              🔥{like[param2]}
            </span>

            <p>3월 30일 발행</p>
            {modal[param2] == true ? (
              <Modal 글제목={글제목} setTitle={set글제목} index={param2} />
            ) : (
              ""
            )}
            <button
              onClick={() => {
                let listCopy = [...글제목];
                listCopy.splice(param2, 1);
                set글제목(listCopy);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="텍스트를 입력하세요"
      />
      <button
        onClick={(e) => {
          let listCopy = [...글제목];
          listCopy.push(inputValue);
          set글제목(listCopy);
        }}
        type="submit"
      >
        submit
      </button>
      <Modal2></Modal2>
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[props.index]}</h4>
      <p>3월 30일 발행</p>
      <p>detail</p>
      <button
        onClick={() => {
          let 글제목Copy = [...props.글제목];
          글제목Copy[props.index] = "수정된 타이틀";
          props.setTitle(글제목Copy);
        }}
      >
        글수정
      </button>
    </div>
  );
};

class Modal2 extends React.Component {
  //constructor, super, render 무조건 들어가야 합니다
  constructor(props) {
    //props는 여기에서 받음.
    super(props);
    this.state = {
      //state는 object 형태로 선언
      name: "ham",
      age: 20,
    };
  }
  render() {
    // this.props 라고 받는다.
    return (
      <div>
        안녕 {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          age
        </button>
      </div>
    );
  }
}

export default App;
