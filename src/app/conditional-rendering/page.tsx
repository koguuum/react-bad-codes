function Component1() {
  return <>コンポーネント1</>;
}

function Component2() {
  return <>コンポーネント2</>;
}

function Component3() {
  return <>コンポーネント3</>;
}

const CONDITIONS = {
  ADMIN: 'Admin',
  USER: 'User',
  GUEST: 'Guest',
};

type Condition = keyof typeof CONDITIONS;

type Props = {
  condition: Condition;
};

/**
 * 条件分岐が多い場合はデータの持ち方を工夫しましょう。
 * @returns
 */
export default function Page({ condition }: Props) {
  const conditionPairs = {
    [CONDITIONS.ADMIN]: Component1,
    [CONDITIONS.USER]: Component2,
    [CONDITIONS.GUEST]: Component3,
  };

  const Component = conditionPairs[condition]
  return <Component />;

}
