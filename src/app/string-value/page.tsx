function Component({ name }: { name: string }) {
  return <>{name}</>;
}

/**
 * 文字列データを渡すときはシンプルに。
 * @returns
 */
export default function Page() {
  return <Component name='山田太郎' />;
}
