import React, { useState } from "react";
import Select from "react-select";

export const SelectedForms = (props: any) => {
  const { message,value,label } = props;

  //console.log(props.value);
  //selectの変化を検知してうまいことvalueを伝えるようにする
  //そのvalueで条件レンダリング if 3&&<専用コンポーネント/> など
  return (
    <div  className="SelectConditions">
      <label style={{ color: props.color }}>{props.message}</label>
      <Select placeholder="ここを動的に変える" options={props.options} />
    </div>
  );

};
