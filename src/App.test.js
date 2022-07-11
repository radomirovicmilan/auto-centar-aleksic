import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import NavBar from './components/NavBar';

configure({ adapter: new Adapter() })

describe('App', () => {
  it('is truthy', () => {
    expect(App).toBeTruthy();
  });
  it('renders with navigation bar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  });
});
