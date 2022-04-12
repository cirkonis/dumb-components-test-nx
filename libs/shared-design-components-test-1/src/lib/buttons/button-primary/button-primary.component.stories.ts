import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonPrimaryComponent } from './button-primary.component';

export default {
  title: 'ButtonPrimaryComponent',
  component: ButtonPrimaryComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ButtonPrimaryComponent>;

const Template: Story<ButtonPrimaryComponent> = (args: ButtonPrimaryComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  label: 'hello'
}
