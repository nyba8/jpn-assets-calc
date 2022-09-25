import React, { useState } from "react";
import "./styles.css";

import { SelectedForms } from "./Components/SelectedFroms";
import { Assets } from "./Components/Assets";
import { InputTodo } from "./Components/InputForms";

export const App = () => {
  //const [options, setoptions] = useState("");
  const [initialAmount, setInitialAmount] = useState("");



  const onChangeTodoText = (event: any) => {
    setInitialAmount(event.target.value);
  };

  interface ArrayValueLabel {
    value: number;
    label: string;
  }

  const TimePeriod: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];


  const start = 1985;
  const end = 2022;
  const StartToEndYearRange = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i); //map(var,index,array) varは使わないから_で無視 いきなりindexは使えないから
  const StartYearNumberArray = StartToEndYearRange(1985, 2022);
  const StartYearStringArray = [...StartYearNumberArray].map((value) => {
    return value.toString();
  });

  const StartYear = [...Array(end - start + 1)].map((what, i) => {
    return { value: StartYearNumberArray[i], label: StartYearStringArray[i] };
  });

  const EndYear = [...Array(end - start + 1)].map((what, i) => {
    return { value: StartYearNumberArray[i], label: StartYearStringArray[i] };
  });

  const YTD: ArrayValueLabel[] = [
    { value: 0, label: "はい" },
    { value: 1, label: "いいえ" },
  ];

  const Cashflows: ArrayValueLabel[] = [
    { value: 0, label: "無し" },
    { value: 1, label: "一定量入金" },    
    { value: 2, label: "一定量出金" },
    { value: 3, label: "一定割合出金" },
  ];

  const Rebalancing: ArrayValueLabel[] = [
    { value: 0, label: "リバランス無し" },
    { value: 1, label: "年に1回リバランス" },
    { value: 2, label: "半年に1回リバランス" },
    { value: 3, label: "4半期に1回リバランス" },
    { value: 4, label: "毎月リバランス" },
    { value: 5, label: "割合リバランス//実装しない" }
  ];
  const LeverageType: ArrayValueLabel[] = [
    { value: 0, label: "レバレッジ無し" },
    { value: 1, label: "固定量レバレッジ" },
    { value: 2, label: "固定割合レバレッジ" }
  ];
  const ReinvestDividends: ArrayValueLabel[] = [
    { value: 0, label: "再投資する" },
    { value: 1, label: "再投資しない" },
  ];
  const DisplayIncome: ArrayValueLabel[] = [
    { value: 0, label: "表示しない" },
    { value: 1, label: "表示する" },
  ];
  const FactorRegression: ArrayValueLabel[] = [
    { value: 0, label: "しない" },
    { value: 1, label: "する//実装しない" },
  ];
  const Benchmark: ArrayValueLabel[] = [
    { value: 0, label: "無し" },
    { value: 1, label: "特定の銘柄" },
    { value: 2, label: "インポート" },
    { value: 3, label: "VOO" },
    { value: 4, label: "Vanguardバランスファンド" }
  ];
  const PortfolioNames: ArrayValueLabel[] = [
    { value: 0, label: "名前を付けない" },
    { value: 1, label: "名前を付ける//3つ表示" },
  ];
  const PortfolioAssets: ArrayValueLabel[] = [
    { value: 0, label: "↓の3726とかから計算" }
  ];

  //experiment-------------------------------------------

  //experiment-------------------------------------------

  return (
    <>
      <header className="header">JapanesePortfolioVisualizer</header>
      <div className="App">
        <h1>Backtest Portfolio Asset Allocation</h1>
        <h2>This portfolio backtesting...</h2>
        <h3>
          The related asset class level portfolio modeling tool allows you to
          analyze and compare asset class level portfolios with a longer time
          horizon starting from 1972.
        </h3>
      </div>
      <SelectedForms message="年間/月間" options={TimePeriod} />
      <SelectedForms message="開始年" options={StartYear} />
      <SelectedForms message="終了年" options={EndYear} />
      <SelectedForms message="年初来リターン" options={YTD} />
      <InputTodo
        message="初期投資額"
        todoText={initialAmount}
        onChange={onChangeTodoText}
      />

      <SelectedForms message="キャッシュフロー" options={Cashflows} />
      <SelectedForms message="リバランス頻度" options={Rebalancing} />
      <SelectedForms message="レバレッジタイプ" options={LeverageType} />
      <SelectedForms message="配当再投資" options={ReinvestDividends} />
      <SelectedForms message="配当金の表示" options={DisplayIncome} />
      <SelectedForms message="回帰分析" options={FactorRegression} />
      <SelectedForms message="ベンチマーク" options={Benchmark} />
      <SelectedForms message="ポートフォリオ名" options={PortfolioNames} />
      <SelectedForms
        message="ポートフォリオアセット"
        options={PortfolioAssets}
      />
      <Assets />
      <Assets />
      <Assets />
      <Assets />
      <Assets />
      <Assets />
      <Assets />
      <Assets />
      <Assets />
      <Assets />
      <button>リターン計算</button>
    </>
  );
};
