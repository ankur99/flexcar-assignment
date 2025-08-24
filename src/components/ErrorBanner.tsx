type Props = { message: string };
export default function ErrorBanner({ message }: Props) {
  return (
    <div role="alert" className="alert alert-error">
      <span>{message}</span>
    </div>
  );
}
