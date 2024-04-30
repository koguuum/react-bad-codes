'use client';

import { useCallback, useState } from 'react';

/**
 * レンダーでの関数定義は最小限に抑えましょう。
 * @returns
 */
export default function Page() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    setCount(count + 1)
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={onClick}>+1ボタン</button>
    </div>
  );
}
