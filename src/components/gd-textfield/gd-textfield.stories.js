import readme from './readme.md';

export default {
  title: 'Textfield',
  parameters: {
    notes: readme
  },
};

export const Default = () => `
  <gd-textfield label="Label"></gd-textfield>
`;

export const Hint = () => `
  <gd-textfield label="National Insurance number" hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."></gd-textfield>
`;

export const Invalid = () => `
  <gd-textfield label="National Insurance number" hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’." invalid="true">
    <div slot="error">
      <span>Enter a National Insurance number in the correct format</span>
    </div>
  </gd-textfield>
`;
