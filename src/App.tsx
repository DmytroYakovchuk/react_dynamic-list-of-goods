import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState([]);

  const AllGoods = async () => {
    const loadedGoods = await getAll();

    setGoods(loadedGoods);
  };

  const fiveGoods = async () => {
    const loadedGoods = await get5First();

    setGoods(loadedGoods);
  };

  const redGoods = async () => {
    const loadedGoods = await getRedGoods();

    setGoods(loadedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={AllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={fiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
