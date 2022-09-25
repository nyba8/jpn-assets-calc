import React from "react";

export const InputTodo = (props: any) => {
  //ここでのpropsはapp.tsxで呼ばれるときにどんな変数宣言されてもいいですよってこと
  const { todoText, onChange, onClick } = props; //このts内で使うためにpropsの中身を展開
  return (
    <div className="input-area">
         <label style={{ color: props.color }}>{props.message}</label>
      <input placeholder="todoを入力" value={todoText} onChange={onChange} />
    </div>
  );
};
