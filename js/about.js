const titleText = document.querySelectorAll('.about__title div');
const profileWindow = document.querySelector('.about__profile');
const profileItems = document.querySelectorAll('.about__profile > *');
const testimonials = document.querySelectorAll('.about__testimonials > *');
const duration = 0.5;

const tl = new TimelineLite();
tl.staggerFromTo(
  titleText,
  duration - 0.1,
  { y: '-=50', opacity: 0 },
  {
    y: '+=50',
    opacity: 1
  },
  duration - 0.2
)
  .to(titleText, duration, { opacity: 0 })
  .fromTo(profileWindow, duration, { xPercent: 160 }, { xPercent: 0 })
  .staggerFromTo(
    profileItems,
    duration + 0.5,
    { opacity: 0 },
    { opacity: 1 },
    duration + 0.5
  )
  .staggerFromTo(
    testimonials,
    duration,
    { opacity: 0 },
    { opacity: 1 },
    duration
  );

const scrollDownButton = document.querySelector('.about__scroll-down i');
const milestones = document.querySelector('.timeline');

scrollDownButton.addEventListener('click', () => {
  console.log('hello');

  TweenLite.to(window, 1, {
    scrollTo: {
      y: milestones.offsetTop - 80
    }
  });
});
