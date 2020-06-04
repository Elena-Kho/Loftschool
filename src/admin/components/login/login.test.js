import login from './login';
import {shallowMount} from '@vue/test-utils';

it ('Ищем кнопку авторизации по слову Авторизоваться', () => {
  const wrapper = shallowMount(login);
  const button = wrapper.find('.form-login__button-send');

  expect(button.element).toMatchSnapshot();
});
