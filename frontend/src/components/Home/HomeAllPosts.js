import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allHomePosts } from "../../redux/asyncMethods/HomeGetAllPostMethod";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import HomeLeftSkeleton from "../../skelatons/HomeLeftSkeleton";
import HomePagination from "../common/Pagination/HomePagination";
import EmptyShow from "../common/EmptyShow/EmptyShow";

const HomeAllPosts = () => {
  let { page } = useParams();
  if (page === undefined) {
    page = 1;
  }

  const { loading } = useSelector((state) => state.PostReducer);
  const { posts, count, perPage } = useSelector((state) => state.FetchPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allHomePosts(page));
  }, [page]);
  var regex = /(&nbsp;|<([^>]+)>)/gi;
  return (
    <div>
      <Container>
        {!loading ? (
          posts.length > 0 ? (
            posts.map((post) => (
              <div className="blogCard" key={post._id}>
                <Row>
                  <Col md={4}>
                    <div>
                      <Card.Img
                        className="blogCard-img img-fluid rounded-start"
                        variant="top"
                        src={`${process.env.REACT_APP_API_URL}/images/${post.image}`}
                      />
                    </div>
                  </Col>
                  <Col md={8}>
                    <div>
                      <Card.Body>
                        <Card.Title className="blogCard-title">
                          <Link
                            className="blogCard-title-link"
                            to={`/post/details/${post.slug}`}
                          >
                            {post.title}
                          </Link>
                        </Card.Title>
                        <Card.Text className="blogCard-shortDes">
                          {post.body.slice(0, 90).replace(regex)}
                          <Link
                            className="blogCard-title-link"
                            to={`/post/details/${post.slug}`}
                          >
                            read more....
                          </Link>
                        </Card.Text>
                        <Card.Text className="blogCard-author">
                          Posted at {moment(post.createdAt).format("ll")} by{" "}
                          {post.userName}
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </Col>
                </Row>
              </div>
            ))
          ) : (
            <EmptyShow/>
          )
        ) : (
          <HomeLeftSkeleton />
        )}
        <div className="dashboard__body-pagination">
          <HomePagination
            path="home"
            page={page}
            perPage={perPage}
            count={count}
          />
        </div>
      </Container>
    </div>
  );
};

export default HomeAllPosts;
