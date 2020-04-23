// Colors
export const yellow = "#fdcc08";
export const green = "#00a3ad";
export const red = "#ff6e7e";
export const white = "#fff";
export const black = "#000";

// Font 
export const font = "'Helvetica Neue',Helvetica,Helvetica,Arial,sans-serif";

// Font sizes 
export const sm = "10px";
export const md = "14px";
export const lg = "18px";

// Media queries
export const mobile = "321px";
export const desktop = "600px";

// Mixins
export const width = () => `
    width: 100%;
    max-width:300px;
`;
export const paragraph = () => `
    line-height: 0;
    position: relative;
    top: 37.5px;
    color: ${black};
`;
export const center = () => `
    display: flex;
    justify-content: center;
`;
export const column = () => `
    display: flex;
    flex-direction: column;
`;
export const row = () => `
    display: flex;
    flex-direction: row;
`;
export const button = () => `
    border: 2px solid ${black};
    border-radius: 5px;
    color: ${black};
    background-color: ${white};
    max-width: 23.5%;
    min-height: 44px;
    margin: 0 2% 2rem 0;
    text-transform: uppercase;
    width: 100%;
    font-size: ${md};
`;
export const input = () => `
    border: 2px solid ${black};
    box-sizing: border-box;
    color: ${black};
    font-size: ${md};
    height: 48px;
    width: 100%;
    line-height: 25.5px;
    padding: 10.5px 14px 14px 14px;
    margin: 1rem;
    font-family: ${font};
    @media screen and (min-width: ${mobile}) {
        margin: 0;
    }
`
export const hideArrow = () => `
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, ${white} 0%, ${white} 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    -o-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
`;