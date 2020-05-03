
export const qs = (string, el = document) => el.querySelector(string);
export const qTag = (string, el = document) =>
  el.getElementsByTagName(string);
export const qsAll = (string, el = document) => el.querySelectorAll(string);
export const getElementDimensions = el => ({
  width: el.offsetWidth,
  height: el.offsetHeight,
});

// export const getScreen = () => ({
//   scrollY: window.scrollY,
//   width: window.innerWidth,
//   height: window.innerHeight,
// });

// export const getScroll = () => ({
//   scrollY: window.scrollY || window.pageYOffset,
//   deltaY: 0,
// });

// export const forEachPollyfill = () => {
//   if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = function(callback, thisArg) {
//         thisArg = thisArg || window;
//         for (let i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
//   }
// };

// export const getClientRect = el => {
//   const d = el.getBoundingClientRect();
//   return {
//     left: d.left || d.x,
//     right: d.right || d.y,
//     x: d.x || d.left,
//     y: d.y || d.top,
//     top: d.top,
//     bottom: d.bottom,
//     width: d.width,
//     height: d.height,
//   };
// };

// export const isFunction = function(obj) {
//   return typeof obj == 'function' || false;
// };

// /*************
//     VIEWPORT
// *************/

// export const isMobileViewport = () => getScreen().width < 600;
// export const isMediumViewport = () =>
//   getScreen().width > 600 && getScreen().width < 992;
// export const isLargeViewport = () => getScreen().width > 1200;
// export const isSmallHeight = () => getScreen().height < 480;

// const FULLY_SCREEN_PERCENT = 0.25;
// const PARTIALLY_SCREEN_PERCENT = 0.82;
// const JUST_PARTIALLY_SCREEN_PERCENT = 0.98;

// export const isElementInView = (domRect, screen) => {
//   const fullyS = screen.height * FULLY_SCREEN_PERCENT;
//   const halfS = screen.height * PARTIALLY_SCREEN_PERCENT;
//   const partiallyS = screen.height * PARTIALLY_SCREEN_PERCENT;
//   const justS = screen.height * JUST_PARTIALLY_SCREEN_PERCENT;
//   return {
//     x: domRect.x,
//     y: domRect.y,
//     width: domRect.width,
//     height: domRect.height,
//     fully: Math.abs(domRect.y) >= 0 && Math.abs(domRect.y) <= fullyS,
//     half: Math.abs(domRect.y) > 0 && Math.abs(domRect.y) < halfS,
//     partially: Math.abs(domRect.y) > 0 && Math.abs(domRect.y) < partiallyS,
//     entering:
//       Math.abs(domRect.y) < screen.height && Math.abs(domRect.y) > partiallyS,
//     justEntering:
//       Math.abs(domRect.y) < screen.height && Math.abs(domRect.y) > justS,
//     inactive: Math.abs(domRect.y) > screen.height - 1,
//   };
// };

// export const clamp = (val, min, max) => Math.max(min, Math.min(val, max));
// export const mapRange = (value, inMin, inMax, outMin, outMax) =>
//   (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

// const div = window.document.createElement('div');
// const prefixes = ['Webkit', 'Moz', 'O', 'ms'];
// export const prefixStyle = prop => {
//   const style = div.style;
//   if (prop in style) {
//     return prop;
//   }
//   const titleCase = prop.charAt(0).toUpperCase() + prop.slice(1);
//   for (let i = prefixes.length; i >= 0; i--) {
//     const name = prefixes[i] + titleCase;
//     if (name in style) {
//       return name;
//     }
//   }
//   return false;
// };

// export const scale = (
//   parentWidth,
//   parentHeight,
//   childWidth,
//   childHeight,
//   contains
// ) => {
//   const doRatio = childWidth / childHeight;
//   const cRatio = parentWidth / parentHeight;
//   let width = parentWidth;
//   let height = parentHeight;

//   if (contains ? doRatio > cRatio : doRatio < cRatio) {
//     height = width / doRatio;
//   } else {
//     width = height * doRatio;
//   }

//   return {
//     width,
//     height,
//     x: (parentWidth - width) / 2,
//     y: (parentHeight - height) / 2,
//   };
// };

// /**
//  * Is el scrolled into view?
//  * @param {!Element} el
//  * @param {boolean} partial True for partialy visible, false for
// *  completely visibile.
//  * @param {!Function} callback Do this if in view.
//  */
// export const whenScrolledIntoView = function(el, partial, callback) {
//   const listenerFunc = () => {
//     const rect = el.getBoundingClientRect();
//     const elemTop = rect.top;
//     const elemBottom = rect.bottom;

//     // Only completely visible elements return true:
//     let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//     if (partial) {
//       // Partially visible elements return true:
//       isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//     }
//     if (isVisible) {
//       callback();
//       window.removeEventListener('scroll', listenerFunc);
//     }
//   };

//   listenerFunc();
//   window.addEventListener('scroll', listenerFunc);
// };
