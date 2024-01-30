import { Preview, AngularRenderer } from '@storybook/angular';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
    decorators: [
        withThemeByClassName<AngularRenderer>({
            themes: {
                light: "light",
                dark: "dark",
            },
            defaultTheme: "dark",
        }),

    ],
};

export default preview;