import { render, screen } from '@testing-library/react';
import { CourseForm } from '../components/CourseForm';
describe('Course Form', () => {
  test('renders Course Form component', () => {
    render(<CourseForm />);
  });
});