import { Navigation } from "./routes/Navigation";

interface Props {
  aaa?: string;
}

export const App = ({ aaa }: Props) => {
  return (
    <>
      <Navigation />
    </>
  );
};
