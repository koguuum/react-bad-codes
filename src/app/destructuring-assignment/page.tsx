type Props = {
  name: string;
  age: number;
  phone: string;
};

/**
 * 分割代入を使ってシンプルにしましょう。
 * @returns
 */
export default function Page({name, age, phone}: Props) {
  return (
    <>
      <p>名前: {name}</p>
      <p>年齢: {age}</p>
      <p>電話番号: {phone}</p>
    </>
  );
}
