import blockContent from './blockContent';
import category from './category';
import post from './post';
import author from './author';
import page from './contentTypes/page';
import section from './pageSections/section';
import textBlock from './sectionBlocks/textBlock';
import imageBlock from './sectionBlocks/imageBlock';
import cta from './elements/cta';
import simpleBlockContent from './elements/simpleBlockContent';

export const schemaTypes = [post, author, category, blockContent, page, section, textBlock, imageBlock, simpleBlockContent, cta];