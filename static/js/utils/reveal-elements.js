import { qTag } from './scaffold-utils';

const applyClassTo = (tagList, className) => {
  let elements = tagList.reduce((accum, tag) => {
    const el = qTag(tag);
    if (el) accum.push(...el);
    return accum;
  }, []);

  elements.forEach((element) => {
    if (!element.dataset.hasOwnProperty('revealIgnore')) {
      element.classList.add(className);
    }
  });

  return elements;
};

const revealElements = (elements, { addClass, config }) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(addClass);
      }
    });
  }, config);

  elements.forEach((element) => {
    observer.observe(element);
  });
};

/*
 * Note: Add data-reveal-ignore to element to avoid the element being 'revealed'
 */
const reveal = (
  tags,
  options = {
    config: {
      threshold: [0.55],
    },
    addClassToTags: 'animation-hidden',
    addClassOnReveal: 'animation-show',
  }
) => {
  const elements = applyClassTo(tags, options.addClassToTags);

  revealElements(elements, {
    config: options.config,
    addClass: options.addClassOnReveal,
  });
};

export default reveal;
