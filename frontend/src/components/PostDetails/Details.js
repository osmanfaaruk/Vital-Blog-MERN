import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  singlePostDetails,
  postComment,
} from "../../redux/asyncMethods/HomeGetAllPostMethod";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import HomeRightBar from "../Home/HomeRightBar";
import moment from "moment";
import DetailSkeleton from "../../skelatons/DetailsSkeleton";
import Comments from "./Comments";
// import { htmlToText } from 'html-to-text';

const Details = () => {
  const { id } = useParams();
  const { loading, postDetails, comments } = useSelector(
    (state) => state.PostReducer
  );
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singlePostDetails(id));
  }, [id]);

  // comment
  const [comment, setComment] = useState("");
  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(
      postComment({ id: postDetails._id, comment, userName: user.name })
    );
    setComment("");
    dispatch(singlePostDetails(id));
  };
  return (
    <div>
      <Helmet>
        <title>{postDetails.title}</title>
        <meta name="details" content="details" />
      </Helmet>
      <Container>
        <Row>
          <Col md={8}>
            {!loading ? (
              <div className="postDetails">
                <h1 className="postDetails-title">{postDetails.title}</h1>
                <img
                  src={`/images/${postDetails.image}`}
                  alt=""
                  className="postDetails-img"
                />
                <p className="postDetails-bodyText"> {postDetails.body}</p>
                <div className="postDetails__header">
                  <div className="postDetails__header__avator">
                    {postDetails.userName ? postDetails.userName[0] : ""}
                  </div>
                  <div className="postDetails__header__user">
                    <span>{postDetails.userName}</span>
                    <span>{moment(postDetails.updatedAt).format("ll")}</span>
                  </div>
                </div>
              </div>
            ) : (
              <DetailSkeleton />
            )}

            {user ? (
              <>
                <div className="comment">
                  <h1>Discussion {comments.length}</h1>
                  <form onSubmit={handleAddComment}>
                    <div className="comment-box">
                      <textarea
                        name="comment"
                        className="comment-box-textArea"
                        placeholder="Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                      <button className="comment-btn btn btn-primary">
                        Comment
                      </button>
                    </div>
                  </form>
                </div>
                <Comments comments={comments} />
              </>
            ) : (
              ""
            )}
          </Col>
          <Col md={4}>
            <div className="homeRightBar">
              <HomeRightBar />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
