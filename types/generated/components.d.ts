import type { Schema, Struct } from '@strapi/strapi';

export interface MetaGeneral extends Struct.ComponentSchema {
  collectionName: 'components_meta_generals';
  info: {
    displayName: 'general';
    icon: 'italic';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface MetaLayout extends Struct.ComponentSchema {
  collectionName: 'components_meta_layouts';
  info: {
    displayName: 'layout';
    icon: 'crop';
  };
  attributes: {
    background_color: Schema.Attribute.Enumeration<
      ['default', 'dark', 'light', 'primary']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    frame: Schema.Attribute.Enumeration<['frame', 'no frame']> &
      Schema.Attribute.DefaultTo<'frame'>;
    space_after: Schema.Attribute.Enumeration<
      ['default', 'extra small', 'small', 'medium', 'large', 'extra large']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    space_before: Schema.Attribute.Enumeration<
      ['default', 'extra small', 'small', 'medium', 'large', 'extra large']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    template: Schema.Attribute.Enumeration<['default', 'secondary']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface TextCard extends Struct.ComponentSchema {
  collectionName: 'components_text_cards';
  info: {
    displayName: 'card';
    icon: 'grid';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text_neu: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface TextCardGroup extends Struct.ComponentSchema {
  collectionName: 'components_text_card_groups';
  info: {
    displayName: 'card_group';
  };
  attributes: {
    cards: Schema.Attribute.Component<'text.card', true>;
    general: Schema.Attribute.Component<'meta.general', false> &
      Schema.Attribute.Required;
    layout: Schema.Attribute.Component<'meta.layout', false> &
      Schema.Attribute.Required;
  };
}

export interface TextHeaderTitle extends Struct.ComponentSchema {
  collectionName: 'components_text_header_titles';
  info: {
    displayName: 'header_title';
    icon: 'picture';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right']>;
    general: Schema.Attribute.Component<'meta.general', false> &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    layout: Schema.Attribute.Component<'meta.layout', false> &
      Schema.Attribute.Required;
    text_neu: Schema.Attribute.Blocks;
  };
}

export interface TextImages extends Struct.ComponentSchema {
  collectionName: 'components_text_images';
  info: {
    displayName: 'images';
    icon: 'landscape';
  };
  attributes: {
    general: Schema.Attribute.Component<'meta.general', false> &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    layout: Schema.Attribute.Component<'meta.layout', false> &
      Schema.Attribute.Required;
  };
}

export interface TextText extends Struct.ComponentSchema {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
    icon: 'filter';
  };
  attributes: {
    general: Schema.Attribute.Component<'meta.general', false> &
      Schema.Attribute.Required;
    layout: Schema.Attribute.Component<'meta.layout', false> &
      Schema.Attribute.Required;
    text_neu: Schema.Attribute.Blocks;
  };
}

export interface TextTextAndImage extends Struct.ComponentSchema {
  collectionName: 'components_text_text_and_images';
  info: {
    displayName: 'text_and_image';
    icon: 'picture';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    general: Schema.Attribute.Component<'meta.general', false> &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    layout: Schema.Attribute.Component<'meta.layout', false> &
      Schema.Attribute.Required;
    text_neu: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'meta.general': MetaGeneral;
      'meta.layout': MetaLayout;
      'text.card': TextCard;
      'text.card-group': TextCardGroup;
      'text.header-title': TextHeaderTitle;
      'text.images': TextImages;
      'text.text': TextText;
      'text.text-and-image': TextTextAndImage;
    }
  }
}
