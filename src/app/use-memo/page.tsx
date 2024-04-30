'use client';

import React, { useState } from 'react';

function ChildComponent({ name }: { name: string }) {
  console.log('ChildComponent render: ', name);
  return <p>My name is {name}</p>;
}

export const MemoChildComponent = React.memo(ChildComponent);

/**
 * メモ化して不要なレンダリングを抑えましょう。
 * @returns
 */
export default function Page() {
  const [count, setCount] = useState(0);
  const [name] = useState('Alice');

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClick}>+1ボタン</button>
      <MemoChildComponent name={name} />
    </div>
  );
}
