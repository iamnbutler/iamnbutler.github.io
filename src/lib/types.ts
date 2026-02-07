export type FragmentType = 'post' | 'shot' | 'list' | 'link';

export interface Fragment {
  id: number;
  type: FragmentType;
  rkey: string;
  title: string;
  content?: string;
  url?: string;
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
  video?: { playlist: string; thumbnail: string; aspectRatio?: { width: number; height: number } };
  externalEmbed?: { uri: string; title: string; description: string; thumb?: string };
  likeCount: number;
  replyCount: number;
  repostCount: number;
  hasMedia: boolean; // true if images, video, or external thumb
  mediaThumb?: string; // best available thumbnail URL
  isRepost?: boolean; // true if this appeared as a repost in the feed
}
