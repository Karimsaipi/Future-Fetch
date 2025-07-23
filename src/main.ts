import '../styles/main.scss';
import logo from '../assets/images/logo.svg';
import Header  from './Header';
import person1 from '../assets/images/chel1.png';
import person2 from '../assets/images/077b9b1fb51c319c5b2ac95f6fa6cea6dbee1545.png';
import person3 from '../assets/images/36d09592ce4a4cc2078a8bca2d1f2da992143a0d.png';
import person4 from '../assets/images/5d8d02f7d9fea10ab6aa04277815abb9740e0ea4.png';
import icon1 from '../assets/images/Icon-1.svg';
import icon2 from '../assets/images/Icon-2.svg';
import icon3 from '../assets/images/Icon-3.svg';

const takeImg = document.getElementById('IMG1') as HTMLImageElement;

if (takeImg) {
  takeImg.src = logo;
  takeImg.alt = 'Logo';
}

const newHeader = new Header()

const teamImages = document.querySelectorAll<HTMLImageElement>('.team__person');

const people = [person1, person2, person3, person4];

teamImages.forEach((img, index) => {
  img.src = people[index];
  img.alt = `Team member ${index + 1}`;
  img.classList.add('team__person');
});

const advantageIcons = document.querySelectorAll<HTMLImageElement>('.advantage-card__image');

const icons = [icon1, icon2, icon3];

advantageIcons.forEach((img, index) => {
  if (icons[index]) {
    img.src = icons[index];
    img.alt = `Advantage icon ${index + 1}`;
  }
});