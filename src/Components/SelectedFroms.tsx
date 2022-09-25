import React, { useState } from "react";
import Select from "react-select";

export const SelectedForms = (props: any) => {
  const { options } = props;

  /*
  const [initOpt, setInitOpt] = useState([
    { value: "year", label: "年-年" },
    { value: "month", label: "月-月" }
  ]);
*/
  //このオプションをうまいこと核コンポーネントごとに使いまわせるようにする
  /*
  const options = [
    { value: "year", label: "年-年" },
    { value: "month", label: "月-月" }
  ];*/

  return (
    <div  className="SelectConditions">
      <label style={{ color: props.color }}>{props.message}</label>
      <Select placeholder="ここを動的に変える" options={props.options} />
    </div>
  );

  //中身に渡すoptionsをコンポーネント側で呼ぶ

  //      <SelectedForms option=/>
  //<SelectedForms />
};
