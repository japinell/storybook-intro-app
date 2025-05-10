import { ButtonCounter } from "./ButtonCounter";

export default {
    title: 'Counter/ButtonCounter',
    component: ButtonCounter,
}

// Large button story
export const Large = {
    args: {
        size: 'large',
        label: 'Large Button',
    }
}

// Small button story
export const Small = {
    args: {
        size: 'small',
        label: 'Small Button',
    }
}