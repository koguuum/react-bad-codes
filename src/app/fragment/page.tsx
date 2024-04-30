function Component1() {
  return <div>コンポーネント1</div>;
}

function Component2() {
  return <div>コンポーネント2</div>;
}

function Component3() {
  return <div>コンポーネント3</div>;
}

/**
 * 無駄なDOMは生成しないようにしましょう。
 * @returns
 */
export default function Page() {
  return (
    <>
      <Component1 />
      <Component2 />
      <Component3 />
    </>
  );
}
