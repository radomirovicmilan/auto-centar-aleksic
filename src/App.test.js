import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, render } from 'enzyme';
import App from './App';
import NavBar from './components/NavBar';
import NavBarButton from './components/NavBarButton';

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

describe('NavBar', () => {
  it('is truthy', () => {
    expect(App).toBeTruthy();
  });
  it('renders with a logo from the public folder', () => {
    const navbar = shallow(<NavBar />);
    expect(navbar.find(".logo-navbar").prop("src")).toEqual("./logo.png")
  });
  it('renders with a logo containing an alt', () => {
    const navbar = shallow(<NavBar />);
    expect(navbar.find(".logo-navbar").prop("alt")).toBeTruthy();
  });
  it('renders with one container for navigation buttons', () => {
    const navbar = shallow(<NavBar />);
    expect(navbar.find(".navbar-buttons-wrapper").length).toEqual(1);
  });
  it('renders with at least one navigation button inside navigation container', () => {
    const navbar = shallow(<NavBar />);
    expect(navbar.find(".navbar-buttons-wrapper").containsMatchingElement(<NavBarButton />)).toBeTruthy();
  });
});
