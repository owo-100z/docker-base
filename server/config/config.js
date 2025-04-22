import dev from './dev.js';
import prod from './prod.js';

const config = process.env.NODE_ENV === 'prod' ? prod : dev;
export default config;