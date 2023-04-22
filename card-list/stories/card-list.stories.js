import { html } from 'lit';
import '../src/card-list.js';

export default {
  title: 'CardList',
  component: 'card-list',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <card-list
      style="--card-list-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </card-list>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
