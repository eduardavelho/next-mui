/// <reference types="react" />
import { NoResultsProps } from "./no-results";
import { SearchHeaderProps } from "./search-header";
import { PostCardGridProps } from "./post-card-grid";
import { BreadcrumbsProps } from "./breadcrumbs";
export declare type BlogProps = SearchHeaderProps & PostCardGridProps & NoResultsProps & BreadcrumbsProps;
export declare function Blog({ title, titleColor, background, options, value, placeholder, noOptionsText, disabled, loading, onRequestMorePosts, onChange, hasMorePosts, posts, noResultsText, noResultsDescription, breadcrumbs, }: BlogProps): JSX.Element;
