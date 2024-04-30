function Component1() {
  return <>コンポーネント1</>;
}

function Component2() {
  return <>コンポーネント2</>;
}

type Props = {
  condition: boolean;
};

/**
 * 条件分岐は可読性を意識しましょう。
 * @returns
 */
export default function Page({ condition }: Props) {
  return condition ? <Component1 /> : <Component2 />;
}
