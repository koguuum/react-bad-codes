/**
 * 子要素がない場合、セルフクロージングタグを使用した方が可読性が向上します。
 */
function Component() {
  return <>コンポーネント</>;
}

export default function Page() {
  return <Component/>;
}
