//import { ArgTypes } from "@storybook/blocks";
import { ButtonCounter } from "./ButtonCounter";

export default {
  title: "Counter/ButtonCounter",
  component: ButtonCounter,
  tags: ["autodocs"],
  argTypes: {
    buttonStyle: {
        control: "select",
        options: ["counter-button--small", "counter-button--large", "counter-button--primary", "counter-button--secondary"],
        description: "Style of the button",
    },
    backgroundColor: {
      control: "color",
      description: "Background color of the button",
      table: {
        defaultValue: {
          summary: "#bcebe6",
        },
      }
    },
    label: {
        control: "text",
        description: "Label of the button",
        table: {
          defaultValue: {
            summary: "Click me",
          },
        },
    },
    size: {
        control: "text",
        description: "Size of the button",
        table: {
          defaultValue: {
            summary: "large",
          },
        },
    }
  },
};

// Large button story
export const Large = {
  args: {
    size: "large",
    label: "Large Button",
  },
  parameters: {
    docs: {
        description: {
            story: "This is a large button with a default label.",
        },
    }
  }
};

// Small button story
export const Small = {
  args: {
    size: "small",
    label: "Small Button",
  },
  parameters: {
    docs: {
        description: {
            story: "This is a small button with a default label.",
        },
    }
  }
};
