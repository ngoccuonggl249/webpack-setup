import '../styles/main.scss';
import homeIcon from '../images/home.png';
import homeBig from '../images/home-big.png';
import {Print} from './modules/Print';

const homeImg = document.getElementById('home');
homeImg.src = homeIcon;
const bigHome = document.getElementById('bigHome');
bigHome.src = homeBig;

const appName = 'Webpack Demo App!';
console.log(`Thanks  for using ${appName}`);

console.log(Print.className());
