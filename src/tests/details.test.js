import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../componenets/details/Details';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Details />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
