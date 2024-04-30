/**
 * propsの命名規則を守りましょう。
 */
type Props = {
  userName: string;
  phoneNumber: number;
};

function Component({ userName, phoneNumber }: Props) {
  return (
    <>
      <div>{userName}</div>
      <div>{phoneNumber}</div>
    </>
  );
}

export default function Page() {
  return <Component userName="John" phoneNumber={1234567890} />;
}
