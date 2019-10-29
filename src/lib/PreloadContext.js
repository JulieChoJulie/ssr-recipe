import { createContext, useContext } from 'react';

// client env: null
// server env: { done: false, promises: []}
const PreloadContext = createContext(null);
export default PreloadContext;

// resolve is a type of func
export const Preloader = ({ resolve }) => {
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null;
    if (preloadContext.done) return null; // if all work is done

    // add promise in promises array
    // even if a resolve fun does not return promise,
    // use promise.resolve fun to treate promise
    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
};