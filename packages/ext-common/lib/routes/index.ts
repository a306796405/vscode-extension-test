import a from './dynamic/a'
import b from './dynamic/b'

// const modules = import.meta.glob('./dynamic/**/*.{json,ts,js}', { eager: true });

// export function getRoutes() {
//     const route = {}
//     Object.keys(modules).forEach((key) => {
//     const mod = (modules as Record<string, TRouteItem>)[key].default || {};
//         console.log(key, mod)
//        Object.assign(route, mod)
//     });

//     return route
// }

export default { 
    a,
    b
}

// type TRouteItem = {
//     name: string;
//     path: string;
//     [key: string]: string | TRouteItem | undefined;
// }