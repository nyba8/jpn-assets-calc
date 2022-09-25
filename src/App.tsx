import React from "react";
//import React, { useState } from "react";
import "./styles.css";

import { SelectedForms } from "./Components/SelectedFroms";
import { Assets } from "./Components/Assets";

export const App = () => {
  //const [options, setoptions] = useState("");

  interface ArrayValueLabel {
    value: number;
    label: string;
  }

  const TimePeriod: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];

  const StartYear: ArrayValueLabel[] = [
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1988, label: "1988" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
  ];

  const EndYear: ArrayValueLabel[] = [
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1988, label: "1988" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
    { value: 1985, label: "1985" },
    { value: 1986, label: "1986" },
    { value: 1987, label: "1987" },
  ];

  const InitialAmount: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];

  const Cashflows: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];
  const Rebalancing: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];
  const LeverageType: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];
  const ReinvestDividends: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];
  const DisplayIncome: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];
  const FactorRegression: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];
  const Benchmark: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];
  const PortfolioNames: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];
  const PortfolioAssets: ArrayValueLabel[] = [
    { value: 0, label: "年-年" },
    { value: 1, label: "月-月" },
  ];

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
      <SelectedForms message="初期投資額" options={InitialAmount} />{" "}
      <SelectedForms message="キャッシュフロー" options={Cashflows} />{" "}
      <SelectedForms message="リバランス頻度" options={Rebalancing} />{" "}
      <SelectedForms message="レバレッジタイプ" options={LeverageType} />{" "}
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
