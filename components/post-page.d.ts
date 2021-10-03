/// <reference types="react" />
import { PostInfoProps } from "./post-info";
import { PageProps } from "./page";
export declare type PostPageProps = Omit<PostInfoProps, "backgroundIsDark"> & Omit<PageProps, "header">;
export declare function PostPage({ children, background, paper, breadcrumbs, ...postInfoProps }: PostPageProps): JSX.Element;
