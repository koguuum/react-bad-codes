function Component1() {
  return <>コンポーネント1</>;
}

function Component2() {
  return <>コンポーネント2</>;
}

function Component3() {
  return <>コンポーネント3</>;
}

type Props = {
  condition: 'Admin' | 'User' | 'Guest';
};

/**
 * 条件分岐が多い場合はデータの持ち方を工夫しましょう。
 * @returns
 */
export default function Page({ condition }: Props) {
  const conditionPairs = {
    Admin: <Component1 />,
    User: <Component2 />,
    Guest: <Component3 />,
  };

  return conditionPairs[condition];
}
