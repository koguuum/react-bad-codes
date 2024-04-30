function Component({ name }: { name: string }) {
  const message = `Hello ${name}!!`;
  return <>{message}</>;
}

/**
 * 文字列結合はシンプルに。
 * @returns
 */
export default function Page() {
  return <Component name={'山田太郎'} />;
}
