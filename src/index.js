import { GifTV } from './GifTV.js';
import { gifTVURLs } from './constants/channels.js';

const gifTV = new GifTV(gifTVURLs);
gifTV.init();