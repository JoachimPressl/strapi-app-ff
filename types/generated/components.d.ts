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
    displayName: 'Layout';
    icon: 'crop';
  };
  attributes: {
    background_color: Schema.Attribute.Enumeration<
      ['dark', 'light', 'primary']
    >;
    space_after: Schema.Attribute.Enumeration<
      ['extra small', 'small', 'medium', 'large', 'extra large']
    >;
    space_before: Schema.Attribute.Enumeration<
      ['extra small', 'small', 'medium', 'large', 'extra large']
    >;
  };
}

export interface TextHeaderTitle extends Struct.ComponentSchema {
  collectionName: 'components_text_header_titles';
  info: {
    displayName: 'Header Title';
    icon: 'picture';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right']>;
    general: Schema.Attribute.Component<'meta.general', false>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    layout: Schema.Attribute.Component<'meta.layout', false>;
    text: Schema.Attribute.Blocks;
  };
}

export interface TextTextAndImage extends Struct.ComponentSchema {
  collectionName: 'components_text_text_and_images';
  info: {
    displayName: 'Text and Image';
    icon: 'picture';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'meta.general': MetaGeneral;
      'meta.layout': MetaLayout;
      'text.header-title': TextHeaderTitle;
      'text.text-and-image': TextTextAndImage;
    }
  }
}
