import { Story, Meta } from '@storybook/angular/types-6-0';
import { RippleButtonComponent } from "./ripple-button.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { RippleButtonDirective } from "./ripple-button.directive";

export default {
  title: 'Example/ripple-button',
  component: RippleButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [RippleButtonComponent, RippleButtonDirective],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story<RippleButtonComponent> = (args: RippleButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
