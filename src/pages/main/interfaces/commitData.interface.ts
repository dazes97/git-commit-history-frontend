export interface ICommitData {
  nodeId: string;
  commit: Commit;
}
export interface Commit {
  author: AuthorOrCommiter;
  commiter: AuthorOrCommiter;
  message: string;
  url: string;
}
export interface AuthorOrCommiter {
  name: string;
  email: string;
  date: string;
}
