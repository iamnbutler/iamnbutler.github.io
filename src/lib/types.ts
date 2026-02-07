export type FragmentType = 'post' | 'shot' | 'list';

export interface Fragment {
  id: number;
  type: FragmentType;
  rkey: string;
  title: string;
  content?: string;
  images?: { cid: string; mimeType: string; alt?: string }[];
  createdAt: string;
}

export interface BskyPost {
  uri: string;
  rkey: string;
  text: string;
  createdAt: string;
  author: { handle: string; displayName: string; avatar?: string };
  images?: { thumb: string; fullsize: string; alt: string; aspectRatio?: { width: number; height: number } }[];
  externalEmbed?: { uri: string; title: string; description: string; thumb?: string };
  likeCount: number;
  replyCount: number;
  repostCount: number;
}
