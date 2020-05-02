export default interface ThemeProps {
    dark?: boolean;
    toggle?: ()=> void;
    children: React.ReactChild[];
    setDark?: string;
    theme?:string;
}