// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Teachers documents */
interface TeachersDocumentData {
    /**
     * name field in *Teachers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: teachers.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * photo field in *Teachers*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: teachers.photo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    photo: prismicT.ImageField<never>;
}
/**
 * Teachers document from Prismic
 *
 * - **API ID**: `teachers`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TeachersDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<TeachersDocumentData>, "teachers", Lang>;
/** Content for Courses documents */
interface TitleDocumentData {
    /**
     * title field in *Courses*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: title.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * content field in *Courses*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: title.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * images field in *Courses*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: title.images[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    images: prismicT.GroupField<Simplify<TitleDocumentDataImagesItem>>;
    /**
     * Teachers field in *Courses*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: title.teachers[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    teachers: prismicT.GroupField<Simplify<TitleDocumentDataTeachersItem>>;
    /**
     * Slice Zone field in *Courses*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: title.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<TitleDocumentDataSlicesSlice>;
}
/**
 * Item in Courses ??? images
 *
 */
export interface TitleDocumentDataImagesItem {
    /**
     * card field in *Courses ??? images*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: title.images[].card
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    card: prismicT.ImageField<never>;
    /**
     * banner field in *Courses ??? images*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: title.images[].banner
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
}
/**
 * Item in Courses ??? Teachers
 *
 */
export interface TitleDocumentDataTeachersItem {
    /**
     * teacher field in *Courses ??? Teachers*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: title.teachers[].teacher
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    teacher: prismicT.RelationField<"teachers">;
}
/**
 * Slice for *Courses ??? Slice Zone*
 *
 */
type TitleDocumentDataSlicesSlice = never;
/**
 * Courses document from Prismic
 *
 * - **API ID**: `title`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TitleDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<TitleDocumentData>, "title", Lang>;
export type AllDocumentTypes = TeachersDocument | TitleDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { TeachersDocumentData, TeachersDocument, TitleDocumentData, TitleDocumentDataImagesItem, TitleDocumentDataTeachersItem, TitleDocumentDataSlicesSlice, TitleDocument, AllDocumentTypes };
    }
}
