import readme from './readme.md';

export default {
  title: 'Button',
  parameters: {
    notes: readme
  },
};

export const Default = () => `
  <gd-button>Default</gd-button>
`;

export const Outlined = () => `
  <gd-button outlined>Outlined</gd-button>
`;
