import { render, screen } from '@testing-library/react';
import App from './App';
import Politics from './Component/politics';

test("see if disired text exist",()=>{
  render(<Politics/>);
  const text = screen.getByText(/Boyegas gave an/i);
  expect(text).toBeInTheDocument();
})
