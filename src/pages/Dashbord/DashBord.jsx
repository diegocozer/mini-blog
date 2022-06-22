import styles from "./DashBord.module.css";
import { useAuthValue } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const DashBord = () => {
  const { user } = useAuthValue();
  const { documents: posts, loading } = useFetchDocuments("postS");

  const { deleteDocument } = useDeleteDocument("postS");

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div className={styles.dashboard}>
      <h2>DashBord</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            {" "}
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Titulo</span>
            <span>Ações</span>
          </div>

          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                {user.displayName === post.createdBy ? (
                  <>
                    <p>{post.title}</p>
                    <div>
                      <Link
                        to={`/posts/${post.id}`}
                        className="btn btn-outline"
                      >
                        Ver
                      </Link>
                      <Link
                        to={`/posts/edit/${post.id}`}
                        className="btn btn-outline"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => deleteDocument(post.id)}
                        className="btn btn-outline btn-danger"
                        style={{background:'red', color:'white', border:'none'}}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default DashBord;
