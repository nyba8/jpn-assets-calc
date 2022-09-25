import React from "react";

export const InputTodo = (props: any) => {
  //ここでのpropsはapp.tsxで呼ばれるときにどんな変数宣言されてもいいですよってこと
  const { initialAmount, onChange, onClick } = props; //このts内で使うためにpropsの中身を展開
  
  return (
    
    <div className="input-area">
      <label >{props.message}</label>
      <input placeholder="初期投資額..." value={initialAmount} onChange={onChange} />
      <span>円</span>
    </div>
  );
};
