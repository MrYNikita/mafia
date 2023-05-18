import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`

:root {

    --color-0: #000;
    --color-1: #7a0000;
    --color-2: #fff;
    --color-3: #252525;
    
    --color-text-selection: var(--color-2);
    --color-text-selection-background: var(--color-3);

    --border-radius-0: 4px;
    --border-radius-1: 12px;
}

html, body, #root {
    width: 100%;
    height: 100%;
}
:not(#root, body, html) {
    transition: all 0.5s;
}

* {
    color: var(--color-text);
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    overflow: hidden;
    box-sizing: border-box;
    user-select: none;
    font-family: Arial, Helvetica, sans-serif;
}
*::selection {
    color: var(--color-text-selection);
    caret-color: var(--color-text-input);
    background-color: var(--color-text-selection-background);
}

@keyframes move {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0%);
    }
}
@keyframes hide {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

`;

export default StyleGlobal;