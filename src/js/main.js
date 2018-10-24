import '../styles/main.scss';
import homeIcon from '../images/home.png';
import homeBig from '../images/home-big.png';
import {print} from './features/print';

const homeImg = document.getElementById('home');
homeImg.src = homeIcon;
const bigHome = document.getElementById('bigHome');
bigHome.src = homeBig;

const appName = 'Webpack Demo App!';
console.log(`Thanks  for using ${appName}`);

print('Ahihi!');
