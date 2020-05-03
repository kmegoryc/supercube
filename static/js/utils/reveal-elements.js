import { qTag } from './scaffold-utils';

const applyClassTo = (tagList, className) => {
  let elements = tagList.reduce((accum, tag) => {
    const el = qTag(tag);
    console.log('el', el);
    if (el) accum.push(...el);
    return accum;
  }, []);

  elements.forEach((element) => {
    if (!element.dataset.hasOwnProperty('revealIgnore')) {
      element.classList.add(className);
    }
  });

  console.log('elements', elements);

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
  console.log('got to hidden part', tags);
  const elements = applyClassTo(tags, options.addClassToTags);

  console.log(elements);

  revealElements(elements, {
    config: options.config,
    addClass: options.addClassOnReveal,
  });
};

export default reveal;
