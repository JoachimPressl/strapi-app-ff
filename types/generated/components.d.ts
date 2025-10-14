import type { Schema, Struct } from '@strapi/strapi';

export interface ContentCardGroup extends Struct.ComponentSchema {
  collectionName: 'components_content_card_groups';
  info: {
    displayName: 'card_group';
    icon: 'dashboard';
  };
  attributes: {
    cardBlock: Schema.Attribute.Component<'layout.card', true> &
      Schema.Attribute.Required;
    frameBlock: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentHeadlineImage extends Struct.ComponentSchema {
  collectionName: 'components_content_headline_images';
  info: {
    displayName: 'headline_image';
    icon: 'picture';
  };
  attributes: {
    frameBlock: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 30;
        },
        number
      > &
      Schema.Attribute.DefaultTo<70>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    textBlock: Schema.Attribute.Component<'layout.text', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentImage extends Struct.ComponentSchema {
  collectionName: 'components_content_images';
  info: {
    displayName: 'image';
    icon: 'picture';
  };
  attributes: {
    frameBlock: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    imageBlock: Schema.Attribute.Component<'layout.image', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentNewsList extends Struct.ComponentSchema {
  collectionName: 'components_content_news_lists';
  info: {
    displayName: 'news_list';
    icon: 'bulletList';
  };
  attributes: {
    frameBlock: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    newsBlock: Schema.Attribute.Component<'layout.news-list', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentText extends Struct.ComponentSchema {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'text';
    icon: 'filter';
  };
  attributes: {
    frameBlock: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    textBlock: Schema.Attribute.Component<'layout.text', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentTextAndImage extends Struct.ComponentSchema {
  collectionName: 'components_content_text_and_images';
  info: {
    displayName: 'text_and_image';
    icon: 'picture';
  };
  attributes: {
    frameBlock: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    imageBlock: Schema.Attribute.Component<'layout.image', false> &
      Schema.Attribute.Required;
    textBlock: Schema.Attribute.Component<'layout.text', false> &
      Schema.Attribute.Required;
    textBlock_align: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface LayoutAppearance extends Struct.ComponentSchema {
  collectionName: 'components_layout_appearances';
  info: {
    displayName: 'frameBlock';
    icon: 'brush';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<
      ['default', 'light', 'dark', 'primary', 'secondary', 'tertairy']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    container: Schema.Attribute.Enumeration<['default', 'small', 'large']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    frame: Schema.Attribute.Enumeration<['default', 'no_frame']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    layout: Schema.Attribute.Enumeration<
      ['default', 'primary', 'secondary', 'tertairy']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    space_after: Schema.Attribute.Enumeration<
      ['default', 'extra_small', 'small', 'medium', 'large', 'extra_large']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    space_before: Schema.Attribute.Enumeration<
      ['default', 'extra_small', 'small', 'medium', 'large', 'extra_large']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface LayoutButton extends Struct.ComponentSchema {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'buttonBlock';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<
      ['default', 'primary', 'secondary', 'tertairy']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    target: Schema.Attribute.Enumeration<['default', 'new window']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_cards';
  info: {
    displayName: 'cardBlock';
    icon: 'book';
  };
  attributes: {
    card_layout: Schema.Attribute.Enumeration<
      ['default', 'col-span-2', 'row-span-2']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    image: Schema.Attribute.Media<'images'>;
    textBlock: Schema.Attribute.Component<'layout.text', false> &
      Schema.Attribute.Required;
  };
}

export interface LayoutImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_images';
  info: {
    displayName: 'imageBlock';
    icon: 'picture';
  };
  attributes: {
    cols: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface LayoutNewsList extends Struct.ComponentSchema {
  collectionName: 'components_layout_news_lists';
  info: {
    displayName: 'newsBlock';
    icon: 'bulletList';
  };
  attributes: {
    mode: Schema.Attribute.Enumeration<['limit', 'pages']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'limit'>;
    pages_or_limit: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<6>;
  };
}

export interface LayoutText extends Struct.ComponentSchema {
  collectionName: 'components_layout_texts';
  info: {
    displayName: 'textBlock';
    icon: 'filter';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    buttonBlock: Schema.Attribute.Component<'layout.button', true>;
    header_type: Schema.Attribute.Enumeration<
      ['hidden', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'hidden'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.card-group': ContentCardGroup;
      'content.headline-image': ContentHeadlineImage;
      'content.image': ContentImage;
      'content.news-list': ContentNewsList;
      'content.text': ContentText;
      'content.text-and-image': ContentTextAndImage;
      'layout.appearance': LayoutAppearance;
      'layout.button': LayoutButton;
      'layout.card': LayoutCard;
      'layout.image': LayoutImage;
      'layout.news-list': LayoutNewsList;
      'layout.text': LayoutText;
    }
  }
}
