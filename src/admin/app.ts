import Logo from "./extensions/logo.svg";
import favicon from "./extensions/favicon.ico";

export default {
    config: {
        // Replace the Strapi logo in auth (login) views
        auth: {
            logo: Logo,
        },
        // Replace the favicon
        head: {
            favicon: favicon,
        },
        // Add a new locale, other than 'en'
        locales: [ 
            "de"
        ],
        // Replace the Strapi logo in the main navigation
        menu: {
            logo: Logo,
        },
        // Override or extend the theme
        theme: {
            // overwrite light theme properties
            light: {
                colors: {
                    buttonPrimary500: '#dc6565ff',
                    buttonPrimary600: '#c3151aff',
                    
                    neutral100: '#f9f6f6ff',
                    neutral150: '#efeaeaff',
                    neutral200: '#edc6c6ff',

                    primary100: '#fff0f0ff',
                    primary200: '#edc6c6ff',
                    primary500: '#dc6565ff',
                    primary600: '#da3939ff',
                    primary700: '#c3151aff',

                    
                }
            },
            // overwrite dark theme properties
            dark: {
                colors: {
                    alternative100: '#291e39ff',
                    alternative200: '#51406bff',

                    buttonPrimary500: '#ff4545ff',
                    buttonPrimary600: '#eb2930ff',
                    
                    neutral0: '#342121ff',
                    neutral100: '#1c1818ff',
                    neutral150: '#4d3232ff',
                    neutral200: '#6a4a4aff',
                    
                    primary100: '#261818ff',
                    primary200: '#6a4a4aff',
                    primary500: '#ff4545ff',
                    primary600: '#eb2930ff',
                    primary700: '#fc8282ff',

                    secondary100: '#1b1b38ff',
                    secondary200: '#4c4c87ff',

                    success100: '#18261aff',
                    success200: '#4a6a4fff',
                }
            }
        }
    }
}