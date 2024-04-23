import { PropsWithChildren } from 'react';

const ExampleButton = ({ children }: PropsWithChildren) => {
  return <button>{children}</button>;
};

export default ExampleButton;
