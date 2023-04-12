import { useState, useEffect } from "react";
import axios from "axios";
import { Badge } from "reactstrap";

const Post = () => {
  const [post, setPost] = useState(null);

  return (
    <>
      {/* {post && ( */}
        <div className="position-relative">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Wasiatku
            <Badge
              pill
              color="success"
              className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle"
              style={{ fontSize: "0.75rem" }}
            >
              Baru
            </Badge>
          </span>

          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">
            Buat Wasiat Baru
          </span>

         
        </div>
      {/* )} */}
    </>
  );
};

export default Post;