import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import './matchMedia.mock';

Enzyme.configure({ adapter: new Adapter() });
