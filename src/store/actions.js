import { LOAD_POSTS } from './types';
import { DATA } from '../data';

export const loadPosts = (payload) => ({
    type: LOAD_POSTS,
    payload: DATA,
})
