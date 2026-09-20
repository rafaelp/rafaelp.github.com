import type { Comment } from "@/lib/content";
import { formatDate } from "@/lib/content";

function CommentList({ comments, parent }: { comments: Comment[]; parent: number | null }) {
  const branch = comments.filter((comment) => (comment.parent ?? null) === parent);
  if (branch.length === 0) return null;

  return (
    <ul className="comment-list">
      {branch.map((comment) => (
        <li key={comment.id}>
          <div className="comment-head">
            <span className="comment-author">
              {comment.authorUrl ? (
                <a href={comment.authorUrl} rel="nofollow noopener noreferrer ugc">
                  {comment.author}
                </a>
              ) : (
                comment.author
              )}
            </span>
            <time className="comment-date" dateTime={comment.date}>
              {formatDate(comment.date)}
            </time>
          </div>
          <div
            className="comment-body"
            dangerouslySetInnerHTML={{ __html: comment.html }}
          />
          <CommentList comments={comments} parent={comment.id} />
        </li>
      ))}
    </ul>
  );
}

export function Comments({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) return null;

  return (
    <section className="comments" aria-labelledby="comentarios">
      <h2 id="comentarios">
        {comments.length} {comments.length === 1 ? "comentário" : "comentários"}
      </h2>
      <CommentList comments={comments} parent={null} />
      <p className="comments-note">
        Comentários arquivados do blog original. Novos comentários estão encerrados.
      </p>
    </section>
  );
}
