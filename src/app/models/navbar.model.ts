export interface NavItem {
    label: string;
    route: string;
    fragment?: string;
    exact?: boolean;
    activeRoute?: boolean;
}