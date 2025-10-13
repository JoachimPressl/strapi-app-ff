import type { Schema, Struct } from '@strapi/strapi';

export interface ContentCardGroup extends Struct.ComponentSchema {
  collectionName: 'components_content_card_groups';
  info: {
    displayName: 'card_group';
    icon: 'dashboard';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    cards: Schema.Attribute.Component<'layout.card', true> &
      Schema.Attribute.Required;
    container: Schema.Attribute.Component<'layout.container', false> &
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
    appearance: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Component<'layout.single-image', false> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Component<'layout.text', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentImage extends Struct.ComponentSchema {
  collectionName: 'components_content_images';
  info: {
    displayName: 'Images';
    icon: 'picture';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    container: Schema.Attribute.Component<'layout.container', false>;
    images: Schema.Attribute.Component<'layout.image', false> &
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
    appearance: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    container: Schema.Attribute.Component<'layout.container', false> &
      Schema.Attribute.Required;
    news_list: Schema.Attribute.Component<'layout.news-list', false> &
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
    appearance: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Component<'layout.text', false> &
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
    appearance: Schema.Attribute.Component<'layout.appearance', false> &
      Schema.Attribute.Required;
    container: Schema.Attribute.Component<'layout.container', false> &
      Schema.Attribute.Required;
    images: Schema.Attribute.Component<'layout.image', false> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Component<'layout.text', false> &
      Schema.Attribute.Required;
  };
}

export interface LayoutAppearance extends Struct.ComponentSchema {
  collectionName: 'components_layout_appearances';
  info: {
    displayName: 'appearance';
    icon: 'brush';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<
      ['default', 'light', 'dark', 'primary', 'secondary', 'tertairy']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    frame: Schema.Attribute.Enumeration<
      ['default', 'small', 'large', 'no_frame']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    layout: Schema.Attribute.Enumeration<
      ['default', 'primary', 'secondary', 'tertairy']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    space_after: Schema.Attribute.Enumeration<
      ['default', 'extra_small', 'small', 'medium', 'large', 'extra_large']
    >;
    space_before: Schema.Attribute.Enumeration<
      ['default', 'extra_small', 'small', 'medium', 'large', 'extra_large']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface LayoutButton extends Struct.ComponentSchema {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<
      ['default', 'primary', 'secondary', 'tertairy']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    target: Schema.Attribute.Enumeration<['default', 'new window']> &
      Schema.Attribute.DefaultTo<'default'>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_cards';
  info: {
    displayName: 'card';
    icon: 'book';
  };
  attributes: {
    card_layout: Schema.Attribute.Enumeration<['default', 'rows 2', 'cols 2']> &
      Schema.Attribute.DefaultTo<'default'>;
    image: Schema.Attribute.Component<'layout.single-image', false> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Component<'layout.text', false> &
      Schema.Attribute.Required;
  };
}

export interface LayoutContainer extends Struct.ComponentSchema {
  collectionName: 'components_layout_containers';
  info: {
    displayName: 'container';
    icon: 'dashboard';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    type: Schema.Attribute.Enumeration<
      ['col 1', 'cols 2', 'cols 3', 'cols 4']
    > &
      Schema.Attribute.DefaultTo<'cols 2'>;
  };
}

export interface LayoutImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_images';
  info: {
    displayName: 'images';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface LayoutNewsList extends Struct.ComponentSchema {
  collectionName: 'components_layout_news_lists';
  info: {
    displayName: 'news_list';
    icon: 'bulletList';
  };
  attributes: {
    mode: Schema.Attribute.Enumeration<['limit', 'pages']>;
    pages_or_limit: Schema.Attribute.Integer;
  };
}

export interface LayoutSingleImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_single_images';
  info: {
    displayName: 'single_image';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutText extends Struct.ComponentSchema {
  collectionName: 'components_layout_texts';
  info: {
    displayName: 'text';
    icon: 'filter';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    buttons: Schema.Attribute.Component<'layout.button', true>;
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
      'layout.container': LayoutContainer;
      'layout.image': LayoutImage;
      'layout.news-list': LayoutNewsList;
      'layout.single-image': LayoutSingleImage;
      'layout.text': LayoutText;
    }
  }
}
